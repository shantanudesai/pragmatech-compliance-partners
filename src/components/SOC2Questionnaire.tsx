import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sendSOC2QuestionnaireResponse } from '@/services/emailService';
import { SOC2FormData } from '@/types/questionnaire';

const SOC2Questionnaire: React.FC = () => {
  const [formData, setFormData] = useState<SOC2FormData>({
    companyName: '',
    industry: '',
    employeeCount: '',
    primaryService: '',
    annualRevenue: '',
    contactEmail: '',
    primaryReason: '',
    otherReason: '',
    reportType: '',
    trustCategories: [],
    timeline: '',
    securityMaturity: '',
    currentCertifications: [],
    dataEnvironment: '',
    customerDataHandling: '',
    inScopeSystems: [],
    geographicScope: '',
    thirdPartyProviders: '',
    supportRequired: [],
    internalResources: '',
    budgetRange: '',
    auditFirmPreference: '',
    soc2Challenges: [],
    referralSource: '',
    otherReferral: '',
    additionalComments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });
  const [consent, setConsent] = useState(false);

  const handleInputChange = (name: keyof SOC2FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof SOC2FormData, value: string, checked: boolean) => {
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
    
    if (!formData.companyName || !formData.industry || !formData.primaryService || !formData.contactEmail) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields.' 
      });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contactEmail)) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please enter a valid email address.' 
      });
      return;
    }

    // Validate consent
    if (!consent) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please provide consent to be contacted regarding this inquiry.' 
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle' });
    
    try {
      await sendSOC2QuestionnaireResponse(formData);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you! Your questionnaire has been submitted successfully. We\'ll be in touch soon.' 
      });
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
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

  if (submitStatus.type === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600">{submitStatus.message}</p>
            </div>
            <Button 
              onClick={() => window.location.href = '/services'}
              className="bg-cyan-600 hover:bg-cyan-700"
            >
              Return to Services
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SOC 2 Compliance Discovery Questionnaire
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Help us understand your SOC 2 compliance requirements and current control environment.
              </p>
              <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                <p className="text-sm text-cyan-800">
                  <strong>Estimated time:</strong> 20-25 minutes | <strong>Sections:</strong> 5 | <strong>Questions:</strong> 18
                </p>
              </div>
            </div>

            {submitStatus.type === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Organization Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Organization Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName" className="text-base font-medium text-gray-900 mb-2 block">
                        Company Name *
                      </Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry" className="text-base font-medium text-gray-900 mb-2 block">
                        Industry/Sector *
                      </Label>
                      <Input
                        id="industry"
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employeeCount" className="text-base font-medium text-gray-900 mb-2 block">
                        Number of Employees
                      </Label>
                      <Input
                        id="employeeCount"
                        value={formData.employeeCount}
                        onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="primaryService" className="text-base font-medium text-gray-900 mb-2 block">
                        Primary Service Offering *
                      </Label>
                      <Input
                        id="primaryService"
                        value={formData.primaryService}
                        onChange={(e) => handleInputChange('primaryService', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="annualRevenue" className="text-base font-medium text-gray-900 mb-2 block">
                        Annual Recurring Revenue (optional)
                      </Label>
                      <Input
                        id="annualRevenue"
                        value={formData.annualRevenue}
                        onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactEmail" className="text-base font-medium text-gray-900 mb-2 block">
                        Contact Email *
                      </Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* A. SOC 2 Business Context */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">A. SOC 2 Business Context</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      1. Primary reason for pursuing SOC 2?
                    </Label>
                    <RadioGroup
                      value={formData.primaryReason}
                      onValueChange={(value) => handleInputChange('primaryReason', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="customer-requirement" id="customer-requirement" />
                        <Label htmlFor="customer-requirement">Customer requirement for sales</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vendor-risk" id="vendor-risk" />
                        <Label htmlFor="vendor-risk">Vendor risk management</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="competitive-diff" id="competitive-diff" />
                        <Label htmlFor="competitive-diff">Competitive differentiation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="process-improvement" id="process-improvement" />
                        <Label htmlFor="process-improvement">Internal process improvement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="regulatory" id="regulatory" />
                        <Label htmlFor="regulatory">Regulatory or contractual requirement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-reason" />
                        <Label htmlFor="other-reason">Other</Label>
                      </div>
                    </RadioGroup>
                    {formData.primaryReason === 'other' && (
                      <div className="mt-3">
                        <Input
                          placeholder="Please specify..."
                          value={formData.otherReason}
                          onChange={(e) => handleInputChange('otherReason', e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      2. SOC 2 report type needed
                    </Label>
                    <RadioGroup
                      value={formData.reportType}
                      onValueChange={(value) => handleInputChange('reportType', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="type1" id="type1" />
                        <Label htmlFor="type1">Type 1 (point-in-time)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="type2" id="type2" />
                        <Label htmlFor="type2">Type 2 (over time period)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="type1-then-type2" id="type1-then-type2" />
                        <Label htmlFor="type1-then-type2">Starting with Type 1, then Type 2</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unsure" id="unsure" />
                        <Label htmlFor="unsure">Unsure which type needed</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both">Both reports required</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      3. Target Trust Service Categories (select all applicable)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Security (mandatory)',
                        'Availability',
                        'Processing Integrity',
                        'Confidentiality',
                        'Privacy'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`trustCategories-${option}`}
                            checked={formData.trustCategories.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('trustCategories', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`trustCategories-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      4. Timeline for SOC 2 report completion
                    </Label>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) => handleInputChange('timeline', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6-months" id="6-months" />
                        <Label htmlFor="6-months">Within 6 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6-12-months" id="6-12-months" />
                        <Label htmlFor="6-12-months">6-12 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="12-18-months" id="12-18-months" />
                        <Label htmlFor="12-18-months">12-18 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="18-plus-months" id="18-plus-months" />
                        <Label htmlFor="18-plus-months">18+ months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible">Flexible timeline</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* B. Current Control Environment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">B. Current Control Environment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      5. Information security program maturity
                    </Label>
                    <RadioGroup
                      value={formData.securityMaturity}
                      onValueChange={(value) => handleInputChange('securityMaturity', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-basic" id="1-basic" />
                        <Label htmlFor="1-basic">1 - Basic security measures</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-documented" id="2-documented" />
                        <Label htmlFor="2-documented">2 - Documented security policies</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-implemented" id="3-implemented" />
                        <Label htmlFor="3-implemented">3 - Implemented security controls</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4-monitored" id="4-monitored" />
                        <Label htmlFor="4-monitored">4 - Monitored security program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-optimized" id="5-optimized" />
                        <Label htmlFor="5-optimized">5 - Optimized security management</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      6. Current compliance certifications
                    </Label>
                    <div className="space-y-2">
                      {[
                        'ISO 27001',
                        'SOC 1',
                        'HIPAA',
                        'PCI DSS',
                        'Other compliance frameworks',
                        'No current certifications'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`currentCertifications-${option}`}
                            checked={formData.currentCertifications.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('currentCertifications', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`currentCertifications-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      7. Data and system environment
                    </Label>
                    <RadioGroup
                      value={formData.dataEnvironment}
                      onValueChange={(value) => handleInputChange('dataEnvironment', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cloud-based" id="cloud-based" />
                        <Label htmlFor="cloud-based">Primarily cloud-based</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="on-premises" id="on-premises" />
                        <Label htmlFor="on-premises">Primarily on-premises</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="hybrid" />
                        <Label htmlFor="hybrid">Hybrid cloud/on-premises</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multi-cloud" id="multi-cloud" />
                        <Label htmlFor="multi-cloud">Multi-cloud environment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="saas-dependent" id="saas-dependent" />
                        <Label htmlFor="saas-dependent">SaaS-dependent operations</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      8. Customer data handling
                    </Label>
                    <RadioGroup
                      value={formData.customerDataHandling}
                      onValueChange={(value) => handleInputChange('customerDataHandling', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-access" id="no-access" />
                        <Label htmlFor="no-access">No customer data access</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="limited-processing" id="limited-processing" />
                        <Label htmlFor="limited-processing">Limited customer data processing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="significant-processing" id="significant-processing" />
                        <Label htmlFor="significant-processing">Significant customer data processing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="core-service" id="core-service" />
                        <Label htmlFor="core-service">Customer data is core to service</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="varies" id="varies" />
                        <Label htmlFor="varies">Varies by customer arrangement</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* C. SOC 2 Scope Planning */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">C. SOC 2 Scope Planning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      9. In-scope systems and services
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Core product/service platform',
                        'Customer support systems',
                        'Payment processing systems',
                        'Development and testing environments',
                        'Administrative systems',
                        'Third-party integrations'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`inScopeSystems-${option}`}
                            checked={formData.inScopeSystems.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('inScopeSystems', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`inScopeSystems-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      10. Geographic scope
                    </Label>
                    <RadioGroup
                      value={formData.geographicScope}
                      onValueChange={(value) => handleInputChange('geographicScope', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single-location" id="single-location" />
                        <Label htmlFor="single-location">Single location/region</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multiple-domestic" id="multiple-domestic" />
                        <Label htmlFor="multiple-domestic">Multiple domestic locations</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="international" id="international" />
                        <Label htmlFor="international">International operations</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="remote-workforce" id="remote-workforce" />
                        <Label htmlFor="remote-workforce">Remote workforce considerations</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cloud-regions" id="cloud-regions" />
                        <Label htmlFor="cloud-regions">Cloud provider regions</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      11. Third-party service providers
                    </Label>
                    <RadioGroup
                      value={formData.thirdPartyProviders}
                      onValueChange={(value) => handleInputChange('thirdPartyProviders', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="minimal" id="minimal" />
                        <Label htmlFor="minimal">Minimal third-party dependencies</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="several-key" id="several-key" />
                        <Label htmlFor="several-key">Several key service providers</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="extensive" id="extensive" />
                        <Label htmlFor="extensive">Extensive vendor ecosystem</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="critical-infrastructure" id="critical-infrastructure" />
                        <Label htmlFor="critical-infrastructure">Critical infrastructure providers</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cloud-dependencies" id="cloud-dependencies" />
                        <Label htmlFor="cloud-dependencies">Cloud service dependencies</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* D. Implementation Support Needs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">D. Implementation Support Needs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      12. SOC 2 preparation support required (select all applicable)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'SOC 2 readiness assessment',
                        'Control design and implementation',
                        'Policy and procedure development',
                        'Evidence collection and management',
                        'Audit preparation and support',
                        'Remediation planning',
                        'Ongoing compliance maintenance'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`supportRequired-${option}`}
                            checked={formData.supportRequired.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('supportRequired', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`supportRequired-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      13. Internal resources available
                    </Label>
                    <RadioGroup
                      value={formData.internalResources}
                      onValueChange={(value) => handleInputChange('internalResources', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dedicated-team" id="dedicated-team" />
                        <Label htmlFor="dedicated-team">Dedicated compliance team</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="part-time" id="part-time" />
                        <Label htmlFor="part-time">Part-time compliance resources</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="it-security-team" id="it-security-team" />
                        <Label htmlFor="it-security-team">IT/security team involvement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="management-only" id="management-only" />
                        <Label htmlFor="management-only">Management oversight only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="limited" id="limited" />
                        <Label htmlFor="limited">Limited internal resources</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      14. Estimated budget range (USD)
                    </Label>
                    <RadioGroup
                      value={formData.budgetRange}
                      onValueChange={(value) => handleInputChange('budgetRange', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-25000" id="under-25000" />
                        <Label htmlFor="under-25000">Under $25,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="25000-50000" id="25000-50000" />
                        <Label htmlFor="25000-50000">$25,000 - $50,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="50000-100000" id="50000-100000" />
                        <Label htmlFor="50000-100000">$50,000 - $100,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100000-plus" id="100000-plus" />
                        <Label htmlFor="100000-plus">$100,000+</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-discussion" id="under-discussion" />
                        <Label htmlFor="under-discussion">Budget under discussion</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* E. Additional Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">E. Additional Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      15. Audit firm preferences
                    </Label>
                    <RadioGroup
                      value={formData.auditFirmPreference}
                      onValueChange={(value) => handleInputChange('auditFirmPreference', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="already-selected" id="already-selected" />
                        <Label htmlFor="already-selected">Already selected audit firm</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="need-recommendation" id="need-recommendation" />
                        <Label htmlFor="need-recommendation">Need audit firm recommendation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="considering-multiple" id="considering-multiple" />
                        <Label htmlFor="considering-multiple">Considering multiple firms</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="price-sensitive" id="price-sensitive" />
                        <Label htmlFor="price-sensitive">Price-sensitive selection</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-preference" id="no-preference" />
                        <Label htmlFor="no-preference">No preference</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      16. Specific SOC 2 challenges or concerns
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Complex technical environment',
                        'Remote workforce considerations',
                        'Third-party vendor management',
                        'Change management during audit',
                        'Cost and resource constraints',
                        'Timeline pressures'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`soc2Challenges-${option}`}
                            checked={formData.soc2Challenges.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('soc2Challenges', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`soc2Challenges-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      17. How did you hear about our SOC 2 services?
                    </Label>
                    <RadioGroup
                      value={formData.referralSource}
                      onValueChange={(value) => handleInputChange('referralSource', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="google-search" id="google-search" />
                        <Label htmlFor="google-search">Google search</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="referral" id="referral" />
                        <Label htmlFor="referral">Referral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="linkedin" id="linkedin" />
                        <Label htmlFor="linkedin">LinkedIn</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="industry-event" id="industry-event" />
                        <Label htmlFor="industry-event">Industry event</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other-referral" id="other-referral" />
                        <Label htmlFor="other-referral">Other</Label>
                      </div>
                    </RadioGroup>
                    {formData.referralSource === 'other-referral' && (
                      <div className="mt-3">
                        <Input
                          placeholder="Please specify..."
                          value={formData.otherReferral}
                          onChange={(e) => handleInputChange('otherReferral', e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="additionalComments" className="text-base font-medium text-gray-900 mb-3 block">
                      18. Additional comments or requirements
                    </Label>
                    <Textarea
                      id="additionalComments"
                      rows={4}
                      placeholder="Please describe specific SOC 2 needs, environmental considerations, or other requirements..."
                      value={formData.additionalComments}
                      onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Consent Checkbox */}
              <Card>
                <CardContent className="pt-6">
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
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit SOC 2 Discovery Questionnaire'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOC2Questionnaire; 