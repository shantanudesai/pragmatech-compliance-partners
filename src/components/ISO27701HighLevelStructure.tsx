import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown, ChevronUp, Eye, Users, Target, Zap, Shield, BarChart3, RefreshCw } from "lucide-react";

const ISO27701HighLevelStructure: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "4",
      title: "Context",
      fullTitle: "Context of the Organization",
      phase: "Plan",
      icon: Eye,
      color: "bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 border-purple-300/50 text-purple-800",
      hoverColor: "hover:from-purple-100 hover:via-violet-100 hover:to-indigo-100 hover:border-purple-400",
      subsections: [
        "Privacy context understanding",
        "Interested parties & requirements", 
        "PIMS scope determination",
        "Privacy information management system"
      ]
    },
    {
      id: "5",
      title: "Leadership",
      fullTitle: "Leadership",
      phase: "Plan",
      icon: Users,
      color: "bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 border-purple-300/50 text-purple-800",
      hoverColor: "hover:from-purple-100 hover:via-violet-100 hover:to-indigo-100 hover:border-purple-400",
      subsections: [
        "Leadership & commitment to privacy",
        "Privacy policy establishment",
        "Privacy roles & responsibilities"
      ]
    },
    {
      id: "6",
      title: "Planning",
      fullTitle: "Planning",
      phase: "Plan",
      icon: Target,
      color: "bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 border-purple-300/50 text-purple-800",
      hoverColor: "hover:from-purple-100 hover:via-violet-100 hover:to-indigo-100 hover:border-purple-400",
      subsections: [
        "Privacy risk & opportunity actions",
        "Privacy objectives & planning",
        "Planning to achieve objectives"
      ]
    },
    {
      id: "7",
      title: "Support",
      fullTitle: "Support",
      phase: "Do",
      icon: Zap,
      color: "bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 border-cyan-300/50 text-cyan-800",
      hoverColor: "hover:from-cyan-100 hover:via-teal-100 hover:to-blue-100 hover:border-cyan-400",
      subsections: [
        "Privacy resources",
        "Privacy competence", 
        "Privacy awareness",
        "Privacy communication",
        "Privacy documented information"
      ]
    },
    {
      id: "8",
      title: "Operation",
      fullTitle: "Operation",
      phase: "Do",
      icon: Shield,
      color: "bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 border-cyan-300/50 text-cyan-800",
      hoverColor: "hover:from-cyan-100 hover:via-teal-100 hover:to-blue-100 hover:border-cyan-400",
      subsections: [
        "Privacy operational planning & control",
        "Privacy impact assessment",
        "Data subject rights management",
        "Privacy by design implementation"
      ]
    },
    {
      id: "9",
      title: "Performance",
      fullTitle: "Performance Evaluation",
      phase: "Check",
      icon: BarChart3,
      color: "bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-orange-300/50 text-orange-800",
      hoverColor: "hover:from-orange-100 hover:via-amber-100 hover:to-yellow-100 hover:border-orange-400",
      subsections: [
        "Privacy monitoring & measurement",
        "Privacy internal audit",
        "Privacy management review"
      ]
    },
    {
      id: "10",
      title: "Improvement",
      fullTitle: "Improvement",
      phase: "Act",
      icon: RefreshCw,
      color: "bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 border-pink-300/50 text-pink-800",
      hoverColor: "hover:from-pink-100 hover:via-rose-100 hover:to-red-100 hover:border-pink-400",
      subsections: [
        "Privacy nonconformity & corrective action",
        "Privacy continual improvement"
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const phaseColors = {
    Plan: "bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-lg shadow-purple-200",
    Do: "bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 shadow-lg shadow-cyan-200", 
    Check: "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 shadow-lg shadow-orange-200",
    Act: "bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 shadow-lg shadow-pink-200"
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block p-6 bg-gradient-to-br from-slate-50 via-white to-purple-50 rounded-2xl shadow-lg border border-gray-100 mb-4">
          <h3 className="text-3xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              ISO 27701 High-Level Structure
            </span>
          </h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
            Plan-Do-Check-Act Framework for Privacy Information Management Systems
          </p>
        </div>
      </div>

      {/* PDCA Horizontal Layout */}
      <div className="bg-gradient-to-br from-white via-gray-50/50 to-slate-50/30 rounded-2xl shadow-2xl border border-gray-200/50 p-8 backdrop-blur-sm">
        <div className="grid grid-cols-4 gap-6">
          
          {/* Plan Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <Badge className={`${phaseColors.Plan} text-white px-6 py-3 text-sm font-bold tracking-wider`}>
                PLAN
              </Badge>
            </div>
            {sections.filter(s => s.phase === "Plan").map((section) => {
              const IconComponent = section.icon;
              return (
                <Card 
                  key={section.id} 
                  className={`${section.color} ${section.hoverColor} border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group relative overflow-hidden`}
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <CardContent className="p-5 relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800 font-bold text-xs px-3 py-1 shadow-sm">
                          {section.id}
                        </Badge>
                        <IconComponent className="h-4 w-4 opacity-70" />
                      </div>
                      {expandedSection === section.id ? 
                        <ChevronUp className="h-4 w-4 transition-transform duration-200" /> : 
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      }
                    </div>
                    <h4 className="font-bold text-sm mb-2 group-hover:text-current transition-colors">{section.title}</h4>
                    {expandedSection === section.id && (
                      <div className="animate-in slide-in-from-top-2 duration-300">
                        <ul className="text-xs space-y-2 mt-4 pt-3 border-t border-current border-opacity-30">
                          {section.subsections.map((sub, subIndex) => (
                            <li key={subIndex} className="leading-relaxed flex items-start space-x-2">
                              <span className="text-current opacity-60 mt-1">•</span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Do Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <Badge className={`${phaseColors.Do} text-white px-6 py-3 text-sm font-bold tracking-wider`}>
                DO
              </Badge>
            </div>
            {sections.filter(s => s.phase === "Do").map((section) => {
              const IconComponent = section.icon;
              return (
                <Card 
                  key={section.id} 
                  className={`${section.color} ${section.hoverColor} border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group relative overflow-hidden`}
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <CardContent className="p-5 relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800 font-bold text-xs px-3 py-1 shadow-sm">
                          {section.id}
                        </Badge>
                        <IconComponent className="h-4 w-4 opacity-70" />
                      </div>
                      {expandedSection === section.id ? 
                        <ChevronUp className="h-4 w-4 transition-transform duration-200" /> : 
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      }
                    </div>
                    <h4 className="font-bold text-sm mb-2 group-hover:text-current transition-colors">{section.title}</h4>
                    {expandedSection === section.id && (
                      <div className="animate-in slide-in-from-top-2 duration-300">
                        <ul className="text-xs space-y-2 mt-4 pt-3 border-t border-current border-opacity-30">
                          {section.subsections.map((sub, subIndex) => (
                            <li key={subIndex} className="leading-relaxed flex items-start space-x-2">
                              <span className="text-current opacity-60 mt-1">•</span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Check Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <Badge className={`${phaseColors.Check} text-white px-6 py-3 text-sm font-bold tracking-wider`}>
                CHECK
              </Badge>
            </div>
            {sections.filter(s => s.phase === "Check").map((section) => {
              const IconComponent = section.icon;
              return (
                <Card 
                  key={section.id} 
                  className={`${section.color} ${section.hoverColor} border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group relative overflow-hidden`}
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <CardContent className="p-5 relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800 font-bold text-xs px-3 py-1 shadow-sm">
                          {section.id}
                        </Badge>
                        <IconComponent className="h-4 w-4 opacity-70" />
                      </div>
                      {expandedSection === section.id ? 
                        <ChevronUp className="h-4 w-4 transition-transform duration-200" /> : 
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      }
                    </div>
                    <h4 className="font-bold text-sm mb-2 group-hover:text-current transition-colors">{section.title}</h4>
                    {expandedSection === section.id && (
                      <div className="animate-in slide-in-from-top-2 duration-300">
                        <ul className="text-xs space-y-2 mt-4 pt-3 border-t border-current border-opacity-30">
                          {section.subsections.map((sub, subIndex) => (
                            <li key={subIndex} className="leading-relaxed flex items-start space-x-2">
                              <span className="text-current opacity-60 mt-1">•</span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Act Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <Badge className={`${phaseColors.Act} text-white px-6 py-3 text-sm font-bold tracking-wider`}>
                ACT
              </Badge>
            </div>
            {sections.filter(s => s.phase === "Act").map((section) => {
              const IconComponent = section.icon;
              return (
                <Card 
                  key={section.id} 
                  className={`${section.color} ${section.hoverColor} border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group relative overflow-hidden`}
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <CardContent className="p-5 relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800 font-bold text-xs px-3 py-1 shadow-sm">
                          {section.id}
                        </Badge>
                        <IconComponent className="h-4 w-4 opacity-70" />
                      </div>
                      {expandedSection === section.id ? 
                        <ChevronUp className="h-4 w-4 transition-transform duration-200" /> : 
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      }
                    </div>
                    <h4 className="font-bold text-sm mb-2 group-hover:text-current transition-colors">{section.title}</h4>
                    {expandedSection === section.id && (
                      <div className="animate-in slide-in-from-top-2 duration-300">
                        <ul className="text-xs space-y-2 mt-4 pt-3 border-t border-current border-opacity-30">
                          {section.subsections.map((sub, subIndex) => (
                            <li key={subIndex} className="leading-relaxed flex items-start space-x-2">
                              <span className="text-current opacity-60 mt-1">•</span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* PDCA Flow Indicator */}
        <div className="flex justify-center items-center space-x-4 mt-8 pt-6 border-t border-gray-300/50">
          <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full border border-purple-200/50">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-sm"></div>
            <span className="text-sm font-medium text-purple-700">Plan</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
          <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-200/50">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-sm"></div>
            <span className="text-sm font-medium text-cyan-700">Do</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
          <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full border border-orange-200/50">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-sm"></div>
            <span className="text-sm font-medium text-orange-700">Check</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
          <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full border border-pink-200/50">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-sm"></div>
            <span className="text-sm font-medium text-pink-700">Act</span>
          </div>
        </div>
      </div>

      {/* Branded Footer */}
      <div className="text-center mt-6">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-full border border-gray-200/50 shadow-sm">
          <p className="text-sm text-gray-600">
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent font-bold">
              Pragmatech Compliance Partners
            </span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-500 font-medium">Expert Privacy Management Consulting</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ISO27701HighLevelStructure;
