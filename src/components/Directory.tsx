import React from "react";
import DIrectoryForm from "./DIrectoryForm";
import ContactList from "./ContactList";

const Directory: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-amber-300 w-80 p-6 rounded-lg shadow-md text-center flex items-center gap-5 justify-center">
        <img src="./books.png" alt="" className="h-[20px] w-[20px]" />
        <h1 className="text-xl font-bold">Phone Directory</h1>
      </div>
      <h2>
        Contact number: <span></span>
      </h2>

      <DIrectoryForm />
      <ContactList />
    </div>
  );
};

export default Directory;
