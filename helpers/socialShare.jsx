import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faLinkedin,
    faRedditSquare
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
// import Analytics from 'helpers/analytics/Analytics';

export const socialUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=`,
    twitter: `https://twitter.com/intent/tweet?url=`,
    reddit: `http://www.reddit.com/submit?url=`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=`
};

const openShareWindow = (url) => {
    window.open(url, '_blank', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
};

const handleShareClickFacebook = (url) => {
    const finalUrl = `${socialUrls.facebook}${encodeURIComponent(url)}`;
    openShareWindow(finalUrl);
    // Analytics.event({ category: `${url}`, action: 'share link click', label: 'facebook' });
};

const handleShareClickTwitter = (url) => {
    const finalUrl = `${socialUrls.twitter}${encodeURIComponent(url)}`;
    openShareWindow(finalUrl);
    // Analytics.event({ category: `${url}`, action: 'share link click', label: 'twitter' });
};

const handleShareClickLinkedin = (url) => {
    const finalUrl = `${socialUrls.linkedin}${encodeURIComponent(url)}`;
    openShareWindow(finalUrl);
    // Analytics.event({ category: `${url}`, action: 'share link click', label: 'linkedIn' });
};

const handleShareClickReddit = (url) => {
    const finalUrl = `${socialUrls.reddit}${encodeURIComponent(url)}`;
    openShareWindow(finalUrl);
    // Analytics.event({ category: `${url}`, action: 'share link click', label: 'reddit' });
};

const handleShareClickEmail = (subject, body) => {
    const finalUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = finalUrl;
    // Analytics.event({ category: `${subject}`, action: 'share link click', label: 'email' });
};

const handlersBySocialMedium = {
    twitter: (url) => handleShareClickTwitter(url),
    facebook: (url) => handleShareClickFacebook(url),
    reddit: (url) => handleShareClickReddit(url),
    email: ({ subject, body }) => {
        handleShareClickEmail(subject, body);
    },
    linkedin: (url) => handleShareClickLinkedin(url)
};

export const getBaseUrl = (slug) => `https://www.usaspending.gov/${slug}`;

export const getSocialShareFn = (socialMedium) => {
    const fn = handlersBySocialMedium[socialMedium];
    if (socialMedium === 'email') {
        return (args) => fn(args);
    }
    return (slg) => fn(getBaseUrl(slg));
};

const GlossaryDropdownOption = ({ icon, title }) => (
    <>
        <FontAwesomeIcon icon={icon} color="#555" size="sm" />
        <span>{title}</span>
    </>
);


const GlossaryDropdownOptionTwitter = ({ title }) => (
    <>
                                            <svg
                                        className="footer__twitter-logo"
                                        width="1200"
                                        height="1227"
                                        viewBox="0 0 1200 1227"
                                        fill="none">
                                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#DFE1E2" />
                                    </svg>
        <span>{title}</span>
    </>
);

export const socialShareOptions = [
    { component: <GlossaryDropdownOption icon={faLink} title="Copy link" />, name: `copy` },
    { component: <GlossaryDropdownOption icon={faEnvelope} title="Email" />, name: 'email' },
    { component: <GlossaryDropdownOptionTwitter title="X (Twitter)" />, name: 'twitter' },
    { component: <GlossaryDropdownOption icon={faFacebookSquare} title="Facebook" />, name: 'facebook' },
    { component: <GlossaryDropdownOption icon={faLinkedin} title="LinkedIn" />, name: 'linkedin' },
    { component: <GlossaryDropdownOption icon={faRedditSquare} title="Reddit" />, name: 'reddit' }
];
