import s from './HomeView.module.css';
import { NavLink } from 'react-router-dom';
import plus from '../../../img/plus.png';
import search from '../../../img/search.png';

export default function HomeView() {
  return (
    <>
      <section className={s.hero}>
        <button className={s.heroButton}>
          <img src={plus} alt="icon" width={42} className={s.icon} />
          <NavLink to="/addcontact" className={s.heroLink}>
            Add Contact
          </NavLink>
        </button>
        <button className={s.heroButton}>
          <img src={search} alt="icon" width={42} className={s.icon} />
          <NavLink to="/viewcontact" className={s.heroLink}>
            View Contact
          </NavLink>
        </button>
      </section>
    </>
  );
}
