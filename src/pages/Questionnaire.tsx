import SecurityQuestionnaire from "@/components/SecurityQuestionnaire";
import Navbar from "@/components/Navbar";

const Questionnaire = () => {
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