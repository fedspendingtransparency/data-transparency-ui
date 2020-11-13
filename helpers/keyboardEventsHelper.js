export const createOnKeyDownHandler = (cb, args = [], keyCodes = [13, 32]) => (e) => {
    // 13 enter; 32 space
    if (keyCodes.includes(e.keyCode)) {
        cb(...args);
    }
};
