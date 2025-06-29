import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import GDPRQuestionnaire from '@/components/GDPRQuestionnaire';

const GDPRQuestionnairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <GDPRQuestionnaire />
    </div>
  );
};

export default GDPRQuestionnairePage; 