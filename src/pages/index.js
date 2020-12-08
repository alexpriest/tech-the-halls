import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Fundraiser from '@sections/Fundraiser';
import Donate from '@sections/Donate';
import About from '@sections/About';
import Contact from '@sections/Contact';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Fundraiser />
    <Donate />
    <About />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
