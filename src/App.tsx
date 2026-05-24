import React, { useState } from "react";
import { 
  Sparkles, 
  FileText, 
  MessageSquare, 
  Compass, 
  Linkedin, 
  BookOpen, 
  Award, 
  Settings, 
  Maximize2,
  ChevronRight,
  TrendingUp,
  Briefcase
} from "lucide-react";
import CvReviewer from "./components/CvReviewer";
import InterviewSimulator from "./components/InterviewSimulator";
import SkillGapAnalyzer from "./components/SkillGapAnalyzer";
import LinkedInOptimizer from "./components/LinkedInOptimizer";
import SpecSection from "./components/SpecSection";
import { ActiveTool } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTool>("spec");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col p-4 md:p-6 overflow-x-hidden">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center mb-6 border-b border-slate-900 pb-4 shrink-0 transition" id="bento-navigation">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-xl italic text-white shadow-lg shadow-indigo-600/30">
            A
          </div>
          <div>
            <span className="text-lg md:text-xl font-bold tracking-tight block text-slate-100">
              GradAI <span className="text-indigo-400">Assistant</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider block font-semibold hover:text-indigo-300 transition">
              🎓 INDONESIAN CAMPUS TO INDUSTRY HUB
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800 text-xs items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
            <span className="text-slate-300 font-medium font-mono">Gemini 3.5 Active</span>
          </div>
          <div className="w-9 h-9 bg-slate-800 rounded-full border-2 border-indigo-5050 overflow-hidden flex items-center justify-center text-xs font-semibold select-none text-indigo-200">
            JD
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-6">
        
        {/* Short Dashboard Introduction */}
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100">
            Transformasi Karier Mahasiswa dengan AI
          </h1>
          <p className="text-slate-400 text-xs md:text-sm">
            Portal pendamping kelulusan cerdas. Klik panel bento di bawah untuk mengaktifkan modul cerdas interaktif secara langsung.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4" id="main-bento-grid">
          
          {/* Bento Box 1: Platform Specs / PRD (Wide Header-Level Card) */}
          <div 
            onClick={() => setActiveTab("spec")}
            className={`col-span-1 md:col-span-12 lg:col-span-4 bg-slate-900 border border-slate-850 rounded-3xl p-5 cursor-pointer relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
              activeTab === "spec" ? "ring-2 ring-indigo-500 shadow-xl shadow-indigo-950/20 bg-slate-900/90" : "hover:border-slate-700 hover:bg-slate-900/60"
            }`}
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition">
              <BookOpen className="w-24 h-24 text-slate-400" />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest">
                <BookOpen className="w-4 h-4" />
                <span>Product Requirements</span>
              </div>
              <span className="text-[10px] bg-indigo-550/20 border border-indigo-500/25 text-indigo-300 px-2.5 py-0.5 rounded-full font-bold">
                PRD Spec
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-200 mb-2">Spesifikasi Lengkap & Sistem</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Baca PRD lengkap mengenai platform bimbingan ini: tantangan mahasiswa, alur data API, rancangan skema JSON, dan milestone rilis.
            </p>
            <div className="flex items-center text-xs font-bold text-indigo-400 group-hover:underline mt-auto">
              <span>Buka Dokumen Spesifikasi</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bento Box 2: CV Reviewer */}
          <div 
            onClick={() => setActiveTab("cv")}
            className={`col-span-1 md:col-span-6 lg:col-span-4 bg-slate-900 border border-slate-850 rounded-3xl p-5 cursor-pointer relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
              activeTab === "cv" ? "ring-2 ring-indigo-500 shadow-xl shadow-indigo-950/20 bg-slate-900/90" : "hover:border-slate-700 hover:bg-slate-900/60"
            }`}
          >
            <div className="absolute top-4 right-4 text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">
              ATS Standard
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-slate-800 rounded-lg text-slate-300">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pilar 1</span>
            </div>

            <h3 className="text-base font-bold text-slate-200 mb-1">CV Reviewer & ATS Grader</h3>
            <p className="text-slate-400 text-xs mb-4">Uji skor kesiapan CV, temukan kesalahan penulisan, dan pelajari saran kalimat kerja industri.</p>
            
            {/* Embedded Micro-Chart Visual to echo bento-grid requirements from Design HTML */}
            <div className="bg-slate-950/80 p-3.5 border border-slate-850 rounded-2xl flex items-center gap-4 mb-4">
              <div className="relative shrink-0">
                <svg className="w-14 h-14 transform -rotate-90">
                  <circle cx="28" cy="28" r="24" stroke="currentColor" stroke-width="5" fill="transparent" className="text-slate-800" />
                  <circle cx="28" cy="28" r="24" stroke="currentColor" stroke-width="5" fill="transparent" className="text-indigo-400" stroke-dasharray="150" stroke-dashoffset="27" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-black text-slate-100">82</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-bold text-indigo-400 tracking-wider">Simulasi Rata-rata</span>
                <span className="text-slate-300 text-[11px] block leading-tight font-medium">Banyak CV mahasiswa belum mencantumkan metrik persentase performa kerja.</span>
              </div>
            </div>

            <div className="flex items-center text-xs font-bold text-indigo-400 group-hover:underline">
              <span>Mulai Review CV Saya</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bento Box 3: Interview Simulator */}
          <div 
            onClick={() => setActiveTab("interview")}
            className={`col-span-1 md:col-span-6 lg:col-span-4 bg-slate-900 border border-slate-850 rounded-3xl p-5 cursor-pointer relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
              activeTab === "interview" ? "ring-2 ring-indigo-500 shadow-xl shadow-indigo-950/20 bg-slate-900/90" : "hover:border-slate-700 hover:bg-slate-900/60"
            }`}
          >
            <div className="absolute top-4 right-4 text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full">
              Jessica AI HR
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-slate-800 rounded-lg text-slate-300">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pilar 2</span>
            </div>

            <h3 className="text-base font-bold text-slate-200 mb-1">Interview Simulator</h3>
            <p className="text-slate-400 text-xs mb-3">Simulasi interaktif tanya jawab behavioral method STAR berbekal feedback tips instan.</p>

            {/* Embedded Mini chat showcase to fit Bento style */}
            <div className="bg-slate-950/80 p-3 border border-slate-850 rounded-2xl mb-4 space-y-1.5">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Jessica (HR Manager):</span>
              <p className="text-[11px] italic text-slate-300 line-clamp-2">
                "Bagaimana Anda menyelesaikan konflik internal dalam kerja tim mahasiswa?"
              </p>
            </div>

            <div className="flex items-center text-xs font-bold text-indigo-400 group-hover:underline">
              <span>Buka Simulator Wawancara</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bento Box 4: Skill Gap Analyzer */}
          <div 
            onClick={() => setActiveTab("roadmap")}
            className={`col-span-1 md:col-span-6 lg:col-span-6 bg-slate-900 border border-slate-850 rounded-3xl p-5 cursor-pointer relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
              activeTab === "roadmap" ? "ring-2 ring-indigo-500 shadow-xl shadow-indigo-950/20 bg-slate-900/90" : "hover:border-slate-700 hover:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2 items-center">
                <div className="p-1.5 bg-slate-800 rounded-lg text-slate-300">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pilar 3</span>
              </div>
              <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full font-semibold">
                Target Roadmap
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-200 mb-1">Skill Gap Analyzer & Roadmap</h3>
            <p className="text-slate-400 text-xs mb-3">Bandingkan resume Anda saat ini dengan standar industri untuk merumuskan fase-fase belajar proyek portofolio.</p>

            {/* Simulated progress meters built beautifully echoing Bento Grid requirement */}
            <div className="grid grid-cols-2 gap-3 mb-4 bg-slate-950/80 p-3 border border-slate-850 rounded-2xl">
              <div>
                <div className="flex justify-between text-[9px] font-bold uppercase text-slate-400 mb-1">
                  <span>Python / SQL</span>
                  <span className="text-emerald-400">92%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-850 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] font-bold uppercase text-slate-400 mb-1">
                  <span>System Design</span>
                  <span className="text-indigo-400">40% GAP</span>
                </div>
                <div className="h-1.5 w-full bg-slate-850 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>

            <div className="flex items-center text-xs font-bold text-indigo-400 group-hover:underline">
              <span>Formula Roadmap Belajar</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bento Box 5: LinkedIn Optimizer */}
          <div 
            onClick={() => setActiveTab("linkedin")}
            className={`col-span-1 md:col-span-6 lg:col-span-6 bg-slate-900 border border-slate-850 rounded-3xl p-5 cursor-pointer relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
              activeTab === "linkedin" ? "ring-2 ring-indigo-500 shadow-xl shadow-indigo-950/20 bg-slate-900/90" : "hover:border-slate-700 hover:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2 items-center">
                <div className="p-1.5 bg-slate-800 rounded-lg text-slate-300">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pilar 4</span>
              </div>
              <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-semibold">
                Branding SEO
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-200 mb-1">LinkedIn Profile Optimizer</h3>
            <p className="text-slate-400 text-xs mb-3">Rewrite Headline dan deskripsi Tentang Saya (About) bernarasi kuat agar mudah ditemukan Headhunter.</p>

            {/* Keyword tag previews resembling Bento grid layout */}
            <div className="flex flex-wrap gap-1.5 mb-4 bg-slate-950/80 p-3 border border-slate-850 rounded-2xl">
              <span className="text-[8px] font-bold text-indigo-300 bg-indigo-950/50 px-2 py-0.5 rounded-md border border-indigo-900/40">#AgilePM</span>
              <span className="text-[8px] font-bold text-indigo-300 bg-indigo-950/50 px-2 py-0.5 rounded-md border border-indigo-900/40">#ReactArchitect</span>
              <span className="text-[8px] font-bold text-indigo-300 bg-indigo-950/50 px-2 py-0.5 rounded-md border border-indigo-900/40">#DataPipelines</span>
              <span className="text-[8px] font-bold text-indigo-300 bg-indigo-950/50 px-2 py-0.5 rounded-md border border-indigo-900/40">#ProductVision</span>
            </div>

            <div className="flex items-center text-xs font-bold text-indigo-400 group-hover:underline">
              <span>Optimasi Profil LinkedIn</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        {/* Selected Interactive Playground Workspace Indicator */}
        <div className="border-t border-slate-900 pt-6 mt-2" id="interactive-workspace-header">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-white uppercase sm:normal-case">
                Interactive Console: {
                  activeTab === "spec" ? "Platform Requirements Document (Indonesian)" :
                  activeTab === "cv" ? "ATS CV Review Panel" :
                  activeTab === "interview" ? "Mock Interview Sandbox" :
                  activeTab === "roadmap" ? "Skill Gap Analyzer" :
                  "LinkedIn Branding Optimizer"
                }
              </h2>
            </div>
            
            {/* Quick Pill Selector Tabs */}
            <div className="flex flex-wrap gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button 
                onClick={() => setActiveTab("spec")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${activeTab === "spec" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"}`}
              >
                PRD Spec
              </button>
              <button 
                onClick={() => setActiveTab("cv")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${activeTab === "cv" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"}`}
              >
                CV Reviewer
              </button>
              <button 
                onClick={() => setActiveTab("interview")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${activeTab === "interview" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"}`}
              >
                Interview
              </button>
              <button 
                onClick={() => setActiveTab("roadmap")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${activeTab === "roadmap" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"}`}
              >
                Roadmap
              </button>
              <button 
                onClick={() => setActiveTab("linkedin")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${activeTab === "linkedin" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"}`}
              >
                LinkedIn
              </button>
            </div>
          </div>

          {/* Core Interactive Sandbox Card */}
          <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-5 md:p-8 shadow-2xl transition" id="workspace-viewport">
            {activeTab === "spec" && <SpecSection />}
            {activeTab === "cv" && <CvReviewer />}
            {activeTab === "interview" && <InterviewSimulator />}
            {activeTab === "roadmap" && <SkillGapAnalyzer />}
            {activeTab === "linkedin" && <LinkedInOptimizer />}
          </div>
        </div>

      </div>

      {/* Footer Branding built identically to guidelines */}
      <footer className="mt-12 border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-500 gap-4">
        <div>© 2026 GRADAI PLATFORM - AI CAREER ASSISTANT</div>
        <div className="flex gap-6 flex-wrap justify-center">
          <span>Kesiapan Kerja Mahasiswa</span>
          <span>Sertifikasi Kompetensi</span>
          <span className="text-indigo-400 font-bold italic normal-case tracking-normal">Premium Student Access Active</span>
        </div>
      </footer>
    </div>
  );
}
