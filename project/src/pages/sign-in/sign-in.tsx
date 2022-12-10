import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {store} from '../../store';
import {loginAction} from '../../store/api-actions';

function SignIn(): JSX.Element {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleFieldChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  function handleFormSubmit(e: React.MouseEvent<HTMLElement> | React.FormEvent) {
    e.preventDefault();
    store.dispatch(loginAction({
      login: formData.email,
      password: formData.password
    }));
  }
  return (
    <div className="user-page">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email" onChange={handleFieldChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password" onChange={handleFieldChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleFormSubmit}>Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}

export default SignIn;
