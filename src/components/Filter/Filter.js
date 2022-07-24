import s from './Filter.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

export default function Filter() {
  const loginInputId = nanoid();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.form}>
      <label className={s.label} htmlFor={loginInputId} />
      Find contact by name:
      <input
        id={loginInputId}
        className={s.input}
        type="text"
        value={filter}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </div>
  );
}
