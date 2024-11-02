import { useNavigate } from "react-router-dom";
import illustration from "../assets/illustration.svg";

function Initial() {
  const navigate = useNavigate();
 
  
  return (
    <div className="flex flex-col-reverse h-screen w-full relative gap-6 items-center bg-[#70B9BE] text-white px-6 font-bold">
      <img
        src={illustration}
        alt=""
        className="h-full w-full absolute object-cover"
      />
      <button className="pb-20 z-10" onClick={() => navigate("/register")}>
        Create New Account
      </button>
      <button
        className="py-4 w-full bg-[#042628] rounded-2xl z-10 "
        onClick={() => navigate("/login")}
      >
        Login
      </button>
      <h1 className=" text-center text-3xl ">
        Help your path to health goals with happiness
      </h1>
    </div>
  );
}

export default Initial;
