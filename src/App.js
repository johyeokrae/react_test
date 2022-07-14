import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [fontName, setFontName] = useState("JalnanOTF00");

  useEffect(() => {
    console.log(fontName);

    const text = document.getElementById("text");
    console.log(text);
    text.classList.add(fontName);
  }, []);
  const onChange = (e) => {
    setFontName(e.target.value);
  };

  return (
    <div className="App">
      <div
        id="text"
        className="font"
        style={{ display: "flex", justifyContent: "center" }}
      >
        아무거나 테스트
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select id="select" style={{ fontSize: "20px" }} onChange={onChange}>
          <option value="JalnanOTF00">JalnanOTF00</option>
          <option value="NanumBrush">NanumBrush</option>
          <option value="godoMaum">godoMaum</option>
        </select>
      </div>
    </div>
  );
}

export default App;
