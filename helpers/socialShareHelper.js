// entries must be lowercase; keys are lowercased before lookup
const commonAttackParams = new Set([
    "redirect",
    "redirect_url",
    "next",
    "url",
    "return",
    "returnurl",
    "return_url",
    "goto",
    "destination",
    "dest",
    "forward",
    "user",
    "username",
    "user_name",
    "password",
    "login"
]);
const isRealUrl = (rawURL) => {
    // must be non-empty string
    if (typeof rawURL !== "string" || rawURL.trim() === "") return null;

    // strip invisible/zero-width unicode characters; the URL parser encodes inner spaces
    const stripped = rawURL
        .trim()
        .replace(/\p{Cf}/gu, '');

    let parsed;

    try {
        parsed = new URL(stripped);
    }
    catch {
        return null;
    }

    return parsed;
};
const isBaseURL = (val) => {
    if (!isRealUrl(val)) return false;

    return val.startsWith('https://www.usaspending.gov/');
};
const sanitizeUrl = (rawURL, blockRedirect = true) => {
    const parsed = isRealUrl(rawURL);

    // not a real url
    if (!parsed) return null;

    // https only
    if (parsed.protocol !== "https:") return null;

    // hostname must exist and not just whitespace
    if (!parsed.hostname || parsed.hostname.trim() === "") return null;

    if (blockRedirect && parsed.search) {
        // remove open-redirect query params, allowing valid urls.
        // the raw "key=value" pieces are filtered rather than using searchParams.delete,
        // which would re-serialize every remaining param ("%20" -> "+", "/" -> "%2F")
        const kept = parsed.search.slice(1).split('&').filter((piece) => {
            const [entry] = new URLSearchParams(piece);
            if (!entry) return true;
            const [key, value] = entry;
            return !(commonAttackParams.has(key.toLowerCase()) && !isBaseURL(value));
        });
        parsed.search = kept.join('&');
    }

    // href is already percent-encoded; encoding again would turn "%20" into "%2520"
    return parsed.href;
};

export default sanitizeUrl;
