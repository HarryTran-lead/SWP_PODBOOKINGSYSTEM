import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import bannerImage from '../../assets/BannerHomePage.jpg';
import './HomePage.css';

import GoogleLogo from '../../assets/BrandLogo/GoogleLogo.png';
import AmazonLogo from '../../assets/BrandLogo/AmazonLogo.png';
import LogitechLogo from '../../assets/BrandLogo/LogitechLogo.png';
import SpotifyLogo from '../../assets/BrandLogo/SpotifyLogo.png';
import SamsungLogo from '../../assets/BrandLogo/SamsungLogo.png';
import NetflixLogo from '../../assets/BrandLogo/NetflixLogo.png';
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
            <img src={GoogleLogo} alt="Google" />
            <img src={AmazonLogo} alt="Amazon" />
            <img src={LogitechLogo} alt="Logitech" />
            <img src={SpotifyLogo} alt="Spotify" />
            <img src={SamsungLogo} alt="Samsung" />
            <img src={NetflixLogo} alt="Netflix" />
          </div>
        </div>
      </div>
      
    </>
  );
}
