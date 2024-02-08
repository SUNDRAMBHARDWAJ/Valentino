import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HappyDay: React.FC<{ name: string }> = ({ name }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [messageColor, setMessageColor] = useState('#FFC107'); // Default color
  const messages = [
    "On this Propose Day, I want to reiterate my love for you, my dear wife. Will you continue to be my partner in this beautiful journey of life?",
    "My love, every day feels like Propose Day with you by my side. But today, I want to officially ask, will you be mine forever?",
    "Happy Propose Day, my love! With you, every moment is magical. Will you let me cherish and adore you for the rest of our lives?",
    "Happy Propose Day, my love! With you, every moment is magical. Will you let me cherish and adore you for the rest of our lives?",
    "To the woman who stole my heart and made my life complete, happy Propose Day! Will you continue to be my happily ever after?",
    "On this special day, I want to remind you of the moment I proposed, and how it changed our lives forever. Will you allow me to keep making beautiful memories with you?",
    "Happy Propose Day, my darling wife! You're my soulmate, my confidante, my everything. Will you let me love you endlessly?",
    "With you, every day feels like a celebration of love. But today, on Propose Day, I want to ask you once again, will you be mine forever?",
    "My love, as we celebrate Propose Day, I want to thank you for saying 'yes' to me all those years ago. Will you continue to be my partner in love and life?",
    "Happy Propose Day, my beloved wife! With you, every moment is filled with love and joy. Will you let me spend the rest of my days making you happy?",
    "On this Propose Day, I want to renew my commitment to you, my dear wife. Will you allow me to love you more fiercely with each passing day?",
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  const handleClick = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    setMessageColor(['lightblue', 'red', 'pink', 'green', 'orange', 'yellow'][Math.floor(Math.random() * 6)]);
    controls.start({ opacity: 0 });
    setTimeout(() => {
      controls.start({ opacity: 1 });
    }, 500);
  };

  return (
    <div style={{ backgroundColor: 'lightpink', minHeight: '100vh', position: 'relative', textAlign: 'center' }} onClick={handleClick}>
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: -1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {[...Array(200)].map((_, index) => (
          <span key={index} style={{ fontSize: '24px', color: ['#76BD99', '#63AB8E', '#8ED1FC', '#D28194', '#D28194','#03A9F4','#AFB42B','#D1C4E9','#F44336','#8bc34a'][Math.floor(Math.random() * 6)], userSelect: 'none' }}>&#10084;</span>
        ))}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        style={{ fontFamily: 'cursive', fontSize: '48px', fontWeight: 'bold', color: 'red', margin: '0' }}
      >
        HAPPY
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{ fontFamily: 'cursive', fontSize: '64px', fontWeight: 'bold', color: 'green', margin: '0' }}
      >
        PROPOSE
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{ fontFamily: 'cursive', fontSize: '32px', fontWeight: 'bold', color: 'orange', margin: '0' }}
      >
        DAY
        
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{ fontFamily: 'cursive', fontSize: '32px', fontWeight: 'bold', color: '#c22cc8', margin: '0' }}
      >
        {name}
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{ fontFamily: 'cursive', fontSize: '24px', fontWeight: 'bold', margin: '0 auto', maxWidth: '90%', marginTop: '50px', color: messageColor }}
      >
        {messages[messageIndex]}
      </motion.h2>
    </div>
  );
};

export default HappyDay;
