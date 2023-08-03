import React, { useState } from 'react';
import NavTabs from './NavTabs';
// import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import gitLogo from '../images/github.png'
import linkedInLogo from '../images/linkedin.png'



const styles = {
  logoImg: {
    height: '50px',
    width: '50px',
    margin: '20px'
  }
};


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}

      
      <footer className="footer">
        <a href="https://github.com/BenCuttance?tab=repositories">
          <img src={gitLogo} style={styles.logoImg} alt='' />
        </a>
        <a href="https://www.linkedin.com/in/ben-cuttance-72618b286/">
          <img src={linkedInLogo} style={styles.logoImg} alt='' />
        </a>
      </footer>
    </div>
  );
}
