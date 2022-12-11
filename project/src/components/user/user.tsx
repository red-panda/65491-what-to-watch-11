import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {store} from '../../store';
import {logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';

function User(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loggedIn = () => authorizationStatus === AuthorizationStatus.Auth;
  const user = useAppSelector(getUser);

  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    store.dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      {loggedIn() ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user?.avatarUrl} alt={user?.name} width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <button onClick={handleLogout} className="user-block__link" style={{background: 'none', border: 'none'}}>Sign out</button>
          </li>
        </>
      ) : (
        <li className="user-block__item">
          <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
        </li>
      )}
    </ul>
  );
}

export default User;
