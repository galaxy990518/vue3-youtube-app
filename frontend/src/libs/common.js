export const formatViews = (number) => {
  if (number >= 100000000) {
    return `${(number / 100000000).toFixed(1)}億次`;
  } else if (number >= 10000) {
    const formatted = Math.floor((number / 10000) * 10) / 10;
    return `${formatted}萬次`;
  }
  return `${number}次`;
};
