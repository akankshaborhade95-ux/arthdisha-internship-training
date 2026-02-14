import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef();

  return (
    <div className="ref-box">
      <h3>Focus Input</h3>

      <input ref={inputRef} placeholder="Click button to focus" />

      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}
