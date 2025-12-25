// import React, { useState } from "react";

// interface ReadMoreProps {
//   text: string;
//   maxWords?: number;
// }

// const ReadMoreCatDes: React.FC<ReadMoreProps> = ({ text, maxWords = 15 }) => {
//   const [expanded, setExpanded] = useState(false);
//  const paragraphs = text.split(/\n\s*\n/);
//   if (!text) return null;

//   const words = text.split(" ");
//   const isLong = words.length > maxWords;

//   const displayedText = expanded
//     ? text
//     : words.slice(0, maxWords).join(" ");

//   return (
//     <p className="text-sm text-gray-700 mt-2">
//       {displayedText}
//       {isLong && (
//         <>
//           {!expanded && "... "}
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-[#D4AB45] font-medium ml-1 hover:underline"
//           >
//             {expanded ? "Read less" : "Read more"}
//           </button>
//         </>
//       )}
//     </p>
//   );
// };

// export default ReadMoreCatDes;


'use client'
import React, { useState, useEffect } from "react";

interface ReadMoreCatDesProps {
  text: string;
  maxWords?: number;
}

const ReadMoreCatDes: React.FC<ReadMoreCatDesProps> = ({ text, maxWords = 50 }) => {
  const [expanded, setExpanded] = useState(false);
  const [wordsLimit, setWordsLimit] = useState(maxWords);

  const toggleExpand = () => setExpanded(!expanded);

  // Responsive maxWords
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setWordsLimit(20); // Mobile view
      } else {
        setWordsLimit(maxWords); // Desktop/tablet view
      }
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWords]);

  // Split text into paragraphs
  const paragraphs = text.split("\n\n").filter(p => p.trim() !== "");

  // If not expanded, truncate the text
  const getDisplayText = () => {
    if (expanded) return paragraphs;

    let wordCount = 0;
    const truncatedParagraphs: string[] = [];

    for (const para of paragraphs) {
      const paraWords = para.split(" ");
      if (wordCount + paraWords.length <= wordsLimit) {
        truncatedParagraphs.push(para);
        wordCount += paraWords.length;
      } else {
        const remainingWords = wordsLimit - wordCount;
        truncatedParagraphs.push(paraWords.slice(0, remainingWords).join(" ") + "");
        break;
      }
    }

    return truncatedParagraphs;
  };

  const displayText = getDisplayText();

  return (
    <div className="text-gray-700 mt-4">
      {displayText.map((para, index) => (
        <p key={index} className="">{para}</p>
      ))}

      <button
        onClick={toggleExpand}
        className="text-[#D4AB45] font-semibold"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreCatDes;
