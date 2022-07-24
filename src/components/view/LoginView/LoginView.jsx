import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import s from './LoginView.module.css';
import authSelectors from 'redux/auth/auth-selectors';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const isError = useSelector(authSelectors.getIsAuthError);
  useEffect(() => {
    if (isError) {
      setErrorMessage('E-mail or password are invalid');
    }
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }, [isError]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className={s.formPage}>
        <div>
          <h1 className={s.title}>Log in</h1>
          <div className={s.massage}>
            {isEmailEmpty && <p>Enter your email</p>}
            {isPasswordEmpty && <p>Enter your password</p>}
            {isError && errorMessage && <p> {errorMessage}</p>}
          </div>
        </div>

        <form className={s.form} onSubmit={handleSubmit} autoComplete="on">
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
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
