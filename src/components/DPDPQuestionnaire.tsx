import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sendDPDPQuestionnaireResponse } from '@/services/emailService';
import { DPDPFormData } from '@/types/questionnaire';

const DPDPQuestionnaire: React.FC = () => {
  const [formData, setFormData] = useState<DPDPFormData>({
    companyName: '',
    industry: '',
    businessType: '',
    otherBusinessType: '',
    employeeCount: '',
    annualRevenue: '',
    contactEmail: '',
    indianDataProcessing: '',
    processingRole: '',
    dataTypes: [],
    processingVolume: '',
    complianceMaturity: '',
    dpoStatus: '',
    consentManagement: '',
    rightsManagement: '',
    complianceObjectives: [],
    criticalAreas: [],
    targetTimeline: '',
    supportNeeded: [],
    transferRequirements: '',
    budgetRange: '',
    industryConsiderations: [],
    dataProtectionChallenges: [],
    referralSource: '',
    otherReferral: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });
  const [consent, setConsent] = useState(false);

  const handleInputChange = (name: keyof DPDPFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof DPDPFormData, value: string, checked: boolean) => {
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
    
    if (!formData.companyName || !formData.industry || !formData.businessType || !formData.contactEmail) {
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
      await sendDPDPQuestionnaireResponse(formData);
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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600">{submitStatus.message}</p>
            </div>
            <Button 
              onClick={() => window.location.href = '/services'}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Return to Services
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                India DPDP Act 2023 Compliance Discovery Questionnaire
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Help us understand your DPDP Act compliance requirements and current data protection posture for Indian operations.
              </p>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm text-orange-800">
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
                      <Label className="text-base font-medium text-gray-900 mb-3 block">
                        Business Type *
                      </Label>
                      <RadioGroup
                        value={formData.businessType}
                        onValueChange={(value) => handleInputChange('businessType', value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="indian-company" id="indian-company" />
                          <Label htmlFor="indian-company">Indian company</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="foreign-serving-indian" id="foreign-serving-indian" />
                          <Label htmlFor="foreign-serving-indian">Foreign company serving Indian customers</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="indian-subsidiary" id="indian-subsidiary" />
                          <Label htmlFor="indian-subsidiary">Indian subsidiary of foreign company</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other-business" />
                          <Label htmlFor="other-business">Other</Label>
                        </div>
                      </RadioGroup>
                      {formData.businessType === 'other' && (
                        <div className="mt-3">
                          <Input
                            placeholder="Please specify..."
                            value={formData.otherBusinessType}
                            onChange={(e) => handleInputChange('otherBusinessType', e.target.value)}
                          />
                        </div>
                      )}
                    </div>
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

              {/* A. DPDP Act Applicability */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">A. DPDP Act Applicability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      1. Does your organization process digital personal data of Indian residents?
                    </Label>
                    <RadioGroup
                      value={formData.indianDataProcessing}
                      onValueChange={(value) => handleInputChange('indianDataProcessing', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="primary-customer-base" id="primary-customer-base" />
                        <Label htmlFor="primary-customer-base">Yes, primary customer base in India</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="indian-employees" id="indian-employees" />
                        <Label htmlFor="indian-employees">Yes, have Indian employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both-customers-employees" id="both-customers-employees" />
                        <Label htmlFor="both-customers-employees">Yes, both customers and employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="indian-operations" id="indian-operations" />
                        <Label htmlFor="indian-operations">Processing through Indian operations</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain-scope" id="uncertain-scope" />
                        <Label htmlFor="uncertain-scope">Uncertain about data processing scope</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      2. Your role in personal data processing
                    </Label>
                    <RadioGroup
                      value={formData.processingRole}
                      onValueChange={(value) => handleInputChange('processingRole', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="data-fiduciary" id="data-fiduciary" />
                        <Label htmlFor="data-fiduciary">Data Fiduciary (determine purpose and means)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="data-processor" id="data-processor" />
                        <Label htmlFor="data-processor">Data Processor (process on behalf of others)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both-fiduciary-processor" id="both-fiduciary-processor" />
                        <Label htmlFor="both-fiduciary-processor">Both Fiduciary and Processor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="consent-manager" id="consent-manager" />
                        <Label htmlFor="consent-manager">Consent Manager</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain-role" id="uncertain-role" />
                        <Label htmlFor="uncertain-role">Uncertain about our role</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      3. Types of personal data processed
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Basic contact and profile information',
                        'Financial and payment data',
                        'Biometric information',
                        'Children\'s data (under 18)',
                        'Sensitive personal data',
                        'Employee personal data'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`dataTypes-${option}`}
                            checked={formData.dataTypes.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('dataTypes', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`dataTypes-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      4. Data processing volume and risk assessment
                    </Label>
                    <RadioGroup
                      value={formData.processingVolume}
                      onValueChange={(value) => handleInputChange('processingVolume', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small-scale" id="small-scale" />
                        <Label htmlFor="small-scale">Small scale, low risk</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium-scale" id="medium-scale" />
                        <Label htmlFor="medium-scale">Medium scale processing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="large-scale" id="large-scale" />
                        <Label htmlFor="large-scale">Large scale processing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high-risk" id="high-risk" />
                        <Label htmlFor="high-risk">High risk to data principals</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="significant-fiduciary" id="significant-fiduciary" />
                        <Label htmlFor="significant-fiduciary">Potential Significant Data Fiduciary designation</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* B. Current DPDP Compliance Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">B. Current DPDP Compliance Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      5. DPDP Act compliance maturity
                    </Label>
                    <RadioGroup
                      value={formData.complianceMaturity}
                      onValueChange={(value) => handleInputChange('complianceMaturity', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-not-aware" id="1-not-aware" />
                        <Label htmlFor="1-not-aware">1 - Not aware of requirements</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-basic-awareness" id="2-basic-awareness" />
                        <Label htmlFor="2-basic-awareness">2 - Basic awareness only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-planning-started" id="3-planning-started" />
                        <Label htmlFor="3-planning-started">3 - Compliance planning started</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4-implementation-progress" id="4-implementation-progress" />
                        <Label htmlFor="4-implementation-progress">4 - Implementation in progress</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-advanced-program" id="5-advanced-program" />
                        <Label htmlFor="5-advanced-program">5 - Advanced compliance program</Label>
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
                        <RadioGroupItem value="already-appointed" id="already-appointed" />
                        <Label htmlFor="already-appointed">DPO already appointed</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="appointment-planned" id="appointment-planned" />
                        <Label htmlFor="appointment-planned">DPO appointment planned</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="may-need" id="may-need" />
                        <Label htmlFor="may-need">May need DPO designation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not-required" id="not-required" />
                        <Label htmlFor="not-required">Not required for our organization</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain-obligation" id="uncertain-obligation" />
                        <Label htmlFor="uncertain-obligation">Uncertain about DPO obligation</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      7. Consent management status
                    </Label>
                    <RadioGroup
                      value={formData.consentManagement}
                      onValueChange={(value) => handleInputChange('consentManagement', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="robust-mechanisms" id="robust-mechanisms" />
                        <Label htmlFor="robust-mechanisms">Robust consent mechanisms</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="basic-collection" id="basic-collection" />
                        <Label htmlFor="basic-collection">Basic consent collection</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="manual-processes" id="manual-processes" />
                        <Label htmlFor="manual-processes">Manual consent processes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-formal-management" id="no-formal-management" />
                        <Label htmlFor="no-formal-management">No formal consent management</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="legacy-needs-updating" id="legacy-needs-updating" />
                        <Label htmlFor="legacy-needs-updating">Legacy consent needs updating</Label>
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
                        <RadioGroupItem value="automated-fulfillment" id="automated-fulfillment" />
                        <Label htmlFor="automated-fulfillment">Automated rights fulfillment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="manual-handling" id="manual-handling" />
                        <Label htmlFor="manual-handling">Manual rights handling process</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ad-hoc" id="ad-hoc" />
                        <Label htmlFor="ad-hoc">Ad-hoc rights management</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-formal-procedures" id="no-formal-procedures" />
                        <Label htmlFor="no-formal-procedures">No formal rights procedures</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain-obligations" id="uncertain-obligations" />
                        <Label htmlFor="uncertain-obligations">Uncertain about obligations</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* C. Implementation Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">C. Implementation Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      9. Primary compliance objectives (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Achieve DPDP Act compliance',
                        'Minimize compliance risks',
                        'Enable data monetization legally',
                        'Improve data governance',
                        'Build trust with customers',
                        'Prepare for audits'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`complianceObjectives-${option}`}
                            checked={formData.complianceObjectives.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('complianceObjectives', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`complianceObjectives-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      10. Critical areas requiring immediate attention (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Consent management system',
                        'Data breach response procedures',
                        'Privacy notices and transparency',
                        'Rights fulfillment processes',
                        'Cross-border transfer mechanisms',
                        'DPO appointment and training',
                        'Data minimization practices',
                        'Grievance redressal mechanism'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`criticalAreas-${option}`}
                            checked={formData.criticalAreas.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('criticalAreas', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`criticalAreas-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      11. Target timeline for compliance implementation
                    </Label>
                    <RadioGroup
                      value={formData.targetTimeline}
                      onValueChange={(value) => handleInputChange('targetTimeline', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="immediate-3-months" id="immediate-3-months" />
                        <Label htmlFor="immediate-3-months">Immediate (within 3 months)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="short-term-6-months" id="short-term-6-months" />
                        <Label htmlFor="short-term-6-months">Short-term (3-6 months)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium-term-12-months" id="medium-term-12-months" />
                        <Label htmlFor="medium-term-12-months">Medium-term (6-12 months)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="long-term-18-months" id="long-term-18-months" />
                        <Label htmlFor="long-term-18-months">Long-term (12-18 months)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phased-approach" id="phased-approach" />
                        <Label htmlFor="phased-approach">Phased approach over 18+ months</Label>
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
                      12. Type of support needed (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'DPDP Act gap assessment',
                        'Policy and procedure development',
                        'Technical compliance implementation',
                        'DPO services and training',
                        'Consent management solutions',
                        'Data mapping and inventory',
                        'Privacy impact assessments',
                        'Ongoing compliance monitoring'
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
                      13. Cross-border data transfer requirements
                    </Label>
                    <RadioGroup
                      value={formData.transferRequirements}
                      onValueChange={(value) => handleInputChange('transferRequirements', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-transfers" id="no-transfers" />
                        <Label htmlFor="no-transfers">No cross-border transfers</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="limited-transfers" id="limited-transfers" />
                        <Label htmlFor="limited-transfers">Limited transfers to approved countries</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="significant-transfers" id="significant-transfers" />
                        <Label htmlFor="significant-transfers">Significant transfers requiring approvals</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="global-operations" id="global-operations" />
                        <Label htmlFor="global-operations">Global operations with multiple jurisdictions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain-transfers" id="uncertain-transfers" />
                        <Label htmlFor="uncertain-transfers">Uncertain about transfer requirements</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      14. Budget range for DPDP compliance
                    </Label>
                    <RadioGroup
                      value={formData.budgetRange}
                      onValueChange={(value) => handleInputChange('budgetRange', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-5-lakhs" id="under-5-lakhs" />
                        <Label htmlFor="under-5-lakhs">Under ₹5 lakhs</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-15-lakhs" id="5-15-lakhs" />
                        <Label htmlFor="5-15-lakhs">₹5-15 lakhs</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="15-30-lakhs" id="15-30-lakhs" />
                        <Label htmlFor="15-30-lakhs">₹15-30 lakhs</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="30-50-lakhs" id="30-50-lakhs" />
                        <Label htmlFor="30-50-lakhs">₹30-50 lakhs</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="over-50-lakhs" id="over-50-lakhs" />
                        <Label htmlFor="over-50-lakhs">Over ₹50 lakhs</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* E. Additional Context */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">E. Additional Context</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      15. Industry-specific considerations (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Financial services regulations',
                        'Healthcare data protection',
                        'Telecom sector requirements',
                        'E-commerce marketplace rules',
                        'EdTech and children\'s data',
                        'Government contracts and tenders',
                        'Export-import compliance',
                        'Banking and payment processing'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`industryConsiderations-${option}`}
                            checked={formData.industryConsiderations.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('industryConsiderations', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`industryConsiderations-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      16. Key data protection challenges (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Complex consent mechanisms',
                        'Legacy system integration',
                        'Multi-jurisdictional compliance',
                        'Third-party vendor management',
                        'Resource constraints',
                        'Technical expertise gaps',
                        'Change management challenges',
                        'Board and leadership buy-in'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`dataProtectionChallenges-${option}`}
                            checked={formData.dataProtectionChallenges.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('dataProtectionChallenges', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`dataProtectionChallenges-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      17. How did you hear about our DPDP compliance services?
                    </Label>
                    <RadioGroup
                      value={formData.referralSource}
                      onValueChange={(value) => handleInputChange('referralSource', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="web-search" id="web-search-dpdp" />
                        <Label htmlFor="web-search-dpdp">Web search</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="linkedin" id="linkedin-dpdp" />
                        <Label htmlFor="linkedin-dpdp">LinkedIn</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="referral" id="referral-dpdp" />
                        <Label htmlFor="referral-dpdp">Professional referral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="conference" id="conference-dpdp" />
                        <Label htmlFor="conference-dpdp">Conference/event</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="existing-client" id="existing-client-dpdp" />
                        <Label htmlFor="existing-client-dpdp">Existing client</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-referral-dpdp" />
                        <Label htmlFor="other-referral-dpdp">Other</Label>
                      </div>
                    </RadioGroup>
                    {formData.referralSource === 'other' && (
                      <div className="mt-3">
                        <Input
                          placeholder="Please specify how you heard about us..."
                          value={formData.otherReferral}
                          onChange={(e) => handleInputChange('otherReferral', e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo" className="text-base font-medium text-gray-900 mb-2 block">
                      18. Additional information or specific questions about DPDP Act compliance
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Please share any additional context, specific concerns, or questions about DPDP Act compliance that would help us better understand your requirements..."
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      rows={4}
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
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit DPDP Discovery Questionnaire'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DPDPQuestionnaire; 