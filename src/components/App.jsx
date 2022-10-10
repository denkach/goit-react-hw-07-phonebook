import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";
import { useDispatch, useSelector } from "react-redux";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import {
  addContact,
  deleteContact,
  filterContacts,
} from "../redux/ContactsSplice";

export const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const inputUpdateHandler = (contact) => {
    if (contacts && contacts.length > 0) {
      for (let { name } of contacts) {
        if (name.toLowerCase() === contact.name.toLowerCase()) {
          alert(`${contact.name} is already in contacts.`);
          return;
        }
      }
    }

    dispatch(addContact(contact));
  };

  const getVisibleContacts = () => {
    if (!contacts.length > 0) {
      return;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactDeleteHandler = (e) => {
    const { id } = e.currentTarget;
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Box padding="24px" backgroundColor="#b9b2ec" height="100vh">
      <Box
        padding="24px"
        border="2px solid #4e2ecf"
        borderRadius="8px"
        width="320px"
        color="#fff"
        backgroundColor="#1d1d42"
      >
        <h1>Phonebook</h1>
        <ContactsForm onChange={inputUpdateHandler} />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={(e) => dispatch(filterContacts(e.target.value))}
        />
        <ContactsList
          contacts={visibleContacts}
          onClick={contactDeleteHandler}
        />
      </Box>
      <GlobalStyle />
    </Box>
  );
};
