import SecurityQuestionnaire from "@/components/SecurityQuestionnaire";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const Questionnaire = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Navbar />
      <div className="pt-20">
        <SecurityQuestionnaire />
      </div>
    </div>
  );
};

export default Questionnaire; 