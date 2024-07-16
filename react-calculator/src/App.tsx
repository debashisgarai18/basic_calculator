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
  const [displayText, setDisplayText] = useState<string>("");

  // this is the function to set the value that is to be displayed in the textArea
  const getText = (str: string): void => {
    // to set the string in the state to just showcase in the input box
    if (
      str === "+" ||
      str === "X" ||
      str === "-" ||
      str === "/" ||
      str === "AC"
    ) {
      setKeyVal("");
    } else if (str == "C") {
      setKeyVal(keyVal.slice(0, keyVal.length - 1));
    } else setKeyVal(keyVal + str);
  };

  // this is the function to actually handle the global array
  const getGlobalText = (str: string): void => {
    // few checks
    // if the current btn is 'X', then it should be '*'
    if (
      str === "X" &&
      displayText.charAt(displayText.length - 1) != "+" &&
      displayText.charAt(displayText.length - 1) != "-" &&
      displayText.charAt(displayText.length - 1) != "*" &&
      displayText.charAt(displayText.length - 1) != "/" &&
      displayText.charAt(displayText.length - 1) != "."
    )
      setDisplayText(displayText + "*");
    // if the curr and the last input is both operator or decimal then
    else if (
      (displayText.charAt(displayText.length - 1) === "+" ||
        displayText.charAt(displayText.length - 1) === "-" ||
        displayText.charAt(displayText.length - 1) === "*" ||
        displayText.charAt(displayText.length - 1) === "/" ||
        displayText.charAt(displayText.length - 1) === ".") &&
      (str === "+" || str === "-" || str === "X" || str === "/" || str === ".")
    )
      setDisplayText(displayText);
    // to check if the current btn is 'C'
    else if (str === "C")
      setDisplayText(displayText.slice(0, displayText.length - 1));
    // to check if the current btn is 'AC'
    else if (str === "AC") setDisplayText("");
    // to set btn string to the final string
    else setDisplayText(displayText + str);
  };

  // if use clicks on the equal button
  const onEquals = () => {
    setKeyVal(eval(displayText))
  };

  return (
    <>
      <div className="bg-[#212121] h-screen w-full pt-[7rem]">
        {/* <div className='text-center text-5xl font-semibold text-white'>Calculator</div> */}
        <div className=" h-fit w-[25%] m-auto mt-[4rem] flex flex-col justify-center items-center p-[1.5rem] rounded-lg shadow-lg bg-gray-400">
          <div className="backdrop-blur-lg">
            <textarea
              className="h-[5.5rem] w-[99%] text-4xl rounded-lg shadow-lg px-3"
              value={
                keyVal
              }
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
                  <Buttons
                    val={e}
                    display={getText}
                    getResult={onEquals}
                    textForArray={getGlobalText}
                  />
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
