import { Contacts } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsSplice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getVisibleContacts = () => {
    if (!contacts.length > 0) {
      return;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const contactDeleteHandler = e => {
    const { id } = e.currentTarget;
    dispatch(deleteContact(id));
  };

  return (
    <>
      {visibleContacts && visibleContacts.length > 0 ? (
        <Contacts>
          {visibleContacts.map(({ name, number, id }) => {
            return (
              <ContactsItem
                key={id}
                id={id}
                name={name}
                number={number}
                onClick={contactDeleteHandler}
              />
            );
          })}
        </Contacts>
      ) : (
        <div>There are no contacts.</div>
      )}
    </>
  );
};
