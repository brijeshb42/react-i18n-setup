import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <strong>Test</strong>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

