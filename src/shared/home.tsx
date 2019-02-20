import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <strong>Home</strong>
      <Link to="/test">Goto test</Link>
      <strong>Home</strong>
      <Link to="/404">404</Link>
    </div>
  );
}

