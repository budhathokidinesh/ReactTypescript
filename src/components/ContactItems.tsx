import React from "react";
import type { Contact } from "../interface/Contacts";

interface ContactListProps {
  contact: Contact;
}

const ContactItems: React.FC<ContactListProps> = ({ contact }) => {
  return (
    <li>
      {contact.name} - {contact.phone}
      <button onClick={() => {}} className="edit">
        Edit
      </button>
      <button onClick={() => {}} className="delete">
        Delete
      </button>
    </li>
  );
};

export default ContactItems;
