import { useState } from "react";
import MasterImg from "../assets/master3.png";
import Visa from "../assets/visa2.png";
import Form from "./Form";

const RightSide = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  const curr = (x) => {
    let result = x.match(/.{1,4}/g);
    return result;
  };
  const final = curr(num);
  console.log(final);

  return (
    <div className="w-[500px] h-[700px] bg-card rounded-xl flex flex-col p-10 shadow-2xl">
      <h1 className="text-screen font-bold text-2xl">Card Details</h1>
      <h6 className="text-title font-bold text-sm mt-8">Card Type</h6>
      <div className="flex items-center gap-20 mt-5">
        <div className="p-5 flex flex-col w-[400px] h-[160px] rounded-xl ml-[-90px] shadow-xl bg-cart">
          <img src={Visa} className="w-[55px] h-[20px] m-auto"></img>
          <div className="text-screen grid grid-cols-4 mt-8">
            {final
              ? final.map((item, i) => <span className="text-center" key={item.id}>{[1,2].includes(i) ? (new Array(item.length).fill('*').join('')) : item}</span>)
              : ""}
            {/* <input
              type="text"
              className="bg-inherit flex justify-between outline-none border-b text-screen text-xl mt-0.5"
              placeholder='****    ****   ****   ****'
            ></input> */}
          </div>
          <div className="text-screen mt-3 flex items-center justify-between">
            <p className="text-screen">name: {name}</p>
            <div className="flex-col text-[0.8rem]">
              <p>
                CVV2: <span>{cvv}</span>
              </p>
              <p>
                <span>{month}</span> / <span>{year}</span>
              </p>
            </div>
          </div>
        </div>
        <img src={MasterImg} className="w-[80px] h-[70px]" />
      </div>
      <Form
        name={name}
        num={num}
        month={month}
        year={year}
        cvv={cvv}
        setName={setName}
        setNum={setNum}
        setMonth={setMonth}
        setYear={setYear}
        setCvv={setCvv}
      />
    </div>
  );
};

export default RightSide;
