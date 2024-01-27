import { FC } from 'react';

import './style.css';

import Register from './Register.js';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="App">
      <Register />
    </div>
  );
};

export default App