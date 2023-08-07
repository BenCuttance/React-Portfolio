import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import gitLogo from '../images/github.png'
import linkedInLogo from '../images/linkedin.png'
import faceBookLogo from '../images/facebook.png'



const styles = {
  logoImg: {
    height: '40px',
    width: '40px',
    margin: '10px'
  }
};


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Renders users the component as a prop depending on which link has been s
  const renderPage = () => {
  
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume'){
      return <Resume />
    }

    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='green'>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}

      
      <footer className="footer">
        <a href="https://github.com/BenCuttance?tab=repositories">
          <img src={gitLogo} style={styles.logoImg} alt='GitHub Logo' />
        </a>
        <a href="https://www.linkedin.com/in/ben-cuttance-72618b286/">
          <img src={linkedInLogo} style={styles.logoImg} alt='Linked in Logo' />
        </a>
        <a href="https://www.facebook.com/ben.cuttance.3">
          <img src={faceBookLogo} style={styles.logoImg} alt='Facebook Logo' />
        </a>
      </footer>
    </div>
  );
}
