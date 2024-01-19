import { useState, useEffect, useRef } from "react";

const Button = () => {
  const [colorText, setColorText] = useState("red");
  const buttonRef = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      const button = buttonRef.current;

      const { y } = button.getBoundingClientRect();

      const color = y < 0 ? "black" : "red";

      setColorText(color);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "180vh", padding: 20 }}>
      <button ref={buttonRef} style={{ color: colorText }}>
        Has Click
      </button>
    </div>
  );
};

export default Button;
