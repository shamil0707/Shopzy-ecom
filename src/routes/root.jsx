import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Root() {
  const [order, setOrder] = useState(null);

  return (
    <>
      <Navbar />
      <Outlet context={{ order, setOrder }} />
    </>
  );
}

export default Root;
