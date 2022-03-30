export const numTemp = (num: number) => {
    if (!num) {
        return num;
    }
    return `${Math.round(num)}°`;
};
