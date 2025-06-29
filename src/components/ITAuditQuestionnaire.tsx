import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sendITAuditQuestionnaireResponse } from '@/services/emailService';
import { ITAuditFormData } from '@/types/questionnaire';

const ITAuditQuestionnaire: React.FC = () => {
  const [formData, setFormData] = useState<ITAuditFormData>({
    companyName: '',
    industry: '',
    organizationType: '',
    otherOrgType: '',
    employeeCount: '',
    annualRevenue: '',
    contactEmail: '',
    auditType: '',
    otherAuditType: '',
    primaryDriver: '',
    auditScope: [],
    complianceFrameworks: [],
    infrastructureComplexity: '',
    technologyEnvironment: '',
    itGovernanceMaturity: '',
    previousAuditExperience: '',
    auditDepth: '',
    criticalSystems: [],
    auditTimeline: '',
    auditServices: [],
    industryConsiderations: [],
    internalAuditCollaboration: '',
    reportingPreferences: [],
    budgetRange: '',
    keyStakeholders: [],
    referralSource: '',
    otherReferral: '',
    auditConcerns: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleInputChange = (name: keyof ITAuditFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof ITAuditFormData, value: string, checked: boolean) => {
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
    
    if (!formData.companyName || !formData.industry || !formData.organizationType || !formData.contactEmail) {
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
      await sendITAuditQuestionnaireResponse(formData);
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600">{submitStatus.message}</p>
            </div>
            <Button 
              onClick={() => window.location.href = '/services'}
              className="bg-slate-600 hover:bg-slate-700"
            >
              Return to Services
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IT Audit and Assurance Services Discovery Questionnaire
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Help us understand your IT audit requirements, technology environment, and compliance objectives.
              </p>
              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-800">
                  <strong>Estimated time:</strong> 15-20 minutes | <strong>Sections:</strong> 5 | <strong>Questions:</strong> 19
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
                        Organization Type *
                      </Label>
                      <RadioGroup
                        value={formData.organizationType}
                        onValueChange={(value) => handleInputChange('organizationType', value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="public-company" id="public-company" />
                          <Label htmlFor="public-company">Public company</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="private-company" id="private-company" />
                          <Label htmlFor="private-company">Private company</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="government-entity" id="government-entity" />
                          <Label htmlFor="government-entity">Government entity</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="non-profit" id="non-profit" />
                          <Label htmlFor="non-profit">Non-profit organization</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other-org" />
                          <Label htmlFor="other-org">Other</Label>
                        </div>
                      </RadioGroup>
                      {formData.organizationType === 'other' && (
                        <div className="mt-3">
                          <Input
                            placeholder="Please specify..."
                            value={formData.otherOrgType}
                            onChange={(e) => handleInputChange('otherOrgType', e.target.value)}
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

              {/* A. IT Audit Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">A. IT Audit Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      1. Type of IT audit needed
                    </Label>
                    <RadioGroup
                      value={formData.auditType}
                      onValueChange={(value) => handleInputChange('auditType', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comprehensive-it-audit" id="comprehensive-it-audit" />
                        <Label htmlFor="comprehensive-it-audit">Comprehensive IT audit</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cybersecurity-audit" id="cybersecurity-audit" />
                        <Label htmlFor="cybersecurity-audit">Cybersecurity-focused audit</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compliance-audit" id="compliance-audit" />
                        <Label htmlFor="compliance-audit">Compliance audit (SOX, GDPR, etc.)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="infrastructure-audit" id="infrastructure-audit" />
                        <Label htmlFor="infrastructure-audit">IT infrastructure audit</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="application-audit" id="application-audit" />
                        <Label htmlFor="application-audit">Application security audit</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-audit-type" />
                        <Label htmlFor="other-audit-type">Other</Label>
                      </div>
                    </RadioGroup>
                    {formData.auditType === 'other' && (
                      <div className="mt-3">
                        <Input
                          placeholder="Please specify the type of IT audit needed..."
                          value={formData.otherAuditType}
                          onChange={(e) => handleInputChange('otherAuditType', e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      2. Primary driver for IT audit
                    </Label>
                    <RadioGroup
                      value={formData.primaryDriver}
                      onValueChange={(value) => handleInputChange('primaryDriver', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="regulatory-compliance" id="regulatory-compliance" />
                        <Label htmlFor="regulatory-compliance">Regulatory compliance requirement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="board-requirement" id="board-requirement" />
                        <Label htmlFor="board-requirement">Board or audit committee requirement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="security-concerns" id="security-concerns" />
                        <Label htmlFor="security-concerns">Security incident or concerns</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="due-diligence" id="due-diligence" />
                        <Label htmlFor="due-diligence">M&A due diligence</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="insurance-requirement" id="insurance-requirement" />
                        <Label htmlFor="insurance-requirement">Insurance requirement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="proactive-assessment" id="proactive-assessment" />
                        <Label htmlFor="proactive-assessment">Proactive risk assessment</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      3. Audit scope and focus areas (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Network security and infrastructure',
                        'Data protection and privacy',
                        'Application security',
                        'Access controls and identity management',
                        'Business continuity and disaster recovery',
                        'IT governance and policies',
                        'Third-party vendor management',
                        'Cloud security and architecture'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`auditScope-${option}`}
                            checked={formData.auditScope.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('auditScope', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`auditScope-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      4. Target compliance frameworks (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'SOX (Sarbanes-Oxley)',
                        'PCI DSS',
                        'HIPAA',
                        'GDPR',
                        'ISO 27001',
                        'NIST Framework',
                        'COBIT',
                        'ITIL'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`complianceFrameworks-${option}`}
                            checked={formData.complianceFrameworks.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('complianceFrameworks', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`complianceFrameworks-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* B. Current IT Environment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">B. Current IT Environment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      5. IT infrastructure complexity level
                    </Label>
                    <RadioGroup
                      value={formData.infrastructureComplexity}
                      onValueChange={(value) => handleInputChange('infrastructureComplexity', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="simple-single-location" id="simple-single-location" />
                        <Label htmlFor="simple-single-location">Simple - single location, basic systems</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate-multiple-locations" id="moderate-multiple-locations" />
                        <Label htmlFor="moderate-multiple-locations">Moderate - multiple locations, integrated systems</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="complex-distributed" id="complex-distributed" />
                        <Label htmlFor="complex-distributed">Complex - distributed architecture, multiple platforms</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="highly-complex" id="highly-complex" />
                        <Label htmlFor="highly-complex">Highly complex - global operations, diverse technologies</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      6. Technology environment description
                    </Label>
                    <RadioGroup
                      value={formData.technologyEnvironment}
                      onValueChange={(value) => handleInputChange('technologyEnvironment', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="primarily-on-premise" id="primarily-on-premise" />
                        <Label htmlFor="primarily-on-premise">Primarily on-premise infrastructure</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid-cloud" id="hybrid-cloud" />
                        <Label htmlFor="hybrid-cloud">Hybrid cloud environment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="primarily-cloud" id="primarily-cloud" />
                        <Label htmlFor="primarily-cloud">Primarily cloud-based</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multi-cloud" id="multi-cloud" />
                        <Label htmlFor="multi-cloud">Multi-cloud strategy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="legacy-modernization" id="legacy-modernization" />
                        <Label htmlFor="legacy-modernization">Legacy systems undergoing modernization</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      7. IT governance maturity level
                    </Label>
                    <RadioGroup
                      value={formData.itGovernanceMaturity}
                      onValueChange={(value) => handleInputChange('itGovernanceMaturity', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-initial" id="1-initial" />
                        <Label htmlFor="1-initial">1 - Initial/Ad-hoc processes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-developing" id="2-developing" />
                        <Label htmlFor="2-developing">2 - Developing governance structure</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-defined" id="3-defined" />
                        <Label htmlFor="3-defined">3 - Defined processes and policies</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4-managed" id="4-managed" />
                        <Label htmlFor="4-managed">4 - Managed and monitored</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-optimized" id="5-optimized" />
                        <Label htmlFor="5-optimized">5 - Optimized governance practices</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      8. Previous IT audit experience
                    </Label>
                    <RadioGroup
                      value={formData.previousAuditExperience}
                      onValueChange={(value) => handleInputChange('previousAuditExperience', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="never-audited" id="never-audited" />
                        <Label htmlFor="never-audited">Never had an IT audit</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="limited-experience" id="limited-experience" />
                        <Label htmlFor="limited-experience">Limited audit experience</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="regular-audits" id="regular-audits" />
                        <Label htmlFor="regular-audits">Regular IT audits conducted</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mature-audit-program" id="mature-audit-program" />
                        <Label htmlFor="mature-audit-program">Mature internal audit program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="recent-issues" id="recent-issues" />
                        <Label htmlFor="recent-issues">Recent audit findings to address</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* C. Audit Scope and Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">C. Audit Scope and Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      9. Desired audit depth and coverage
                    </Label>
                    <RadioGroup
                      value={formData.auditDepth}
                      onValueChange={(value) => handleInputChange('auditDepth', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high-level-assessment" id="high-level-assessment" />
                        <Label htmlFor="high-level-assessment">High-level risk assessment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="detailed-controls-testing" id="detailed-controls-testing" />
                        <Label htmlFor="detailed-controls-testing">Detailed controls testing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comprehensive-deep-dive" id="comprehensive-deep-dive" />
                        <Label htmlFor="comprehensive-deep-dive">Comprehensive deep-dive audit</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="focused-areas" id="focused-areas" />
                        <Label htmlFor="focused-areas">Focused on specific high-risk areas</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="continuous-monitoring" id="continuous-monitoring" />
                        <Label htmlFor="continuous-monitoring">Continuous monitoring approach</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      10. Critical systems in scope (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Financial reporting systems',
                        'Customer data systems',
                        'Core business applications',
                        'Network infrastructure',
                        'Cloud platforms and services',
                        'Mobile applications',
                        'IoT devices and sensors',
                        'Development and testing environments'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`criticalSystems-${option}`}
                            checked={formData.criticalSystems.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('criticalSystems', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`criticalSystems-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      11. Audit timeline requirements
                    </Label>
                    <RadioGroup
                      value={formData.auditTimeline}
                      onValueChange={(value) => handleInputChange('auditTimeline', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="urgent-4-weeks" id="urgent-4-weeks" />
                        <Label htmlFor="urgent-4-weeks">Urgent (within 4 weeks)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard-8-weeks" id="standard-8-weeks" />
                        <Label htmlFor="standard-8-weeks">Standard (6-8 weeks)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comprehensive-12-weeks" id="comprehensive-12-weeks" />
                        <Label htmlFor="comprehensive-12-weeks">Comprehensive (10-12 weeks)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phased-approach" id="phased-approach" />
                        <Label htmlFor="phased-approach">Phased approach over multiple months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible-timing" id="flexible-timing" />
                        <Label htmlFor="flexible-timing">Flexible timing</Label>
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
                      12. IT audit services needed (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Risk assessment and gap analysis',
                        'Controls design and testing',
                        'Vulnerability assessments',
                        'Penetration testing',
                        'Policy and procedure review',
                        'Remediation roadmap development',
                        'Staff training and awareness',
                        'Ongoing monitoring and support'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`auditServices-${option}`}
                            checked={formData.auditServices.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('auditServices', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`auditServices-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      13. Industry-specific audit considerations (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Financial services regulations',
                        'Healthcare compliance (HIPAA)',
                        'Government contracting requirements',
                        'Manufacturing and supply chain',
                        'Retail and payment processing',
                        'Education sector requirements',
                        'Energy and utilities compliance',
                        'International operations'
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
                      14. Internal audit function collaboration
                    </Label>
                    <RadioGroup
                      value={formData.internalAuditCollaboration}
                      onValueChange={(value) => handleInputChange('internalAuditCollaboration', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-internal-audit" id="no-internal-audit" />
                        <Label htmlFor="no-internal-audit">No internal audit function</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="limited-internal-audit" id="limited-internal-audit" />
                        <Label htmlFor="limited-internal-audit">Limited internal audit capabilities</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="collaborative-approach" id="collaborative-approach" />
                        <Label htmlFor="collaborative-approach">Collaborative approach with internal audit</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="internal-audit-oversight" id="internal-audit-oversight" />
                        <Label htmlFor="internal-audit-oversight">Internal audit oversight and coordination</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="independent-external" id="independent-external" />
                        <Label htmlFor="independent-external">Independent external assessment</Label>
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
                      15. Audit reporting preferences (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Executive summary for board/leadership',
                        'Detailed technical findings',
                        'Risk-rated recommendations',
                        'Implementation timeline and roadmap',
                        'Benchmarking against industry standards',
                        'Periodic progress updates',
                        'Dashboard and metrics reporting',
                        'Regulatory compliance attestation'
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`reportingPreferences-${option}`}
                            checked={formData.reportingPreferences.includes(option)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('reportingPreferences', option, checked as boolean)
                            }
                          />
                          <Label htmlFor={`reportingPreferences-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      16. Estimated budget range for IT audit
                    </Label>
                    <RadioGroup
                      value={formData.budgetRange}
                      onValueChange={(value) => handleInputChange('budgetRange', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-50k" id="under-50k" />
                        <Label htmlFor="under-50k">Under $50,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="50k-100k" id="50k-100k" />
                        <Label htmlFor="50k-100k">$50,000 - $100,000</Label>
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
                        <RadioGroupItem value="over-500k" id="over-500k" />
                        <Label htmlFor="over-500k">Over $500,000</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      17. Key stakeholders for audit (select all that apply)
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Board of Directors/Audit Committee',
                        'C-Suite executives',
                        'IT leadership team',
                        'Risk management team',
                        'Compliance officers',
                        'Internal audit team',
                        'Legal counsel',
                        'External auditors'
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
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      18. How did you hear about our IT audit services?
                    </Label>
                    <RadioGroup
                      value={formData.referralSource}
                      onValueChange={(value) => handleInputChange('referralSource', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="web-search" id="web-search-it" />
                        <Label htmlFor="web-search-it">Web search</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="linkedin" id="linkedin-it" />
                        <Label htmlFor="linkedin-it">LinkedIn</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="referral" id="referral-it" />
                        <Label htmlFor="referral-it">Professional referral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="conference" id="conference-it" />
                        <Label htmlFor="conference-it">Conference/event</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="existing-client" id="existing-client-it" />
                        <Label htmlFor="existing-client-it">Existing client</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-referral-it" />
                        <Label htmlFor="other-referral-it">Other</Label>
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
                    <Label htmlFor="auditConcerns" className="text-base font-medium text-gray-900 mb-2 block">
                      19. Specific IT audit concerns or areas of focus
                    </Label>
                    <Textarea
                      id="auditConcerns"
                      placeholder="Please share any specific concerns, recent incidents, or particular areas you'd like the audit to focus on..."
                      value={formData.auditConcerns}
                      onChange={(e) => handleInputChange('auditConcerns', e.target.value)}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white py-3 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit IT Audit Discovery Questionnaire'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITAuditQuestionnaire; 