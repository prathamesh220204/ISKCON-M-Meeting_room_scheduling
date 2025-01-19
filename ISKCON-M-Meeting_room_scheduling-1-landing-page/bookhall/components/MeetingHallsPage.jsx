import React from 'react';
// import './MeetingHalls.css';

// Search icon SVG component
const SearchIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="search-icon"
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const MeetingHallsPage = () => {
  const meetingHalls = [
    {
      id: '101',
      name: 'Meeting Hall 101',
      capacity: 50,
      facilities: 'Projector, Wi-Fi, AC',
      location: 'Ground Floor, Building A',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300']
    },
    {
      id: '102',
      name: 'Meeting Hall 102',
      capacity: 75,
      facilities: 'Projector, Wi-Fi, AC',
      location: '1st Floor, Building A',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300']
    },
    {
      id: '103',
      name: 'Meeting Hall 103',
      capacity: 100,
      facilities: 'Projector, Wi-Fi, AC',
      location: 'Ground Floor, Building A',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300']
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <img src="/api/placeholder/40/40" alt="ISKCON Logo" className="logo" />
          
          <div className="search-container">
            <div className="search-wrapper">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search for a Hall or Venue"
                className="search-input"
              />
            </div>
            <span className="location-text">at ISKCON Juhu</span>
          </div>

          <nav className="nav-links">
            <a href="#" className="nav-link">Login</a>
            <a href="#" className="nav-link">Sign Up</a>
            <button className="mobile-menu-button">
              <svg viewBox="0 0 24 24" className="hamburger-icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <div className="sub-header">
        <div className="breadcrumb-container">
          <nav className="breadcrumb">
            <a href="#" className="breadcrumb-link">Home</a>
            <span className="separator">•</span>
            <a href="#" className="breadcrumb-link">ISKCON Juhu</a>
            <span className="separator">•</span>
            <span className="breadcrumb-current">Meeting Halls</span>
          </nav>
          <a href="#" className="main-mandir-link">Main Mandir</a>
        </div>
      </div>

      <main className="main-content">
        <div className="halls-grid">
          {meetingHalls.map((hall) => (
            <div key={hall.id} className="hall-card">
              <div className="image-grid">
                <div className="main-image-wrapper">
                  <img src={hall.images[0]} alt="" className="main-image" />
                  <button className="play-button">
                    <svg viewBox="0 0 24 24" className="play-icon">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                <div className="small-images">
                  <img src={hall.images[1]} alt="" className="small-image" />
                  <div className="small-image-wrapper">
                    <img src={hall.images[2]} alt="" className="small-image" />
                    <button className="see-all-button">See all</button>
                  </div>
                </div>
              </div>

              <div className="hall-info">
                <h2 className="hall-name">{hall.name}</h2>
                <p className="capacity">Capacity - {hall.capacity} seats</p>
                <p className="facilities">Facilities: {hall.facilities}</p>
                <p className="location">Location: {hall.location}</p>
                
                <div className="action-buttons">
                  <button className="see-images-btn">See all images</button>
                  <button className="enquire-btn">Enquire</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 ISKCON</p>
      </footer>
    </div>
  );
};

export default MeetingHallsPage;