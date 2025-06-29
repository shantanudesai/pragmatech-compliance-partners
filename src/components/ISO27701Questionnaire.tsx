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
import { ISO27701FormData } from '@/types/questionnaire';
import { sendISO27701QuestionnaireResponse } from '@/services/emailService';

const ISO27701Questionnaire = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  
  const [formData, setFormData] = useState<ISO27701FormData>({
    // Contact Information
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    
    // Business Context & Privacy Drivers
    primaryDriver: '',
    otherDriver: '',
    privacyOutcomes: [],
    otherOutcome: '',
    iso27001Status: '',
    managementSponsorship: '',
    
    // Current Privacy Posture
    privacyMaturity: '',
    dataProcessingScope: '',
    otherDataScope: '',
    geographicScope: '',
    otherGeoScope: '',
    privacyIncidents: '',
    
    // Implementation Requirements
    pimsScope: '',
    targetTimeline: '',
    budgetRange: '',
    
    // Additional Privacy Context
    privacyRegulations: [],
    dpoStatus: '',
    additionalInfo: '',
  });

  const handleCheckboxChange = (field: keyof ISO27701FormData, value: string, checked: boolean) => {
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
    if (!formData.fullName || !formData.email || !formData.company || !formData.jobTitle) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
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
      const result = await sendISO27701QuestionnaireResponse(formData);
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your ISO 27701 questionnaire has been submitted successfully. We will email you a personalized privacy management assessment within 24 hours.' 
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ISO 27701 Privacy Information Management Discovery
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Help us understand your Privacy Information Management System requirements and current privacy posture.
              </p>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-800">
                  <strong>Estimated time:</strong> 10-15 minutes | <strong>Sections:</strong> 4 | <strong>Questions:</strong> 14
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-base font-medium text-gray-900 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        required
                      />
                    </div>
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
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-base font-medium text-gray-900 mb-2 block">
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle" className="text-base font-medium text-gray-900 mb-2 block">
                        Job Title
                      </Label>
                      <Input
                        id="jobTitle"
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Context & Privacy Drivers */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">A. Business Context & Privacy Drivers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      1. Primary driver for ISO 27701 implementation?
                    </Label>
                    <RadioGroup
                      value={formData.primaryDriver}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, primaryDriver: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="client-regulatory" id="client-regulatory" />
                        <Label htmlFor="client-regulatory">Client/regulatory requirement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gdpr-compliance" id="gdpr-compliance" />
                        <Label htmlFor="gdpr-compliance">GDPR compliance enhancement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="privacy-maturation" id="privacy-maturation" />
                        <Label htmlFor="privacy-maturation">Privacy program maturation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="iso27001-integration" id="iso27001-integration" />
                        <Label htmlFor="iso27001-integration">Integration with existing ISO 27001</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="competitive-differentiation" id="competitive-differentiation" />
                        <Label htmlFor="competitive-differentiation">Competitive differentiation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-driver" />
                        <Label htmlFor="other-driver">Other</Label>
                      </div>
                    </RadioGroup>
                    {formData.primaryDriver === 'other' && (
                      <div className="mt-2">
                        <Input
                          placeholder="Please specify..."
                          value={formData.otherDriver}
                          onChange={(e) => setFormData(prev => ({ ...prev, otherDriver: e.target.value }))}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      2. Top 3 privacy outcomes your PIMS must deliver
                    </Label>
                    <div className="space-y-2">
                      {[
                        'Demonstrate GDPR compliance',
                        'Support cross-border data transfers',
                        'Build customer trust',
                        'Meet contractual obligations',
                        'Reduce privacy risk exposure'
                      ].map((outcome) => (
                        <div key={outcome} className="flex items-center space-x-2">
                          <Checkbox
                            id={outcome}
                            checked={formData.privacyOutcomes.includes(outcome)}
                            onCheckedChange={(checked) => handleCheckboxChange('privacyOutcomes', outcome, checked as boolean)}
                          />
                          <Label htmlFor={outcome}>{outcome}</Label>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="other-outcome"
                          checked={formData.privacyOutcomes.includes('Other')}
                          onCheckedChange={(checked) => handleCheckboxChange('privacyOutcomes', 'Other', checked as boolean)}
                        />
                        <Label htmlFor="other-outcome">Other</Label>
                      </div>
                    </div>
                    {formData.privacyOutcomes.includes('Other') && (
                      <div className="mt-2">
                        <Input
                          placeholder="Please specify other outcome..."
                          value={formData.otherOutcome}
                          onChange={(e) => setFormData(prev => ({ ...prev, otherOutcome: e.target.value }))}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      3. Current ISO 27001 certification status
                    </Label>
                    <Select value={formData.iso27001Status} onValueChange={(value) => setFormData(prev => ({ ...prev, iso27001Status: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ISO 27001 status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="currently-certified">Currently certified</SelectItem>
                        <SelectItem value="implementation-progress">Implementation in progress</SelectItem>
                        <SelectItem value="planning-implement">Planning to implement</SelectItem>
                        <SelectItem value="not-pursuing">Not pursuing ISO 27001</SelectItem>
                        <SelectItem value="previously-certified">Previously certified (expired)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      4. Does top management sponsor this privacy initiative?
                    </Label>
                    <Select value={formData.managementSponsorship} onValueChange={(value) => setFormData(prev => ({ ...prev, managementSponsorship: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select management sponsorship level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-dedicated-budget">Yes, with dedicated budget</SelectItem>
                        <SelectItem value="yes-limited-resources">Yes, but limited resources</SelectItem>
                        <SelectItem value="partial-support">Partial support</SelectItem>
                        <SelectItem value="no-formal-sponsorship">No formal sponsorship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Current Privacy Posture */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">B. Current Privacy Posture</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      5. Privacy program maturity level
                    </Label>
                    <RadioGroup
                      value={formData.privacyMaturity}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, privacyMaturity: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="maturity-1" />
                        <Label htmlFor="maturity-1">1 - No formal privacy program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="maturity-2" />
                        <Label htmlFor="maturity-2">2 - Basic privacy policies only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="maturity-3" />
                        <Label htmlFor="maturity-3">3 - Structured privacy processes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4" id="maturity-4" />
                        <Label htmlFor="maturity-4">4 - Managed privacy program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5" id="maturity-5" />
                        <Label htmlFor="maturity-5">5 - Optimized privacy management</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      6. Personal data processing scope
                    </Label>
                    <RadioGroup
                      value={formData.dataProcessingScope}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, dataProcessingScope: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="customer-data-only" id="customer-data-only" />
                        <Label htmlFor="customer-data-only">Customer data only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="employee-data-only" id="employee-data-only" />
                        <Label htmlFor="employee-data-only">Employee data only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both-customer-employee" id="both-customer-employee" />
                        <Label htmlFor="both-customer-employee">Both customer and employee data</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="special-category" id="special-category" />
                        <Label htmlFor="special-category">Special category data (health, biometric, etc.)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="children-data" id="children-data" />
                        <Label htmlFor="children-data">Children's data</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other-scope" id="other-scope" />
                        <Label htmlFor="other-scope">Other</Label>
                      </div>
                    </RadioGroup>
                    {formData.dataProcessingScope === 'other-scope' && (
                      <div className="mt-2">
                        <Input
                          placeholder="Please specify..."
                          value={formData.otherDataScope}
                          onChange={(e) => setFormData(prev => ({ ...prev, otherDataScope: e.target.value }))}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      7. Geographic data processing locations
                    </Label>
                    <RadioGroup
                      value={formData.geographicScope}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, geographicScope: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single-country" id="single-country" />
                        <Label htmlFor="single-country">Single country</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="within-eu-eea" id="within-eu-eea" />
                        <Label htmlFor="within-eu-eea">Within EU/EEA only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="eu-third-countries" id="eu-third-countries" />
                        <Label htmlFor="eu-third-countries">EU to third countries</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="global-processing" id="global-processing" />
                        <Label htmlFor="global-processing">Global processing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other-geo" id="other-geo" />
                        <Label htmlFor="other-geo">Other</Label>
                      </div>
                    </RadioGroup>
                    {formData.geographicScope === 'other-geo' && (
                      <div className="mt-2">
                        <Input
                          placeholder="Please specify..."
                          value={formData.otherGeoScope}
                          onChange={(e) => setFormData(prev => ({ ...prev, otherGeoScope: e.target.value }))}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      8. Current privacy incidents (last 24 months)
                    </Label>
                    <Select value={formData.privacyIncidents} onValueChange={(value) => setFormData(prev => ({ ...prev, privacyIncidents: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select privacy incidents" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none-reported">None reported</SelectItem>
                        <SelectItem value="1-2-minor">1-2 minor incidents</SelectItem>
                        <SelectItem value="3-5-incidents">3-5 incidents</SelectItem>
                        <SelectItem value="multiple-incidents">Multiple incidents</SelectItem>
                        <SelectItem value="breach-notifications">Data breach notifications made</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Implementation Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">C. Implementation Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      9. Desired PIMS scope alignment
                    </Label>
                    <Select value={formData.pimsScope} onValueChange={(value) => setFormData(prev => ({ ...prev, pimsScope: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select PIMS scope alignment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="identical-isms">Identical to ISMS scope</SelectItem>
                        <SelectItem value="subset-isms">Subset of ISMS scope</SelectItem>
                        <SelectItem value="broader-isms">Broader than ISMS scope</SelectItem>
                        <SelectItem value="separate-privacy">Separate privacy scope</SelectItem>
                        <SelectItem value="undecided">Undecided</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      10. Target certification timeline
                    </Label>
                    <Select value={formData.targetTimeline} onValueChange={(value) => setFormData(prev => ({ ...prev, targetTimeline: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select target timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="within-6-months">Within 6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="12-18-months">12-18 months</SelectItem>
                        <SelectItem value="18-plus-months">18+ months</SelectItem>
                        <SelectItem value="timing-flexible">Timing flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      11. Estimated budget range (USD)
                    </Label>
                    <Select value={formData.budgetRange} onValueChange={(value) => setFormData(prev => ({ ...prev, budgetRange: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-plus">$100,000+</SelectItem>
                        <SelectItem value="budget-not-finalized">Budget not finalized</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Privacy Context */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">D. Additional Privacy Context</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      12. Applicable privacy regulations
                    </Label>
                    <div className="space-y-2">
                      {[
                        'GDPR',
                        'CCPA/CPRA',
                        'India DPDP Act',
                        'Other regional laws',
                        'Sector-specific requirements',
                        'Contractual privacy obligations'
                      ].map((regulation) => (
                        <div key={regulation} className="flex items-center space-x-2">
                          <Checkbox
                            id={regulation}
                            checked={formData.privacyRegulations.includes(regulation)}
                            onCheckedChange={(checked) => handleCheckboxChange('privacyRegulations', regulation, checked as boolean)}
                          />
                          <Label htmlFor={regulation}>{regulation}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-3 block">
                      13. Data Protection Officer (DPO) status
                    </Label>
                    <Select value={formData.dpoStatus} onValueChange={(value) => setFormData(prev => ({ ...prev, dpoStatus: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select DPO status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dpo-appointed">DPO already appointed</SelectItem>
                        <SelectItem value="dpo-planned">DPO appointment planned</SelectItem>
                        <SelectItem value="considering-dpo">Considering DPO designation</SelectItem>
                        <SelectItem value="not-required">Not required/applicable</SelectItem>
                        <SelectItem value="uncertain-dpo">Uncertain about DPO needs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo" className="text-base font-medium text-gray-900 mb-2 block">
                      14. Additional information or concerns
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Please share any specific challenges, integration needs, or other requirements..."
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-12 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Privacy Discovery Questionnaire'}
                </Button>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <div className="mt-6">
                  <Alert className={submitStatus.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                    <AlertDescription className={submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                      {submitStatus.message}
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISO27701Questionnaire; 