import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { FormData } from '@/types/questionnaire';

interface SectionAProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleCheckboxChange: (value: string, checked: boolean) => void;
}

const SectionA: React.FC<SectionAProps> = ({ formData, setFormData, handleCheckboxChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">
          A. Business Context & Sponsorship
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <Label className="text-base font-medium text-gray-900 mb-4 block">
            1. Why are you pursuing ISO 27001 today?
          </Label>
          <div className="space-y-3">
            {[
              'Client/RFP requirements',
              'Regulatory compliance (GDPR, NIS 2)',
              'Enhance security maturity',
              'Competitive differentiation',
              'Support M&A due diligence'
            ].map((option) => (
              <div key={option} className="flex items-center space-x-3">
                <Checkbox
                  id={option}
                  checked={formData.implementationReasons.includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                />
                <Label htmlFor={option} className="text-gray-700 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
            <div className="flex items-center space-x-3">
              <Checkbox 
                id="other" 
                checked={formData.implementationReasons.includes('Other')}
                onCheckedChange={(checked) => handleCheckboxChange('Other', checked as boolean)}
              />
              <Label htmlFor="other" className="text-gray-700">Other:</Label>
              <Input 
                placeholder="Please specify..." 
                className="ml-2 flex-1"
                value={formData.otherReason}
                onChange={(e) => setFormData(prev => ({ ...prev, otherReason: e.target.value }))}
                disabled={!formData.implementationReasons.includes('Other')}
              />
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="businessGoals" className="text-base font-medium text-gray-900 mb-2 block">
            2. Top 3 business outcomes your ISMS must deliver
          </Label>
          <p className="text-sm text-gray-600 mb-3">List three concrete objectives (e.g., enter new markets...)</p>
          <Textarea
            id="businessGoals"
            placeholder="1. 
2. 
3. "
            value={formData.businessGoals}
            onChange={(e) => setFormData(prev => ({ ...prev, businessGoals: e.target.value }))}
            className="min-h-[100px]"
          />
        </div>

        <div>
          <Label className="text-base font-medium text-gray-900 mb-4 block">
            3. Risk appetite
          </Label>
          <div className="px-3">
            <Slider
              value={formData.riskAppetite}
              onValueChange={(value) => setFormData(prev => ({ ...prev, riskAppetite: value }))}
              max={5}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>1 - Very Low</span>
              <span>3</span>
              <span>5 - Very High</span>
            </div>
          </div>
        </div>

        <div>
          <Label className="text-base font-medium text-gray-900 mb-4 block">
            4. Does top management formally sponsor this initiative?
          </Label>
          <RadioGroup
            value={formData.topManagementSponsorship}
            onValueChange={(value) => setFormData(prev => ({ ...prev, topManagementSponsorship: value }))}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="sponsor-yes" />
              <Label htmlFor="sponsor-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="sponsor-no" />
              <Label htmlFor="sponsor-no">No</Label>
            </div>
          </RadioGroup>
          {formData.topManagementSponsorship === 'yes' && (
            <div className="mt-4">
              <Label htmlFor="sponsorship-desc" className="text-sm font-medium text-gray-700 mb-2 block">
                4a. If Yes, how is that commitment demonstrated?
              </Label>
              <Input
                id="sponsorship-desc"
                placeholder="Describe how commitment is demonstrated"
                value={formData.sponsorshipDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, sponsorshipDescription: e.target.value }))}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionA; 