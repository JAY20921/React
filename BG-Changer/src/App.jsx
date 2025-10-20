import { useState, useRef, useEffect } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [penMode, setPenMode] = useState(false);
  
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const drawing = useRef(false);

  // Setup canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineWidth = 4;
    ctx.strokeStyle = color;
    ctxRef.current = ctx;
  }, []);

  // Update pen color when button changes
  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.strokeStyle = color === "black" ? "white" : "black";
    }
  }, [color]);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });

    if (penMode && drawing.current) {
      ctxRef.current.lineTo(event.clientX, event.clientY);
      ctxRef.current.stroke();
    }
  };

  const handleMouseDown = (event) => {
    if (penMode) {
      drawing.current = true;
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(event.clientX, event.clientY);
    }
  };

  const handleMouseUp = () => {
    if (penMode) {
      drawing.current = false;
    }
  };

  return (
    <>
      {/* Canvas for drawing */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />

      {/* Background color */}
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        {/* Coordinates display */}
        <div className="fixed right-0 top-0 bg-white p-4 shadow-lg rounded-4xl">
          <p>X: {position.x}</p>
          <p>Y: {position.y}</p>
        </div>

        {/* Color buttons */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>

            {/* Toggle Pen Mode */}
            <button
              onClick={() => {
                console.log(color)
                
                setPenMode((prev) => !prev)

              }}
              className={`outline-none px-4 py-1 rounded-full shadow-lg ${
                penMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
              }`}
            >
              {penMode ? "Disable Pen" : "Enable Pen"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
