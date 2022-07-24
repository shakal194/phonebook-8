import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/auth-operations';
import s from './RegisterView.module.css';
import authSelectors from 'redux/auth/auth-selectors';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const isError = useSelector(authSelectors.getIsAuthError);

  useEffect(() => {
    console.log('isError', isError);
    if (isError?.name === 'MongoError') {
      setErrorMessage('This user is already registered');
    }
    if (isError?.errors?.password?.name === 'ValidatorError') {
      setErrorMessage(isError.message);
    }
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }, [isError]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      setIsNameEmpty(true);
      setTimeout(() => setIsNameEmpty(false), 3000);
      return;
    }
    if (email.trim() === '') {
      setIsEmailEmpty(true);
      setTimeout(() => setIsEmailEmpty(false), 3000);
      return;
    }
    if (password.trim() === '') {
      setIsPasswordEmpty(true);
      setTimeout(() => setIsPasswordEmpty(false), 3000);
      return;
    }
    if (password.length < 7) {
      setIsPasswordValid(false);
      setTimeout(() => setIsPasswordValid(true), 3000);
      return;
    }
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className={s.formPage}>
        <div>
          <h1 className={s.title}>Sing up</h1>
          <div className={s.massage}>
            {isNameEmpty && <p>Enter your name</p>}
            {isEmailEmpty && <p>Enter your email</p>}
            {isPasswordEmpty && <p>Enter your password</p>}
            {!isPasswordValid && (
              <p>Minimum allowed password length is 8 characters</p>
            )}
            {isError && errorMessage !== '' && <p>{errorMessage}</p>}
          </div>
        </div>

        <form className={s.form} onSubmit={handleSubmit} autoComplete="on">
          <p className={s.formText}> Registration details</p>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button className={s.button} type="submit">
            Sing up
          </button>
        </form>
      </div>
    </>
  );
}
