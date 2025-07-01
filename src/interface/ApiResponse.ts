import type { Contact } from "./Contacts";

export interface getContactsResponse {
  status: boolean;
  message: string;
  data: Contact[];
}
export interface CreateContactsResponse {
  status: boolean;
  message: string;
  data: Contact;
}
