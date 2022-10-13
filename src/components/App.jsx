import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
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
        <ContactsForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Box>
      <GlobalStyle />
    </Box>
  );
};
