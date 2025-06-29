import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ISO42001Questionnaire from '@/components/ISO42001Questionnaire';

const ISO42001QuestionnairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <ISO42001Questionnaire />
    </div>
  );
};

export default ISO42001QuestionnairePage; 