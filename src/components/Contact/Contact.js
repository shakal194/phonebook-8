import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';

function Contact({ contact, key }) {
  const { id } = contact;
  const dispatch = useDispatch();
  return (
    <li className={s.contactsListItem} key={key}>
      <p className={s.contactsListName}>{contact.name}</p>
      <p className={s.contactsListName}>{contact.number}</p>
      <button
        className={s.contactsListBtn}
        onClick={() => dispatch(contactsOperations.deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
