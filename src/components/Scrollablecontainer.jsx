import React, { useRef } from "react";

const ScrollableContainer = ({ children }) => {
  const scrollContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.style.scrollBehavior = "auto";
    let startX = e.pageX - container.offsetLeft;
    let scrollLeft = container.scrollLeft;

    const handleMouseMove = (event) => {
      const x = event.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      container.style.scrollBehavior = "smooth";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen p-4 overflow-x-auto sticky top-[100px] z-30 cursor-pointer select-none"
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default ScrollableContainer;
