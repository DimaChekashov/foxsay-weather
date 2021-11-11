export const numTemp = (num) => {
    if (!num) {
        return num;
    }
    return `${Math.round(num)}°`;
};
