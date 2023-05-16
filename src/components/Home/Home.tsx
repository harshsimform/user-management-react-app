import React from "react";
import { SignupUserData } from "../../redux/SignupSlice/SignupSlice";
import { useAppSelector } from "../../redux/store";

const Home = () => {
  const SignedUserData = useAppSelector(SignupUserData);
  return (
    <>
      <div className="border-2 w-full bg-transparent">Logout</div>
      {SignedUserData && (
        <div className="flex items-center justify-center bg-gradient-to-br from-indigo-200 to-indigo-400 h-[100vh]">
          <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
            <img
              className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto bg-gray-300"
              src={SignedUserData.image}
              alt="product designer"
            />
            <h1 className="text-lg text-gray-700">{SignedUserData.name}</h1>
            <h3 className="text-sm text-gray-400 ">{SignedUserData.email}</h3>
            <p className="text-xs text-gray-400 mt-4">{SignedUserData.phone}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
