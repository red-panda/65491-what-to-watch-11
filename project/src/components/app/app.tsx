import Main from '../../pages/main/main';

type AppProps = {
  film: {
    title: string;
    genre: string;
    year: string;
  };
}

function App({film}: AppProps): JSX.Element {
  return <Main film={film}/>;
}

export default App;
