import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sendISO42001QuestionnaireResponse } from '@/services/emailService';
import { ISO42001FormData } from '@/types/questionnaire';

const ISO42001Questionnaire: React.FC = () => {
  const [formData, setFormData] = useState<ISO42001FormData>({
    // Contact Information
    fullName: '',
    email: '',
    company: '',
    industry: '',
    
    // A. AI Business Context
    primaryReason: '',
    primaryReasonOther: '',
    aiGovernanceObjectives: [],
    aiGovernanceObjectivesOther: '',
    aiAdoptionStage: '',
    executiveSponsorship: '',
    
    // B. Current AI Landscape
    aiSystemsInUse: [],
    aiDevelopmentApproach: '',
    aiRisksConcerns: [],
    currentAiGovernanceMaturity: '',
    
    // C. Implementation Planning
    desiredAimsScope: '',
    targetImplementationTimeline: '',
    estimatedBudget: '',
    
    // D. AI Governance Requirements
    specificAiRegulations: [],
    keyStakeholders: [],
    aiImpactAssessmentNeeds: [],
    additionalInformation: '',
    
    // Contact consent
    contactEmail: ''
  });

  const [consent, setConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleInputChange = (name: keyof ISO42001FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof ISO42001FormData, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = (prev[name] as string[]) || [];
      if (checked) {
        return { ...prev, [name]: [...currentArray, value] };
      } else {
        return { ...prev, [name]: currentArray.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation - only check for fields that exist and are required
    if (!formData.fullName || !formData.email || !formData.industry) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    // Validate consent
    if (!consent) {
      setSubmitStatus({ type: 'error', message: 'Please provide consent to be contacted regarding this inquiry.' });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle' });
    
    try {
      // Set contactEmail to email value for backend compatibility
      const submissionData = { ...formData, contactEmail: formData.email };
      await sendISO42001QuestionnaireResponse(submissionData);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you! Your questionnaire has been submitted successfully. We\'ll be in touch soon.' 
      });
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'There was an error submitting your questionnaire. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success screen if submitted successfully
  if (submitStatus.type === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600">{submitStatus.message}</p>
            </div>
            <Button 
              onClick={() => window.location.href = '/services'}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Return to Services
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
            <CardTitle className="text-3xl font-bold text-center">
              ISO 42001 AI Management System Discovery Questionnaire
            </CardTitle>
            <p className="text-center text-blue-100 mt-2">
              Help us understand your AI governance requirements
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            {submitStatus.type === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry/Sector *</Label>
                    <Input
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* A. AI Business Context */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">A. AI Business Context</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">1. Primary reason for pursuing ISO 42001?</Label>
                    <RadioGroup
                      value={formData.primaryReason}
                      onValueChange={(value) => handleInputChange('primaryReason', value)}
                      className="mt-2"
                    >
                      {[
                        'AI governance framework requirement',
                        'Risk management for AI systems',
                        'Customer/regulatory requirement',
                        'Competitive advantage',
                        'Ethical AI commitment',
                        'Other'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`primaryReason-${option}`} />
                          <Label htmlFor={`primaryReason-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {formData.primaryReason === 'Other' && (
                      <Input
                        className="mt-2"
                        placeholder="Please specify"
                        value={formData.primaryReasonOther}
                        onChange={(e) => handleInputChange('primaryReasonOther', e.target.value)}
                      />
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium">2. Top 3 AI governance objectives</Label>
                    <div className="mt-2 space-y-2">
                      {[
                        'Ethical AI development',
                        'Risk mitigation and compliance',
                        'Stakeholder trust building',
                        'Innovation within safe boundaries',
                        'Regulatory preparation'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`aiGovernanceObjectives-${option}`}
                            checked={formData.aiGovernanceObjectives.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('aiGovernanceObjectives', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`aiGovernanceObjectives-${option}`}>{option}</Label>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="aiGovernanceObjectives-Other"
                          checked={formData.aiGovernanceObjectives.includes('Other')}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange('aiGovernanceObjectives', 'Other', checked as boolean)
                          }
                        />
                        <Label htmlFor="aiGovernanceObjectives-Other">Other:</Label>
                        <Input
                          className="flex-1"
                          placeholder="Please specify"
                          value={formData.aiGovernanceObjectivesOther}
                          onChange={(e) => handleInputChange('aiGovernanceObjectivesOther', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium">3. AI adoption stage in your organization</Label>
                    <RadioGroup
                      value={formData.aiAdoptionStage}
                      onValueChange={(value) => handleInputChange('aiAdoptionStage', value)}
                      className="mt-2"
                    >
                      {[
                        'Exploring AI potential',
                        'Pilot AI projects',
                        'Active AI deployment',
                        'Mature AI operations',
                        'AI-first organization'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`aiAdoptionStage-${option}`} />
                          <Label htmlFor={`aiAdoptionStage-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">4. Executive sponsorship for AI governance</Label>
                    <RadioGroup
                      value={formData.executiveSponsorship}
                      onValueChange={(value) => handleInputChange('executiveSponsorship', value)}
                      className="mt-2"
                    >
                      {[
                        'Board-level commitment',
                        'C-suite sponsorship',
                        'Department-level support',
                        'Individual initiative',
                        'No formal sponsorship'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`executiveSponsorship-${option}`} />
                          <Label htmlFor={`executiveSponsorship-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* B. Current AI Landscape */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">B. Current AI Landscape</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">5. AI systems currently in use</Label>
                    <div className="mt-2 space-y-2">
                      {[
                        'Machine learning models',
                        'Natural language processing',
                        'Computer vision systems',
                        'Predictive analytics',
                        'Generative AI applications',
                        'Robotic process automation',
                        'No AI systems yet'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`aiSystemsInUse-${option}`}
                            checked={formData.aiSystemsInUse.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('aiSystemsInUse', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`aiSystemsInUse-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium">6. AI development approach</Label>
                    <RadioGroup
                      value={formData.aiDevelopmentApproach}
                      onValueChange={(value) => handleInputChange('aiDevelopmentApproach', value)}
                      className="mt-2"
                    >
                      {[
                        'In-house development',
                        'Third-party AI solutions',
                        'Hybrid approach',
                        'AI-as-a-Service platforms',
                        'Partner/vendor dependent'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`aiDevelopmentApproach-${option}`} />
                          <Label htmlFor={`aiDevelopmentApproach-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">7. AI-related risks you're most concerned about</Label>
                    <div className="mt-2 space-y-2">
                      {[
                        'Algorithmic bias and fairness',
                        'Data privacy and security',
                        'Regulatory non-compliance',
                        'Operational reliability',
                        'Ethical considerations',
                        'Transparency and explainability'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`aiRisksConcerns-${option}`}
                            checked={formData.aiRisksConcerns.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('aiRisksConcerns', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`aiRisksConcerns-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium">8. Current AI governance maturity</Label>
                    <RadioGroup
                      value={formData.currentAiGovernanceMaturity}
                      onValueChange={(value) => handleInputChange('currentAiGovernanceMaturity', value)}
                      className="mt-2"
                    >
                      {[
                        '1 - No AI governance',
                        '2 - Ad-hoc AI practices',
                        '3 - Basic AI policies',
                        '4 - Structured AI management',
                        '5 - Comprehensive AI governance'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`currentAiGovernanceMaturity-${option}`} />
                          <Label htmlFor={`currentAiGovernanceMaturity-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* C. Implementation Planning */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">C. Implementation Planning</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">9. Desired AIMS scope</Label>
                    <RadioGroup
                      value={formData.desiredAimsScope}
                      onValueChange={(value) => handleInputChange('desiredAimsScope', value)}
                      className="mt-2"
                    >
                      {[
                        'All AI systems organization-wide',
                        'Specific business units',
                        'High-risk AI applications only',
                        'Customer-facing AI systems',
                        'Core AI product offerings'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`desiredAimsScope-${option}`} />
                          <Label htmlFor={`desiredAimsScope-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">10. Target implementation timeline</Label>
                    <RadioGroup
                      value={formData.targetImplementationTimeline}
                      onValueChange={(value) => handleInputChange('targetImplementationTimeline', value)}
                      className="mt-2"
                    >
                      {[
                        'Within 6 months',
                        '6-12 months',
                        '12-18 months',
                        '18+ months',
                        'Timeline flexible'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`targetImplementationTimeline-${option}`} />
                          <Label htmlFor={`targetImplementationTimeline-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">11. Estimated budget range (USD)</Label>
                    <RadioGroup
                      value={formData.estimatedBudget}
                      onValueChange={(value) => handleInputChange('estimatedBudget', value)}
                      className="mt-2"
                    >
                      {[
                        'Under $30,000',
                        '$30,000 - $75,000',
                        '$75,000 - $150,000',
                        '$150,000+',
                        'Budget under discussion'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`estimatedBudget-${option}`} />
                          <Label htmlFor={`estimatedBudget-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* D. AI Governance Requirements */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">D. AI Governance Requirements</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">12. Specific AI regulations applicable</Label>
                    <div className="mt-2 space-y-2">
                      {[
                        'EU AI Act preparation',
                        'Sector-specific AI rules',
                        'Contractual AI requirements',
                        'Industry AI standards',
                        'No specific regulations yet'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`specificAiRegulations-${option}`}
                            checked={formData.specificAiRegulations.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('specificAiRegulations', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`specificAiRegulations-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium">13. Key stakeholders for AI governance</Label>
                    <div className="mt-2 space-y-2">
                      {[
                        'Data scientists/AI teams',
                        'Risk management',
                        'Legal and compliance',
                        'Product management',
                        'Customer success',
                        'External partners'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`keyStakeholders-${option}`}
                            checked={formData.keyStakeholders.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('keyStakeholders', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`keyStakeholders-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium">14. AI impact assessment needs</Label>
                    <div className="mt-2 space-y-2">
                      {[
                        'Bias and fairness testing',
                        'Explainability requirements',
                        'Privacy impact on AI',
                        'Safety and reliability',
                        'Environmental impact',
                        'Social impact considerations'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`aiImpactAssessmentNeeds-${option}`}
                            checked={formData.aiImpactAssessmentNeeds.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('aiImpactAssessmentNeeds', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`aiImpactAssessmentNeeds-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalInformation" className="text-base font-medium">
                      15. Additional information or specific AI challenges
                    </Label>
                    <Textarea
                      id="additionalInformation"
                      className="mt-2"
                      rows={4}
                      placeholder="Please describe unique AI governance needs, integration requirements, or concerns..."
                      value={formData.additionalInformation}
                      onChange={(e) => handleInputChange('additionalInformation', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                    required
                  />
                  <Label htmlFor="consent" className="text-sm">
                    I consent to being contacted regarding this inquiry *
                  </Label>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit AI Management Discovery Questionnaire'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ISO42001Questionnaire; 