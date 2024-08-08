import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Body from './components/Body';
import ContactUsForm from './components/ContactUsForm'

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <ContactUsForm/>
      <Footer/>
    </div>
  );
}

export default App;
