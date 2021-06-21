import { useState } from "react";
import { khata } from "./khata";

function App() {
  const [message, setMessage] = useState("....No Khatas Yet");
  const [ang, setAng] = useState("");

  function khataForAng(angNum) {
    function randId() {
      return Math.random().toString(36).substr(2, 9);
    }
    function whatToReturn() {
      let a;
      try {
        a = khata[angNum].map((i) => {
          return (
            <li key={randId()}>
              <a href={i} target="_blank">
                {i}
              </a>
              <video controls name="media">
                <source src={i} type="audio/mpeg" />
              </video>
            </li>
          );
        });
      } catch (e) {
        a = ".....No Khatas for this ang";
        console.log(e);
      }
      return a;
    }
    return <ol>{whatToReturn()}</ol>;
  }

  return (
    <div>
      <div>Khata of Sant Giani Gurbachan Singh Ji Bhindran Wale</div>
      <div>Enter the Ang Number for which you want khata of:</div>
      <div>
        <input
          type="number"
          placeholder="ex: 1084"
          value={ang}
          onChange={(event) => {
            setAng(event.target.value);
          }}
        />
        <button
          onClick={() => {
            if (0 < ang && ang < 1431) {
              console.log(ang);
              setMessage(() => {
                let theKhata = khataForAng(ang);
                console.log(theKhata);
                return theKhata ? theKhata : "....No Khatas Yet";
              });
            } else {
              alert("Please enter vallid ang number");
            }
          }}
        >
          Submit
        </button>
        <div>{message}</div>
      </div>
    </div>
  );
}

export default App;
