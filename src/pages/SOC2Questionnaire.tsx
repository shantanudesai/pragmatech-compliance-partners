import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SOC2Questionnaire from '@/components/SOC2Questionnaire';

const SOC2QuestionnairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <SOC2Questionnaire />
    </div>
  );
};

export default SOC2QuestionnairePage; 