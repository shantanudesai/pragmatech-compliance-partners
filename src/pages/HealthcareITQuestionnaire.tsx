import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HealthcareITQuestionnaire from '@/components/HealthcareITQuestionnaire';

const HealthcareITQuestionnairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HealthcareITQuestionnaire />
    </div>
  );
};

export default HealthcareITQuestionnairePage; 