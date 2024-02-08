import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
const Heart: React.FC<{ color: string }> = ({ color }) => (
  <span
    className="heart"
    style={{
      position: 'absolute',
      top: `${Math.floor(Math.random() * 100)}vh`,
      left: `${Math.floor(Math.random() * 100)}vw`,
      color: color,
    }}
  >
    &#10084;
  </span>
);

const LoveText: React.FC<{ color: string }> = ({ color }) => (
  <span
    className="love-text"
    style={{
      position: 'absolute',
      top: `${Math.floor(Math.random() * 100)}vh`,
      left: `${Math.floor(Math.random() * 100)}vw`,
      color: color,
      fontFamily: 'cursive', 
    }}
  >
    Love you
  </span>
);

const App: React.FC = () => {
  const nav = useNavigate()
  const [name, setName] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    if (name.toLowerCase() === 'lucky' || name.toLowerCase() === 'luck') {
      nav('/happy-day')
      
    } else {
      alert('Please enter Lucky or Luck as your name!');
    }
  };

  return (
    <div className="App" style={{ backgroundColor: 'lightred', minHeight: '100vh', position: 'relative' }}>
      <header style={{ backgroundColor: 'skyblue', padding: '20px', textAlign: 'center' }}>
        <h1 style={{color:"pink",fontFamily:"cursive",fontSize:50}}>Welcome to My Heart</h1>
      </header>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={handleChange}
  style={{
    padding: '10px',
    borderRadius: '20px',
    border: '2px solid skyblue',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontSize: '18px',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
    width: '300px',
    maxWidth: '90%',
    fontFamily:'cursive',
  }}
/>
        <br />
        <button
  onClick={handleClick}
  style={{
    padding: '15px 30px',
    backgroundColor: 'skyblue',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    marginTop: '30px',
    cursor: 'pointer',
    fontSize: '20px',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease-in-out',
  }}
>
  Enter
</button>
      </div>
      {[...Array(25)].map((_, index) => (
        <Heart
          key={index}
          color={['red', 'pink', 'lightblue'][Math.floor(Math.random() * 3)]}
        />
      ))}
      {[...Array(25)].map((_, index) => (
        <LoveText
          key={index}
          color={['red', 'pink', 'lightblue'][Math.floor(Math.random() * 3)]}
        />
      ))}
    </div>
  );
};

export default App;