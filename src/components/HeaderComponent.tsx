"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';

const HeaderComponent: React.FC = () => {
  const counters = useSelector((state: RootState) => state.counter.counters);
  const total = counters.cat + counters.dog + counters.goat;

  return (
    <header style={{ padding: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
      <h1>My Next.js App</h1>
      <p>Total Count: <strong>{total}</strong> (Cat: {counters.cat}, Dog: {counters.dog}, Goat: {counters.goat})</p>
    </header>
  );
};

export default HeaderComponent;