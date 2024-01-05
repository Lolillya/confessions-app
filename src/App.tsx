import './App.css';
import MainContent from './components/mainContent';
import Navbar from './components/navbar';
import Welcome from './components/welcome';


function App() {
  return (
    <>
      <Navbar />
      <main className='main-content'>
        <Welcome />
        <MainContent />
      </main>
    </>
  );
}

export default App;
