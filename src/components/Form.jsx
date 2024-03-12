import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* eslint-disable react/prop-types */
const Form = ({
  name,
  num,
  month,
  year,
  cvv,
  setName,
  setNum,
  setMonth,
  setYear,
  setCvv,
}) => {
  const inputName = (e) => {
    setName(e.target.value);
  };

  const inputNum = (e) => {
    setNum(e.target.value);
  };

  const inputMonth = (e) => {
    setMonth(e.target.value);
  };

  const inputYear = (e) => {
    setYear(e.target.value);
  };

  const inputCvv = (e) => {
    setCvv(e.target.value);
  };

  const subHandler = (e) => {

    e.preventDefault();

    const checkedEmpty = name && num && month && year && cvv

    if (checkedEmpty && num.length === 16) {
      toast.success("Your purchase was successful");
    } else if (checkedEmpty && num.length < 16) {
      toast.warning("The card number is low");
    }
    else if (checkedEmpty && num.length > 16){
      toast.warning("The card number is high");
    }
     else {
      toast.error("Please fill in the fields completely");
    }
  };
  return (
    <form onSubmit={subHandler}>
      <div className="flex flex-col mt-8">
        <div className="flex flex-col">
          <h6 className="text-title font-bold text-sm">Name on Card</h6>
          <input
            onChange={inputName}
            type="text"
            className="bg-inherit outline-none border-b text-screen text-xl mt-0.5"
          ></input>
        </div>
        <div className="flex flex-col mt-8">
          <h6 className="text-title font-bold text-sm">Card Number</h6>
          <input
            onChange={inputNum}
            maxLength="16"
            type=""
            className={`bg-inherit outline-none border-b text-screen text-xl mt-0.5`}
          ></input>
          {/* {Error && num.length < 16 && (
            <p className="text-[red] font-bold text-sm mt-3">
              Your card number is not valid!
            </p>
          )} */}
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex items-center gap-20">
            <div className="flex flex-col">
              <h6 className="text-title font-bold text-sm">Expiration data</h6>
              <div className="flex items-center gap-10">
                <input
                  onChange={inputMonth}
                  type="text"
                  className="w-[100px] bg-inherit outline-none border-b text-screen text-xl mt-0.5 placeholder:text-sm"
                  placeholder="month"
                  minLength="2"
                  maxLength="2"
                ></input>
                <input
                  onChange={inputYear}
                  type="text"
                  className="w-[100px] bg-inherit outline-none border-b text-screen text-xl mt-0.5 placeholder:text-sm"
                  placeholder="year"
                  minLength="2"
                  maxLength="2"
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="text-title font-bold text-sm">CVV2</h6>
              <input
                onChange={inputCvv}
                minLength="3"
                maxLength="4"
                type="password"
                className="w-[70px] bg-inherit outline-none border-b text-screen text-xl mt-0.5"
              ></input>
            </div>
          </div>
        </div>
        <button className="bg-button font-bold text-screen rounded-lg m-10 py-5">
          Check Oute
        </button>
        <ToastContainer />
      </div>
    </form>
  );
};

export default Form;
