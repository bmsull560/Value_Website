'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Sparkles, 
  Calculator, 
  TrendingUp, 
  Shield, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  Target,
  Zap,
  Building,
  Star,
  Menu,
  Bot,
  MessageSquare,
  Code,
  GitPullRequest,
  Brain,
  Lock,
  Gauge,
  CreditCard,
  ArrowUpRight
} from 'lucide-react';

export default function Home() {
  const [arrTarget, setArrTarget] = useState([5000000]);
  const [dealSize, setDealSize] = useState([50000]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "ValueArch helped us close 14 additional enterprise deals worth $4.2M in Q4. The ROI calculator alone saved our sales team 15 hours per week.",
      author: "Sarah Chen",
      title: "VP of Sales",
      company: "CloudScale",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b5c1c6dd?w=60&h=60&fit=crop&crop=face"
    },
    {
      quote: "Before ValueArch, our renewal conversations were guesswork. Now we show customers exactly why they're seeing 340% ROI, and our NRR jumped to 142%.",
      author: "Marcus Rodriguez",
      title: "Chief Customer Officer",
      company: "DataFlow Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      quote: "The AI-powered business case generation is incredible. What used to take our analysts 3 days now happens in 30 minutes, with better insights.",
      author: "Emily Watson",
      title: "Head of Revenue Operations",
      company: "TechForward",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const paybackWeeks = Math.round((2799 * 12) / ((arrTarget[0] * 0.17) / 52));
  const additionalRevenue = Math.round(arrTarget[0] * 0.17);

  return (
    <div className="antialiased bg-gray-950 text-white min-h-screen" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial'}}>
      {/* Background */}
      <div className="absolute top-0 w-full -z-10 h-[800px] blur-3xl bg-cover bg-center opacity-30" 
           style={{backgroundImage: 'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=3840&h=800&fit=crop")'}}></div>

      {/* Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <div className="bg-gray-900/80 border-gray-800 border rounded-full shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl">
          <div className="flex pt-3 pr-4 pb-3 pl-6 items-center justify-between">
            {/* Logo */}
            <a href="#" className="inline-flex items-center justify-center text-white font-bold text-xl">
              ValueArch
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-white/70 text-sm font-medium text-white/90">Platform</a>
              <a href="#" className="hover:text-white/70 text-sm font-medium text-white/90">Solutions</a>
              <a href="#" className="hover:text-white/70 text-sm font-medium text-white/90">Customers</a>
              <a href="#" className="hover:text-white/70 text-sm font-medium text-white/90">Pricing</a>
            </nav>

            <div className="hidden md:flex gap-3 items-center">
              <a href="#" className="hover:text-white/60 text-sm font-medium text-white/80">Sign in</a>
              <button type="button" className="button">
                <div className="points_wrapper">
                  {[...Array(10)].map((_, i) => (
                    <i key={i} className="point"></i>
                  ))}
                </div>
                <span className="inner">
                  Book Demo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-800 p-2 text-white/80">
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24">
        <div className="max-w-7xl lg:px-8 mx-auto px-6">
          <div className="sm:pt-16 text-center max-w-4xl mr-auto ml-auto pt-12 pb-48">
            <Badge className="inline-flex items-center gap-2 text-xs font-medium text-white/90 bg-gray-800/50 border-gray-700 border rounded-full mr-auto mb-4 ml-auto pt-1 pr-3 pb-1 pl-3">
              <Sparkles className="w-3 h-3" />
              Trusted by 400+ Revenue Leaders
            </Badge>

            <h1 className="sm:text-6xl md:text-8xl text-4xl font-bold text-white/90 tracking-tighter font-space-grotesk mix-blend-hard-light drop-shadow-2xl" style="">
              Close More 
              <span className="font-bold text-blue-300 tracking-tighter"> Enterprise Deals</span> with Quantified Value Stories
            </h1>
            
            <p className="sm:text-lg text-base font-normal text-gray-400 mix-blend-screen mt-5 drop-shadow-2xl max-w-3xl mx-auto">
              ValueArch's AI-powered platform builds compelling business cases in 30 minutes, not 3 days. 
              Turn every sales conversation into board-ready ROI proof that wins deals and drives renewals.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
              <div className="relative inline-block group rounded-full">
                <button className="relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
                  <span className="relative z-10 inline-flex items-center gap-2 font-semibold rounded-full">
                    Start Your 14-Day Free Trial
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
                </button>
                <span className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" 
                      style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <a href="#" className="group relative overflow-hidden leading-none transition-all duration-300 text-white bg-gray-800/50 border-gray-700 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm backdrop-blur cursor-pointer">
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-white/5"></span>
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <Calculator className="w-3.5 h-3.5" />
                      Calculate Your ROI
                    </span>
                  </a>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-gray-900/95 border-gray-800 backdrop-blur-xl text-white">
                  <DialogHeader>
                    <DialogTitle className="text-white">ROI Calculator</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-white">Annual Recurring Revenue Target</Label>
                      <div className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
                        ${arrTarget[0].toLocaleString()}
                      </div>
                      <Slider
                        value={arrTarget}
                        onValueChange={setArrTarget}
                        max={20000000}
                        min={1000000}
                        step={250000}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Average Deal Size</Label>
                      <div className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
                        ${dealSize[0].toLocaleString()}
                      </div>
                      <Slider
                        value={dealSize}
                        onValueChange={setDealSize}
                        max={200000}
                        min={10000}
                        step={5000}
                        className="w-full"
                      />
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                      <h4 className="font-semibold text-blue-300 mb-2">Your ROI Projection</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Additional Revenue:</span>
                          <span className="text-white font-medium">${additionalRevenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Payback Period:</span>
                          <span className="text-white font-medium">{paybackWeeks} weeks</span>
                        </div>
                        <div className="flex justify-between border-t border-blue-500/30 pt-2">
                          <span className="text-gray-300">Annual ROI:</span>
                          <span className="text-blue-300 font-bold">847%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
              <div className="flex -space-x-2">
                <img className="h-9 w-9 rounded-full ring-2 ring-gray-800 object-cover" 
                     src="https://images.unsplash.com/photo-1494790108755-2616b5c1c6dd?w=60&h=60&fit=crop&crop=face" />
                <img className="h-9 w-9 rounded-full ring-2 ring-gray-800 object-cover" 
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" />
                <img className="h-9 w-9 rounded-full ring-2 ring-gray-800 object-cover" 
                     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" />
              </div>
              <div className="flex gap-2 text-sm font-medium text-gray-400 items-center">
                <Shield className="w-4 h-4" />
                Managing $8.7B in active pipeline
              </div>
            </div>
          </div>

          {/* Partner logos */}
          <div className="pt-6 pr-6 pb-6 pl-6 w-full">
            <div className="text-center">
              <p className="uppercase text-sm font-medium text-zinc-400 tracking-wide">
                Trusted by revenue leaders at
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 justify-items-center items-center opacity-60">
              {['Salesforce', 'HubSpot', 'Stripe', 'Slack', 'Zoom', 'Shopify'].map((company) => (
                <div key={company} className="h-[40px] w-[120px] bg-white/10 rounded flex items-center justify-center text-xs font-medium text-white/70">
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Product Preview: Business Case Builder */}
          <div className="relative sm:mt-16 my-48">
            <div className="relative overflow-hidden bg-gray-900/70 border border-gray-800 rounded-3xl mx-0 sm:mx-8 lg:mx-24 shadow-xl backdrop-blur-xl">
              <div className="p-6 sm:p-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
                  <h3 className="text-2xl text-white font-bold tracking-tighter">AI-Powered Business Case Builder</h3>
                  <Badge className="inline-flex items-center gap-2 text-xs text-gray-300 bg-gray-800/50 border border-gray-700 rounded-full px-2.5 py-1">
                    <Bot className="w-3 h-3" />
                    GPT-4 Powered
                  </Badge>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* ROI Modeling */}
                  <div className="relative rounded-2xl border border-gray-800 bg-gray-900/60 ring-1 ring-inset ring-gray-700/50 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                      <span className="text-sm font-medium text-gray-200">Instant ROI Modeling</span>
                      <Badge className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full px-2 py-0.5">
                        <BarChart3 className="w-3 h-3" />
                        Live Data
                      </Badge>
                    </div>
                    <div className="px-3 py-3 space-y-3">
                      <div className="rounded-lg bg-gray-950/70 border border-gray-800 p-3">
                        <div className="text-xs text-gray-300 leading-relaxed space-y-1">
                          <div className="flex justify-between">
                            <span>Revenue Lift:</span>
                            <span className="text-green-400">+$2.1M</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cost Savings:</span>
                            <span className="text-green-400">$340K</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Risk Mitigation:</span>
                            <span className="text-blue-400">$680K</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                          <Target className="w-3 h-3 text-blue-300" />
                        </div>
                        <div className="flex-1 rounded-lg bg-gray-800/50 border border-gray-700 p-2 text-xs text-gray-200">
                          Pulling data from CRM to quantify deal impact in real-time
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 border-t border-gray-800 flex items-center gap-2 text-xs text-gray-400">
                      <Brain className="w-3 h-3" />
                      <span>67% faster deal approval</span>
                    </div>
                  </div>

                  {/* Value Tracking */}
                  <div className="relative rounded-2xl border border-gray-800 bg-gray-900/60 ring-1 ring-inset ring-gray-700/50 overflow-hidden">
                    <div className="relative h-56">
                      <div className="absolute inset-0 p-4">
                        <div className="rounded-lg bg-gray-950/70 border border-gray-800 h-full overflow-hidden">
                          <div className="px-3 py-2 border-b border-gray-800 flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-green-500/70"></span>
                            <span className="h-3 w-3 rounded-full bg-yellow-400/70"></span>
                            <span className="h-3 w-3 rounded-full bg-red-500/70"></span>
                            <span className="ml-2 text-xs text-gray-400">Value Dashboard</span>
                          </div>
                          <div className="p-3 text-xs leading-relaxed space-y-2">
                            <div className="bg-green-500/10 border border-green-500/30 rounded p-2">
                              <div className="text-green-300 font-medium">Q4 Results</div>
                              <div className="text-gray-300">142% NRR • $4.2M ARR</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 border-t border-gray-800 flex items-center gap-2 text-xs text-gray-400">
                      <TrendingUp className="w-3 h-3" />
                      <span>Real-time value realization</span>
                    </div>
                  </div>

                  {/* Automated Renewals */}
                  <div className="relative rounded-2xl border border-gray-800 bg-gray-900/60 ring-1 ring-inset ring-gray-700/50 overflow-hidden">
                    <div className="relative h-56">
                      <div className="absolute inset-0 p-4 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                        <div className="rounded-xl bg-gray-900/70 border border-gray-800 backdrop-blur p-3 shadow-sm w-40">
                          <div className="flex items-center gap-2 text-xs font-medium text-gray-200">
                            <Zap className="w-3 h-3" />
                            Renewal Alert
                          </div>
                          <div className="mt-2 space-y-1.5">
                            <div className="h-1.5 w-full rounded bg-green-600"></div>
                            <div className="h-1.5 w-5/6 rounded bg-gray-700"></div>
                            <div className="h-1.5 w-2/3 rounded bg-gray-800"></div>
                          </div>
                          <div className="mt-3 inline-flex items-center gap-1 text-xs text-gray-200 bg-green-600/20 border border-green-500/30 rounded-md px-2 py-1">
                            <CheckCircle className="w-3 h-3" />
                            340% ROI
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 border-t border-gray-800 flex items-center gap-2 text-xs text-gray-400">
                      <Users className="w-3 h-3" />
                      <span>Automated expansion plays</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-medium tracking-tight text-white">30-minute setup</h4>
                    <p className="mt-2 text-sm text-gray-400">Connect your CRM and BI tools to start building cases immediately.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium tracking-tight text-white">Executive-ready output</h4>
                    <p className="mt-2 text-sm text-gray-400">AI writes compelling narratives that CFOs and boards approve.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium tracking-tight text-white">Continuous tracking</h4>
                    <p className="mt-2 text-sm text-gray-400">Monitor value realization with embedded checkpoints and alerts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Testimonials */}
          <div className="relative z-10 mt-16">
            <div className="grid gap-12 lg:grid-cols-2 my-48">
              {/* Results card */}
              <div className="relative rounded-[36px] pt-5 pr-5 pb-5 pl-5">
                <Card className="relative overflow-hidden bg-gray-900/70 border-gray-800 rounded-3xl shadow-xl backdrop-blur-xl text-white">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
                      <CardTitle className="text-2xl text-white font-bold tracking-tighter">Proven Results</CardTitle>
                      <Badge className="inline-flex items-center gap-2 text-xs text-gray-300 bg-gray-800/50 border border-gray-700 rounded-full px-2.5 py-1">
                        <Gauge className="w-3 h-3" />
                        Live metrics
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">+17pp</div>
                        <div className="text-sm text-gray-400">Enterprise win-rate uplift</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">&lt;30min</div>
                        <div className="text-sm text-gray-400">To publish business case</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">130%</div>
                        <div className="text-sm text-gray-400">Average Net Revenue Retention</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">23%</div>
                        <div className="text-sm text-gray-400">Faster sales cycles</div>
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Customer Success Score</span>
                          <span className="text-white font-medium">4.8/5.0</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '96%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonials */}
              <div>
                <h3 className="text-4xl sm:text-5xl text-white font-bold tracking-tighter">What revenue leaders are saying</h3>
                <div className="mt-8 border-t border-gray-800 pt-6">
                  <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl">
                    <div className="flex items-start gap-4">
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].author}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-700"
                      />
                      <div className="flex-1">
                        <blockquote className="text-gray-200 text-sm leading-relaxed mb-4">
                          "{testimonials[currentIndex].quote}"
                        </blockquote>
                        <div>
                          <cite className="text-white font-medium text-sm">
                            {testimonials[currentIndex].author}
                          </cite>
                          <div className="text-gray-400 text-xs">
                            {testimonials[currentIndex].title} • {testimonials[currentIndex].company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-4 gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-blue-500' : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <section className="sm:p-8 bg-gray-900/40 border-gray-800 border rounded-[36px] mt-16 mb-16 pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
            <div className="flex flex-col items-center text-center border-b border-gray-800 pb-8">
              <Badge className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
                <CreditCard className="w-3 h-3" />
                <span className="text-xs font-normal">Pricing</span>
              </Badge>
              <h2 className="mt-4 text-[40px] sm:text-6xl lg:text-7xl leading-[0.95] text-white font-bold tracking-tighter">Scale with confidence</h2>
              <p className="mt-2 text-sm sm:text-base text-gray-400">Transparent pricing that grows with your success.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mt-8 mx-auto">
              {/* Growth */}
              <Card className="relative overflow-hidden p-5 sm:p-6 bg-gray-900/50 border border-gray-800 rounded-2xl backdrop-blur-xl text-white">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between text-xs text-gray-400 border-b border-gray-800/50 pb-4">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-950/80 ring-1 ring-gray-700">01</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Perfect for growing teams
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl sm:text-3xl text-white font-bold tracking-tighter">Growth</CardTitle>
                      <CardDescription className="mt-1 text-sm text-gray-400">For Series A/B teams scaling fast.</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl sm:text-3xl text-white font-bold tracking-tighter">$1,199</p>
                      <p className="text-xs text-gray-500">per month</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white text-gray-900 text-sm font-medium hover:opacity-90 transition">
                    Start Free Trial
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="mt-2 text-center">
                    <p className="text-xs text-gray-500">Pays for itself with 1.2 deals</p>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm border-t border-gray-800/50 pt-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                      5 users, 5 live business cases
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                      AI-powered ROI modeling
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                      CRM & BI integrations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Scale */}
              <Card className="relative overflow-hidden p-5 sm:p-6 bg-gray-900/60 border border-gray-700 rounded-2xl shadow backdrop-blur-xl ring-1 ring-blue-500/20 text-white">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between text-xs text-gray-400 border-b border-gray-800/50 pb-4">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-950/80 ring-1 ring-blue-500/30">02</span>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Most Popular</Badge>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl sm:text-3xl text-white font-bold tracking-tighter">Scale</CardTitle>
                      <CardDescription className="mt-1 text-sm text-gray-400">For high-growth revenue teams.</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl sm:text-3xl text-white font-bold tracking-tighter">$2,799</p>
                      <p className="text-xs text-gray-500">per month</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white text-gray-900 text-sm font-medium hover:opacity-90 transition">
                    Start Free Trial
                    <Zap className="w-3.5 h-3.5" />
                  </button>
                  <div className="mt-2 text-center">
                    <p className="text-xs text-gray-500">ROI: 847% annually</p>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm border-t border-gray-800/50 pt-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                      25 users, unlimited cases
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                      Advanced analytics & reporting
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                      Value realization tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="relative overflow-hidden p-5 sm:p-6 bg-gray-900/50 border border-gray-800 rounded-2xl backdrop-blur-xl text-white">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between text-xs text-gray-400 border-b border-gray-800/50 pb-4">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-950/80 ring-1 ring-gray-700">03</span>
                    <span className="inline-flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      Enterprise-grade
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl sm:text-3xl text-white font-bold tracking-tighter">Enterprise</CardTitle>
                      <CardDescription className="mt-1 text-sm text-gray-400">For global organizations.</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl sm:text-3xl text-white font-bold tracking-tighter">Let's Talk</p>
                      <p className="text-xs text-gray-500">custom pricing</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-gray-800/50 text-white text-sm font-medium hover:bg-gray-800/70 transition border border-gray-700">
                    Book Demo
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                  <ul className="mt-6 space-y-3 text-sm border-t border-gray-800/50 pt-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                      SSO, custom ROI formulas, sandbox
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                      Dedicated CSM & 24/7 support
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                      On-premise deployment options
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col text-center mt-6 items-center border-t border-gray-800 pt-6">
              <p className="text-xs text-gray-500">All plans include 14-day free trial • No credit card required • Full platform access</p>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8">
        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-medium tracking-tight text-white">ValueArch</span>
                  <span className="text-sm text-gray-400">Turn conversations into business cases</span>
                </div>

                <div className="mt-4 space-y-2 text-gray-400 border-t border-gray-800 pt-6">
                  <p className="text-sm">© 2024 ValueArch. All rights reserved.</p>
                  <p className="text-xs text-gray-500">Trusted by 400+ revenue leaders managing $8.7B in pipeline.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 md:col-span-2">
                <div className="space-y-8">
                  <div>
                    <h4 className="mb-4 text-sm font-medium tracking-tight text-white">Platform</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                      <li><a className="hover:text-white transition" href="#">ROI Calculator</a></li>
                      <li><a className="hover:text-white transition" href="#">Business Cases</a></li>
                      <li><a className="hover:text-white transition" href="#">Value Tracking</a></li>
                      <li><a className="hover:text-white transition" href="#">Integrations</a></li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="mb-4 text-sm font-medium tracking-tight text-white">Company</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                      <li><a className="hover:text-white transition" href="#">About</a></li>
                      <li><a className="hover:text-white transition" href="#">Customers</a></li>
                      <li><a className="hover:text-white transition" href="#">Security</a></li>
                      <li><a className="hover:text-white transition" href="#">Careers</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .button {
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.25s ease;
          background: radial-gradient(65.28% 65.28% at 50% 100%,
              rgba(99, 102, 241, 0.8) 0%,
              rgba(99, 102, 241, 0) 100%),
            linear-gradient(0deg, #4f46e5, #4f46e5);
          border-radius: 9999px;
          border: none;
          outline: none;
          padding: 8px 18px;
          min-height: 36px;
          min-width: 90px;
        }

        .button::before,
        .button::after {
          content: "";
          position: absolute;
          transition: all 0.5s ease-in-out;
          z-index: 0;
        }

        .button::before {
          inset: 1px;
          background: linear-gradient(177.95deg,
              rgba(255, 255, 255, 0.19) 0%,
              rgba(255, 255, 255, 0) 100%);
          border-radius: 9999px;
        }

        .button::after {
          inset: 2px;
          background: radial-gradient(65.28% 65.28% at 50% 100%,
              rgba(99, 102, 241, 0.8) 0%,
              rgba(99, 102, 241, 0) 100%),
            linear-gradient(0deg, #4f46e5, #4f46e5);
          border-radius: 9999px;
        }

        .button:active {
          transform: scale(0.95);
        }

        .points_wrapper {
          overflow: hidden;
          width: 100%;
          height: 100%;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        .points_wrapper .point {
          bottom: -8px;
          position: absolute;
          animation: floating-points infinite ease-in-out;
          pointer-events: none;
          width: 1.5px;
          height: 1.5px;
          background-color: #fff;
          border-radius: 9999px;
        }

        @keyframes floating-points {
          0% {
            transform: translateY(0);
          }
          85% {
            opacity: 0;
          }
          100% {
            transform: translateY(-40px);
            opacity: 0;
          }
        }

        .points_wrapper .point:nth-child(1) {
          left: 10%;
          opacity: 1;
          animation-duration: 2.35s;
          animation-delay: 0.2s;
        }

        .points_wrapper .point:nth-child(2) {
          left: 30%;
          opacity: 0.7;
          animation-duration: 2.5s;
          animation-delay: 0.5s;
        }

        .points_wrapper .point:nth-child(3) {
          left: 25%;
          opacity: 0.8;
          animation-duration: 2.2s;
          animation-delay: 0.1s;
        }

        .points_wrapper .point:nth-child(4) {
          left: 44%;
          opacity: 0.6;
          animation-duration: 2.05s;
        }

        .points_wrapper .point:nth-child(5) {
          left: 50%;
          opacity: 1;
          animation-duration: 1.9s;
        }

        .points_wrapper .point:nth-child(6) {
          left: 75%;
          opacity: 0.5;
          animation-duration: 1.5s;
          animation-delay: 1.5s;
        }

        .points_wrapper .point:nth-child(7) {
          left: 88%;
          opacity: 0.9;
          animation-duration: 2.2s;
          animation-delay: 0.2s;
        }

        .points_wrapper .point:nth-child(8) {
          left: 58%;
          opacity: 0.8;
          animation-duration: 2.25s;
          animation-delay: 0.2s;
        }

        .points_wrapper .point:nth-child(9) {
          left: 98%;
          opacity: 0.6;
          animation-duration: 2.6s;
          animation-delay: 0.1s;
        }

        .points_wrapper .point:nth-child(10) {
          left: 65%;
          opacity: 1;
          animation-duration: 2.5s;
          animation-delay: 0.2s;
        }

        .inner {
          z-index: 2;
          gap: 5px;
          position: relative;
          width: 100%;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
          transition: color 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}