import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sendGDPRQuestionnaireResponse } from '@/services/emailService';
import { GDPRFormData } from '@/types/questionnaire';

const GDPRQuestionnaire: React.FC = () => {
  const [formData, setFormData] = useState<GDPRFormData>({
    companyName: '',
    industry: '',
    employeeCount: '',
    businessLocation: '',
    annualRevenue: '',
    contactEmail: '',
    euDataProcessing: '',
    processingRole: '',
    dataCategories: [],
    dataVolume: '',
    complianceMaturity: '',
    dpoStatus: '',
    breachPreparedness: '',
    rightsManagement: '',
    complianceGoal: '',
    urgentAreas: [],
    targetTimeline: '',
    supportNeeded: [],
    budgetRange: '',
    dataProtectionChallenges: [],
    internationalTransfers: '',
    additionalComments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleInputChange = (name: keyof GDPRFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof GDPRFormData, value: string, checked: boolean) => {
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
    
    if (!formData.companyName || !formData.industry || !formData.contactEmail) {
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
    
    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle' });
    
    try {
      await sendGDPRQuestionnaireResponse(formData);
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600">{submitStatus.message}</p>
            </div>
            <Button 
              onClick={() => window.location.href = '/services'}
              className="bg-green-600 hover:bg-green-700"
            >
              Return to Services
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                GDPR Compliance Discovery Questionnaire
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Help us understand your GDPR compliance requirements and current data protection posture.
              </p>
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>Estimated time:</strong> 15-20 minutes | <strong>Sections:</strong> 5 | <strong>Questions:</strong> 16
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
                      <Label htmlFor="businessLocation" className="text-base font-medium text-gray-900 mb-2 block">
                        Primary Business Location
                      </Label>
                      <Input
                        id="businessLocation"
                        value={formData.businessLocation}
                        onChange={(e) => handleInputChange('businessLocation', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="annualRevenue" className="text-base font-medium text-gray-900 mb-2 block">
                        Annual Revenue (optional)
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

              {/* A. GDPR Scope Assessment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">A. GDPR Scope Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      1. Does your organization process EU residents' personal data?
                    </Label>
                    <RadioGroup
                      value={formData.euDataProcessing}
                      onValueChange={(value) => handleInputChange('euDataProcessing', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes-customers" id="yes-customers" />
                        <Label htmlFor="yes-customers">Yes, we target EU customers</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes-employees" id="yes-employees" />
                        <Label htmlFor="yes-employees">Yes, we have EU employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes-both" id="yes-both" />
                        <Label htmlFor="yes-both">Yes, both customers and employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain" id="uncertain" />
                        <Label htmlFor="uncertain">Possibly, uncertain about scope</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-eu-data" id="no-eu-data" />
                        <Label htmlFor="no-eu-data">No EU data processing</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      2. What is your role in data processing?
                    </Label>
                    <RadioGroup
                      value={formData.processingRole}
                      onValueChange={(value) => handleInputChange('processingRole', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="controller-only" id="controller-only" />
                        <Label htmlFor="controller-only">Data controller only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="processor-only" id="processor-only" />
                        <Label htmlFor="processor-only">Data processor only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both">Both controller and processor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="joint-controller" id="joint-controller" />
                        <Label htmlFor="joint-controller">Joint controller arrangements</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain-role" id="uncertain-role" />
                        <Label htmlFor="uncertain-role">Uncertain about our role</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      3. Categories of personal data processed
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Basic contact information',
                        'Financial/payment data',
                        'Health information',
                        'Biometric data',
                        'Special category data',
                        'Children\'s data',
                        'Employee HR data'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`dataCategories-${option}`}
                            checked={formData.dataCategories.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('dataCategories', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`dataCategories-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      4. Data processing volume
                    </Label>
                    <RadioGroup
                      value={formData.dataVolume}
                      onValueChange={(value) => handleInputChange('dataVolume', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-1000" id="under-1000" />
                        <Label htmlFor="under-1000">Under 1,000 data subjects</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1000-10000" id="1000-10000" />
                        <Label htmlFor="1000-10000">1,000 - 10,000 data subjects</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="10000-100000" id="10000-100000" />
                        <Label htmlFor="10000-100000">10,000 - 100,000 data subjects</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100000-plus" id="100000-plus" />
                        <Label htmlFor="100000-plus">100,000+ data subjects</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unknown" id="unknown" />
                        <Label htmlFor="unknown">Volume unknown</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* B. Current GDPR Compliance Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">B. Current GDPR Compliance Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      5. GDPR compliance maturity level
                    </Label>
                    <RadioGroup
                      value={formData.complianceMaturity}
                      onValueChange={(value) => handleInputChange('complianceMaturity', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-not-started" id="1-not-started" />
                        <Label htmlFor="1-not-started">1 - Not started</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-basic-awareness" id="2-basic-awareness" />
                        <Label htmlFor="2-basic-awareness">2 - Basic awareness only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-policies-developed" id="3-policies-developed" />
                        <Label htmlFor="3-policies-developed">3 - Policies developed</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4-implementation-progress" id="4-implementation-progress" />
                        <Label htmlFor="4-implementation-progress">4 - Implementation in progress</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-mature-program" id="5-mature-program" />
                        <Label htmlFor="5-mature-program">5 - Mature compliance program</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      6. Data Protection Officer (DPO) status
                    </Label>
                    <RadioGroup
                      value={formData.dpoStatus}
                      onValueChange={(value) => handleInputChange('dpoStatus', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="appointed-active" id="appointed-active" />
                        <Label htmlFor="appointed-active">DPO appointed and active</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="appointment-required" id="appointment-required" />
                        <Label htmlFor="appointment-required">DPO appointment required</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not-required" id="not-required" />
                        <Label htmlFor="not-required">DPO not required</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="considering" id="considering" />
                        <Label htmlFor="considering">Considering DPO appointment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain-obligation" id="uncertain-obligation" />
                        <Label htmlFor="uncertain-obligation">Uncertain about DPO obligation</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      7. Data breach preparedness
                    </Label>
                    <RadioGroup
                      value={formData.breachPreparedness}
                      onValueChange={(value) => handleInputChange('breachPreparedness', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comprehensive" id="comprehensive" />
                        <Label htmlFor="comprehensive">Comprehensive breach procedures</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="basic-plan" id="basic-plan" />
                        <Label htmlFor="basic-plan">Basic breach response plan</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="informal" id="informal" />
                        <Label htmlFor="informal">Informal breach handling</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-procedures" id="no-procedures" />
                        <Label htmlFor="no-procedures">No breach procedures</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain-requirements" id="uncertain-requirements" />
                        <Label htmlFor="uncertain-requirements">Uncertain about requirements</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      8. Data subject rights management
                    </Label>
                    <RadioGroup
                      value={formData.rightsManagement}
                      onValueChange={(value) => handleInputChange('rightsManagement', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="automated" id="automated" />
                        <Label htmlFor="automated">Automated rights management</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="manual-process" id="manual-process" />
                        <Label htmlFor="manual-process">Manual process in place</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ad-hoc" id="ad-hoc" />
                        <Label htmlFor="ad-hoc">Ad-hoc handling</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-process" id="no-process" />
                        <Label htmlFor="no-process">No formal process</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain-obligations" id="uncertain-obligations" />
                        <Label htmlFor="uncertain-obligations">Uncertain about obligations</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* C. Implementation Priorities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">C. Implementation Priorities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      9. Primary GDPR compliance goal
                    </Label>
                    <RadioGroup
                      value={formData.complianceGoal}
                      onValueChange={(value) => handleInputChange('complianceGoal', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full-compliance" id="full-compliance" />
                        <Label htmlFor="full-compliance">Full regulatory compliance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="risk-reduction" id="risk-reduction" />
                        <Label htmlFor="risk-reduction">Risk reduction focus</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="customer-trust" id="customer-trust" />
                        <Label htmlFor="customer-trust">Customer trust building</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="audit-preparation" id="audit-preparation" />
                        <Label htmlFor="audit-preparation">Audit preparation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vendor-requirement" id="vendor-requirement" />
                        <Label htmlFor="vendor-requirement">Vendor requirement compliance</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      10. Most urgent GDPR areas to address
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Consent management',
                        'Data mapping and inventory',
                        'Privacy policies and notices',
                        'Data subject rights procedures',
                        'Cross-border transfer mechanisms',
                        'Breach notification procedures'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`urgentAreas-${option}`}
                            checked={formData.urgentAreas.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('urgentAreas', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`urgentAreas-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      11. Target compliance timeline
                    </Label>
                    <RadioGroup
                      value={formData.targetTimeline}
                      onValueChange={(value) => handleInputChange('targetTimeline', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="asap" id="asap" />
                        <Label htmlFor="asap">ASAP (urgent requirement)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-months" id="3-months" />
                        <Label htmlFor="3-months">Within 3 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-6-months" id="3-6-months" />
                        <Label htmlFor="3-6-months">3-6 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6-12-months" id="6-12-months" />
                        <Label htmlFor="6-12-months">6-12 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="planning-only" id="planning-only" />
                        <Label htmlFor="planning-only">Planning phase only</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* D. Service Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">D. Service Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      12. Support needed (select all applicable)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'GDPR gap assessment',
                        'Data Protection Impact Assessments',
                        'Privacy policy development',
                        'Consent management systems',
                        'Data mapping and inventory',
                        'Staff training programs',
                        'Ongoing compliance support'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`supportNeeded-${option}`}
                            checked={formData.supportNeeded.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('supportNeeded', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`supportNeeded-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      13. Estimated budget range (USD)
                    </Label>
                    <RadioGroup
                      value={formData.budgetRange}
                      onValueChange={(value) => handleInputChange('budgetRange', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-15000" id="under-15000" />
                        <Label htmlFor="under-15000">Under $15,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="15000-35000" id="15000-35000" />
                        <Label htmlFor="15000-35000">$15,000 - $35,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="35000-75000" id="35000-75000" />
                        <Label htmlFor="35000-75000">$35,000 - $75,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="75000-plus" id="75000-plus" />
                        <Label htmlFor="75000-plus">$75,000+</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tbd" id="tbd" />
                        <Label htmlFor="tbd">Budget to be determined</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* E. Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">E. Additional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      14. Current data protection challenges
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Cross-border data transfers',
                        'Third-party vendor management',
                        'Consent collection and management',
                        'Data retention and deletion',
                        'Employee privacy compliance',
                        'Technology system limitations'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`challenges-${option}`}
                            checked={formData.dataProtectionChallenges.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('dataProtectionChallenges', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`challenges-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      15. International data transfers
                    </Label>
                    <RadioGroup
                      value={formData.internationalTransfers}
                      onValueChange={(value) => handleInputChange('internationalTransfers', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-transfers" id="no-transfers" />
                        <Label htmlFor="no-transfers">No international transfers</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="eu-eea-only" id="eu-eea-only" />
                        <Label htmlFor="eu-eea-only">Within EU/EEA only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="adequate-countries" id="adequate-countries" />
                        <Label htmlFor="adequate-countries">EU to adequate countries</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non-adequate" id="non-adequate" />
                        <Label htmlFor="non-adequate">EU to non-adequate countries</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="global" id="global" />
                        <Label htmlFor="global">Global data transfers</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="additionalComments" className="text-base font-medium text-gray-900 mb-3 block">
                      16. Additional comments or specific requirements
                    </Label>
                    <Textarea
                      id="additionalComments"
                      rows={4}
                      placeholder="Please describe specific GDPR challenges, integration needs, or regulatory concerns..."
                      value={formData.additionalComments}
                      onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit GDPR Discovery Questionnaire'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPRQuestionnaire; 