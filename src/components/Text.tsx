import React, { useEffect, useState } from "react";

const Text = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [
    "ღ᭄💖আসছে ঈদ ☺️ღ᭄ ",
    "༆🚙চলছে গাড়ি🏍️ღ᭄",
    "༆༆😁আমার দাওয়াত🍕༆༆",
    "༎❥😁তোমার বাড়ি🏩༎❥",
    "𝄞⋆⃝ !༅༎😭ওহ sorry💔𝄞⋆⃝ !༅༎",
    "꧁§༺🏢আমার বাড়ি🚙༻§꧂",
    "ღ᭄☁️হিমেল হাওয়া☁️ღ᭄",
    "༎!༅༎🌤️গরম দিন🔥!༅༎",
    "𝄞𝄞𝄞🥰দাওয়াত দিলাম🙃𝄞𝄞𝄞༎",
    "꧁§༺❤️🧡💛অগ্রিম💜💙💚༻§꧂",
    "༎ღ᭄🚙আসবে কিন্তু😌😌ღ᭄",
    "𝄞⋆ !༅༎🥰💖ঈদের দিন💖🥰༎",
  ];
  const typingSpeed = 70;
  const deletionSpeed = 50;
  const visibilityTime = 1800; 

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      if (currentWord !== undefined) {
        const currentLength = text.length;
        const targetLength = isDeleting ? 0 : currentWord.length;

        if (currentLength !== targetLength) {
          
          setText(isDeleting ? currentWord.substring(0, currentLength - 1) : currentWord.substring(0, currentLength + 1));
        } else {
         
          setTimeout(() => setIsDeleting(!isDeleting), visibilityTime);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletionSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [index, text, isDeleting]);

  useEffect(() => {
    const timeout = setTimeout(() => setIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1)), visibilityTime);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="App flex justify-center">
      <h1 style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}>
        `ঈদের আগমনে আপনাকে স্বাগতম 
       <br />
        {text && (
          <span style={{ color: "white", fontWeight: "bold" }}>{text}</span>
        )}
        !`
      </h1>
    </div>
  );
};

export default Text;
