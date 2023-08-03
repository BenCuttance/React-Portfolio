import React from 'react';
import profile from '../images/profile.jpg'
import styleSheet from '../styles/style.css'



const styles = {
  profile: {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    marginRight: '20px'
  },
  title: {
fontSize: '30px'

  }
};




function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body header" data-bs-theme="dark">
  
  <div className="container-fluid">
  <img src={profile} style={styles.profile} alt='' />
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
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
        </li>
        <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
    //       //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        </li>
        <li className="nav-item">
        <a
          href="#contact"
    //       //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
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
