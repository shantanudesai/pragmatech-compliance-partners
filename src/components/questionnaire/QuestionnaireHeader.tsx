import React from 'react';

const QuestionnaireHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Discovery Questionnaire
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Help us understand your compliance needs and provide you with a tailored solution.
        This assessment will help us provide you with a comprehensive risk-gap executive summary.
      </p>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Estimated time:</strong> 10-15 minutes | <strong>Sections:</strong> 4 | <strong>Questions:</strong> 15-20
        </p>
      </div>
    </div>
  );
};

export default QuestionnaireHeader; 