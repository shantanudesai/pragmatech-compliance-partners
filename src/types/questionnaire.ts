export interface FormData {
  // Section A
  implementationReasons: string[];
  otherReason: string;
  businessGoals: string;
  riskAppetite: number[];
  topManagementSponsorship: string;
  sponsorshipDescription: string;
  
  // Section B
  ismsMaturity: number[];
  frameworks: Record<string, { selected: boolean; lastReview: string }>;
  securityIncidents: string;
  highValueAssets: string;
  
  // Section C
  desiredScope: string;
  scopeSpecification: string;
  targetTimeline: string;
  budgetBand: string;
  constraints: string;
  successCriteria: string;
  
  // Section D
  regulatoryRequirements: string;
  thirdPartyProviders: string;
  additionalInfo: string;
} 