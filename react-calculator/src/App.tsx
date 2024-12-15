import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";

const arr: Array<string> = [
  "C",
  "%",
  "AC",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "00",
  "0",
  ".",
  "=",
];
function App() {
  const [keyVal, setKeyVal] = useState<string>("");

  const checkOperator = (str: string) => {
    if (
      str === "+" ||
      str === "-" ||
      str === "X" ||
      str === "%" ||
      str === "/" ||
      str === "."
    )
      return true;
    return false;
  };

  // this is the function to set the value that is to be displayed in the textArea
  const getText = (str: string): void => {
    // to set the string in the state to just showcase in the input box
    // to clear the showed string when some operator is being pressed
    // to clear the last inputed elem when the C is being pressed
    if (str === "C") {
      setKeyVal(keyVal.slice(0, -1));
    } else if (str === "AC") {
      setKeyVal("");
    }
    // to clear the showed string
    else {
      if (checkOperator(str) && checkOperator(keyVal.slice(-1))) {
        setKeyVal(keyVal + "");
      } else {
        if (str === "00" || str === "0") {
          if (keyVal.slice(-1) === "" || checkOperator(keyVal.slice(-1)))
            setKeyVal(keyVal + "");
          else setKeyVal(keyVal + str);
        } else {
          setKeyVal(keyVal + str);
        }
      }
    }
  };

  // if use clicks on the equal button
  const onEquals = () => {
    const res = String(eval(keyVal.replace("X", "*")));
    setKeyVal(res);
  };

  return (
    <>
      <div className="bg-[#212121] h-screen w-full pt-[7rem]">
        {/* <div className='text-center text-5xl font-semibold text-white'>Calculator</div> */}
        <div className=" h-fit w-[25%] m-auto mt-[4rem] flex flex-col justify-center items-center p-[1.5rem] rounded-lg shadow-lg bg-gray-400">
          <div className="backdrop-blur-lg">
            <textarea
              className="h-[5.5rem] w-[99%] text-4xl rounded-lg shadow-lg px-3"
              value={keyVal}
            />
            <div className="grid grid-cols-4 w-full gap-3 mt-5">
              {arr.map((e, idx) => (
                <div
                  className={
                    e === "=" || e === "AC" || e === "C"
                      ? "h-[5.5rem] w-[5.5rem] rounded-full place-self-center bg-gray-700 text-white flex items-center justify-center shadow-lg cursor-pointer"
                      : "h-[5.5rem] w-[5.5rem] rounded-full place-self-center bg-gray-300 flex items-center justify-center shadow-lg cursor-pointer"
                  }
                  key={idx}
                >
                  <Buttons val={e} display={getText} getResult={onEquals} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
