import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import DPDPQuestionnaire from '@/components/DPDPQuestionnaire';

const DPDPQuestionnairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <DPDPQuestionnaire />
    </div>
  );
};

export default DPDPQuestionnairePage; 