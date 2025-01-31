const formatter = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
});

export const formatToZeroPadding = (num: number | string): string =>
    formatter.format(Number(num));
