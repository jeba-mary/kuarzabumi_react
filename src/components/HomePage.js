import React from 'react';
import Content from './Content';
import Services from './Services';
import InteriorContent from './InteriorContent';
import ExteriorContent from './ExteriorContent';
import Safety from './Safety';
import Gallery from './Gallery';
import TestDrive from './TestDrive';
import Price from './Price';
import ContactPage from './ContactPage';
import Footer from './Footer';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Content />
        <Services />
        <InteriorContent />
        <ExteriorContent />
        <Safety />
        <Gallery />
        <TestDrive />
        <Price />
        <ContactPage />
        <Footer />
      </>
    )
  }
}

export default HomePage;