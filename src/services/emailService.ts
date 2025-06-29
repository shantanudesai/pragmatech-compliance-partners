import { FormData, ISO9001FormData, ISO27701FormData, ISO42001FormData, GDPRFormData, SOC2FormData, DPDPFormData, ITAuditFormData, HealthcareITFormData } from '@/types/questionnaire';

interface ContactInfo {
  name: string;
  email: string;
  company?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Simple email service using Formspree
export const sendQuestionnaireResponse = async (formData: FormData, contactInfo: ContactInfo) => {
  try {
    // Format the questionnaire data into a readable email format
    const emailBody = `
NEW DISCOVERY QUESTIONNAIRE SUBMISSION
=====================================

CONTACT INFORMATION:
Name: ${contactInfo.name}
Email: ${contactInfo.email}
Company: ${contactInfo.company || 'Not specified'}
Submission Date: ${new Date().toLocaleString()}

=====================================
SECTION A: BUSINESS CONTEXT & SPONSORSHIP
=====================================

1. Why are you pursuing ISO 27001 today?
${formData.implementationReasons.join(', ')}
${formData.otherReason ? `Other: ${formData.otherReason}` : ''}

2. Top 3 business outcomes your ISMS must deliver:
${formData.businessGoals || 'Not provided'}

3. Risk appetite: ${formData.riskAppetite[0] || 'Not specified'}/5

4. Does top management formally sponsor this initiative?
${formData.topManagementSponsorship || 'Not specified'}
${formData.sponsorshipDescription ? `How: ${formData.sponsorshipDescription}` : ''}

=====================================
SECTION B: CURRENT SECURITY STATE
=====================================

5. Current ISMS maturity level: ${formData.ismsMaturity[0] || 'Not specified'}/5

6. Security incidents in the last 12 months:
${formData.securityIncidents || 'Not provided'}

7. Most critical information assets:
${formData.highValueAssets || 'Not provided'}

=====================================
SECTION C: IMPLEMENTATION PLANNING
=====================================

8. Desired ISMS scope: ${formData.desiredScope || 'Not specified'}

9. Target certification timeline: ${formData.targetTimeline || 'Not specified'}

10. Estimated budget range: ${formData.budgetBand || 'Not specified'}

=====================================
SECTION D: ADDITIONAL INFORMATION
=====================================

11. Specific regulatory requirements:
${formData.regulatoryRequirements || 'Not provided'}

12. Additional information or specific concerns:
${formData.additionalInfo || 'Not provided'}

=====================================
END OF QUESTIONNAIRE SUBMISSION
=====================================
    `;

    // Using Formspree's test endpoint - you should replace this with your actual endpoint
    // Go to https://formspree.io/ and create a form, then replace this URL
    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal'; // This is a working test endpoint

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: contactInfo.name,
        email: contactInfo.email,
        _replyto: contactInfo.email,
        _subject: `🔐 Discovery Questionnaire - ${contactInfo.name} (${contactInfo.company || 'Company not specified'})`,
        company: contactInfo.company || 'Not specified',
        message: emailBody,
        
        // Individual fields for easier processing
        implementation_reasons: formData.implementationReasons.join(', '),
        other_reason: formData.otherReason,
        business_goals: formData.businessGoals,
        risk_appetite: formData.riskAppetite[0],
        top_management_sponsorship: formData.topManagementSponsorship,
        sponsorship_description: formData.sponsorshipDescription,
        isms_maturity: formData.ismsMaturity[0],
        security_incidents: formData.securityIncidents,
        high_value_assets: formData.highValueAssets,
        desired_scope: formData.desiredScope,
        target_timeline: formData.targetTimeline,
        budget_band: formData.budgetBand,
        regulatory_requirements: formData.regulatoryRequirements,
        additional_info: formData.additionalInfo
      })
    });

    if (response.ok) {
      return { success: true, message: 'Questionnaire submitted successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
};

// Simple contact form submission
export const sendContactMessage = async (contactData: ContactFormData) => {
  try {
    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal'; // Same endpoint

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: contactData.name,
        email: contactData.email,
        _replyto: contactData.email,
        _subject: `💌 Contact Form Message - ${contactData.name}`,
        message: contactData.message,
        form_type: 'contact_form', // To distinguish from questionnaire submissions
        submission_date: new Date().toLocaleString()
      })
    });

    if (response.ok) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to send message');
    }
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again or email us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
};

// Alternative method that creates a mailto link as backup
export const createMailtoLink = (formData: FormData, contactInfo: ContactInfo) => {
  const subject = encodeURIComponent(`Discovery Questionnaire Submission from ${contactInfo.name}`);
  const body = encodeURIComponent(`
Hi Pragmatech,

I've completed your Discovery Questionnaire. Here are my responses:

Name: ${contactInfo.name}
Email: ${contactInfo.email}
Company: ${contactInfo.company || 'Not specified'}

Please find my detailed responses attached. I'd like to discuss next steps for ISO 27001 implementation.

Best regards,
${contactInfo.name}
  `);
  
  return `mailto:pragmatechcompliancepartners@gmail.com?subject=${subject}&body=${body}`;
};

// ISO 9001 questionnaire email service
export const sendISO9001QuestionnaireResponse = async (formData: ISO9001FormData) => {
  try {
    // Format the questionnaire data into a readable email format
    const emailBody = `
NEW ISO 9001 DISCOVERY QUESTIONNAIRE SUBMISSION
==============================================

CONTACT INFORMATION:
Name: ${formData.contactName}
Email: ${formData.email}
Company: ${formData.companyName}
Job Title: ${formData.jobTitle}
Phone: ${formData.phone || 'Not provided'}
Submission Date: ${new Date().toLocaleString()}

==============================================
ORGANIZATION INFORMATION
==============================================

Company Name: ${formData.companyName}
Industry/Sector: ${formData.industry}
Number of Employees: ${formData.employeeCount}
Number of Locations: ${formData.locations || 'Not provided'}
Annual Revenue: ${formData.annualRevenue || 'Not provided'}

==============================================
CURRENT QMS STATUS
==============================================

Current QMS in place: ${formData.currentQMS}
ISO 9001 Certified: ${formData.isoCertified}
${formData.certificationBody ? `Certification Body: ${formData.certificationBody}` : ''}
${formData.certExpiry ? `Certification Expiry: ${formData.certExpiry}` : ''}
Current Standards: ${formData.currentStandards.join(', ') || 'None specified'}

==============================================
PROJECT OBJECTIVES
==============================================

Primary Goal: ${formData.primaryGoal}
Key Drivers: ${formData.keyDrivers.join(', ') || 'None specified'}
Target Date: ${formData.targetDate || 'Not specified'}

==============================================
CURRENT QUALITY PROCESSES
==============================================

Documentation Level: ${formData.documentationLevel}
Current Processes: ${formData.currentProcesses.join(', ') || 'None specified'}
Quality Measures: ${formData.qualityMeasures.join(', ') || 'None specified'}

==============================================
SERVICE REQUIREMENTS
==============================================

Service Types Needed: ${formData.serviceTypes.join(', ') || 'None specified'}
Delivery Method: ${formData.deliveryMethod}
Budget Range: ${formData.budget}
Project Urgency: ${formData.urgency}

==============================================
CHALLENGES & PAIN POINTS
==============================================

Quality Challenges: ${formData.qualityChallenges.join(', ') || 'None specified'}
Specific Challenges: ${formData.specificChallenges || 'Not provided'}
Previous Failures: ${formData.previousFailures}
${formData.failureReasons ? `Failure Reasons: ${formData.failureReasons}` : ''}

==============================================
ORGANIZATIONAL READINESS
==============================================

Management Commitment: ${formData.managementCommitment}
QMR Status: ${formData.qmrStatus}
Project Team Size: ${formData.projectTeamSize}
Change Readiness: ${formData.changeReadiness}

==============================================
TECHNICAL INFORMATION
==============================================

Product Complexity: ${formData.productComplexity}
Regulatory Requirements: ${formData.regulatoryRequirements}
${formData.regulatoryDetails ? `Regulatory Details: ${formData.regulatoryDetails}` : ''}
Quality Software: ${formData.qualitySoftware}
${formData.softwareDetails ? `Software Details: ${formData.softwareDetails}` : ''}

==============================================
ADDITIONAL INFORMATION
==============================================

Company Address: ${formData.companyAddress || 'Not provided'}
Preferred Contact: ${formData.preferredContact}
Additional Comments: ${formData.additionalComments || 'None'}
Referral Source: ${formData.referralSource}
Newsletter Signup: ${formData.newsletter ? 'Yes' : 'No'}

==============================================
END OF ISO 9001 QUESTIONNAIRE SUBMISSION
==============================================
    `;

    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal';

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.contactName,
        email: formData.email,
        _replyto: formData.email,
        _subject: `🏆 ISO 9001 Discovery Questionnaire - ${formData.contactName} (${formData.companyName})`,
        company: formData.companyName,
        job_title: formData.jobTitle,
        phone: formData.phone,
        message: emailBody,
        form_type: 'iso9001_questionnaire',
        submission_date: new Date().toLocaleString(),
        
        // Individual fields for easier processing
        industry: formData.industry,
        employee_count: formData.employeeCount,
        primary_goal: formData.primaryGoal,
        key_drivers: formData.keyDrivers.join(', '),
        current_qms: formData.currentQMS,
        iso_certified: formData.isoCertified,
        budget_range: formData.budget,
        urgency: formData.urgency,
        service_types: formData.serviceTypes.join(', '),
        quality_challenges: formData.qualityChallenges.join(', '),
        management_commitment: formData.managementCommitment
      })
    });

    if (response.ok) {
      return { success: true, message: 'ISO 9001 questionnaire submitted successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
};

// ISO 27701 Privacy Information Management Discovery Questionnaire
export const sendISO27701QuestionnaireResponse = async (formData: ISO27701FormData) => {
  try {
    const emailBody = `
NEW ISO 27701 PRIVACY INFORMATION MANAGEMENT DISCOVERY QUESTIONNAIRE SUBMISSION
==============================================================================

CONTACT INFORMATION:
Full Name: ${formData.fullName}
Email: ${formData.email}
Company/Organization: ${formData.company}
Job Title: ${formData.jobTitle}
Submission Date: ${new Date().toLocaleString()}

==============================================================================
BUSINESS CONTEXT & PRIVACY DRIVERS
==============================================================================

Primary driver for ISO 27701 implementation: ${formData.primaryDriver}
${formData.otherDriver ? `Other driver: ${formData.otherDriver}` : ''}

Top 3 privacy outcomes your PIMS must deliver:
${formData.privacyOutcomes.join(', ')}
${formData.otherOutcome ? `Other outcome: ${formData.otherOutcome}` : ''}

Current ISO 27001 certification status: ${formData.iso27001Status}
Top management sponsorship: ${formData.managementSponsorship}

==============================================================================
CURRENT PRIVACY POSTURE
==============================================================================

Privacy program maturity level: ${formData.privacyMaturity}
Personal data processing scope: ${formData.dataProcessingScope}
${formData.otherDataScope ? `Other data scope: ${formData.otherDataScope}` : ''}

Geographic data processing locations: ${formData.geographicScope}
${formData.otherGeoScope ? `Other geographic scope: ${formData.otherGeoScope}` : ''}

Current privacy incidents (last 24 months): ${formData.privacyIncidents}

==============================================================================
IMPLEMENTATION REQUIREMENTS
==============================================================================

Desired PIMS scope alignment: ${formData.pimsScope}
Target certification timeline: ${formData.targetTimeline}
Estimated budget range: ${formData.budgetRange}

==============================================================================
ADDITIONAL PRIVACY CONTEXT
==============================================================================

Applicable privacy regulations:
${formData.privacyRegulations.join(', ')}

Data Protection Officer (DPO) status: ${formData.dpoStatus}

Additional information or concerns:
${formData.additionalInfo || 'None provided'}

==============================================================================
END OF ISO 27701 QUESTIONNAIRE SUBMISSION
==============================================================================
    `;

    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal';

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        _replyto: formData.email,
        _subject: `🔒 ISO 27701 Privacy Discovery Questionnaire - ${formData.fullName} (${formData.company})`,
        company: formData.company,
        job_title: formData.jobTitle,
        message: emailBody,
        form_type: 'iso27701_questionnaire',
        submission_date: new Date().toLocaleString()
      })
    });

    if (response.ok) {
      return { success: true, message: 'ISO 27701 questionnaire submitted successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
};

// ISO 42001 AI Management System Discovery Questionnaire
export const sendISO42001QuestionnaireResponse = async (formData: ISO42001FormData) => {
  try {
    const emailBody = `
NEW ISO 42001 AI MANAGEMENT SYSTEM DISCOVERY QUESTIONNAIRE SUBMISSION
=====================================================================

CONTACT INFORMATION:
Full Name: ${formData.fullName}
Email: ${formData.email}
Company/Organization: ${formData.company}
Industry/Sector: ${formData.industry}
Submission Date: ${new Date().toLocaleString()}

=====================================================================
AI BUSINESS CONTEXT
=====================================================================

Primary reason for pursuing ISO 42001: ${formData.primaryReason}
${formData.otherReason ? `Other reason: ${formData.otherReason}` : ''}

Top 3 AI governance objectives:
${formData.aiObjectives.join(', ')}
${formData.otherObjective ? `Other objective: ${formData.otherObjective}` : ''}

AI adoption stage: ${formData.aiAdoptionStage}
Executive sponsorship: ${formData.executiveSponsorship}

=====================================================================
CURRENT AI LANDSCAPE
=====================================================================

AI systems currently in use:
${formData.aiSystems.join(', ')}

AI development approach: ${formData.aiDevelopmentApproach}

AI-related risks of concern:
${formData.aiRisks.join(', ')}

Current AI governance maturity: ${formData.aiGovernanceMaturity}

=====================================================================
IMPLEMENTATION PLANNING
=====================================================================

Desired AIMS scope: ${formData.aimsScope}
Target implementation timeline: ${formData.implementationTimeline}
Estimated budget range: ${formData.budgetRange}

=====================================================================
AI GOVERNANCE REQUIREMENTS
=====================================================================

Specific AI regulations applicable:
${formData.aiRegulations.join(', ')}

Key stakeholders for AI governance:
${formData.keyStakeholders.join(', ')}

AI impact assessment needs:
${formData.impactAssessments.join(', ')}

Additional information or specific AI challenges:
${formData.additionalInfo || 'None provided'}

=====================================================================
END OF ISO 42001 QUESTIONNAIRE SUBMISSION
=====================================================================
    `;

    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal';

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        _replyto: formData.email,
        _subject: `🤖 ISO 42001 AI Governance Discovery Questionnaire - ${formData.fullName} (${formData.company})`,
        company: formData.company,
        industry: formData.industry,
        message: emailBody,
        form_type: 'iso42001_questionnaire',
        submission_date: new Date().toLocaleString()
      })
    });

    if (response.ok) {
      return { success: true, message: 'ISO 42001 questionnaire submitted successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
};

// GDPR Compliance Discovery Questionnaire
export const sendGDPRQuestionnaireResponse = async (formData: GDPRFormData) => {
  try {
    const emailBody = `
NEW GDPR COMPLIANCE DISCOVERY QUESTIONNAIRE SUBMISSION
=====================================================

ORGANIZATION INFORMATION:
Company Name: ${formData.companyName}
Industry/Sector: ${formData.industry}
Number of Employees: ${formData.employeeCount}
Primary Business Location: ${formData.businessLocation}
Annual Revenue: ${formData.annualRevenue || 'Not provided'}
Submission Date: ${new Date().toLocaleString()}

=====================================================
GDPR SCOPE ASSESSMENT
=====================================================

Processes EU residents' personal data: ${formData.euDataProcessing}
Role in data processing: ${formData.processingRole}
Categories of personal data processed:
${formData.dataCategories.join(', ')}
Data processing volume: ${formData.dataVolume}

=====================================================
CURRENT GDPR COMPLIANCE STATUS
=====================================================

GDPR compliance maturity level: ${formData.complianceMaturity}
Data Protection Officer (DPO) status: ${formData.dpoStatus}
Data breach preparedness: ${formData.breachPreparedness}
Data subject rights management: ${formData.rightsManagement}

=====================================================
IMPLEMENTATION PRIORITIES
=====================================================

Primary GDPR compliance goal: ${formData.complianceGoal}
Most urgent GDPR areas to address:
${formData.urgentAreas.join(', ')}
Target compliance timeline: ${formData.targetTimeline}

=====================================================
SERVICE REQUIREMENTS
=====================================================

Support needed:
${formData.supportNeeded.join(', ')}
Estimated budget range: ${formData.budgetRange}

=====================================================
ADDITIONAL INFORMATION
=====================================================

Current data protection challenges:
${formData.dataProtectionChallenges.join(', ')}
International data transfers: ${formData.internationalTransfers}

Additional comments or specific requirements:
${formData.additionalComments || 'None provided'}

=====================================================
END OF GDPR QUESTIONNAIRE SUBMISSION
=====================================================
    `;

    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal';

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.companyName,
        email: formData.contactEmail,
        _replyto: formData.contactEmail,
        _subject: `🇪🇺 GDPR Compliance Discovery Questionnaire - ${formData.companyName}`,
        company: formData.companyName,
        industry: formData.industry,
        message: emailBody,
        form_type: 'gdpr_questionnaire',
        submission_date: new Date().toLocaleString()
      })
    });

    if (response.ok) {
      return { success: true, message: 'GDPR questionnaire submitted successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
};

// SOC 2 Compliance Discovery Questionnaire
export const sendSOC2QuestionnaireResponse = async (formData: SOC2FormData) => {
  try {
    const emailBody = `
NEW SOC 2 COMPLIANCE DISCOVERY QUESTIONNAIRE SUBMISSION
======================================================

ORGANIZATION INFORMATION:
Company Name: ${formData.companyName}
Industry/Sector: ${formData.industry}
Number of Employees: ${formData.employeeCount}
Primary Service Offering: ${formData.primaryService}
Annual Recurring Revenue: ${formData.annualRevenue || 'Not provided'}
Submission Date: ${new Date().toLocaleString()}

======================================================
SOC 2 BUSINESS CONTEXT
======================================================

Primary reason for pursuing SOC 2: ${formData.primaryReason}
${formData.otherReason ? `Other reason: ${formData.otherReason}` : ''}

SOC 2 report type needed: ${formData.reportType}
Target Trust Service Categories:
${formData.trustCategories.join(', ')}
Timeline for completion: ${formData.timeline}

======================================================
CURRENT CONTROL ENVIRONMENT
======================================================

Information security program maturity: ${formData.securityMaturity}
Current compliance certifications:
${formData.currentCertifications.join(', ')}
Data and system environment: ${formData.dataEnvironment}
Customer data handling: ${formData.customerDataHandling}

======================================================
SOC 2 SCOPE PLANNING
======================================================

In-scope systems and services:
${formData.inScopeSystems.join(', ')}
Geographic scope: ${formData.geographicScope}
Third-party service providers: ${formData.thirdPartyProviders}

======================================================
IMPLEMENTATION SUPPORT NEEDS
======================================================

SOC 2 preparation support required:
${formData.supportRequired.join(', ')}
Internal resources available: ${formData.internalResources}
Estimated budget range: ${formData.budgetRange}

======================================================
ADDITIONAL REQUIREMENTS
======================================================

Audit firm preferences: ${formData.auditFirmPreference}
Specific SOC 2 challenges or concerns:
${formData.soc2Challenges.join(', ')}

How did you hear about our SOC 2 services: ${formData.referralSource}
${formData.otherReferral ? `Other referral: ${formData.otherReferral}` : ''}

Additional comments or requirements:
${formData.additionalComments || 'None provided'}

======================================================
END OF SOC 2 QUESTIONNAIRE SUBMISSION
======================================================
    `;

    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal';

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.companyName,
        email: formData.contactEmail,
        _replyto: formData.contactEmail,
        _subject: `⚡ SOC 2 Compliance Discovery Questionnaire - ${formData.companyName}`,
        company: formData.companyName,
        industry: formData.industry,
        message: emailBody,
        form_type: 'soc2_questionnaire',
        submission_date: new Date().toLocaleString()
      })
    });

    if (response.ok) {
      return { success: true, message: 'SOC 2 questionnaire submitted successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
};

// India DPDP Act 2023 Compliance Discovery Questionnaire
export const sendDPDPQuestionnaireResponse = async (formData: DPDPFormData) => {
  try {
    const emailBody = `
NEW INDIA DPDP ACT 2023 COMPLIANCE DISCOVERY QUESTIONNAIRE SUBMISSION
====================================================================

ORGANIZATION INFORMATION:
Company Name: ${formData.companyName}
Industry/Sector: ${formData.industry}
Business Type: ${formData.businessType}
${formData.otherBusinessType ? `Other business type: ${formData.otherBusinessType}` : ''}
Number of Employees: ${formData.employeeCount}
Annual Revenue: ${formData.annualRevenue || 'Not provided'}
Submission Date: ${new Date().toLocaleString()}

====================================================================
DPDP ACT APPLICABILITY
====================================================================

Processes digital personal data of Indian residents: ${formData.indianDataProcessing}
Role in personal data processing: ${formData.processingRole}
Types of personal data processed:
${formData.dataTypes.join(', ')}
Data processing volume and risk assessment: ${formData.processingVolume}

====================================================================
CURRENT DPDP COMPLIANCE STATUS
====================================================================

DPDP Act compliance maturity: ${formData.complianceMaturity}
Data Protection Officer (DPO) status: ${formData.dpoStatus}
Consent management status: ${formData.consentManagement}
Data subject rights management: ${formData.rightsManagement}

====================================================================
IMPLEMENTATION REQUIREMENTS
====================================================================

Primary DPDP compliance objectives:
${formData.complianceObjectives.join(', ')}
Most critical DPDP areas to address:
${formData.criticalAreas.join(', ')}
Target compliance timeline: ${formData.targetTimeline}

====================================================================
SERVICE REQUIREMENTS
====================================================================

DPDP compliance support needed:
${formData.supportNeeded.join(', ')}
Cross-border data transfer requirements: ${formData.transferRequirements}
Estimated budget range: ${formData.budgetRange}

====================================================================
ADDITIONAL CONTEXT
====================================================================

Industry-specific data protection considerations:
${formData.industryConsiderations.join(', ')}

Current data protection challenges:
${formData.dataProtectionChallenges.join(', ')}

How did you hear about our DPDP services: ${formData.referralSource}
${formData.otherReferral ? `Other referral: ${formData.otherReferral}` : ''}

Additional information or specific concerns:
${formData.additionalInfo || 'None provided'}

====================================================================
END OF DPDP ACT QUESTIONNAIRE SUBMISSION
====================================================================
    `;

    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal';

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.companyName,
        email: formData.contactEmail,
        _replyto: formData.contactEmail,
        _subject: `🇮🇳 India DPDP Act 2023 Discovery Questionnaire - ${formData.companyName}`,
        company: formData.companyName,
        industry: formData.industry,
        message: emailBody,
        form_type: 'dpdp_questionnaire',
        submission_date: new Date().toLocaleString()
      })
    });

    if (response.ok) {
      return { success: true, message: 'DPDP Act questionnaire submitted successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
};

// IT Audit and Assurance Services Discovery Questionnaire
export const sendITAuditQuestionnaireResponse = async (formData: ITAuditFormData) => {
  try {
    const emailBody = `
NEW IT AUDIT AND ASSURANCE SERVICES DISCOVERY QUESTIONNAIRE SUBMISSION
======================================================================

ORGANIZATION INFORMATION:
Company Name: ${formData.companyName}
Industry/Sector: ${formData.industry}
Organization Type: ${formData.organizationType}
${formData.otherOrgType ? `Other organization type: ${formData.otherOrgType}` : ''}
Number of Employees: ${formData.employeeCount}
Annual Revenue: ${formData.annualRevenue || 'Not provided'}
Submission Date: ${new Date().toLocaleString()}

======================================================================
IT AUDIT REQUIREMENTS
======================================================================

Type of IT audit needed: ${formData.auditType}
${formData.otherAuditType ? `Other audit type: ${formData.otherAuditType}` : ''}

Primary driver for IT audit: ${formData.primaryDriver}
Audit scope and focus areas:
${formData.auditScope.join(', ')}
Target compliance frameworks:
${formData.complianceFrameworks.join(', ')}

======================================================================
CURRENT IT ENVIRONMENT
======================================================================

IT infrastructure complexity: ${formData.infrastructureComplexity}
Technology environment: ${formData.technologyEnvironment}
IT governance maturity: ${formData.itGovernanceMaturity}
Previous IT audit experience: ${formData.previousAuditExperience}

======================================================================
AUDIT SCOPE AND TIMELINE
======================================================================

Desired audit depth: ${formData.auditDepth}
Critical systems in scope:
${formData.criticalSystems.join(', ')}
Audit timeline requirements: ${formData.auditTimeline}

======================================================================
SERVICE REQUIREMENTS
======================================================================

IT audit services needed:
${formData.auditServices.join(', ')}
Industry-specific audit considerations:
${formData.industryConsiderations.join(', ')}
Internal audit collaboration: ${formData.internalAuditCollaboration}

======================================================================
ADDITIONAL REQUIREMENTS
======================================================================

Audit reporting preferences:
${formData.reportingPreferences.join(', ')}
Estimated budget range: ${formData.budgetRange}
Key stakeholders for audit:
${formData.keyStakeholders.join(', ')}

How did you hear about our IT audit services: ${formData.referralSource}
${formData.otherReferral ? `Other referral: ${formData.otherReferral}` : ''}

Specific IT audit concerns or focus areas:
${formData.auditConcerns || 'None provided'}

======================================================================
END OF IT AUDIT QUESTIONNAIRE SUBMISSION
======================================================================
    `;

    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal';

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.companyName,
        email: formData.contactEmail,
        _replyto: formData.contactEmail,
        _subject: `💻 IT Audit & Assurance Discovery Questionnaire - ${formData.companyName}`,
        company: formData.companyName,
        industry: formData.industry,
        message: emailBody,
        form_type: 'it_audit_questionnaire',
        submission_date: new Date().toLocaleString()
      })
    });

    if (response.ok) {
      return { success: true, message: 'IT Audit questionnaire submitted successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
};

// Healthcare IT Compliance (HIPAA & HITRUST) Discovery Questionnaire
export const sendHealthcareITQuestionnaireResponse = async (formData: HealthcareITFormData) => {
  try {
    const emailBody = `
NEW HEALTHCARE IT COMPLIANCE (HIPAA & HITRUST) DISCOVERY QUESTIONNAIRE SUBMISSION
=================================================================================

ORGANIZATION INFORMATION:
Organization Name: ${formData.organizationName}
Healthcare Sector: ${formData.healthcareSector}
${formData.otherSector ? `Other sector: ${formData.otherSector}` : ''}
Organization Size: ${formData.organizationSize}
Annual Revenue: ${formData.annualRevenue || 'Not provided'}
Submission Date: ${new Date().toLocaleString()}

=================================================================================
HIPAA COMPLIANCE CONTEXT
=================================================================================

Role under HIPAA: ${formData.hipaaRole}
Types of PHI handled:
${formData.phiTypes.join(', ')}
Primary HIPAA compliance driver: ${formData.complianceDriver}
Current HIPAA compliance status: ${formData.hipaaStatus}

=================================================================================
HITRUST ASSESSMENT INTEREST
=================================================================================

HITRUST certification goal: ${formData.hitrustGoal}
HITRUST readiness level: ${formData.hitrustReadiness}
HITRUST business drivers:
${formData.hitrustDrivers.join(', ')}

=================================================================================
CURRENT SECURITY AND COMPLIANCE POSTURE
=================================================================================

Information security program maturity: ${formData.securityMaturity}
Current healthcare compliance certifications:
${formData.currentCertifications.join(', ')}
Recent security incidents: ${formData.securityIncidents}
Third-party risk management: ${formData.vendorManagement}

=================================================================================
IMPLEMENTATION AND SUPPORT NEEDS
=================================================================================

HIPAA compliance support needed:
${formData.hipaaSupport.join(', ')}
HITRUST support services needed:
${formData.hitrustSupport.join(', ')}
Implementation timeline: ${formData.implementationTimeline}

=================================================================================
TECHNICAL ENVIRONMENT
=================================================================================

Technology infrastructure: ${formData.technologyInfrastructure}
Key healthcare systems:
${formData.healthcareSystems.join(', ')}
Estimated budget range: ${formData.budgetRange}

=================================================================================
ADDITIONAL INFORMATION
=================================================================================

Specific healthcare compliance challenges:
${formData.complianceChallenges.join(', ')}
State-specific requirements: ${formData.stateRequirements}

How did you hear about our healthcare compliance services: ${formData.referralSource}
${formData.otherReferral ? `Other referral: ${formData.otherReferral}` : ''}

Additional healthcare compliance concerns or requirements:
${formData.additionalConcerns || 'None provided'}

=================================================================================
END OF HEALTHCARE IT COMPLIANCE QUESTIONNAIRE SUBMISSION
=================================================================================
    `;

    const formspreeEndpoint = 'https://formspree.io/f/xwpbapal';

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.organizationName,
        email: formData.contactEmail,
        _replyto: formData.contactEmail,
        _subject: `🏥 Healthcare IT Compliance Discovery Questionnaire - ${formData.organizationName}`,
        organization: formData.organizationName,
        healthcare_sector: formData.healthcareSector,
        message: emailBody,
        form_type: 'healthcare_it_questionnaire',
        submission_date: new Date().toLocaleString()
      })
    });

    if (response.ok) {
      return { success: true, message: 'Healthcare IT Compliance questionnaire submitted successfully!' };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com',
      error 
    };
  }
}; 