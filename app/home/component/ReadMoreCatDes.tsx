import React, { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxWords?: number;
}

const ReadMoreCatDes: React.FC<ReadMoreProps> = ({ text, maxWords = 15 }) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const words = text.split(" ");
  const isLong = words.length > maxWords;

  const displayedText = expanded
    ? text
    : words.slice(0, maxWords).join(" ");

  return (
    <p className="text-sm text-gray-700 mt-2">
      {displayedText}
      {isLong && (
        <>
          {!expanded && "... "}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#D4AB45] font-medium ml-1 hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </>
      )}
    </p>
  );
};

export default ReadMoreCatDes;
