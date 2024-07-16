import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  console.log('home!');

  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
