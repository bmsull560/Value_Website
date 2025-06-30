'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronDown, Calculator, Shield, TrendingUp, Users, Zap, BarChart3, CheckCircle, Star, Quote } from 'lucide-react';
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
    netRoi: 340
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      company: "TechFlow Solutions",
      logo: "🚀",
      person: "Sarah Chen, CFO",
      quote: "ValueArch transformed our deal velocity. We're closing 40% faster with bulletproof business cases.",
      metrics: "+40% faster close rate",
      industry: "FinTech"
    },
    {
      company: "SecureVault Inc",
      logo: "🔐",
      person: "Marcus Rodriguez, CRO",
      quote: "The ROI modeling is so sophisticated, our prospects are selling themselves before we even present.",
      metrics: "+65% win rate improvement",
      industry: "CyberSecurity"
    },
    {
      company: "DataFlow Systems",
      logo: "📊",
      person: "Elena Petrov, VP Sales",
      quote: "Board-ready business cases in minutes, not weeks. Our stakeholders finally speak the same language.",
      metrics: "+130% NRR increase",
      industry: "Analytics"
    }
  ];

  const customerLogos = [
    { name: "TechFlow", logo: "🚀" },
    { name: "SecureVault", logo: "🔐" },
    { name: "DataFlow", logo: "📊" },
    { name: "CloudSync", logo: "☁️" },
    { name: "AI Dynamics", logo: "🤖" },
    { name: "FinanceFlow", logo: "💰" },
    { name: "ScaleUp", logo: "📈" },
    { name: "InnovateCorp", logo: "💡" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Recalculate ROI when inputs change
    const newPayback = Math.max(1, 12 - (roiData.targetGrowth / 10));
    const newRevIncrease = Math.min(50, 10 + (roiData.targetGrowth * 0.7));
    const newDealVelocity = Math.min(60, 15 + (roiData.winRate * 0.8));
    const newNetRoi = Math.floor(newRevIncrease * 8 + roiData.targetGrowth * 3);

    setCalculatedROI({
      paybackWeeks: Number(newPayback.toFixed(1)),
      revenueIncrease: Math.floor(newRevIncrease),
      dealVelocity: Math.floor(newDealVelocity),
      netRoi: newNetRoi
    });
  }, [roiData]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ValueArch</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">Product</a>
                <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                <a href="#customers" className="text-gray-600 hover:text-gray-900 transition-colors">Customers</a>
                <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Book Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trusted on $4.2B in live pipeline
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Turn Every Conversation Into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Board-Ready Business Case
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ValueArch's AI-powered platform proves ROI in minutes, so you win bigger deals and keep them renewing. 
                Trusted by 350+ SaaS leaders to quantify business value with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  Book a 15-Minute Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-gray-300 hover:border-gray-400">
                      <Calculator className="mr-2 w-5 h-5" />
                      Run ROI Calculator
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Interactive ROI Calculator</DialogTitle>
                      <DialogDescription>
                        Adjust your business parameters to see potential impact with ValueArch
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Current ARR ($M)</Label>
                          <Input
                            type="number"
                            value={roiData.currentRevenue / 1000000}
                            onChange={(e) => setRoiData({...roiData, currentRevenue: Number(e.target.value) * 1000000})}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Target Growth (%)</Label>
                          <div className="mt-2">
                            <Slider
                              value={[roiData.targetGrowth]}
                              onValueChange={(value) => setRoiData({...roiData, targetGrowth: value[0]})}
                              max={100}
                              step={1}
                              className="w-full"
                            />
                            <div className="text-sm text-gray-500 mt-1">{roiData.targetGrowth}%</div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Average Deal Size ($K)</Label>
                          <Input
                            type="number"
                            value={roiData.dealSize / 1000}
                            onChange={(e) => setRoiData({...roiData, dealSize: Number(e.target.value) * 1000})}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Current Win Rate (%)</Label>
                          <div className="mt-2">
                            <Slider
                              value={[roiData.winRate]}
                              onValueChange={(value) => setRoiData({...roiData, winRate: value[0]})}
                              max={50}
                              step={1}
                              className="w-full"
                            />
                            <div className="text-sm text-gray-500 mt-1">{roiData.winRate}%</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
                        <h3 className="font-semibold text-lg mb-4">Your Projected Results with ValueArch</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{calculatedROI.paybackWeeks} weeks</div>
                            <div className="text-sm text-gray-600">Payback Period</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">+{calculatedROI.revenueIncrease}%</div>
                            <div className="text-sm text-gray-600">Win Rate Increase</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">+{calculatedROI.dealVelocity}%</div>
                            <div className="text-sm text-gray-600">Faster Deal Velocity</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600">{calculatedROI.netRoi}%</div>
                            <div className="text-sm text-gray-600">12-Month ROI</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">+17pp</div>
                  <div className="text-sm text-gray-600">Enterprise Win-Rate Uplift</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">&lt;30min</div>
                  <div className="text-sm text-gray-600">To Publish Business Case</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">130%</div>
                  <div className="text-sm text-gray-600">Average Net Revenue Retention</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100 shadow-xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">ROI Impact Analysis</h3>
                    <Badge className="bg-green-100 text-green-700">Live</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Revenue Impact</span>
                      <span className="font-semibold text-green-600">+$2.4M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cost Reduction</span>
                      <span className="font-semibold text-blue-600">$450K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Risk Mitigation</span>
                      <span className="font-semibold text-purple-600">$1.2M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total Business Value</span>
                      <span className="text-2xl font-bold text-blue-600">$4.05M</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">SOC 2 Compliant</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">3.4 week payback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Trusted by 350+ SaaS leaders managing $4.2B in pipeline</p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            {customerLogos.map((company, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium hidden sm:inline">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Pillars */}
      <section id="product" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Three Pillars of Value Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform transforms how enterprise teams quantify, track, and expand business value
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Instant Impact Modeling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Pulls CRM & BI data to quantify revenue lift, cost savings, and risk mitigation. 
                  AI-powered analysis delivers board-ready business cases in under 30 minutes.
                </CardDescription>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time data integration
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multi-scenario modeling
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Executive-ready outputs
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Value Realization Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Embedded checkpoints drive adoption and surface real-time ROI. 
                  Automated success metrics keep stakeholders aligned on value delivery.
                </CardDescription>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Milestone tracking
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Stakeholder dashboards
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Success alerts
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Closed-Loop Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Success metrics auto-populate renewal decks and upsell plays. 
                  Proven value becomes your strongest competitive advantage.
                </CardDescription>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated renewal prep
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Expansion opportunity alerts
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Value story evolution
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Solutions Tailored to Your Role
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every stakeholder gets the insights they need, in the format they understand
            </p>
          </div>

          <Tabs defaultValue="cfo" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cfo">For CFOs</TabsTrigger>
              <TabsTrigger value="cro">For CROs</TabsTrigger>
              <TabsTrigger value="ve">For Value Engineers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cfo" className="mt-8">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Financial Intelligence & Risk Assessment</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Transform deal conversations into board-ready financial narratives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Multi-year cash flow modeling</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Risk-adjusted ROI calculations</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Budget impact analysis</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Sensitivity & scenario planning</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Typical Results</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Deal Approval Speed</span>
                          <span className="font-semibold text-green-600">+45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Budget Accuracy</span>
                          <span className="font-semibold text-blue-600">+32%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Risk Mitigation</span>
                          <span className="font-semibold text-purple-600">+28%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cro" className="mt-8">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Revenue Acceleration Platform</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Arm your sales team with quantified value propositions that close bigger deals faster
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Revenue Impact</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Win rate optimization</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Deal size expansion</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Sales cycle compression</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Champion development</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Performance Lift</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Win Rate</span>
                          <span className="font-semibold text-green-600">+17pp</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Deal Velocity</span>
                          <span className="font-semibold text-blue-600">+28%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Average Deal Size</span>
                          <span className="font-semibold text-purple-600">+23%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ve" className="mt-8">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Value Engineering Workbench</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Professional-grade tools for sophisticated value quantification and storytelling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Advanced Analytics</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Monte Carlo simulations</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Industry benchmarking</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Value driver analysis</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Stakeholder mapping</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Productivity Gains</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Case Development</span>
                          <span className="font-semibold text-green-600">85% faster</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Model Accuracy</span>
                          <span className="font-semibold text-blue-600">+67%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Stakeholder Buy-in</span>
                          <span className="font-semibold text-purple-600">+41%</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing That Scales With You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your team size and business case complexity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Growth</CardTitle>
                    <CardDescription className="text-gray-600">Best for Series A/B teams</CardDescription>
                  </div>
                  <Badge variant="secondary">Popular</Badge>
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$1,199</span>
                  <span className="text-gray-600">/month</span>
                  <div className="text-sm text-gray-500 mt-1">Billed annually</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">5 users included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">5 live business cases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Standard integrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">ROI dashboard</span>
                  </li>
                </ul>
                <Button className="w-full">Start Free Trial</Button>
                <p className="text-sm text-gray-500 text-center mt-2">Breakeven at 1.2 deals</p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-blue-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Scale</CardTitle>
                  <CardDescription className="text-gray-600">For growing mid-market teams</CardDescription>
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$2,799</span>
                  <span className="text-gray-600">/month</span>
                  <div className="text-sm text-gray-500 mt-1">Billed annually</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">25 users included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Unlimited business cases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Advanced integrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Value realization tracking</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
                <p className="text-sm text-gray-500 text-center mt-2">Breakeven at 2.1 deals</p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Enterprise</CardTitle>
                  <CardDescription className="text-gray-600">For global organizations</CardDescription>
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">Let's Talk</span>
                  <div className="text-sm text-gray-500 mt-1">Custom pricing</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Unlimited users</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">SSO & advanced security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom ROI formulas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated CSM</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Development sandbox</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">On-premise deployment</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
                <p className="text-sm text-gray-500 text-center mt-2">ROI guarantee included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="customers" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proof in the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real customers who've transformed their value conversations
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12">
              <CardContent>
                <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-3xl">
                      {testimonials[currentTestimonial].logo}
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <Quote className="w-8 h-8 text-gray-300 mb-4 mx-auto lg:mx-0" />
                    <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentTestimonial].person}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                          {testimonials[currentTestimonial].metrics}
                        </Badge>
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
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">350+</div>
              <div className="text-gray-600">SaaS Leaders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$4.2B</div>
              <div className="text-gray-600">Pipeline Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Faster Case Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data security is our highest priority, with certifications that meet the most stringent requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
              <p className="text-gray-600 text-sm">Comprehensive security controls audited annually</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">ISO 27001</h3>
              <p className="text-gray-600 text-sm">International security management standards</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600 text-sm">European data privacy regulation adherence</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade infrastructure reliability</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Make Value Your Unfair Advantage?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join 350+ SaaS leaders who've transformed their revenue operations with quantified value
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Book a 15-Minute Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Start Free Trial
            </Button>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            No credit card required • Full access to all features • Setup in under 10 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ValueArch</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming how enterprise teams quantify, track, and expand business value through AI-powered ROI modeling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Platform Overview</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ROI Playbooks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 ValueArch. All rights reserved.
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