import { Contacts } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { useGetContactByNameQuery } from 'redux/contactsApi';

export const ContactsList = () => {
  const contacts = useGetContactByNameQuery().data;
  const { filter } = useSelector(state => state.filter);

  console.log(contacts);

  const getVisibleContacts = () => {
    if (!contacts || !contacts.length > 0) {
      return;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts && visibleContacts.length > 0 ? (
        <Contacts>
          {visibleContacts.map(({ name, number, id }) => {
            return (
              <ContactsItem key={id} id={id} name={name} number={number} />
            );
          })}
        </Contacts>
      ) : (
        <div>There are no contacts.</div>
      )}
    </>
  );
};
