import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ITAuditQuestionnaire from '@/components/ITAuditQuestionnaire';

const ITAuditQuestionnairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <ITAuditQuestionnaire />
    </div>
  );
};

export default ITAuditQuestionnairePage; 