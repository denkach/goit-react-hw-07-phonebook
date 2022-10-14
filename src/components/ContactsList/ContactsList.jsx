import { Contacts } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { useGetContactByNameQuery } from 'redux/contactsApi';
import { Spinner } from '../Spinner/Spinner';

export const ContactsList = () => {
  const { data: contacts, isLoading } = useGetContactByNameQuery();
  const { filter } = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    if (!contacts) {
      return;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  console.log(isLoading, visibleContacts, visibleContacts);

  return (
    <>
      {isLoading && <Spinner />}
      {visibleContacts && visibleContacts.length > 0 && (
        <Contacts>
          {visibleContacts.map(({ name, number, id }) => {
            return (
              <ContactsItem key={id} id={id} name={name} number={number} />
            );
          })}
        </Contacts>
      )}
      {!isLoading && !visibleContacts.length > 0 && (
        <div>There is no contacts.</div>
      )}
    </>
  );
};
