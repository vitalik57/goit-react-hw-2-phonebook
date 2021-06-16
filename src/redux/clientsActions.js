import { createAction } from "@reduxjs/toolkit";
export const getAllContacts = createAction("contacts/getAllContacts");
export const addContact = createAction("contacts/addContact");
export const removeContact = createAction("contacts/removeContact");

// export const getAllContacts = contacts => {
//   return { type: "getClient", payload: contacts };
// };

// export const addContact = contact => ({
//   type: "addContact",
//   payload: contact
// });
// export const addContact = payload => ({
//   type: "addContact",
//   payload
// });

// export const removeContact = id => ({
//   type: "removeContact",
//   payload: id
// });
