import PropTypes from "prop-types";
import { Contacts } from "./ContactsList.styled";
import { ContactsItem } from "../ContactsItem/ContactsItem";

export const ContactsList = ({ contacts, onClick }) => {
  return (
    <>
      {contacts && contacts.length > 0 ? (
        <Contacts>
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactsItem
                key={id}
                id={id}
                name={name}
                number={number}
                onClick={onClick}
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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};
