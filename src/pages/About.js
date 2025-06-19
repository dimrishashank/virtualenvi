import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetToKnow from '../components/GetToKnow';
import AboutMission from '../components/AboutMission';
import TeamSection from '../components/TeamSection';

function About() {
  return (
    <>
      <Header />
      <GetToKnow />
      <AboutMission />
      <TeamSection />
      <Footer />
    </>
  );
}

export default About;