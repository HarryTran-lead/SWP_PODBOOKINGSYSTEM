import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import bannerImage from '../../assets/BannerHomePage.jpg';
import './HomePage.css';
export default function HomePage() {
  return (
    <>
      
      <div className="container-fluid p-0">
        <div className="main-banner">
          <img src={bannerImage}  alt="Office Banner" className="banner-image" />
          <div className="overlay">
            <h1>Rent Offices Tailored to Your Success</h1>
            <div className="search-bar">
              <input type="text" placeholder="Search here" className="form-control" />
              <input type="text" placeholder="Search Nearby" className="form-control" />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className="trusted-companies text-center">
          <p>Trusted by 100+ Companies across the globe!</p>
          <div className="companies-logos">
            <img src="google.png" alt="Google" />
            <img src="amazon.png" alt="Amazon" />
            <img src="logitech.png" alt="Logitech" />
            <img src="spotify.png" alt="Spotify" />
            <img src="samsung.png" alt="Samsung" />
            <img src="netflix.png" alt="Netflix" />
          </div>
        </div>
      </div>
      
    </>
  );
}
