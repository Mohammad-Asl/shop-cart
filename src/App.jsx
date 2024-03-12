import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="bg-screen flex h-[100vh] w-full max-w-[1300px] items-center m-auto md:flex-col-reverse sm:flex-col-reverse xl:flex-row gap-[70px]">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
