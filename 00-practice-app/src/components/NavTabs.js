import React from 'react';
import profile3rd from '../images/profile3rd.jpg'
import stylessheet from '../styles/style.css'

//React styles
const styles = {
  profile: {
    height: '120px',
    width: '130px',
    borderRadius: '50%',
    marginRight: '20px'
  },
  title: {
fontSize: '30px'

  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body header" >
  
  <div className="container-fluid">
  <img src={profile3rd} style={styles.profile} alt='' />
    <a className="navbar-brand" href="#about" style={styles.title}>Ben's React Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
       
        </li>
        <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  If current page === this page then apply the navLinkActive css otherwise apply the nav-link ss

          className={currentPage === 'About' ? 'navLinkActive' : 'nav-link'}
        >
          About Me
        </a>
        </li>
        <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
    

          className={currentPage === 'Portfolio' ? 'navLinkActive' : 'nav-link'}
        >
          Portfolio
        </a>
        </li>
        <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
    

          className={currentPage === 'Resume' ? 'navLinkActive' : 'nav-link'}
        >
         Resume
        </a>
        </li>
        <li className="nav-item">
        <a
          href="#contact"
    

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'navLinkActive' : 'nav-link'}
        >
          Contact
        </a>
        </li>
      </ul>
      <span className="navbar-text">
        Thanks for visiting!
      </span>
      
    </div>
  </div>
</nav>
  );
}

export default NavTabs;
