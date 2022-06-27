export default function toTitleCase(input) {
  const words = input.split(' ');
  const titleWords = [];
  for (const word of words) {
    const firstLetter = word.slice(0, 1).toLocaleUpperCase();
    const rest = word.slice(1);
    titleWords.push(`${firstLetter}${rest}`);
  }
  const result = titleWords.join(' ');
  return result;
}
