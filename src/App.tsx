import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import TranslationButton from './components/Translation/TranslationButton';
import { LanguageProvider } from './components/Translation/LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />
        <About />
        <Projects />
        <Footer />
        <TranslationButton />
      </LanguageProvider>
    </div>
  );
}

export default App;
