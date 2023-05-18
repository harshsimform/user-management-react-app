import PageNotFoundImg from "/assets/404-error.gif";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-[100vh]  ">
      <div>
        <div className="flex flex-wrap justify-center items-center">
          <img src={PageNotFoundImg} alt="404 Page Not Found" className="" />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-indigo-500  shadow-lg rounded-lg font-medium text-white h-[2.5rem] w-[7rem]"
            onClick={() => {
              navigate("/home");
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
