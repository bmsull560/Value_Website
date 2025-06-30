'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronDown, Calculator, Shield, TrendingUp, Users, Zap, BarChart3, CheckCircle, Star, Quote, Lock, Award, Clock, DollarSign, Target, Briefcase, ChevronRight, Building2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export default function Home() {
  const [roiData, setRoiData] = useState({
    currentRevenue: 10000000,
    targetGrowth: 25,
    dealSize: 50000,
    salesCycle: 6,
    winRate: 20
  });

  const [calculatedROI, setCalculatedROI] = useState({
    paybackWeeks: 3.4,
    revenueIncrease: 17,
    dealVelocity: 28,
    netRoi: 340,
    timeToValue: 30,
    dealsSaved: 8.3
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const testimonials = [
    {
      company: "CloudSync Technologies",
      logo: "☁️",
      person: "Sarah Chen, CFO",
      title: "Chief Financial Officer",
      photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "B2BValue cut our deal approval time from 3 weeks to 2 days. The ROI models are so precise, our board approved a 40% larger software budget.",
      metrics: "67% faster deal approvals",
      industry: "Cloud Infrastructure",
      companySize: "Series C",
      specificResult: "Approved $2.3M additional software spend based on quantified value cases"
    },
    {
      company: "SecureVault Systems",
      logo: "🔐",
      person: "Marcus Rodriguez, Chief Revenue Officer",
      title: "Chief Revenue Officer", 
      photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Our win rate jumped 23 percentage points after implementing B2BValue. Prospects literally sell themselves when they see their projected ROI.",
      metrics: "+23pp enterprise win rate",
      industry: "Cybersecurity",
      companySize: "Series B",
      specificResult: "Closed 14 additional enterprise deals worth $4.2M in Q4 alone"
    },
    {
      company: "DataFlow Analytics",
      logo: "📊",
      person: "Dr. Elena Petrov, VP of Customer Success",
      title: "VP Customer Success",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Renewal conversations became partnerships. When customers see their realized value tracked monthly, expansion becomes inevitable.",
      metrics: "+156% net revenue retention",
      industry: "Business Intelligence",
      companySize: "Post-Series A",
      specificResult: "Achieved 156% NRR, up from 98% before implementing value tracking"
    }
  ];

  const customerLogos = [
    { name: "CloudSync", logo: "☁️", industry: "Cloud Infrastructure" },
    { name: "SecureVault", logo: "🔐", industry: "Cybersecurity" },
    { name: "DataFlow", logo: "📊", industry: "Analytics" },
    { name: "FinanceFlow", logo: "💰", industry: "FinTech" },
    { name: "ScaleUp", logo: "📈", industry: "Growth Platform" },
    { name: "InnovateCorp", logo: "💡", industry: "Product Innovation" },
    { name: "TechFlow", logo: "🚀", industry: "DevOps" },
    { name: "BuildRight", logo: "🏗️", industry: "Construction Tech" }
  ];

  const trustIndicators = [
    { label: "SOC 2 Type II", icon: Shield, color: "text-blue-600" },
    { label: "ISO 27001", icon: Lock, color: "text-green-600" },
    { label: "GDPR Compliant", icon: Globe, color: "text-purple-600" },
    { label: "99.9% Uptime SLA", icon: Award, color: "text-orange-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Enhanced ROI calculations with more realistic modeling
    const basePayback = Math.max(0.8, 8 - (roiData.targetGrowth / 15));
    const revenueGains = Math.min(45, 8 + (roiData.targetGrowth * 0.6) + (roiData.winRate * 0.4));
    const velocityGains = Math.min(55, 12 + (roiData.winRate * 0.7) + (roiData.targetGrowth * 0.3));
    const netRoiCalc = Math.floor(revenueGains * 6 + roiData.targetGrowth * 2.8);
    const timeToValueCalc = Math.max(14, 45 - (roiData.targetGrowth * 0.8));
    const dealsSavedCalc = (roiData.currentRevenue / 1000000) * (revenueGains / 100) * 0.7;

    setCalculatedROI({
      paybackWeeks: Number(basePayback.toFixed(1)),
      revenueIncrease: Math.floor(revenueGains),
      dealVelocity: Math.floor(velocityGains),
      netRoi: netRoiCalc,
      timeToValue: Math.floor(timeToValueCalc),
      dealsSaved: Number(dealsSavedCalc.toFixed(1))
    });
  }, [roiData]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">B2BValue</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#platform" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Platform</a>
                <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Solutions</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a>
                <a href="#customers" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Customers</a>
                <a href="#security" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Security</a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="hidden md:inline-flex font-medium">Sign In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              {/* Trust Signal Badge */}
              <div className="flex items-center space-x-2 mb-6">
                <Badge className="bg-green-50 text-green-700 border-green-200 px-3 py-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trusted by 400+ B2B SaaS leaders
                </Badge>
                <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  $8.7B in pipeline proven
                </Badge>
              </div>

              {/* Primary Value Proposition */}
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Close 23% More Enterprise Deals with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Quantified Value Stories
                </span>
              </h1>
              
              {/* Supporting Subheadline */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                B2BValue transforms your sales conversations into board-ready business cases that buyers can't ignore. 
                Build ROI models, track value realization, and automate renewal justification—all in under 30 minutes.
              </p>

              {/* Primary CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 font-semibold shadow-md">
                  Start Your 14-Day Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-gray-300 hover:border-gray-400 font-semibold">
                      <Calculator className="mr-2 w-5 h-5" />
                      Calculate Your ROI
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">ROI Impact Calculator</DialogTitle>
                      <DialogDescription className="text-lg">
                        See your projected results with B2BValue based on your current metrics
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-8 py-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <Label className="text-base font-medium">Current ARR ($M)</Label>
                            <Input
                              type="number"
                              value={roiData.currentRevenue / 1000000}
                              onChange={(e) => setRoiData({...roiData, currentRevenue: Number(e.target.value) * 1000000})}
                              className="mt-2 text-lg"
                              min="0.1"
                              step="0.1"
                            />
                          </div>
                          <div>
                            <Label className="text-base font-medium">Growth Target (%)</Label>
                            <div className="mt-3">
                              <Slider
                                value={[roiData.targetGrowth]}
                                onValueChange={(value) => setRoiData({...roiData, targetGrowth: value[0]})}
                                max={100}
                                step={5}
                                className="w-full"
                              />
                              <div className="text-sm text-gray-500 mt-2 text-center">{roiData.targetGrowth}% annual growth</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-base font-medium">Average Deal Size ($K)</Label>
                            <Input
                              type="number"
                              value={roiData.dealSize / 1000}
                              onChange={(e) => setRoiData({...roiData, dealSize: Number(e.target.value) * 1000})}
                              className="mt-2 text-lg"
                              min="1"
                              step="1"
                            />
                          </div>
                          <div>
                            <Label className="text-base font-medium">Current Win Rate (%)</Label>
                            <div className="mt-3">
                              <Slider
                                value={[roiData.winRate]}
                                onValueChange={(value) => setRoiData({...roiData, winRate: value[0]})}
                                max={60}
                                step={1}
                                className="w-full"
                              />
                              <div className="text-sm text-gray-500 mt-2 text-center">{roiData.winRate}% win rate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Results Display */}
                      <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border border-blue-100">
                        <h3 className="font-bold text-xl mb-6 text-center text-gray-900">Your Projected Results with B2BValue</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-blue-600">{calculatedROI.paybackWeeks}</div>
                            <div className="text-sm text-gray-600 mt-1">Weeks to Payback</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-green-600">+{calculatedROI.revenueIncrease}%</div>
                            <div className="text-sm text-gray-600 mt-1">Win Rate Increase</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-purple-600">+{calculatedROI.dealVelocity}%</div>
                            <div className="text-sm text-gray-600 mt-1">Faster Sales Cycles</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-orange-600">{calculatedROI.netRoi}%</div>
                            <div className="text-sm text-gray-600 mt-1">12-Month ROI</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-red-600">{calculatedROI.timeToValue}</div>
                            <div className="text-sm text-gray-600 mt-1">Days to First Win</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-indigo-600">{calculatedROI.dealsSaved}</div>
                            <div className="text-sm text-gray-600 mt-1">Extra Deals/Year</div>
                          </div>
                        </div>
                        <div className="mt-6 text-center">
                          <Button onClick={() => setIsCalculatorOpen(false)} className="bg-blue-600 hover:bg-blue-700">
                            Start Free Trial to Achieve These Results
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Trust Indicators */}
              <div className="text-sm text-gray-500 mb-8">
                No credit card required • Full platform access • Enterprise security included
              </div>
              
              {/* Key Performance Metrics */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">+23pp</div>
                  <div className="text-sm text-gray-600 mt-1">Avg Win Rate Lift</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">3.4 wks</div>
                  <div className="text-sm text-gray-600 mt-1">ROI Payback Period</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">156%</div>
                  <div className="text-sm text-gray-600 mt-1">Avg Net Revenue Retention</div>
                </div>
              </div>
            </div>

            {/* Hero Visual/Product Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-100 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900 text-lg">Live Business Case Builder</h3>
                    <Badge className="bg-green-100 text-green-700 px-3 py-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Live Demo
                    </Badge>
                  </div>
                  
                  {/* Mock Dashboard */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Revenue Impact (3 years)</span>
                      <span className="font-bold text-green-600">+$3.2M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full w-4/5 relative">
                        <div className="absolute right-0 top-0 w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Cost Reduction</span>
                      <span className="font-bold text-blue-600">$680K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full w-3/5 relative">
                        <div className="absolute right-0 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Risk Mitigation Value</span>
                      <span className="font-bold text-purple-600">$1.5M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-purple-500 h-3 rounded-full w-3/4 relative">
                        <div className="absolute right-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900 text-lg">Total Business Value</span>
                      <span className="text-3xl font-bold text-blue-600">$5.38M</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">ROI: 340% over 36 months</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Trust Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">SOC 2 Certified</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">30 min setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 text-lg">Trusted by 400+ B2B SaaS leaders managing $8.7B in active pipeline</p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            {customerLogos.map((company, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-500 hover:text-gray-700 transition-colors group">
                <span className="text-2xl group-hover:scale-110 transition-transform">{company.logo}</span>
                <div className="hidden sm:block">
                  <div className="font-medium">{company.name}</div>
                  <div className="text-xs text-gray-400">{company.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section id="platform" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Three Pillars That Drive Revenue Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stop leaving money on the table. Our platform transforms how enterprise teams quantify, 
              track, and expand business value throughout the entire customer lifecycle.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100 group">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">Instant Business Case Generation</CardTitle>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Build compelling ROI models that get deals approved faster. Connect to your CRM and financial systems 
                  to automatically pull real data and generate board-ready business cases in under 30 minutes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>CRM Integration:</strong> Automatically pull deal data from Salesforce, HubSpot, or Pipedrive</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Multi-Scenario Modeling:</strong> Best case, worst case, and most likely outcomes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Executive Summaries:</strong> AI-generated one-page briefs your CFO will approve</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                  <div className="text-sm text-gray-600 mb-2">Typical Results:</div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="font-semibold text-green-600">67%</span> faster approvals</div>
                    <div><span className="font-semibold text-blue-600">23pp</span> win rate lift</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100 group">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">Real-Time Value Tracking</CardTitle>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Never lose track of promised value again. Our platform monitors KPIs and automatically 
                  reports on value realization, giving you the data you need for renewal conversations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Milestone Monitoring:</strong> Track against promised outcomes with automated alerts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Stakeholder Dashboards:</strong> Self-service portals for executives and champions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>QBR Automation:</strong> Quarterly business reviews write themselves</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                  <div className="text-sm text-gray-600 mb-2">Customer Success Impact:</div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="font-semibold text-green-600">89%</span> renewal rate</div>
                    <div><span className="font-semibold text-blue-600">156%</span> avg NRR</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 group">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">Automated Expansion Pipeline</CardTitle>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Turn proven value into expansion revenue. When customers hit their success milestones, 
                  our platform automatically flags upsell opportunities and builds the business case.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Success Triggers:</strong> Expansion alerts based on value realization thresholds</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Renewal Prep:</strong> Auto-generate renewal decks with realized value proof</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Competitive Defense:</strong> Build switching cost models to protect accounts</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-sm text-gray-600 mb-2">Expansion Results:</div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="font-semibold text-green-600">34%</span> upsell rate</div>
                    <div><span className="font-semibold text-blue-600">2.3x</span> expansion ACV</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions by Role Section */}
      <section id="solutions" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Purpose-Built for Each Role in the Revenue Engine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every stakeholder gets the insights they need, in the format that drives their decisions
            </p>
          </div>

          <Tabs defaultValue="cfo" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="cfo" className="text-lg py-3">Chief Financial Officers</TabsTrigger>
              <TabsTrigger value="cro" className="text-lg py-3">Chief Revenue Officers</TabsTrigger>
              <TabsTrigger value="cs" className="text-lg py-3">Customer Success Leaders</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cfo" className="mt-8">
              <Card className="p-8 lg:p-12">
                <CardHeader className="pb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-gray-900">Financial Intelligence & Budget Optimization</CardTitle>
                      <CardDescription className="text-xl text-gray-600 mt-2">
                        Transform software purchases into strategic investments with quantified financial models
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-xl text-gray-900 mb-6">Financial Modeling Capabilities</h4>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Multi-Year Cash Flow Modeling:</strong> 3-5 year projections with sensitivity analysis</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Risk-Adjusted ROI:</strong> Monte Carlo simulations for conservative planning</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Budget Impact Analysis:</strong> Department-level cost allocation and tracking</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Compliance Reporting:</strong> SOX-ready audit trails for all financial assumptions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl">
                      <h4 className="font-semibold text-xl text-gray-900 mb-6">Typical CFO Results</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-600">Faster Deal Approvals</span>
                          <span className="font-bold text-2xl text-green-600">+67%</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-600">Budget Forecast Accuracy</span>
                          <span className="font-bold text-2xl text-blue-600">+43%</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-600">Software ROI Visibility</span>
                          <span className="font-bold text-2xl text-purple-600">+89%</span>
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Average Annual Savings from Better Decisions</div>
                          <div className="text-2xl font-bold text-blue-600">$1.2M</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cro" className="mt-8">
              <Card className="p-8 lg:p-12">
                <CardHeader className="pb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-gray-900">Revenue Acceleration & Win Rate Optimization</CardTitle>
                      <CardDescription className="text-xl text-gray-600 mt-2">
                        Arm your sales team with quantified value propositions that close bigger deals faster
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-xl text-gray-900 mb-6">Sales Enablement Features</h4>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Deal-Specific ROI Models:</strong> Customized business cases for each opportunity</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Champion Development Tools:</strong> Equip internal advocates with hard numbers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Competitive Battle Cards:</strong> Value-based differentiation vs. key competitors</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Pipeline Analytics:</strong> Identify which deals need value justification</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl">
                      <h4 className="font-semibold text-xl text-gray-900 mb-6">Sales Performance Lift</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-600">Enterprise Win Rate</span>
                          <span className="font-bold text-2xl text-green-600">+23pp</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-600">Sales Cycle Velocity</span>
                          <span className="font-bold text-2xl text-blue-600">+31%</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-600">Average Deal Size</span>
                          <span className="font-bold text-2xl text-purple-600">+28%</span>
                        </div>
                        <div className="mt-6 p-4 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Additional Quarterly Revenue</div>
                          <div className="text-2xl font-bold text-green-600">+$3.4M</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cs" className="mt-8">
              <Card className="p-8 lg:p-12">
                <CardHeader className="pb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-gray-900">Value Realization & Expansion Automation</CardTitle>
                      <CardDescription className="text-xl text-gray-600 mt-2">
                        Turn customer success into a revenue multiplier with automated value tracking
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-xl text-gray-900 mb-6">Success Management Platform</h4>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Automated Success Milestones:</strong> Track progress against promised outcomes</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Executive QBR Generation:</strong> Quarterly reviews auto-populated with KPIs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Expansion Opportunity Alerts:</strong> AI identifies upsell/cross-sell moments</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span><strong>Renewal Risk Mitigation:</strong> Early warning system for at-risk accounts</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl">
                      <h4 className="font-semibold text-xl text-gray-900 mb-6">Customer Success Impact</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-600">Net Revenue Retention</span>
                          <span className="font-bold text-2xl text-green-600">156%</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-600">Gross Renewal Rate</span>
                          <span className="font-bold text-2xl text-blue-600">94%</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-600">Expansion Revenue</span>
                          <span className="font-bold text-2xl text-purple-600">+67%</span>
                        </div>
                        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Additional ARR per Account</div>
                          <div className="text-2xl font-bold text-purple-600">+$89K</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing That Pays for Itself
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your team size and revenue goals. All plans include full platform access.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Growth Plan */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 relative">
              <CardHeader className="pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Growth</CardTitle>
                    <CardDescription className="text-gray-600 text-lg mt-2">
                      Perfect for growing teams
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="px-3 py-1">Popular</Badge>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">$1,199</span>
                  <span className="text-gray-600 text-xl">/month</span>
                  <div className="text-sm text-gray-500 mt-2">Billed annually • $1,399/month if monthly</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>5 users</strong> included</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>10 active business cases</strong> at a time</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Standard CRM integrations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Email & chat support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">ROI dashboard & reporting</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Value realization tracking</span>
                  </div>
                </div>
                <Button className="w-full text-lg py-3 font-semibold">
                  Start 14-Day Free Trial
                </Button>
                <div className="text-center mt-4">
                  <div className="text-sm text-green-600 font-medium">Pays for itself with 1.2 additional deals</div>
                  <div className="text-xs text-gray-500 mt-1">No credit card required</div>
                </div>
              </CardContent>
            </Card>

            {/* Scale Plan */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-blue-200 relative bg-gradient-to-b from-blue-50/30 to-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="pb-6">
                <div>
                  <CardTitle className="text-2xl text-gray-900">Scale</CardTitle>
                  <CardDescription className="text-gray-600 text-lg mt-2">
                    For high-growth revenue teams
                  </CardDescription>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">$2,799</span>
                  <span className="text-gray-600 text-xl">/month</span>
                  <div className="text-sm text-gray-500 mt-2">Billed annually • $3,299/month if monthly</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>25 users</strong> included</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Unlimited business cases</strong></span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Advanced BI integrations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Priority support + CSM</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom reporting & analytics</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Advanced workflow automation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">API access & webhooks</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 font-semibold">
                  Start 14-Day Free Trial
                </Button>
                <div className="text-center mt-4">
                  <div className="text-sm text-green-600 font-medium">Pays for itself with 2.1 additional deals</div>
                  <div className="text-xs text-gray-500 mt-1">Setup assistance included</div>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 relative">
              <CardHeader className="pb-6">
                <div>
                  <CardTitle className="text-2xl text-gray-900">Enterprise</CardTitle>
                  <CardDescription className="text-gray-600 text-lg mt-2">
                    For global revenue operations
                  </CardDescription>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">Custom</span>
                  <div className="text-sm text-gray-500 mt-2">Volume discounts available</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Unlimited users</strong></span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">SSO & advanced security</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom ROI formulas</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated customer success</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">White-label options</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">On-premise deployment</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">99.9% uptime SLA</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-lg py-3 border-gray-300 hover:border-gray-400 font-semibold">
                  Contact Sales Team
                </Button>
                <div className="text-center mt-4">
                  <div className="text-sm text-blue-600 font-medium">ROI guarantee included</div>
                  <div className="text-xs text-gray-500 mt-1">Implementation assistance</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Footer */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                All plans include a 14-day free trial with full access
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                No credit card required. Cancel anytime. Switch plans as you grow.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span>Enterprise security included</span>
                </div>
                <div className="flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-500 mr-2" />
                  <span>30-minute setup time</span>
                </div>
                <div className="flex items-center justify-center">
                  <Award className="w-4 h-4 text-purple-500 mr-2" />
                  <span>99.9% uptime guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section id="customers" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Results from Real Revenue Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how B2BValue has transformed revenue operations at high-growth B2B companies
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Card className="p-8 lg:p-12 shadow-xl">
              <CardContent>
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  {/* Testimonial Image */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <img 
                      src={testimonials[currentTestimonial].photo}
                      alt={testimonials[currentTestimonial].person}
                      className="w-20 h-20 rounded-full mx-auto lg:mx-0 mb-4 object-cover"
                    />
                    <div className="text-sm text-gray-500">
                      {testimonials[currentTestimonial].industry} • {testimonials[currentTestimonial].companySize}
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="lg:col-span-4">
                    <Quote className="w-8 h-8 text-gray-300 mb-4" />
                    <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="font-semibold text-lg text-gray-900">
                          {testimonials[currentTestimonial].person}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentTestimonial].title}
                        </div>
                        <div className="flex items-center mt-2">
                          <span className="text-2xl mr-2">{testimonials[currentTestimonial].logo}</span>
                          <span className="font-medium text-gray-900">{testimonials[currentTestimonial].company}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Badge className="bg-green-100 text-green-800 text-base px-3 py-1 block text-center">
                          {testimonials[currentTestimonial].metrics}
                        </Badge>
                        <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                          <strong>Specific Result:</strong> {testimonials[currentTestimonial].specificResult}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">400+</div>
              <div className="text-gray-600">Revenue Leaders</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">$8.7B</div>
              <div className="text-gray-600">Pipeline Value</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-purple-600 mb-2">23pp</div>
              <div className="text-gray-600">Avg Win Rate Lift</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-orange-600 mb-2">156%</div>
              <div className="text-gray-600">Avg NRR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Security You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your sensitive business data deserves the highest levels of protection. 
              We maintain certifications that meet the most stringent enterprise requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustIndicators.map((indicator, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <indicator.icon className={`w-12 h-12 mx-auto mb-4 ${indicator.color} group-hover:scale-110 transition-transform`} />
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{indicator.label}</h3>
                <p className="text-gray-600 text-sm">
                  {indicator.label === "SOC 2 Type II" && "Comprehensive security controls audited annually"}
                  {indicator.label === "ISO 27001" && "International security management standards"}
                  {indicator.label === "GDPR Compliant" && "European data privacy regulation adherence"}
                  {indicator.label === "99.9% Uptime SLA" && "Enterprise-grade infrastructure reliability"}
                </p>
              </Card>
            ))}
          </div>

          {/* Additional Security Features */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Additional Security Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Data Encryption</div>
                  <div className="text-sm text-gray-600">AES-256 at rest, TLS 1.3 in transit</div>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Access Controls</div>
                  <div className="text-sm text-gray-600">Role-based permissions & SSO</div>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Audit Logging</div>
                  <div className="text-sm text-gray-600">Complete audit trail for all activities</div>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Data Residency</div>
                  <div className="text-sm text-gray-600">Choose your data location</div>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Backup & Recovery</div>
                  <div className="text-sm text-gray-600">Daily backups with 99.99% durability</div>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Penetration Testing</div>
                  <div className="text-sm text-gray-600">Quarterly third-party security assessments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Close 23% More Deals with Quantified Value?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join 400+ revenue leaders who've transformed their sales process with data-driven business cases. 
            Start your free trial today—no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-10 py-5 font-semibold shadow-lg">
              Start Your 14-Day Free Trial
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-xl px-10 py-5 font-semibold">
              Book a Personal Demo
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-blue-200 text-sm">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Full platform access</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Setup in under 30 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">B2BValue</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Transforming how enterprise revenue teams quantify, track, and expand business value 
                through AI-powered ROI modeling and value realization tracking.
              </p>
              <div className="flex space-x-4">
                {trustIndicators.slice(0, 2).map((indicator, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-400">
                    <indicator.icon className="w-4 h-4 mr-2" />
                    <span>{indicator.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Value Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CRM Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">For CFOs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For CROs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Customer Success</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 B2BValue. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}