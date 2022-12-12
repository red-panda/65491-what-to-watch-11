import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>404 Not found</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">404 Not found</h1>
      </header>

      <div className="sign-in user-page__content">
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          404 Not found
          <video preload="auto" controls={false} autoPlay loop playsInline muted style={{maxWidth: '480px'}} src="img/404.mp4" className="player__video" poster="img/404.gif"></video>
          <Link style={{marginTop: '30px'}} className="user-block__link" to={AppRoute.Root}>Back to main page</Link>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default NotFound;
