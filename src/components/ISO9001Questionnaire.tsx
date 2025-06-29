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
import { ISO9001FormData } from '@/types/questionnaire';
import { sendISO9001QuestionnaireResponse } from '@/services/emailService';

const ISO9001Questionnaire = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  
  const [formData, setFormData] = useState<ISO9001FormData>({
    // Organization Information
    companyName: '',
    industry: '',
    employeeCount: '',
    locations: 0,
    annualRevenue: '',
    
    // Current QMS Status
    currentQMS: '',
    isoCertified: '',
    certificationBody: '',
    certExpiry: '',
    currentStandards: [],
    
    // Project Objectives
    primaryGoal: '',
    keyDrivers: [],
    targetDate: '',
    
    // Current Quality Processes
    documentationLevel: '',
    currentProcesses: [],
    qualityMeasures: [],
    
    // Service Requirements
    serviceTypes: [],
    deliveryMethod: '',
    budget: '',
    urgency: '',
    
    // Challenges & Pain Points
    qualityChallenges: [],
    specificChallenges: '',
    previousFailures: '',
    failureReasons: '',
    
    // Organizational Readiness
    managementCommitment: '',
    qmrStatus: '',
    projectTeamSize: '',
    changeReadiness: '',
    
    // Technical Information
    productComplexity: '',
    regulatoryRequirements: '',
    regulatoryDetails: '',
    qualitySoftware: '',
    softwareDetails: '',
    
    // Contact Information
    contactName: '',
    jobTitle: '',
    email: '',
    phone: '',
    companyAddress: '',
    preferredContact: '',
    
    // Additional Information
    additionalComments: '',
    referralSource: '',
    newsletter: false,
    consent: false,
  });

  const handleCheckboxChange = (field: keyof ISO9001FormData, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.companyName || !formData.industry || !formData.primaryGoal || 
        !formData.contactName || !formData.jobTitle || !formData.email || !formData.consent) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields and provide consent.' });
      return;
    }

    // Validate service types (at least one required)
    if (formData.serviceTypes.length === 0) {
      setSubmitStatus({ type: 'error', message: 'Please select at least one service type you need.' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendISO9001QuestionnaireResponse(formData);
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your ISO 9001 questionnaire has been submitted successfully. We will email you a personalized quality management assessment within 24 hours.' 
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit questionnaire. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ISO 9001 Quality Management Discovery
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Help us understand your Quality Management System requirements to provide you with a tailored solution.
              </p>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>Estimated time:</strong> 15-20 minutes | <strong>Sections:</strong> 8 | <strong>Questions:</strong> 25-30
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Organization Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Organization Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="companyName" className="text-base font-medium text-gray-900 mb-2 block">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-base font-medium text-gray-900 mb-2 block">
                      Industry/Sector *
                    </Label>
                    <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="aerospace">Aerospace & Defense</SelectItem>
                        <SelectItem value="healthcare">Healthcare & Medical Devices</SelectItem>
                        <SelectItem value="food">Food & Beverage</SelectItem>
                        <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="it-software">IT & Software</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="consulting">Consulting Services</SelectItem>
                        <SelectItem value="logistics">Logistics & Transportation</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="financial">Financial Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employeeCount" className="text-base font-medium text-gray-900 mb-2 block">
                        Number of Employees
                      </Label>
                      <Select value={formData.employeeCount} onValueChange={(value) => setFormData(prev => ({ ...prev, employeeCount: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-100">51-100</SelectItem>
                          <SelectItem value="101-250">101-250</SelectItem>
                          <SelectItem value="251-500">251-500</SelectItem>
                          <SelectItem value="501-1000">501-1000</SelectItem>
                          <SelectItem value="1000+">1000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="locations" className="text-base font-medium text-gray-900 mb-2 block">
                        Number of Locations/Sites
                      </Label>
                      <Input
                        id="locations"
                        type="number"
                        min="1"
                        value={formData.locations || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, locations: parseInt(e.target.value) || 0 }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="annualRevenue" className="text-base font-medium text-gray-900 mb-2 block">
                      Annual Revenue (optional)
                    </Label>
                    <Select value={formData.annualRevenue} onValueChange={(value) => setFormData(prev => ({ ...prev, annualRevenue: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1m">Under $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5m-25m">$5M - $25M</SelectItem>
                        <SelectItem value="25m-100m">$25M - $100M</SelectItem>
                        <SelectItem value="100m-500m">$100M - $500M</SelectItem>
                        <SelectItem value="500m+">$500M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Current QMS Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Current Quality Management System Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      Do you currently have any quality management system in place?
                    </Label>
                    <RadioGroup
                      value={formData.currentQMS}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, currentQMS: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="qms-yes" />
                        <Label htmlFor="qms-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="qms-no" />
                        <Label htmlFor="qms-no">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="informal" id="qms-informal" />
                        <Label htmlFor="qms-informal">Informal processes only</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      Are you currently ISO 9001 certified?
                    </Label>
                    <RadioGroup
                      value={formData.isoCertified}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, isoCertified: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="iso-certified" />
                        <Label htmlFor="iso-certified">Yes, currently certified</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expired" id="iso-expired" />
                        <Label htmlFor="iso-expired">Previously certified (expired)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="iso-never" />
                        <Label htmlFor="iso-never">Never been certified</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {(formData.isoCertified === 'yes' || formData.isoCertified === 'expired') && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="certificationBody" className="text-base font-medium text-gray-900 mb-2 block">
                          Current/Previous Certification Body
                        </Label>
                        <Input
                          id="certificationBody"
                          type="text"
                          placeholder="e.g., BSI, SGS, DNV, etc."
                          value={formData.certificationBody}
                          onChange={(e) => setFormData(prev => ({ ...prev, certificationBody: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="certExpiry" className="text-base font-medium text-gray-900 mb-2 block">
                          Certification Expiry Date
                        </Label>
                        <Input
                          id="certExpiry"
                          type="date"
                          value={formData.certExpiry}
                          onChange={(e) => setFormData(prev => ({ ...prev, certExpiry: e.target.value }))}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      Which quality standards/frameworks do you currently follow? (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        { value: 'iso9001', label: 'ISO 9001' },
                        { value: 'iso14001', label: 'ISO 14001' },
                        { value: 'iso45001', label: 'ISO 45001' },
                        { value: 'iatf16949', label: 'IATF 16949' },
                        { value: 'as9100', label: 'AS9100' },
                        { value: 'iso13485', label: 'ISO 13485' },
                        { value: 'fda', label: 'FDA/GMP' },
                        { value: 'six-sigma', label: 'Six Sigma' },
                        { value: 'lean', label: 'Lean Manufacturing' },
                        { value: 'none', label: 'None' }
                      ].map((standard) => (
                        <div key={standard.value} className="flex items-center space-x-2">
                          <Checkbox
                            id={`std-${standard.value}`}
                            checked={formData.currentStandards.includes(standard.value)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('currentStandards', standard.value, checked as boolean)
                            }
                          />
                          <Label htmlFor={`std-${standard.value}`} className="text-sm">{standard.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Objectives */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Project Objectives & Goals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      What is your primary goal for this ISO 9001 project? *
                    </Label>
                    <RadioGroup
                      value={formData.primaryGoal}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, primaryGoal: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="initial-certification" id="goal-initial" />
                        <Label htmlFor="goal-initial">Initial certification</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="recertification" id="goal-recert" />
                        <Label htmlFor="goal-recert">Recertification</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="improvement" id="goal-improve" />
                        <Label htmlFor="goal-improve">System improvement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gap-analysis" id="goal-gap" />
                        <Label htmlFor="goal-gap">Gap analysis only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maintenance" id="goal-maintain" />
                        <Label htmlFor="goal-maintain">Ongoing maintenance</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      What are your key drivers for pursuing ISO 9001? (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { value: 'customer-requirement', label: 'Customer requirement' },
                        { value: 'tender-requirement', label: 'Tender/bidding requirement' },
                        { value: 'quality-improvement', label: 'Quality improvement' },
                        { value: 'operational-efficiency', label: 'Operational efficiency' },
                        { value: 'competitive-advantage', label: 'Competitive advantage' },
                        { value: 'regulatory-compliance', label: 'Regulatory compliance' },
                        { value: 'brand-reputation', label: 'Brand reputation' },
                        { value: 'cost-reduction', label: 'Cost reduction' }
                      ].map((driver) => (
                        <div key={driver.value} className="flex items-center space-x-2">
                          <Checkbox
                            id={`driver-${driver.value}`}
                            checked={formData.keyDrivers.includes(driver.value)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('keyDrivers', driver.value, checked as boolean)
                            }
                          />
                          <Label htmlFor={`driver-${driver.value}`} className="text-sm">{driver.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="targetDate" className="text-base font-medium text-gray-900 mb-2 block">
                      Target certification date
                    </Label>
                    <Input
                      id="targetDate"
                      type="date"
                      value={formData.targetDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, targetDate: e.target.value }))}
                    />
                    <p className="text-sm text-gray-600 mt-1">When would you like to achieve certification?</p>
                  </div>
                </CardContent>
              </Card>

              {/* Service Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Service Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      What type of support do you need? (Select all that apply) *
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { value: 'gap-analysis', label: 'Gap Analysis' },
                        { value: 'documentation', label: 'Documentation Development' },
                        { value: 'implementation', label: 'System Implementation' },
                        { value: 'training', label: 'Staff Training' },
                        { value: 'internal-audit', label: 'Internal Audit Support' },
                        { value: 'pre-assessment', label: 'Pre-certification Assessment' },
                        { value: 'ongoing-support', label: 'Ongoing Maintenance Support' },
                        { value: 'general-consulting', label: 'General Quality Consulting' }
                      ].map((service) => (
                        <div key={service.value} className="flex items-center space-x-2">
                          <Checkbox
                            id={`service-${service.value}`}
                            checked={formData.serviceTypes.includes(service.value)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('serviceTypes', service.value, checked as boolean)
                            }
                          />
                          <Label htmlFor={`service-${service.value}`} className="text-sm">{service.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="text-base font-medium text-gray-900 mb-2 block">
                        Estimated budget range
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k+">$250,000+</SelectItem>
                          <SelectItem value="not-sure">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base font-medium text-gray-900 mb-4 block">
                        Project urgency
                      </Label>
                      <RadioGroup
                        value={formData.urgency}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="asap" id="urgency-asap" />
                          <Label htmlFor="urgency-asap">ASAP (within 1 month)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3-months" id="urgency-3months" />
                          <Label htmlFor="urgency-3months">Within 3 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="6-months" id="urgency-6months" />
                          <Label htmlFor="urgency-6months">Within 6 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="planning" id="urgency-planning" />
                          <Label htmlFor="urgency-planning">Planning phase (6+ months)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName" className="text-base font-medium text-gray-900 mb-2 block">
                        Primary Contact Name *
                      </Label>
                      <Input
                        id="contactName"
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle" className="text-base font-medium text-gray-900 mb-2 block">
                        Job Title *
                      </Label>
                      <Input
                        id="jobTitle"
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-base font-medium text-gray-900 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium text-gray-900 mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="additionalComments" className="text-base font-medium text-gray-900 mb-2 block">
                      Additional comments or specific requirements
                    </Label>
                    <Textarea
                      id="additionalComments"
                      placeholder="Please share any additional information about your project, specific requirements, concerns, or questions..."
                      value={formData.additionalComments}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalComments: e.target.value }))}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      How did you hear about our services?
                    </Label>
                    <RadioGroup
                      value={formData.referralSource}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, referralSource: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="google" id="source-google" />
                        <Label htmlFor="source-google">Google search</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="referral" id="source-referral" />
                        <Label htmlFor="source-referral">Referral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="linkedin" id="source-linkedin" />
                        <Label htmlFor="source-linkedin">LinkedIn</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="website" id="source-website" />
                        <Label htmlFor="source-website">Company website</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="event" id="source-event" />
                        <Label htmlFor="source-event">Event/Conference</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="source-other" />
                        <Label htmlFor="source-other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        I would like to receive quality management tips and updates via email
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                        required
                      />
                      <Label htmlFor="consent" className="text-sm">
                        I consent to being contacted regarding this inquiry *
                      </Label>
                    </div>
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
                  className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Discovery Questionnaire'}
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  {isSubmitting ? 'Please wait while we process your submission...' : 'We\'ll review your responses and get back to you within 24 hours with a customized proposal.'}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISO9001Questionnaire; 