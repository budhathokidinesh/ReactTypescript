import React, { useState } from "react";
interface DirectoryFormProbs {
  handleAddUser: (name: string, phone: number) => void;
}
const DIrectoryForm: React.FC<DirectoryFormProbs> = ({ handleAddUser }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => {
            setPhone(parseInt(e.target.value));
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            handleAddUser(name, phone);
          }}
        >
          Add
        </button>
        <button onClick={() => {}}>Reset</button>
      </div>
    </div>
  );
};

export default DIrectoryForm;
