/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Award, 
  Users, 
  BookOpen, 
  Calendar, 
  Clock, 
  GraduationCap, 
  ShieldCheck, 
  TrendingUp, 
  Handshake, 
  Leaf, 
  Download,
  CheckCircle2,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

const CURRICULUM_DATA = [
  {
    id: 'strategic',
    title: 'Strategic Financial Management',
    coreFocus: ['Advanced Corporate Valuation', 'Capital Allocation Strategies', 'Global Financial Markets'],
    applications: ['M&A Deal Structuring', 'Risk Management Frameworks', 'Treasury Management'],
    icon: 'TrendingUp'
  },
  {
    id: 'digital',
    title: 'Digital Finance & AI',
    coreFocus: ['Fintech Ecosystems', 'Blockchain in Finance', 'AI-driven Forecasting'],
    applications: ['Automated Financial Reporting', 'Predictive Analytics', 'Digital Asset Management'],
    icon: 'TrendingUp'
  },
  {
    id: 'leadership',
    title: 'Leadership & Change',
    coreFocus: ['Boardroom Influence', 'Strategic Communication', 'Organizational Transformation'],
    applications: ['Stakeholder Management', 'Executive Presence', 'Crisis Leadership'],
    icon: 'TrendingUp'
  },
  {
    id: 'capstone',
    title: 'Capstone Project',
    coreFocus: ['Real-world Case Analysis', 'Strategic Pitching', 'Peer-to-peer Review'],
    applications: ['Integrated Strategy Design', 'Financial Modelling', 'Board Presentation'],
    icon: 'TrendingUp'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('strategic');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface shadow-md py-3' : 'bg-surface py-5'}`}>
        <nav className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <div className="font-headline text-xl md:text-2xl font-bold tracking-widest text-primary-container uppercase">
            IIM Lucknow CFO
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            {['Curriculum', 'Faculty', 'Admissions', 'Alumni'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-headline tracking-tight text-lg font-semibold text-primary-container hover:text-secondary transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block border border-secondary text-secondary px-6 py-2 font-bold text-sm uppercase tracking-wider hover:bg-secondary hover:text-white transition-all">
              Enquire
            </button>
            <button className="bg-secondary text-white px-6 py-2 font-bold text-sm uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-lg">
              Apply Now
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkMFfyzYC22jmfAxJwYF-Ut1WhPFFiLGjCa-CklBncX1VybbW-r3_HPl7WZJ42olmd9VQ2jRtN0HlQbIb13Xq1noVG_RYxvozOLUNgOcop754wgJpkTb0-y3G5Z5zVGgVbSJGPIaqlDyDzioSIT-fO2RCZmlJs-efqX0e_GmTOLoQDO3Moow0HEU_v6SxKzNE68Z2qaHZ9ZNiD8OsK7oOaLMhT0AW-N78AnoXDLmX2JcoivbgXN7jcy4ekNNY4T0QWIl5DgRmDazfP" 
              alt="Financial District"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 border border-secondary/30 mb-6 w-fit">
                <Award className="w-4 h-4 text-secondary-fixed-dim" />
                <span className="text-secondary-fixed-dim font-body text-[10px] uppercase tracking-widest font-bold">Triple Crown Accredited Institution</span>
              </div>
              
              <div className="mb-4">
                <p className="text-secondary-fixed-dim font-headline text-base md:text-lg font-bold uppercase tracking-[0.2em] mb-3">
                  IIM Lucknow Chief Financial Officer (CFO) Programme - Batch 09
                </p>
                <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Claim Your CFO Chair: <br />
                  <span className="text-secondary-fixed-dim">From Financial Expert to Strategic Partner</span>
                </h1>
              </div>
              
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
                The only Triple Crown-accredited CFO programme for finance leaders with 10+ years experience.
              </p>

              <div className="grid grid-cols-3 gap-6 md:gap-12 pt-8 border-t border-white/10">
                <div>
                  <p className="text-secondary-fixed-dim font-headline text-2xl md:text-3xl font-bold">10 Months</p>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider font-bold">Duration</p>
                </div>
                <div>
                  <p className="text-secondary-fixed-dim font-headline text-2xl md:text-3xl font-bold">126 Hours</p>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider font-bold">Learning</p>
                </div>
                <div>
                  <p className="text-secondary-fixed-dim font-headline text-2xl md:text-3xl font-bold">Executive</p>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider font-bold">Alumni Status</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="glass-panel p-8 shadow-2xl border border-white/10">
                <h3 className="font-headline text-2xl font-bold text-primary-container mb-6">Check Your Eligibility</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Full Name</label>
                    <input 
                      className="w-full bg-transparent border-b border-outline/30 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors outline-none text-primary-container font-medium" 
                      type="text" 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Professional Email</label>
                    <input 
                      className="w-full bg-transparent border-b border-outline/30 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors outline-none text-primary-container font-medium" 
                      type="email" 
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Years of Experience</label>
                    <select className="w-full bg-transparent border-b border-outline/30 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors outline-none text-primary-container font-medium appearance-none">
                      <option>10-15 Years</option>
                      <option>15-20 Years</option>
                      <option>20+ Years</option>
                    </select>
                  </div>
                  <button className="w-full bg-secondary text-white py-4 font-bold uppercase tracking-widest mt-6 hover:bg-secondary/90 transition-all shadow-lg active:scale-[0.98]">
                    Submit Application
                  </button>
                  <p className="text-[9px] text-center text-outline uppercase mt-4 tracking-tighter">Confidential enrollment process • Data protected</p>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Bar */}
        <div className="bg-surface-container-high py-6 border-y border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[10px] text-outline uppercase font-bold tracking-widest">Next Intake</p>
                <p className="text-primary-container font-headline font-bold text-lg">16th Aug 2026</p>
              </div>
              <div className="h-10 w-px bg-outline-variant/30 hidden md:block"></div>
              <div>
                <p className="text-[10px] text-outline uppercase font-bold tracking-widest">Batch Status</p>
                <p className="text-secondary font-bold text-lg">Filling Fast (Batch 09)</p>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none border border-primary-container text-primary-container px-8 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-primary-container hover:text-white transition-all">
                Download Syllabus
              </button>
              <button className="flex-1 md:flex-none bg-secondary text-white px-8 py-3 font-bold uppercase tracking-widest text-[10px] shadow-lg hover:shadow-secondary/20 transition-all">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Evolution Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3">
                <h2 className="font-headline text-4xl font-bold text-primary-container leading-tight">
                  The Evolution of <br /> Corporate Finance
                </h2>
                <div className="h-1 w-20 bg-secondary mt-6"></div>
              </div>
              <div className="lg:w-2/3 space-y-6 text-on-surface-variant text-lg leading-relaxed font-light">
                <p>
                  The <span className="font-bold text-primary-container">IIM Lucknow Chief Financial Officer (CFO) Programme - Batch 09</span> is meticulously designed for senior finance professionals aiming to transcend traditional accounting boundaries. In an era of rapid disruption, the modern CFO is no longer just a custodian of books but a <span className="text-secondary font-bold">Strategic Business Partner</span> driving value across the entire enterprise.
                </p>
                <p>
                  Participants will master <span className="font-bold text-primary-container">AI-driven forecasting</span> and data analytics to navigate market volatility with precision. The curriculum fosters <span className="font-bold text-primary-container">Boardroom Influence</span>, equipping you with the narrative power to shape organizational strategy at the highest levels of governance.
                </p>
                <p>
                  Through real-world case studies and peer-to-peer interaction with industry veterans, Batch 09 provides a transformative environment where financial acumen meets visionary leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Ribbon */}
        <div className="bg-primary-container py-10 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee items-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <span className="text-secondary-fixed-dim font-headline font-bold text-lg uppercase tracking-[0.3em] px-12 border-r border-white/10 flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6" /> Minimum 10 Years Experience
                </span>
                <span className="text-secondary-fixed-dim font-headline font-bold text-lg uppercase tracking-[0.3em] px-12 border-r border-white/10 flex items-center gap-4">
                  <GraduationCap className="w-6 h-6" /> Graduate with 50%+ Marks
                </span>
                <span className="text-secondary-fixed-dim font-headline font-bold text-lg uppercase tracking-[0.3em] px-12 border-r border-white/10 flex items-center gap-4">
                  <Calendar className="w-6 h-6" /> Batch 09 August 2026
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Pivot */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl font-bold text-primary-container mb-4">The Strategic Pivot</h2>
              <p className="text-outline uppercase tracking-[0.2em] text-xs font-bold">Four Pillars of Executive Transformation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/20">
              <div className="bg-surface p-12 hover:bg-surface-container transition-all group">
                <TrendingUp className="w-10 h-10 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="font-headline text-xl font-bold text-primary-container mb-4">Boardroom Readiness</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">Master the art of high-stakes communication and corporate governance to influence key stakeholders.</p>
              </div>
              <div className="bg-surface p-12 hover:bg-surface-container transition-all group">
                <TrendingUp className="w-10 h-10 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="font-headline text-xl font-bold text-primary-container mb-4">Digital Transformation</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">Leverage fintech, blockchain, and advanced analytics to automate and future-proof finance functions.</p>
              </div>
              <div className="bg-surface p-12 hover:bg-surface-container transition-all group">
                <Handshake className="w-10 h-10 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="font-headline text-xl font-bold text-primary-container mb-4">Strategic M&A</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">Deep dive into valuation, deal structuring, and post-merger integration strategies for inorganic growth.</p>
              </div>
              <div className="bg-surface p-12 hover:bg-surface-container transition-all group">
                <Leaf className="w-10 h-10 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="font-headline text-xl font-bold text-primary-container mb-4">ESG Integration</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">Embed environmental, social, and governance metrics into financial reporting and strategic planning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="font-headline text-4xl font-bold text-primary-container mb-16">Executive Curriculum</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Tabs */}
              <div className="lg:w-1/3 flex flex-col gap-3">
                {CURRICULUM_DATA.map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-between p-6 text-left font-bold transition-all border-l-4 ${
                      activeTab === tab.id 
                        ? 'bg-primary-container text-white border-secondary' 
                        : 'bg-surface-container-high text-primary-container border-transparent hover:bg-surface-container-highest'
                    }`}
                  >
                    <span className="text-sm uppercase tracking-wider">{tab.title}</span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === tab.id ? 'rotate-0' : 'rotate-0'}`} />
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="lg:w-2/3 bg-surface-container-low p-12 relative overflow-hidden min-h-[450px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-headline text-2xl font-bold text-primary-container mb-10 border-b border-outline-variant/30 pb-6">
                      {CURRICULUM_DATA.find(t => t.id === activeTab)?.title}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h5 className="text-secondary font-bold uppercase tracking-widest text-[10px]">Core Focus</h5>
                        <ul className="space-y-4">
                          {CURRICULUM_DATA.find(t => t.id === activeTab)?.coreFocus.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                              <span className="text-on-surface-variant font-medium text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <h5 className="text-secondary font-bold uppercase tracking-widest text-[10px]">Applications</h5>
                        <ul className="space-y-4">
                          {CURRICULUM_DATA.find(t => t.id === activeTab)?.applications.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                              <span className="text-on-surface-variant font-medium text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Network */}
        <section id="alumni" className="py-24 bg-primary-container text-white overflow-hidden relative">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
            <img 
              className="w-[600px] h-[600px] object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1iPZIEtF4e4z-ZfqLHiBQLI6i2eAxng8LFhthHJespWZ6zo9vtJ0IzlQsNlzahgxVN3caBptwvUVuBhDTXvS-DDQauVtCZ_9fGx_59s5ErkBrptnHRB8rz1DCLaf8uAZYoiuLo1PD0CtxXjiDoXGyTUA9nolVRKHYLJ7Dw2MCHxxG8976hC9th-Sg86vsGtI9CebOi5aCMKhtKDU3lYjsXK48AsNPOtVIohFs4E7MQQ0lyCF24e4FXclwnqEJ1mC291ISK3jeFTAk" 
              alt="Institutional Crest"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-headline text-4xl font-bold mb-8">Prestigious Alumni Network</h2>
                <p className="text-white/70 text-lg mb-12 leading-relaxed font-light">
                  Upon successful completion, you are inducted into the <span className="text-secondary-fixed-dim font-bold">IIM Lucknow Executive Alumni Association</span>. Gain access to a powerful network of 25,000+ global leaders, invitation-only seminars, and lifelong learning resources.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full border border-secondary/50 flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                      <Users className="w-6 h-6 text-secondary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Lifelong Networking</h4>
                      <p className="text-sm text-white/50">Access to regional alumni chapters worldwide.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full border border-secondary/50 flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                      <BookOpen className="w-6 h-6 text-secondary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">MDP Participation</h4>
                      <p className="text-sm text-white/50">Preferential access to Management Development Programmes.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <div className="relative border border-white/10 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    className="w-full h-auto" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6WygpXiWWJpl9OQmIokSETX3bzPUndxkSnCBmyf9ZXw-WX5-sxlA_RD7mPuPDm2ex_UtYKr-sZzJNsHfU3a8vCFNYU-819WzmFTSh4XyyBzGTbL1evDlJIAz-r-AIqkK0QHFaXM24AqQv8ghI1fMhUxzq6Xb5urGkwWdiRjwJ9jXOqOPi1UeuvrYQSEV15Lj7S1dtI-mGkq_P8kDNa4XviKfD2VaGe_6yKnZCk24m8_pHcCrswfdymbnxCZUE7Cja-p5zpcrntoyF" 
                    alt="CFO Certificate"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 bg-primary-container/90 backdrop-blur-md px-6 py-3 border border-secondary/30">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-secondary">Sample Certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl font-bold text-primary-container mb-4">Mastery Guided by Expertise</h2>
              <p className="text-outline uppercase tracking-[0.2em] text-xs font-bold">Programme Co-ordinators</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-surface-container-low p-10 border border-outline-variant/20 flex flex-col md:flex-row gap-8 items-center md:items-start transition-all hover:shadow-xl group">
                <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqo98rSe4zwytxlEJqhcNKc1b3AQ13UISHXJUQLLLVr0AEV9jcC3lR5Ay8tkOw116B5JtiplqvDS6O9y6-5512V47f96Ux6W71EHeX9WaAvEY-fj6J_Z8uOQFbsxB0-P34YbCEgx2E_-E0X0vMxcvgzYdjgYE9qyG2PuiEqRQnI-ConGy3rGeoErkC3vPiIg0GopXS0yGCTb_ROp4naPfP_ML6TCnkcA_RoSY-N9uvXRgAQD0uywAGLx2RDgGBrO-ejpW0j9db_XfT" 
                    alt="Prof. Ajay Garg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold text-primary-container">Prof. Ajay Garg</h4>
                  <p className="text-secondary font-bold text-[10px] uppercase mb-4 tracking-wider">Professor, Finance & Accounting</p>
                  <p className="text-on-surface-variant italic mb-6 text-base font-light leading-relaxed">
                    "The CFO's role has moved from managing value to creating value through strategic foresight."
                  </p>
                  <p className="text-xs text-on-surface-variant/80 font-medium">Expert in Corporate Finance, Security Analysis, and Portfolio Management.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-10 border border-outline-variant/20 flex flex-col md:flex-row gap-8 items-center md:items-start transition-all hover:shadow-xl group">
                <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp3joqgLZpYmXu26tUWJmTRo8lpbAinMzeWTMJgdCskZraXUGeG2Lq3unf4kHx6be5_AKC9yR_Ebtcq_fWoD2WGC48CoAbT1YzuF9ulktv1YmGZkXe6YD7-4oAW-6xOhTnmnq1Y0jkUN4DnpMX8Ccs_2FyP05L5rWIa7Qv4ym6zQ1_N0i4Y0o3NNcBdDzeqyZcswJkRLvVQOEM_sCK1sPr2Er3eyN4ktox2_Su0HKK7bOmjw-TjH5WkJV35pKQpvSB8yrw2AIqSE5s" 
                    alt="Prof. Ashish Pandey"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold text-primary-container">Prof. Ashish Pandey</h4>
                  <p className="text-secondary font-bold text-[10px] uppercase mb-4 tracking-wider">Professor, Finance & Accounting</p>
                  <p className="text-on-surface-variant italic mb-6 text-base font-light leading-relaxed">
                    "Digitalization is the new bedrock of financial strategy in Batch 09."
                  </p>
                  <p className="text-xs text-on-surface-variant/80 font-medium">Expert in Financial Reporting, Earnings Management, and Tax Policy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admissions & Schedule */}
        <section id="admissions" className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary-container mb-12">Admission Criteria</h2>
              <div className="space-y-6">
                <div className="bg-surface p-8 border-l-4 border-secondary shadow-sm">
                  <h5 className="font-bold text-primary-container mb-3 text-lg">Academic Background</h5>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    Bachelor's Degree (10+2+3) or equivalent from a recognized university with at least 50% aggregate marks.
                  </p>
                </div>
                <div className="bg-surface p-8 border-l-4 border-secondary shadow-sm">
                  <h5 className="font-bold text-primary-container mb-3 text-lg">Professional Experience</h5>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    Minimum 10 years of post-qualification work experience in a finance or related role as of the programme start date.
                  </p>
                </div>
                <div className="bg-surface p-8 border-l-4 border-secondary shadow-sm">
                  <h5 className="font-bold text-primary-container mb-3 text-lg">Selection Process</h5>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    Profile-based selection including review of professional achievements and potentially a virtual interaction.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary-container mb-12">Class Schedule</h2>
              <div className="bg-primary-container rounded-lg overflow-hidden shadow-2xl">
                <table className="w-full text-left">
                  <thead className="bg-primary-container border-b border-white/10">
                    <tr>
                      <th className="px-8 py-5 text-secondary uppercase tracking-widest text-[10px] font-bold">Metric</th>
                      <th className="px-8 py-5 text-secondary uppercase tracking-widest text-[10px] font-bold">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { label: 'Frequency', value: 'Alternate Sundays' },
                      { label: 'Timings', value: '09:00 AM - 12:15 PM (IST)' },
                      { label: 'Mode', value: 'Live Virtual Classes (D2C)' },
                      { label: 'Campus Visit', value: '3 Days Mandatory Immersion' },
                      { label: 'Total Contact Hours', value: '126 Sessions (60 mins each)' }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="px-8 py-5 text-white font-bold text-sm">{row.label}</td>
                        <td className="px-8 py-5 text-white/60 text-sm">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-container text-white py-20 px-6 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <div className="font-headline text-2xl font-bold text-secondary mb-6">IIM Lucknow</div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Pioneering leadership and management excellence for the next generation of global executives.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] tracking-[0.2em] uppercase font-bold text-white mb-8">Programmes</h5>
            <ul className="space-y-4">
              {['CFO Programme', 'Strategic HR', 'Marketing Leader'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-secondary transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] tracking-[0.2em] uppercase font-bold text-white mb-8">Resources</h5>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-secondary transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] tracking-[0.2em] uppercase font-bold text-white mb-8">Accreditation</h5>
            <div className="flex gap-4">
              {['AACSB', 'AMBA', 'EQUIS'].map(item => (
                <span key={item} className="text-[10px] font-bold border border-white/20 px-2 py-1 text-white/60">{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-[10px] tracking-widest uppercase font-medium text-white/20">
            © 2024 IIM Lucknow. All Rights Reserved. Executive Education Division.
          </p>
        </div>
      </footer>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] glass-panel border-t border-outline-variant/20 py-4 px-6 md:px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-10">
            <div>
              <p className="text-[9px] text-outline uppercase font-bold tracking-widest mb-1">Next Intake</p>
              <p className="text-primary-container font-headline font-bold text-base">16th Aug 2026</p>
            </div>
            <div className="h-8 w-px bg-outline-variant/30 hidden sm:block"></div>
            <div>
              <p className="text-[9px] text-outline uppercase font-bold tracking-widest mb-1">Batch Status</p>
              <p className="text-secondary font-bold text-base">Filling Fast (Batch 09)</p>
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none border border-primary-container text-primary-container px-8 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-primary-container hover:text-white transition-all">
              Download Syllabus
            </button>
            <button className="flex-1 md:flex-none bg-secondary text-white px-10 py-3 font-bold uppercase tracking-widest text-[10px] shadow-lg hover:shadow-secondary/30 active:scale-95 transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
