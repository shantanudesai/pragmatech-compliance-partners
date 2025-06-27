import { FormData } from '@/types/questionnaire';

interface ContactInfo {
  name: string;
  email: string;
  company?: string;
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
    const formspreeEndpoint = 'https://formspree.io/f/xdkowwgz'; // This is a working test endpoint

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