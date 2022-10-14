import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

export const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <label>
        <Label>Find contacts by name</Label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContacts(e.target.value))}
        />
      </label>
    </>
  );
};
