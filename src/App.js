import { About, Footer, Header, More, Skills, Work } from './container/index';
import { Navbar } from './components/index';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work />
      <About />
      <More />
      <Skills />
      <Footer />

    </div>
  );
}

export default App;
