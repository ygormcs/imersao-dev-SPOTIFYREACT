import './App.css';
import Sidebar from '../src/components/sidebar/sidebar'
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import Main from '../src/components/main/main'


function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Footer />
      <Main />
      
    </div>
  );
}

export default App;
