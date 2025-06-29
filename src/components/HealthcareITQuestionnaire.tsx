import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sendHealthcareITQuestionnaireResponse } from '@/services/emailService';
import { HealthcareITFormData } from '@/types/questionnaire';

const HealthcareITQuestionnaire: React.FC = () => {
  const [formData, setFormData] = useState<HealthcareITFormData>({
    organizationName: '',
    healthcareSector: '',
    otherSector: '',
    organizationSize: '',
    annualRevenue: '',
    contactEmail: '',
    hipaaRole: '',
    phiTypes: [],
    complianceDriver: '',
    hipaaStatus: '',
    hitrustGoal: '',
    hitrustReadiness: '',
    hitrustDrivers: [],
    securityMaturity: '',
    currentCertifications: [],
    securityIncidents: '',
    vendorManagement: '',
    hipaaSupport: [],
    hitrustSupport: [],
    implementationTimeline: '',
    technologyInfrastructure: '',
    healthcareSystems: [],
    budgetRange: '',
    complianceChallenges: [],
    stateRequirements: '',
    referralSource: '',
    otherReferral: '',
    additionalConcerns: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleInputChange = (name: keyof HealthcareITFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof HealthcareITFormData, value: string, checked: boolean) => {
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
    
    if (!formData.organizationName || !formData.healthcareSector || !formData.contactEmail) {
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
      await sendHealthcareITQuestionnaireResponse(formData);
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
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600">{submitStatus.message}</p>
            </div>
            <Button 
              onClick={() => window.location.href = '/services'}
              className="bg-rose-600 hover:bg-rose-700"
            >
              Return to Services
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthcare IT Compliance (HIPAA & HITRUST) Discovery Questionnaire
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Help us understand your healthcare IT compliance requirements, HIPAA obligations, and HITRUST certification goals.
              </p>
              <div className="mt-6 p-4 bg-rose-50 rounded-lg border border-rose-200">
                <p className="text-sm text-rose-800">
                  <strong>Estimated time:</strong> 25-30 minutes | <strong>Sections:</strong> 6 | <strong>Questions:</strong> 21
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
                      <Label htmlFor="organizationName" className="text-base font-medium text-gray-900 mb-2 block">
                        Organization Name *
                      </Label>
                      <Input
                        id="organizationName"
                        value={formData.organizationName}
                        onChange={(e) => handleInputChange('organizationName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-base font-medium text-gray-900 mb-3 block">
                        Healthcare Sector *
                      </Label>
                      <RadioGroup
                        value={formData.healthcareSector}
                        onValueChange={(value) => handleInputChange('healthcareSector', value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hospital-health-system" id="hospital-health-system" />
                          <Label htmlFor="hospital-health-system">Hospital/health system</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medical-practice" id="medical-practice" />
                          <Label htmlFor="medical-practice">Medical practice</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="health-plan-payer" id="health-plan-payer" />
                          <Label htmlFor="health-plan-payer">Health plan/payer</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="healthcare-technology-vendor" id="healthcare-technology-vendor" />
                          <Label htmlFor="healthcare-technology-vendor">Healthcare technology vendor</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business-associate" id="business-associate" />
                          <Label htmlFor="business-associate">Business associate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other-sector" />
                          <Label htmlFor="other-sector">Other</Label>
                        </div>
                      </RadioGroup>
                      {formData.healthcareSector === 'other' && (
                        <div className="mt-3">
                          <Input
                            placeholder="Please specify..."
                            value={formData.otherSector}
                            onChange={(e) => handleInputChange('otherSector', e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="organizationSize" className="text-base font-medium text-gray-900 mb-2 block">
                        Organization Size
                      </Label>
                      <Input
                        id="organizationSize"
                        value={formData.organizationSize}
                        onChange={(e) => handleInputChange('organizationSize', e.target.value)}
                      />
                    </div>
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
                </CardContent>
              </Card>

              {/* A. HIPAA Compliance Context */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">A. HIPAA Compliance Context</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      1. Your role under HIPAA
                    </Label>
                    <RadioGroup
                      value={formData.hipaaRole}
                      onValueChange={(value) => handleInputChange('hipaaRole', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="covered-entity" id="covered-entity" />
                        <Label htmlFor="covered-entity">Covered Entity</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business-associate" id="business-associate-role" />
                        <Label htmlFor="business-associate-role">Business Associate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="subcontractor" id="subcontractor" />
                        <Label htmlFor="subcontractor">Subcontractor to Business Associate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid-entity" id="hybrid-entity" />
                        <Label htmlFor="hybrid-entity">Hybrid Entity</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncertain" id="uncertain-role" />
                        <Label htmlFor="uncertain-role">Uncertain about HIPAA classification</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      2. Types of PHI handled (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Electronic Health Records (EHR)',
                        'Medical imaging and diagnostics',
                        'Laboratory results and pathology',
                        'Billing and claims information',
                        'Patient registration and demographics',
                        'Prescription and pharmacy data',
                        'Mental health records',
                        'Genetic information',
                        'Research data'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`phiTypes-${option}`}
                            checked={formData.phiTypes.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('phiTypes', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`phiTypes-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      3. Primary driver for HIPAA compliance
                    </Label>
                    <RadioGroup
                      value={formData.complianceDriver}
                      onValueChange={(value) => handleInputChange('complianceDriver', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="regulatory-requirement" id="regulatory-requirement" />
                        <Label htmlFor="regulatory-requirement">Regulatory requirement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business-contracts" id="business-contracts" />
                        <Label htmlFor="business-contracts">Business associate contracts</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="security-incident" id="security-incident" />
                        <Label htmlFor="security-incident">Recent security incident</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="audit-finding" id="audit-finding" />
                        <Label htmlFor="audit-finding">Audit finding or breach</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="proactive-compliance" id="proactive-compliance" />
                        <Label htmlFor="proactive-compliance">Proactive compliance improvement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="certification-requirement" id="certification-requirement" />
                        <Label htmlFor="certification-requirement">HITRUST or other certification requirement</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      4. Current HIPAA compliance status
                    </Label>
                    <RadioGroup
                      value={formData.hipaaStatus}
                      onValueChange={(value) => handleInputChange('hipaaStatus', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-not-started" id="1-not-started" />
                        <Label htmlFor="1-not-started">1 - Haven't started HIPAA compliance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-basic-awareness" id="2-basic-awareness" />
                        <Label htmlFor="2-basic-awareness">2 - Basic awareness, initial planning</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-implementation-progress" id="3-implementation-progress" />
                        <Label htmlFor="3-implementation-progress">3 - Implementation in progress</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4-largely-compliant" id="4-largely-compliant" />
                        <Label htmlFor="4-largely-compliant">4 - Largely compliant, some gaps</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-fully-compliant" id="5-fully-compliant" />
                        <Label htmlFor="5-fully-compliant">5 - Fully compliant with regular monitoring</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* B. HITRUST Assessment Interest */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">B. HITRUST Assessment Interest</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      5. HITRUST certification goal
                    </Label>
                    <RadioGroup
                      value={formData.hitrustGoal}
                      onValueChange={(value) => handleInputChange('hitrustGoal', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="csr-certification" id="csr-certification" />
                        <Label htmlFor="csr-certification">HITRUST CSR Certification</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="csf-assurance" id="csf-assurance" />
                        <Label htmlFor="csf-assurance">HITRUST CSF Assurance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="readiness-assessment" id="readiness-assessment" />
                        <Label htmlFor="readiness-assessment">HITRUST readiness assessment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="self-assessment" id="self-assessment" />
                        <Label htmlFor="self-assessment">Self-assessment against HITRUST CSF</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not-pursuing" id="not-pursuing" />
                        <Label htmlFor="not-pursuing">Not currently pursuing HITRUST</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      6. HITRUST readiness level
                    </Label>
                    <RadioGroup
                      value={formData.hitrustReadiness}
                      onValueChange={(value) => handleInputChange('hitrustReadiness', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-exploring" id="1-exploring" />
                        <Label htmlFor="1-exploring">1 - Just exploring HITRUST</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-planning" id="2-planning" />
                        <Label htmlFor="2-planning">2 - Planning HITRUST implementation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-implementation" id="3-implementation" />
                        <Label htmlFor="3-implementation">3 - Currently implementing controls</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4-pre-assessment" id="4-pre-assessment" />
                        <Label htmlFor="4-pre-assessment">4 - Ready for pre-assessment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-certification-ready" id="5-certification-ready" />
                        <Label htmlFor="5-certification-ready">5 - Ready for certification assessment</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      7. HITRUST business drivers (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Customer contractual requirements',
                        'Competitive differentiation',
                        'Business associate obligations',
                        'Risk management and insurance',
                        'Regulatory compliance demonstration',
                        'Third-party vendor requirements',
                        'Board or executive mandate',
                        'Industry best practice adoption'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`hitrustDrivers-${option}`}
                            checked={formData.hitrustDrivers.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('hitrustDrivers', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`hitrustDrivers-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* C. Current Security and Compliance Posture */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">C. Current Security and Compliance Posture</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      8. Information security maturity level
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
                        <RadioGroupItem value="2-developing" id="2-developing" />
                        <Label htmlFor="2-developing">2 - Developing security program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-defined" id="3-defined" />
                        <Label htmlFor="3-defined">3 - Defined security policies and procedures</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4-managed" id="4-managed" />
                        <Label htmlFor="4-managed">4 - Managed and monitored security</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-optimized" id="5-optimized" />
                        <Label htmlFor="5-optimized">5 - Optimized and continuously improving</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      9. Current healthcare compliance certifications (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'HITRUST CSF Certification',
                        'SOC 2 Type II',
                        'ISO 27001',
                        'FedRAMP',
                        'HIPAA Risk Assessment',
                        'State-specific healthcare certifications',
                        'Joint Commission accreditation',
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
                      10. Recent security incidents or breaches
                    </Label>
                    <RadioGroup
                      value={formData.securityIncidents}
                      onValueChange={(value) => handleInputChange('securityIncidents', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-incidents" id="no-incidents" />
                        <Label htmlFor="no-incidents">No recent incidents</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="minor-incidents" id="minor-incidents" />
                        <Label htmlFor="minor-incidents">Minor security incidents (contained)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="significant-incidents" id="significant-incidents" />
                        <Label htmlFor="significant-incidents">Significant incidents requiring reporting</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="breach-reported" id="breach-reported" />
                        <Label htmlFor="breach-reported">Data breach requiring OCR reporting</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ongoing-concerns" id="ongoing-concerns" />
                        <Label htmlFor="ongoing-concerns">Ongoing security concerns</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      11. Third-party vendor risk management
                    </Label>
                    <RadioGroup
                      value={formData.vendorManagement}
                      onValueChange={(value) => handleInputChange('vendorManagement', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comprehensive-program" id="comprehensive-program" />
                        <Label htmlFor="comprehensive-program">Comprehensive vendor risk program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="basic-due-diligence" id="basic-due-diligence" />
                        <Label htmlFor="basic-due-diligence">Basic due diligence process</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="contract-based-only" id="contract-based-only" />
                        <Label htmlFor="contract-based-only">Contract-based controls only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ad-hoc-assessment" id="ad-hoc-assessment" />
                        <Label htmlFor="ad-hoc-assessment">Ad-hoc vendor assessments</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-formal-process" id="no-formal-process" />
                        <Label htmlFor="no-formal-process">No formal vendor risk process</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* D. Implementation and Support Needs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">D. Implementation and Support Needs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      12. HIPAA compliance support needed (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Risk assessment and gap analysis',
                        'Policy and procedure development',
                        'Employee training programs',
                        'Business associate agreements',
                        'Incident response planning',
                        'Breach notification procedures',
                        'Technical safeguards implementation',
                        'Ongoing compliance monitoring'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`hipaaSupport-${option}`}
                            checked={formData.hipaaSupport.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('hipaaSupport', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`hipaaSupport-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      13. HITRUST support services needed (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'HITRUST CSF readiness assessment',
                        'Control implementation support',
                        'Documentation and evidence preparation',
                        'Pre-assessment validation',
                        'Assessment facilitation',
                        'Remediation planning and support',
                        'Ongoing maintenance and monitoring',
                        'Staff training on HITRUST CSF'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`hitrustSupport-${option}`}
                            checked={formData.hitrustSupport.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('hitrustSupport', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`hitrustSupport-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      14. Implementation timeline
                    </Label>
                    <RadioGroup
                      value={formData.implementationTimeline}
                      onValueChange={(value) => handleInputChange('implementationTimeline', value)}
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
                        <RadioGroupItem value="phased-multi-year" id="phased-multi-year" />
                        <Label htmlFor="phased-multi-year">Phased approach over multiple years</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* E. Technical Environment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">E. Technical Environment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      15. Technology infrastructure description
                    </Label>
                    <RadioGroup
                      value={formData.technologyInfrastructure}
                      onValueChange={(value) => handleInputChange('technologyInfrastructure', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="on-premise-legacy" id="on-premise-legacy" />
                        <Label htmlFor="on-premise-legacy">Primarily on-premise with legacy systems</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid-cloud-modern" id="hybrid-cloud-modern" />
                        <Label htmlFor="hybrid-cloud-modern">Hybrid cloud with modern infrastructure</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cloud-first" id="cloud-first" />
                        <Label htmlFor="cloud-first">Cloud-first strategy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multi-cloud-complex" id="multi-cloud-complex" />
                        <Label htmlFor="multi-cloud-complex">Multi-cloud with complex integrations</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="modernization-progress" id="modernization-progress" />
                        <Label htmlFor="modernization-progress">Legacy modernization in progress</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      16. Key healthcare systems in environment (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Electronic Health Records (EHR/EMR)',
                        'Practice Management Systems',
                        'Laboratory Information Systems (LIS)',
                        'Radiology/PACS systems',
                        'Revenue Cycle Management',
                        'Clinical Decision Support Systems',
                        'Telehealth/telemedicine platforms',
                        'Patient portals and mobile apps',
                        'Claims processing systems',
                        'Pharmacy management systems'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`healthcareSystems-${option}`}
                            checked={formData.healthcareSystems.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('healthcareSystems', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`healthcareSystems-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      17. Estimated budget range for healthcare IT compliance
                    </Label>
                    <RadioGroup
                      value={formData.budgetRange}
                      onValueChange={(value) => handleInputChange('budgetRange', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-100k" id="under-100k" />
                        <Label htmlFor="under-100k">Under $100,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100k-250k" id="100k-250k" />
                        <Label htmlFor="100k-250k">$100,000 - $250,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="250k-500k" id="250k-500k" />
                        <Label htmlFor="250k-500k">$250,000 - $500,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="500k-1m" id="500k-1m" />
                        <Label htmlFor="500k-1m">$500,000 - $1,000,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="over-1m" id="over-1m" />
                        <Label htmlFor="over-1m">Over $1,000,000</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* F. Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">F. Additional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      18. Specific healthcare compliance challenges (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Complex multi-state operations',
                        'Legacy system integration challenges',
                        'Interoperability requirements',
                        'Cloud migration security concerns',
                        'Business associate oversight',
                        'Mobile device and BYOD security',
                        'Telemedicine compliance',
                        'Medical device security',
                        'Research data management',
                        'Merger and acquisition integrations'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`complianceChallenges-${option}`}
                            checked={formData.complianceChallenges.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('complianceChallenges', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`complianceChallenges-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      19. State-specific healthcare requirements or considerations
                    </Label>
                    <Textarea
                      placeholder="Please describe any state-specific healthcare regulations, privacy laws, or compliance requirements that apply to your organization..."
                      value={formData.stateRequirements}
                      onChange={(e) => handleInputChange('stateRequirements', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      20. How did you hear about our healthcare IT compliance services?
                    </Label>
                    <RadioGroup
                      value={formData.referralSource}
                      onValueChange={(value) => handleInputChange('referralSource', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="web-search" id="web-search-healthcare" />
                        <Label htmlFor="web-search-healthcare">Web search</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="linkedin" id="linkedin-healthcare" />
                        <Label htmlFor="linkedin-healthcare">LinkedIn</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="healthcare-conference" id="healthcare-conference" />
                        <Label htmlFor="healthcare-conference">Healthcare industry conference</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="professional-referral" id="professional-referral" />
                        <Label htmlFor="professional-referral">Professional referral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="existing-client" id="existing-client-healthcare" />
                        <Label htmlFor="existing-client-healthcare">Existing client</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partner-recommendation" id="partner-recommendation" />
                        <Label htmlFor="partner-recommendation">Technology partner recommendation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-referral-healthcare" />
                        <Label htmlFor="other-referral-healthcare">Other</Label>
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
                    <Label htmlFor="additionalConcerns" className="text-base font-medium text-gray-900 mb-2 block">
                      21. Additional healthcare compliance concerns or specific requirements
                    </Label>
                    <Textarea
                      id="additionalConcerns"
                      placeholder="Please share any additional concerns, specific compliance requirements, recent audit findings, or particular areas you'd like us to focus on for your healthcare organization..."
                      value={formData.additionalConcerns}
                      onChange={(e) => handleInputChange('additionalConcerns', e.target.value)}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white py-3 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Healthcare IT Discovery Questionnaire'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareITQuestionnaire; 