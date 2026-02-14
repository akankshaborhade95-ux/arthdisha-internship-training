import { useState, useEffect } from "react";

export default function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="effect-box">
      <h3>Window Width</h3>
      <p>{width}px</p>
    </div>
  );
}
