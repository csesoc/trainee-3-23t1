import { useState } from "react";

export default function TruncatedDescription({
  content,
  maxCharacters,
}: {
  content: string;
  maxCharacters: number;
}) {
  const [showFullContent, setShowFullContent] = useState(false);

  const shortenedContent =
    content.length < maxCharacters
      ? content
      : `${content.slice(0, maxCharacters)}...`;

  return (
    <div className="space-x-1">
      <p className="inline whitespace-pre-line">
        {showFullContent ? content : shortenedContent}
      </p>
      {content.length > maxCharacters && (
        <button
          className="inline-block text-accent-1 hover:underline"
          onClick={() => setShowFullContent((prev) => !prev)}
        >
          {showFullContent ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}
