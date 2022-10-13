import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/ContactsSplice';

export const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <label>
        <Label>Find contacts by name</Label>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(filterContacts(e.target.value))}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
