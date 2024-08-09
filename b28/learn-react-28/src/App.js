
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Content from './components/Content';
import NavigationMenu from './components/NavigationMenu';

function App() {


  return (
    <div className="App">
      <Header />
      <NavigationMenu />
      <div className="content">
        <Content text="Content 1" number={10} active={true}/>
        <MainContent />
        <Content text="Content 2" number={20} active={false}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
