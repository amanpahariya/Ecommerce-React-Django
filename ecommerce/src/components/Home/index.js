import React from 'react';
import Recommendations from '../Recommendations';
import Carosel from './carosel';
import './style.css'
export default function Home() {
  return (
    <div className="container-fluid px-0" style={{ minHeight: "200vh" }}>
      <Carosel />
      <div className="mt-5">
        <Recommendations />
      </div>
    </div>
  );
}
