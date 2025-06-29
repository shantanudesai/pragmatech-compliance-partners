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
  
  // Additional fields
  consent: boolean;
}

// ISO 9001 Questionnaire Types
export interface ISO9001FormData {
  // Organization Information
  companyName: string;
  industry: string;
  employeeCount: string;
  locations: number;
  annualRevenue: string;
  
  // Current QMS Status
  currentQMS: string;
  isoCertified: string;
  certificationBody: string;
  certExpiry: string;
  currentStandards: string[];
  
  // Project Objectives
  primaryGoal: string;
  keyDrivers: string[];
  targetDate: string;
  
  // Current Quality Processes
  documentationLevel: string;
  currentProcesses: string[];
  qualityMeasures: string[];
  
  // Service Requirements
  serviceTypes: string[];
  deliveryMethod: string;
  budget: string;
  urgency: string;
  
  // Challenges & Pain Points
  qualityChallenges: string[];
  specificChallenges: string;
  previousFailures: string;
  failureReasons: string;
  
  // Organizational Readiness
  managementCommitment: string;
  qmrStatus: string;
  projectTeamSize: string;
  changeReadiness: string;
  
  // Technical Information
  productComplexity: string;
  regulatoryRequirements: string;
  regulatoryDetails: string;
  qualitySoftware: string;
  softwareDetails: string;
  
  // Contact Information
  contactName: string;
  jobTitle: string;
  email: string;
  phone: string;
  companyAddress: string;
  preferredContact: string;
  
  // Additional Information
  additionalComments: string;
  referralSource: string;
  newsletter: boolean;
  consent: boolean;
}

// ISO 27701 Privacy Information Management Discovery Questionnaire
export interface ISO27701FormData {
  // Contact Information
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  
  // Business Context & Privacy Drivers
  primaryDriver: string;
  otherDriver: string;
  privacyOutcomes: string[];
  otherOutcome: string;
  iso27001Status: string;
  managementSponsorship: string;
  
  // Current Privacy Posture
  privacyMaturity: string;
  dataProcessingScope: string;
  otherDataScope: string;
  geographicScope: string;
  otherGeoScope: string;
  privacyIncidents: string;
  
  // Implementation Requirements
  pimsScope: string;
  targetTimeline: string;
  budgetRange: string;
  
  // Additional Privacy Context
  privacyRegulations: string[];
  dpoStatus: string;
  additionalInfo: string;
  contactEmail: string;
}

// ISO 42001 AI Management System Discovery Questionnaire
export interface ISO42001FormData {
  // Contact Information
  fullName: string;
  email: string;
  company: string;
  industry: string;
  
  // A. AI Business Context
  primaryReason: string;
  primaryReasonOther: string;
  aiGovernanceObjectives: string[];
  aiGovernanceObjectivesOther: string;
  aiAdoptionStage: string;
  executiveSponsorship: string;
  
  // B. Current AI Landscape
  aiSystemsInUse: string[];
  aiDevelopmentApproach: string;
  aiRisksConcerns: string[];
  currentAiGovernanceMaturity: string;
  
  // C. Implementation Planning
  desiredAimsScope: string;
  targetImplementationTimeline: string;
  estimatedBudget: string;
  
  // D. AI Governance Requirements
  specificAiRegulations: string[];
  keyStakeholders: string[];
  aiImpactAssessmentNeeds: string[];
  additionalInformation: string;
  
  // Contact
  contactEmail: string;
}

// GDPR Compliance Discovery Questionnaire
export interface GDPRFormData {
  // Organization Information
  companyName: string;
  industry: string;
  employeeCount: string;
  businessLocation: string;
  annualRevenue: string;
  contactEmail: string;
  
  // GDPR Scope Assessment
  euDataProcessing: string;
  processingRole: string;
  dataCategories: string[];
  dataVolume: string;
  
  // Current GDPR Compliance Status
  complianceMaturity: string;
  dpoStatus: string;
  breachPreparedness: string;
  rightsManagement: string;
  
  // Implementation Priorities
  complianceGoal: string;
  urgentAreas: string[];
  targetTimeline: string;
  
  // Service Requirements
  supportNeeded: string[];
  budgetRange: string;
  
  // Additional Information
  dataProtectionChallenges: string[];
  internationalTransfers: string;
  additionalComments: string;
}

// SOC 2 Compliance Discovery Questionnaire
export interface SOC2FormData {
  // Organization Information
  companyName: string;
  industry: string;
  employeeCount: string;
  primaryService: string;
  annualRevenue: string;
  contactEmail: string;
  
  // SOC 2 Business Context
  primaryReason: string;
  otherReason: string;
  reportType: string;
  trustCategories: string[];
  timeline: string;
  
  // Current Control Environment
  securityMaturity: string;
  currentCertifications: string[];
  dataEnvironment: string;
  customerDataHandling: string;
  
  // SOC 2 Scope Planning
  inScopeSystems: string[];
  geographicScope: string;
  thirdPartyProviders: string;
  
  // Implementation Support Needs
  supportRequired: string[];
  internalResources: string;
  budgetRange: string;
  
  // Additional Requirements
  auditFirmPreference: string;
  soc2Challenges: string[];
  referralSource: string;
  otherReferral: string;
  additionalComments: string;
}

// India DPDP Act 2023 Compliance Discovery Questionnaire
export interface DPDPFormData {
  // Organization Information
  companyName: string;
  industry: string;
  businessType: string;
  otherBusinessType: string;
  employeeCount: string;
  annualRevenue: string;
  contactEmail: string;
  
  // DPDP Act Applicability
  indianDataProcessing: string;
  processingRole: string;
  dataTypes: string[];
  processingVolume: string;
  
  // Current DPDP Compliance Status
  complianceMaturity: string;
  dpoStatus: string;
  consentManagement: string;
  rightsManagement: string;
  
  // Implementation Requirements
  complianceObjectives: string[];
  criticalAreas: string[];
  targetTimeline: string;
  
  // Service Requirements
  supportNeeded: string[];
  transferRequirements: string;
  budgetRange: string;
  
  // Additional Context
  industryConsiderations: string[];
  dataProtectionChallenges: string[];
  referralSource: string;
  otherReferral: string;
  additionalInfo: string;
}

// IT Audit and Assurance Services Discovery Questionnaire
export interface ITAuditFormData {
  // Organization Information
  companyName: string;
  industry: string;
  organizationType: string;
  otherOrgType: string;
  employeeCount: string;
  annualRevenue: string;
  contactEmail: string;
  
  // IT Audit Requirements
  auditType: string;
  otherAuditType: string;
  primaryDriver: string;
  auditScope: string[];
  complianceFrameworks: string[];
  
  // Current IT Environment
  infrastructureComplexity: string;
  technologyEnvironment: string;
  itGovernanceMaturity: string;
  previousAuditExperience: string;
  
  // Audit Scope and Timeline
  auditDepth: string;
  criticalSystems: string[];
  auditTimeline: string;
  
  // Service Requirements
  auditServices: string[];
  industryConsiderations: string[];
  internalAuditCollaboration: string;
  
  // Additional Requirements
  reportingPreferences: string[];
  budgetRange: string;
  keyStakeholders: string[];
  referralSource: string;
  otherReferral: string;
  auditConcerns: string;
}

// Healthcare IT Compliance (HIPAA & HITRUST) Discovery Questionnaire
export interface HealthcareITFormData {
  // Organization Information
  organizationName: string;
  healthcareSector: string;
  otherSector: string;
  organizationSize: string;
  annualRevenue: string;
  contactEmail: string;
  
  // HIPAA Compliance Context
  hipaaRole: string;
  phiTypes: string[];
  complianceDriver: string;
  hipaaStatus: string;
  
  // HITRUST Assessment Interest
  hitrustGoal: string;
  hitrustReadiness: string;
  hitrustDrivers: string[];
  
  // Current Security and Compliance Posture
  securityMaturity: string;
  currentCertifications: string[];
  securityIncidents: string;
  vendorManagement: string;
  
  // Implementation and Support Needs
  hipaaSupport: string[];
  hitrustSupport: string[];
  implementationTimeline: string;
  
  // Technical Environment
  technologyInfrastructure: string;
  healthcareSystems: string[];
  budgetRange: string;
  
  // Additional Information
  complianceChallenges: string[];
  stateRequirements: string;
  referralSource: string;
  otherReferral: string;
  additionalConcerns: string;
} 