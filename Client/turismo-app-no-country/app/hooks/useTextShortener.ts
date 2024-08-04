import React, { useEffect, useState } from "react";

type TextShortener = (text: string, maxLength: number) => string;

const useTextShortener: TextShortener = (text, maxLength) => {
  const [shortenedText, setShortenedText] = useState<string>('');

  useEffect(() => {
    if (text.length > maxLength) {
      setShortenedText(`${text.substring(0, maxLength)}...`);
    } else {
      setShortenedText(text);
    };
  }, [text, maxLength]);

  return shortenedText;
};

export default useTextShortener;
