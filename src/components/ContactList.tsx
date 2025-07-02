import React from "react";
import type { Contact } from "../interface/Contacts";
import ContactItems from "./ContactItems";

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div>
      <ul id="contact-list">
        {contacts.map((contact) => (
          <ContactItems key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
