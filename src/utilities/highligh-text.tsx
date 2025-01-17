const highlightText = (text: string, highlight?: string): React.ReactNode => {
  if (!highlight) return text;

  return text
    .split(new RegExp(`(${highlight.split(' ').join('|')})`, 'gi'))
    .map((part, i) => {
      const isHighlighted = highlight
        .split(' ')
        .some((word) => part.toLowerCase() === word.toLowerCase());

      return isHighlighted ? (
        <span
          key={i}
          className="bg-yellow-200"
          aria-label={`Highlighted text: ${part}`}
        >
          {part}
        </span>
      ) : (
        part
      );
    });
};

export default highlightText;
