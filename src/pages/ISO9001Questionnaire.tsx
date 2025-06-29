import ISO9001Questionnaire from "@/components/ISO9001Questionnaire";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const ISO9001QuestionnairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Navbar />
      <div className="pt-20">
        <ISO9001Questionnaire />
      </div>
    </div>
  );
};

export default ISO9001QuestionnairePage; 