import React, { useEffect, useState } from "react";

import ContactList from "./ContactList";
import axios from "axios";
import type {
  CreateContactsResponse,
  getContactsResponse,
} from "../interface/ApiResponse";
import DIrectoryForm from "./DirectoryForm";
import type { Contact } from "../interface/Contacts";

const Directory: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchContacts = async () => {
    const response = await axios.get<getContactsResponse>(
      "http://localhost:8000/api/phone-directory/"
    );
    console.log(response.data);
    setContacts(response.data.data);
  };
  const handleAddUser = async (name: string, phone: number) => {
    const newContact: Contact = {
      name,
      phone,
    };
    const response = await axios.post<CreateContactsResponse>(
      "http://localhost:8000/api/phone-directory/",
      newContact
    );
    setContacts((prevContact) => [...prevContact, response.data.data]);
  };
  // Fetching the all contacts
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-amber-300 w-80 p-6 rounded-lg shadow-md text-center flex items-center gap-5 justify-center">
        <img src="./books.png" alt="" className="h-[20px] w-[20px]" />
        <h1 className="text-xl font-bold">Phone Directory</h1>
        <DIrectoryForm handleAddUser={handleAddUser} />
        <ContactList contacts={contacts} />
      </div>
      <h2>
        Contact number: <span></span>
      </h2>
    </div>
  );
};

export default Directory;
