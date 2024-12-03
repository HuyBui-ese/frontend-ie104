import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Layout
import Header from './components/Header/Header';
import Footer from "./components/Footer";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";

import Home from "./pages/Home/Home";


// Pages
import styles from './App.module.css';

function App() {
  return (
      <Router>
        <div className={styles.app}>
          <Header/>
          <BreadCrumb/>
          <main className={styles.content}>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </main>
          <Footer/>
        </div>

      </Router>
  );
}

export default App;
