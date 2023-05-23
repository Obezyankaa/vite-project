import { useState, useEffect } from "react";
import "./app.css";
import { useRef } from "react";

export default function App() {
const [scrollDirection, setScrollDirection] = useState("none");
const [isVisible, setIsVisible] = useState(true);
  

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > scrollPos.current) {
      setScrollDirection("down");
      setIsVisible(false);
    } else if (currentScrollPos < scrollPos.current) {
      setScrollDirection("up");
      setIsVisible(true);
    }
    scrollPos.current = currentScrollPos;
  };

  const scrollPos = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <>
    
    <div className={`header-container ${isVisible ? "visible" : "hidden"}`}>
      <h2>Disappearing Header</h2>
    </div>
      <p>Scroll direction: {scrollDirection}</p>
    </>
  );
}
