export const numTemp = (num: number): string => {
    if (!num) {
        return `${num}`;
    }
    return `${Math.round(num)}°`;
};
