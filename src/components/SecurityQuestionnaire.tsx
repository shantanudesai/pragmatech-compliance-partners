import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import QuestionnaireHeader from './questionnaire/QuestionnaireHeader';
import SectionA from './questionnaire/SectionA';
import { FormData } from '@/types/questionnaire';
import { sendQuestionnaireResponse } from '@/services/emailService';
import { useNavigate } from 'react-router-dom';

const SecurityQuestionnaire = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  
  // Contact information state
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    company: ''
  });

  const [formData, setFormData] = useState<FormData>({
    // Section A
    implementationReasons: [],
    otherReason: '',
    businessGoals: '',
    riskAppetite: [3],
    topManagementSponsorship: '',
    sponsorshipDescription: '',
    
    // Section B
    ismsMaturity: [2],
    frameworks: {},
    securityIncidents: '',
    highValueAssets: '',
    
    // Section C
    desiredScope: '',
    scopeSpecification: '',
    targetTimeline: '',
    budgetBand: '',
    constraints: '',
    successCriteria: '',
    
    // Section D
    regulatoryRequirements: '',
    thirdPartyProviders: '',
    additionalInfo: ''
  });

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      implementationReasons: checked 
        ? [...prev.implementationReasons, value]
        : prev.implementationReasons.filter(item => item !== value)
    }));
  };

  const handleFrameworkChange = (framework: string, checked: boolean, lastReview: string = '') => {
    setFormData(prev => ({
      ...prev,
      frameworks: {
        ...prev.frameworks,
        [framework]: checked ? { selected: true, lastReview } : { selected: false, lastReview: '' }
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate contact information
    if (!contactInfo.name || !contactInfo.email) {
      setSubmitStatus({ type: 'error', message: 'Please fill in your name and email address.' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactInfo.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendQuestionnaireResponse(formData, contactInfo);
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your questionnaire has been submitted successfully. We will email you a personalized risk-gap executive summary within 24 hours.' 
        });
        
        // Navigate to a success page or reset form after a delay
        setTimeout(() => {
          navigate('/contact');
        }, 3000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit questionnaire. Please try again or contact us directly at pragmatechcompliancepartners@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-8 py-12">
            <QuestionnaireHeader />

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Contact Information Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-base font-medium text-gray-900 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="contact-name"
                        type="text"
                        placeholder="Your full name"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="text-base font-medium text-gray-900 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-company" className="text-base font-medium text-gray-900 mb-2 block">
                      Company/Organization
                    </Label>
                    <Input
                      id="contact-company"
                      type="text"
                      placeholder="Your company name"
                      value={contactInfo.company}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                </CardContent>
              </Card>

              <SectionA 
                formData={formData} 
                setFormData={setFormData} 
                handleCheckboxChange={handleCheckboxChange} 
              />
              
              {/* Section B - Current Security State */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    B. Current Security State
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      5. Current ISMS maturity level
                    </Label>
                    <RadioGroup
                      value={formData.ismsMaturity[0]?.toString()}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, ismsMaturity: [parseInt(value)] }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="maturity-1" />
                        <Label htmlFor="maturity-1">1 - No formal security program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="maturity-2" />
                        <Label htmlFor="maturity-2">2 - Basic security policies</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="maturity-3" />
                        <Label htmlFor="maturity-3">3 - Structured security program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4" id="maturity-4" />
                        <Label htmlFor="maturity-4">4 - Managed security program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5" id="maturity-5" />
                        <Label htmlFor="maturity-5">5 - Optimized security program</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="security-incidents" className="text-base font-medium text-gray-900 mb-2 block">
                      6. Security incidents in the last 12 months
                    </Label>
                    <Textarea
                      id="security-incidents"
                      placeholder="Describe any significant security incidents or breaches"
                      value={formData.securityIncidents}
                      onChange={(e) => setFormData(prev => ({ ...prev, securityIncidents: e.target.value }))}
                      className="min-h-[80px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="high-value-assets" className="text-base font-medium text-gray-900 mb-2 block">
                      7. Most critical information assets
                    </Label>
                    <Textarea
                      id="high-value-assets"
                      placeholder="List your most valuable information assets (customer data, IP, financial records, etc.)"
                      value={formData.highValueAssets}
                      onChange={(e) => setFormData(prev => ({ ...prev, highValueAssets: e.target.value }))}
                      className="min-h-[80px]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section C - Implementation Planning */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    C. Implementation Planning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="scope" className="text-base font-medium text-gray-900 mb-2 block">
                      8. Desired ISMS scope
                    </Label>
                    <Select value={formData.desiredScope} onValueChange={(value) => setFormData(prev => ({ ...prev, desiredScope: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select scope" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entire-organization">Entire organization</SelectItem>
                        <SelectItem value="specific-departments">Specific departments/business units</SelectItem>
                        <SelectItem value="specific-locations">Specific locations/sites</SelectItem>
                        <SelectItem value="specific-services">Specific services/products</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeline" className="text-base font-medium text-gray-900 mb-2 block">
                      9. Target certification timeline
                    </Label>
                    <Select value={formData.targetTimeline} onValueChange={(value) => setFormData(prev => ({ ...prev, targetTimeline: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">3-6 months</SelectItem>
                        <SelectItem value="12-months">6-12 months</SelectItem>
                        <SelectItem value="12-plus-months">12+ months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-base font-medium text-gray-900 mb-2 block">
                      10. Estimated budget range (USD)
                    </Label>
                    <Select value={formData.budgetBand} onValueChange={(value) => setFormData(prev => ({ ...prev, budgetBand: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
                        <SelectItem value="200k-plus">$200,000+</SelectItem>
                        <SelectItem value="not-determined">Not yet determined</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Section D - Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    D. Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="regulatory" className="text-base font-medium text-gray-900 mb-2 block">
                      11. Specific regulatory requirements
                    </Label>
                    <Textarea
                      id="regulatory"
                      placeholder="List any specific compliance requirements (GDPR, HIPAA, PCI DSS, etc.)"
                      value={formData.regulatoryRequirements}
                      onChange={(e) => setFormData(prev => ({ ...prev, regulatoryRequirements: e.target.value }))}
                      className="min-h-[80px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="additional-info" className="text-base font-medium text-gray-900 mb-2 block">
                      12. Additional information or specific concerns
                    </Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Anything else you'd like us to know about your situation or specific challenges you're facing"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Status Alert */}
              {submitStatus.type && (
                <Alert className={submitStatus.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                  <AlertDescription className={submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                    {submitStatus.message}
                  </AlertDescription>
                </Alert>
              )}

              <div className="text-center pt-8">
                <Button
                  type="submit"
                  className="bg-[#143066] hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit & Receive My Risk-Gap Executive Summary'}
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  {isSubmitting ? 'Please wait while we process your submission...' : 'We\'ll email you a personalized assessment within 24 hours'}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityQuestionnaire; 