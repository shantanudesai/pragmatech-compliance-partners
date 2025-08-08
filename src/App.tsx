import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/blog/[slug]";
import ISO27001Service from "./pages/services/ISO27001Service";
import ISO27701Service from "./pages/services/ISO27701Service";
import ISO42001Service from "./pages/services/ISO42001Service";
import SOC2Service from "./pages/services/SOC2Service";
import GDPRService from "./pages/services/GDPRService";
import DPDPService from "./pages/services/DPDPService";
import ITAuditService from "./pages/services/ITAuditService";
import HealthcareITService from "./pages/services/HealthcareITService";
import ISO9001Service from "./pages/services/ISO9001Service";
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
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/iso-27001" element={<ISO27001Service />} />
          <Route path="/services/iso-27701" element={<ISO27701Service />} />
          <Route path="/services/iso-42001" element={<ISO42001Service />} />
          <Route path="/services/soc-2" element={<SOC2Service />} />
          <Route path="/services/gdpr" element={<GDPRService />} />
          <Route path="/services/dpdp-act-2023" element={<DPDPService />} />
          <Route path="/services/it-audit-assurance" element={<ITAuditService />} />
          <Route path="/services/healthcare-it-compliance" element={<HealthcareITService />} />
          <Route path="/services/iso-9001" element={<ISO9001Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
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
