import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Questionnaire from "./pages/Questionnaire";
import ISO9001QuestionnairePage from "./pages/ISO9001Questionnaire";
import ISO27701QuestionnairePage from "./pages/ISO27701Questionnaire";
import ISO42001QuestionnairePage from "./pages/ISO42001Questionnaire";
import GDPRQuestionnairePage from "./pages/GDPRQuestionnaire";
import SOC2QuestionnairePage from "./pages/SOC2Questionnaire";
import DPDPQuestionnairePage from "./pages/DPDPQuestionnaire";
import ITAuditQuestionnairePage from "./pages/ITAuditQuestionnaire";
import HealthcareITQuestionnairePage from "./pages/HealthcareITQuestionnaire";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/iso27001-questionnaire" element={<Questionnaire />} />
          <Route path="/iso9001-questionnaire" element={<ISO9001QuestionnairePage />} />
          <Route path="/iso27701-questionnaire" element={<ISO27701QuestionnairePage />} />
          <Route path="/iso42001-questionnaire" element={<ISO42001QuestionnairePage />} />
          <Route path="/gdpr-questionnaire" element={<GDPRQuestionnairePage />} />
          <Route path="/soc2-questionnaire" element={<SOC2QuestionnairePage />} />
          <Route path="/dpdp-questionnaire" element={<DPDPQuestionnairePage />} />
          <Route path="/it-audit-questionnaire" element={<ITAuditQuestionnairePage />} />
          <Route path="/healthcare-it-questionnaire" element={<HealthcareITQuestionnairePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
