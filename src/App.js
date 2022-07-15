import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [fontName, setFontName] = useState("JalnanOTF00");

  useEffect(() => {
    const text = document.getElementById("text");
    console.log(fontName);
  }, []);

  const onChange = (e) => {
    const prevFont = fontName;
    console.log("pre", prevFont);
    setFontName(e.target.value);

    console.log("font", e.target.value);
    const text = document.getElementById("text");

    text.classList.remove(prevFont);

    text.classList.add(e.target.value);

    console.log(text);
  };

  return (
    <div className="App" id="text">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select id="select" style={{ fontSize: "20px" }} onChange={onChange}>
          <option value="JalnanOTF00">JalnanOTF00</option>
          <option value="NanumBrush">NanumBrush</option>
          <option value="godoMaum">godoMaum</option>
        </select>
      </div>
      <div
        className="font"
        style={{ display: "flex", justifyContent: "center" }}
      >
        아무거나 테스트
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", width: "20%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div style={{ fontSize: "20px" }}>아무거나</div>
            <div style={{ fontSize: "20px" }}>test</div>
            <div style={{ fontSize: "20px" }}>한글</div>
            <div style={{ fontSize: "20px" }}>english</div>
          </div>
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "20px" }}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
            <div style={{ fontSize: "20px" }}>
              공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은
              법률로써 하되, 정당한 보상을 지급하여야 한다. 정부는 예산에 변경을
              가할 필요가 있을 때에는 추가경정예산안을 편성하여 국회에 제출할 수
              있다. 정당의 설립은 자유이며, 복수정당제는 보장된다. 국회의원과
              정부는 법률안을 제출할 수 있다. 제3항의 승인을 얻지 못한 때에는 그
              처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에
              의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한
              때부터 당연히 효력을 회복한다.
            </div>

            <div style={{ fontSize: "20px" }}>
              공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은
              법률로써 하되, 정당한 보상을 지급하여야 한다. 정부는 예산에 변경을
              가할 필요가 있을 때에는 추가경정예산안을 편성하여 국회에 제출할 수
              있다. 정당의 설립은 자유이며, 복수정당제는 보장된다. 국회의원과
              정부는 법률안을 제출할 수 있다. 제3항의 승인을 얻지 못한 때에는 그
              처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에
              의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한
              때부터 당연히 효력을 회복한다.
            </div>

            <div style={{ fontSize: "20px" }}>
              공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은
              법률로써 하되, 정당한 보상을 지급하여야 한다. 정부는 예산에 변경을
              가할 필요가 있을 때에는 추가경정예산안을 편성하여 국회에 제출할 수
              있다. 정당의 설립은 자유이며, 복수정당제는 보장된다. 국회의원과
              정부는 법률안을 제출할 수 있다. 제3항의 승인을 얻지 못한 때에는 그
              처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에
              의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한
              때부터 당연히 효력을 회복한다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
