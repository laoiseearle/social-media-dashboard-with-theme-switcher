import { Header } from './Components/Header';
import { Socials } from './Components/Socials';
import { Overview } from './Components/Overview';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Socials />
      <Overview />
    </div>
  );
};
