import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ISO27701Questionnaire from '@/components/ISO27701Questionnaire';

const ISO27701QuestionnairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <ISO27701Questionnaire />
    </div>
  );
};

export default ISO27701QuestionnairePage; 