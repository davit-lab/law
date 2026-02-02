import React, { useState, useEffect, useMemo } from 'react';
import { Language, Service, Course, TeamMember } from './types';
import { content, navLinks, team, services, courses } from './translations';

type Page = 'home' | 'services' | 'team' | 'courses' | 'contact' | 'registration';

// --- Assets ---

const LogoIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15V85" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 85H65M50 85H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 30L80 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 20L20 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M50 20L80 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M20 30L10 65H30L20 30Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M80 30L70 65H90L80 30Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="50" cy="15" r="2" fill="currentColor"/>
  </svg>
);

// --- Shared Components ---

const Navbar = ({ lang, setLang, currentPage, setCurrentPage }: { 
  lang: Language, 
  setLang: (l: Language) => void,
  currentPage: Page,
  setCurrentPage: (p: Page) => void
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setCurrentPage(id as Page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled || (currentPage !== 'home' && currentPage !== 'registration') ? 'bg-black py-2 md:py-3 border-b border-gold/10 shadow-2xl' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div 
          onClick={() => handleNav('home')} 
          className="flex items-center space-x-2 md:space-x-4 group cursor-pointer transition-transform hover:scale-105 shrink-0"
        >
          <div className="text-gold transition-transform duration-700 group-hover:rotate-[360deg]">
            <LogoIcon className="w-8 h-8 md:w-12 md:h-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-serif font-bold tracking-[0.05em] text-white">LAW<span className="text-gold italic">GICAL</span></span>
            <span className="text-[5px] md:text-[7px] tracking-[0.2em] md:tracking-[0.4em] text-zinc-500 uppercase -mt-0.5 md:-mt-1 font-black whitespace-nowrap">
              {lang === 'ka' ? 'სადაც ლოგიკა ხვდება სამართალს' : 'WHERE LOGIC MEETS LAW'}
            </span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id === 'hero' ? 'home' : link.id)} 
              className={`text-[11px] font-bold tracking-[0.2em] transition-all duration-300 relative group uppercase ${
                (currentPage === link.id || (currentPage === 'home' && link.id === 'hero')) ? 'text-gold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label[lang]}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-300 ${
                (currentPage === link.id || (currentPage === 'home' && link.id === 'hero')) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-6">
          <div className="bg-zinc-900/50 rounded-full p-0.5 border border-zinc-800 flex">
            {(['ka', 'en'] as Language[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-1.5 md:px-3 py-0.5 md:py-1 text-[8px] md:text-[10px] font-black rounded-full transition-all duration-300 ${lang === l ? 'bg-gold text-black shadow-lg shadow-gold/20' : 'text-zinc-500 hover:text-white'}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          
          <button 
            className="lg:hidden text-gold p-2 hover:bg-zinc-900/50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black z-[200] transition-all duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 invisible'}`} style={{ backgroundColor: '#000000' }}>
        <div className="flex justify-between items-center p-4 border-b border-zinc-900 bg-black">
           <div className="flex items-center space-x-3">
             <LogoIcon className="w-8 h-8 text-gold" />
             <span className="text-xl font-serif font-bold text-white tracking-[0.1em]">LAW<span className="text-gold italic">GICAL</span></span>
           </div>
           <button onClick={() => setIsMenuOpen(false)} className="text-gold p-2 hover:bg-zinc-900 rounded-full">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
           </button>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center space-y-2 py-10 bg-black overflow-y-auto">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id === 'hero' ? 'home' : link.id)}
              className={`w-full py-4 text-2xl font-serif tracking-[0.05em] text-center transition-all duration-300 ${
                  (currentPage === link.id || (currentPage === 'home' && link.id === 'hero')) 
                  ? 'text-gold' 
                  : 'text-white'
              }`}
            >
              {link.label[lang].toUpperCase()}
            </button>
          ))}
        </div>
        
        <div className="p-8 border-t border-zinc-900 flex flex-col items-center bg-black">
          <p className="text-[8px] text-zinc-500 tracking-[0.3em] uppercase font-black mb-4">Georgian Legal Excellence</p>
          <div className="flex space-x-4 items-center">
            <div className="w-1 h-1 rounded-full bg-gold"></div>
            <div className="w-10 h-[1px] bg-zinc-800"></div>
            <div className="w-1 h-1 rounded-full bg-gold"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ServiceDetailModal = ({ service, lang, onClose, onContact }: { 
  service: Service | null, 
  lang: Language, 
  onClose: () => void,
  onContact: () => void 
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-zinc-950 border border-gold/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 rounded-sm">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-gold hover:text-white transition-colors z-20"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-48 md:h-auto relative overflow-hidden">
             <img 
               src={service.image} 
               className="w-full h-full object-cover grayscale opacity-50"
               alt={service.title[lang]}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
             <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <span className="text-4xl md:text-6xl">{service.icon}</span>
             </div>
          </div>
          <div className="p-6 md:p-16">
            <span className="text-gold text-[10px] tracking-[0.4em] font-black uppercase mb-3 md:mb-4 block">Practice Area</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8 leading-tight">{service.title[lang]}</h2>
            <div className="w-16 md:w-20 h-[1px] bg-gold mb-8 md:mb-10"></div>
            
            <div className="space-y-4 md:space-y-6 text-zinc-400 leading-relaxed font-light text-base md:text-lg">
                <p>{service.fullText[lang]}</p>
                <div className="bg-zinc-900/50 p-4 md:p-6 border-l-2 border-gold italic text-xs md:text-sm text-zinc-300">
                  {lang === 'ka' ? 'გახსოვდეთ, კონსულტაცია უფასოა!' : 'Remember, consultation is free!'}
                </div>
                <ul className="grid grid-cols-1 gap-3 pt-2 md:pt-4">
                  {['Legal Advisory', 'Litigation & Support', 'Due Diligence'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-[10px] md:text-sm text-zinc-500">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span className="tracking-widest uppercase font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
            </div>

            <button 
              onClick={(e) => {
                e.preventDefault();
                onContact();
              }}
              className="mt-8 md:mt-12 w-full py-4 md:py-5 border border-gold text-gold font-black tracking-[0.3em] text-[10px] hover:bg-gold hover:text-black transition-all duration-500 uppercase rounded-sm cursor-pointer active:scale-95"
            >
              {lang === 'ka' ? 'კონსულტაცია პარტნიორთან' : 'Consult with a Partner'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMemberDetailModal = ({ member, lang, onClose, onContact }: { 
  member: TeamMember | null, 
  lang: Language, 
  onClose: () => void,
  onContact: () => void 
}) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-0 md:p-12 overflow-hidden">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose}></div>
      <div className="relative bg-black w-full h-full md:max-w-7xl md:h-auto md:max-h-[90vh] overflow-y-auto border-y md:border border-gold/20 shadow-[0_0_100px_rgba(212,175,55,0.1)] animate-in slide-in-from-bottom-8 duration-500 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 text-gold hover:text-white transition-all z-50 p-2 bg-black/50 md:bg-transparent rounded-full"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Section / Left side Image */}
        <div className="w-full md:w-[45%] h-[50vh] md:h-auto relative bg-zinc-900 overflow-hidden shrink-0">
          <img 
            src={member.image} 
            alt={member.name[lang]} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
             <span className="text-gold text-[10px] md:text-xs tracking-[0.5em] font-black uppercase mb-4 block animate-in fade-in duration-1000">Senior Counsel</span>
             <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-none tracking-tight">
               {member.name[lang].split(' ')[0]} <br/> 
               <span className="text-gold italic">{member.name[lang].split(' ')[1]}</span>
             </h2>
          </div>
        </div>

        {/* Content Section / Right side Info */}
        <div className="w-full md:w-[55%] p-8 md:p-20 flex flex-col justify-center">
           <div className="mb-12">
             <p className="text-gold text-xs md:text-sm font-black tracking-[0.4em] uppercase mb-6">{member.position[lang]}</p>
             <div className="w-20 h-[1px] bg-gold mb-10"></div>
             
             <div className="space-y-8 text-zinc-400 text-lg md:text-xl font-light leading-relaxed font-serif italic">
               <p className="animate-in fade-in slide-in-from-left duration-700">{member.bio[lang]}</p>
             </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 pt-10 border-t border-zinc-900">
             <div>
               <h5 className="text-white text-[10px] font-black tracking-[0.3em] uppercase mb-4">Direct Contact</h5>
               <ul className="space-y-4">
                 {member.phone && (
                   <li className="flex items-center space-x-4 group">
                     <span className="text-gold text-lg">📞</span>
                     <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="text-zinc-500 hover:text-white transition-colors tracking-tight font-medium text-lg">{member.phone}</a>
                   </li>
                 )}
                 {member.email && (
                   <li className="flex items-center space-x-4 group">
                     <span className="text-gold text-lg">✉️</span>
                     <a href={`mailto:${member.email}`} className="text-zinc-500 hover:text-white transition-colors truncate tracking-tight font-medium text-lg">{member.email}</a>
                   </li>
                 )}
               </ul>
             </div>
           </div>

           <button 
             onClick={onContact}
             className="mt-16 w-full py-5 border border-gold/30 text-gold font-black tracking-[0.4em] text-xs hover:bg-gold hover:text-black hover:border-gold transition-all duration-500 uppercase"
           >
             {lang === 'ka' ? 'დაჯავშნეთ პირადი კონსულტაცია' : 'Schedule Private Consult'}
           </button>
        </div>
      </div>
    </div>
  );
};

// --- Pages ---

const HomePage = ({ lang, setCurrentPage }: { lang: Language, setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Cinematic Hero */}
      <section className="relative h-[100vh] md:h-[110vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110 animate-pulse-slow">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80" 
            alt="Law and Order" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-6 md:mb-8">
               <div className="h-[1px] w-12 md:w-24 bg-gold/50"></div>
               <span className="text-gold text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] font-black uppercase">
                 {lang === 'ka' ? 'სადაც ლოგიკა ხვდება სამართალს' : 'WHERE LOGIC MEETS LAW'}
               </span>
               <div className="h-[1px] w-12 md:w-24 bg-gold/50"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[120px] lg:text-[140px] font-serif font-bold mb-8 md:mb-10 leading-[0.8] tracking-tighter">
              LAW<span className="text-gold italic">GICAL</span>
            </h1>
            <p className="text-sm md:text-2xl text-zinc-300 mb-10 md:mb-14 leading-relaxed max-w-2xl mx-auto font-light italic px-4">
              {content.hero.subtitle[lang]}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 px-6">
              <button 
                onClick={() => setCurrentPage('contact')} 
                className="w-full sm:w-auto group relative px-10 md:px-14 py-4 md:py-6 overflow-hidden bg-gold shadow-[0_0_30px_rgba(212,175,55,0.3)] rounded-sm"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
                <span className="relative z-10 text-black font-black tracking-widest text-[10px] md:text-xs uppercase">
                  {content.hero.cta[lang]}
                </span>
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className="group flex items-center space-x-4 md:space-x-6 text-white hover:text-gold transition-all duration-500"
              >
                <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase border-b border-transparent group-hover:border-gold pb-1">
                  {navLinks.find(n => n.id === 'services')?.label[lang]}
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-gold transition-colors">
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Cards */}
      <section className="py-20 md:py-32 bg-black border-y border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
             <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6">{content.sections.services[lang]}</h2>
                <div className="w-20 md:w-24 h-[1px] bg-gold"></div>
             </div>
             <button onClick={() => setCurrentPage('services')} className="mt-6 md:mt-0 text-gold text-[10px] font-black tracking-widest uppercase hover:underline">
                {lang === 'ka' ? 'ყველა სერვისი' : 'Explore All'}
             </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.slice(0, 4).map((s, idx) => (
              <div key={idx} onClick={() => setCurrentPage('services')} className="group p-8 md:p-10 bg-zinc-900/30 border border-zinc-800 hover:border-gold/50 transition-all duration-500 cursor-pointer rounded-sm">
                <div className="text-3xl md:text-4xl mb-6 md:mb-8 grayscale group-hover:grayscale-0 transition-all transform group-hover:-translate-y-2">{s.icon}</div>
                <h4 className="text-lg md:text-xl font-serif font-bold mb-3 md:mb-4 group-hover:text-gold transition-colors">{s.title[lang]}</h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed opacity-80 group-hover:opacity-100 line-clamp-2">{s.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ lang, onSelectService }: { lang: Language, onSelectService: (s: Service) => void }) => (
  <section className="pt-32 md:pt-48 pb-20 md:pb-32 min-h-screen bg-black animate-in slide-in-from-bottom duration-700">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 md:mb-32">
        <span className="text-gold text-[10px] tracking-[0.5em] font-black uppercase mb-4 md:mb-6 block">Expertise</span>
        <h2 className="text-5xl md:text-8xl font-serif font-bold mb-6 md:mb-10">{content.sections.services[lang]}</h2>
        <div className="w-24 md:w-40 h-[1px] bg-gold mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {services.map(service => (
          <div 
            key={service.id} 
            onClick={() => onSelectService(service)}
            className="p-10 md:p-16 bg-zinc-950 border border-zinc-900 hover:border-gold group transition-all duration-700 relative overflow-hidden cursor-pointer rounded-sm"
          >
            <div className="absolute -right-4 -top-4 md:-right-6 md:-top-6 text-7xl md:text-9xl text-zinc-900 font-serif opacity-10 pointer-events-none group-hover:text-gold/5 transition-colors">0{service.id}</div>
            <div className="text-4xl md:text-5xl mb-8 md:mb-12 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all inline-block">{service.icon}</div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 group-hover:text-gold transition-colors">{service.title[lang]}</h3>
            <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 line-clamp-3">{service.description[lang]}</p>
            <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-[1px] w-10 md:w-12 bg-gold/50"></div>
                <span className="text-gold text-[10px] tracking-widest font-black uppercase italic">Read More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamPage = ({ lang, onSelectMember }: { lang: Language, onSelectMember: (m: TeamMember) => void }) => (
  <section className="pt-32 md:pt-48 pb-20 md:pb-32 min-h-screen bg-zinc-950 animate-in zoom-in duration-700">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 md:mb-32">
        <h2 className="text-5xl md:text-8xl font-serif font-bold mb-6 md:mb-10">{content.sections.team[lang]}</h2>
        <div className="w-24 md:w-40 h-[1px] bg-gold mx-auto"></div>
        <p className="text-zinc-500 max-w-2xl mx-auto mt-8 md:mt-12 font-light text-base md:text-lg px-4">
            {lang === 'ka' ? 'Lawgical-ის გუნდი შედგება წამყვანი ადვოკატებისგან, რომელთა გამოცდილებაც ქმნის ჩვენს წარმატებას.' : 
             'Our elite team is composed of leading legal practitioners whose collective experience defines our success.'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {team.map(member => (
          <div key={member.id} className="group flex flex-col h-full cursor-pointer" onClick={() => onSelectMember(member)}>
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-700 group-hover:border-gold/30 rounded-sm">
              <img 
                src={member.image} 
                alt={member.name[lang]} 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase border border-gold/40 px-6 py-3 bg-black/40 backdrop-blur-sm">იხილეთ ადვოკატი</span>
              </div>
              
              {/* Premium Quick Contact Icons */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-500 z-20">
                <div className="w-10 h-10 bg-black/80 border border-white/10 flex items-center justify-center text-gold rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 px-2 md:px-0">
              <p className="text-gold text-[10px] font-black tracking-[0.4em] mb-2 md:mb-3 uppercase">{member.position[lang]}</p>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4 tracking-tight group-hover:text-gold transition-colors">{member.name[lang]}</h3>
              <p className="text-zinc-500 leading-relaxed font-light text-sm italic line-clamp-2">
                "{member.bio[lang]}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CoursesPage = ({ lang, onEnroll }: { lang: Language, onEnroll: (course: Course) => void }) => (
  <section className="pt-24 md:pt-48 pb-20 md:pb-32 min-h-screen bg-black animate-in fade-in duration-700">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 md:mb-32">
        <span className="text-gold text-[10px] tracking-[0.5em] font-black uppercase mb-4 md:mb-6 block">Academy</span>
        <h2 className="text-5xl md:text-8xl font-serif font-bold mb-6 md:mb-10">{content.sections.courses[lang]}</h2>
        <div className="w-24 md:w-40 h-[1px] bg-gold mx-auto"></div>
      </div>
      
      <div className="space-y-16 md:space-y-40">
        {courses.map((course, idx) => (
          <div key={course.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-24 items-center`}>
            <div className="w-full lg:w-1/2 relative group px-2 md:px-0">
              <div className="absolute -inset-2 md:-inset-6 border border-gold/10 translate-x-2 translate-y-2 md:translate-x-6 md:translate-y-6 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-[1s]"></div>
              <div className="overflow-hidden relative z-10 aspect-video md:aspect-[4/3] lg:aspect-auto">
                <img 
                    src={course.image} 
                    alt={course.title[lang]} 
                    className="w-full h-48 sm:h-64 md:h-[500px] lg:h-[600px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s] scale-105 group-hover:scale-100 rounded-sm" 
                />
              </div>
              <div className="absolute bottom-3 left-3 md:bottom-10 md:left-10 z-20 bg-gold text-black px-3 md:px-6 py-1.5 md:py-3 font-black text-[9px] md:text-xs tracking-widest uppercase shadow-2xl rounded-sm">
                Lawgical Certified
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 md:px-0 mt-2 md:mt-0">
              <div className="flex items-center space-x-4 md:space-x-6 mb-4 md:mb-10">
                <span className="text-gold font-black tracking-[0.2em] text-[9px] md:text-xs border border-gold/40 px-3 md:px-4 py-1.5 md:py-2 uppercase">{course.duration[lang]}</span>
                <span className="text-white/20 h-[1px] w-12 md:w-20 bg-zinc-800"></span>
                <span className="text-xl md:text-3xl font-serif text-gold font-bold">{course.price}</span>
              </div>
              <h3 className="text-2xl md:text-5xl font-serif font-bold mb-4 md:mb-10 leading-tight">{course.title[lang]}</h3>
              <p className="text-zinc-400 text-sm md:text-xl leading-relaxed mb-6 md:mb-12 font-light italic">"{course.description[lang]}"</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-16">
                 {[
                   { t: 'Strategic Thinking', d: 'Logical framework for complex cases' },
                   { t: 'Case Simulation', d: 'Practical courtroom experience' },
                   { t: 'Certification', d: 'Industry recognized diploma' },
                   { t: 'Career Support', d: 'Placement in Lawgical partners' }
                 ].map((feat, fi) => (
                    <div key={fi} className="border-l border-gold/30 pl-4 md:pl-6 py-1 md:py-2">
                        <h5 className="text-white font-bold text-[10px] md:text-sm mb-0.5 md:mb-1 uppercase tracking-widest">{feat.t}</h5>
                        <p className="text-zinc-600 text-[10px] md:text-xs">{feat.d}</p>
                    </div>
                 ))}
              </div>
              <button 
                onClick={() => onEnroll(course)}
                className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-gold text-black font-black tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)] uppercase rounded-sm"
              >
                {lang === 'ka' ? 'დარეგისტრირდი ახლავე' : 'ENROLL NOW'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactPage = ({ lang }: { lang: Language }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "7a957535-88be-44f7-81d6-b1bfdf61ce0c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(lang === 'ka' ? "დაფიქსირდა შეცდომა. გთხოვთ სცადოთ მოგვიანებით." : "An error occurred. Please try again later.");
      }
    } catch (err) {
      alert(lang === 'ka' ? "დაფიქსირდა შეცდომა. გთხოვთ სცადოთ მოგვიანებით." : "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 md:pt-48 pb-20 md:pb-32 min-h-screen bg-black animate-in slide-in-from-top duration-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
          <div>
            <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8 md:mb-12">{content.sections.contact[lang]}</h2>
            <div className="w-24 md:w-40 h-[1px] bg-gold mb-12 md:mb-20"></div>
            
            <div className="space-y-10 md:space-y-16">
              {[
                { icon: '📞', title: lang === 'ka' ? 'ტელეფონი' : 'Direct Line', value: '592 821 842', href: 'tel:592821842' },
                { icon: '✉️', title: lang === 'ka' ? 'ელ-ფოსტა' : 'Inquiries', value: 'mariamgvasalialw@gmail.com', href: 'mailto:mariamgvasalialw@gmail.com' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 md:space-x-10 group">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-zinc-900/50 flex items-center justify-center text-xl md:text-3xl border border-zinc-800 shadow-xl group-hover:border-gold transition-all duration-500 rounded-sm shrink-0">
                    {item.icon}
                  </div>
                  <div className="pt-1 md:pt-2">
                    <h4 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] mb-1.5 md:mb-3 uppercase">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-white text-lg md:text-2xl font-light tracking-tight hover:text-gold transition-colors block break-all">{item.value}</a>
                    ) : (
                      <p className="text-white text-lg md:text-2xl font-light tracking-tight">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-zinc-950 p-8 md:p-16 border border-zinc-900 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative mt-10 md:mt-0 rounded-sm">
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-20 h-20 md:w-32 md:h-32 border-r-2 border-t-2 border-gold/40 pointer-events-none"></div>
            {submitted ? (
              <div className="h-[400px] md:h-[600px] flex flex-col items-center justify-center text-center space-y-6 md:space-y-10 animate-in fade-in zoom-in">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-gold flex items-center justify-center text-3xl md:text-5xl text-gold shadow-[0_0_50px_rgba(212,175,55,0.2)]">✓</div>
                <h3 className="text-2xl md:text-4xl font-serif text-gold font-bold">{content.contactForm.success[lang]}</h3>
                <p className="text-zinc-500 max-w-xs mx-auto text-sm">One of our partners will review your request personally.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact" className="space-y-8 md:space-y-12">
                <div className="relative group">
                  <input 
                    name="name"
                    type="text" 
                    required 
                    className="w-full bg-transparent border-b border-zinc-800 px-0 py-4 md:py-6 focus:border-gold outline-none transition-all text-white placeholder:text-zinc-700 tracking-[0.2em] text-[9px] md:text-[10px] font-black uppercase" 
                    placeholder={content.contactForm.name[lang]}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-focus-within:w-full transition-all duration-700"></div>
                </div>
                <div className="relative group">
                  <input 
                    name="email"
                    type="email" 
                    required 
                    className="w-full bg-transparent border-b border-zinc-800 px-0 py-4 md:py-6 focus:border-gold outline-none transition-all text-white placeholder:text-zinc-700 tracking-[0.2em] text-[9px] md:text-[10px] font-black uppercase" 
                    placeholder={content.contactForm.email[lang]}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-focus-within:w-full transition-all duration-700"></div>
                </div>
                <div className="relative group">
                  <textarea 
                    name="message"
                    rows={4} 
                    required 
                    className="w-full bg-transparent border-b border-zinc-800 px-0 py-4 md:py-6 focus:border-gold outline-none transition-all text-white placeholder:text-zinc-700 tracking-[0.2em] text-[9px] md:text-[10px] font-black uppercase resize-none" 
                    placeholder={content.contactForm.message[lang]}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-focus-within:w-full transition-all duration-700"></div>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-5 md:py-6 bg-gold text-black font-black tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[10px] hover:bg-white hover:shadow-2xl transition-all duration-500 uppercase rounded-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? (lang === 'ka' ? 'იგზავნება...' : 'SENDING...') : content.contactForm.send[lang]}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const RegistrationPage = ({ lang, selectedCourse }: { lang: Language, selectedCourse: Course | null }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "7a957535-88be-44f7-81d6-b1bfdf61ce0c");
    formData.append("course_name", selectedCourse?.title[lang] || "General Registration");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert(lang === 'ka' ? "დაფიქსირდა შეცდომა. გთხოვთ სცადოთ მოგვიანებით." : "An error occurred. Please try again later.");
      }
    } catch (err) {
      alert(lang === 'ka' ? "დაფიქსირდა შეცდომა. გთხოვთ სცადოთ მოგვიანებით." : "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 md:pt-48 pb-20 md:pb-32 min-h-screen bg-black animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
             <span className="text-gold text-[10px] tracking-[0.5em] font-black uppercase mb-4 block">Registration</span>
             <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
               {lang === 'ka' ? 'კურსზე რეგისტრაცია' : 'Course Registration'}
             </h2>
             <div className="w-20 h-[1px] bg-gold mx-auto mb-8"></div>
             {selectedCourse && (
               <div className="bg-zinc-900/50 p-6 md:p-8 border border-zinc-800 rounded-sm">
                  <p className="text-zinc-500 text-[10px] tracking-widest uppercase mb-2">Selected Course</p>
                  <h4 className="text-xl md:text-2xl font-serif text-white">{selectedCourse.title[lang]}</h4>
                  <p className="text-gold font-bold mt-2">{selectedCourse.price}</p>
               </div>
             )}
          </div>

          <div className="bg-zinc-950 p-8 md:p-16 border border-zinc-900 shadow-2xl relative rounded-sm">
            <div className="absolute -top-3 -right-3 w-16 h-16 border-r-2 border-t-2 border-gold/40 pointer-events-none"></div>
            {submitted ? (
              <div className="py-20 flex flex-col items-center justify-center text-center space-y-10 animate-in zoom-in">
                <div className="w-24 h-24 rounded-full border border-gold flex items-center justify-center text-4xl text-gold">✓</div>
                <div>
                  <h3 className="text-3xl font-serif text-gold font-bold mb-4">
                    {lang === 'ka' ? 'რეგისტრაცია წარმატებულია' : 'Registration Successful'}
                  </h3>
                  <p className="text-zinc-500">
                    {lang === 'ka' ? 'ჩვენი აკადემიის წარმომადგენელი მალე დაგიკავშირდებათ.' : 'Our academy representative will contact you shortly.'}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
                <div className="relative group">
                  <input 
                    name="name"
                    type="text" 
                    required 
                    className="w-full bg-transparent border-b border-zinc-800 px-0 py-4 md:py-6 focus:border-gold outline-none transition-all text-white placeholder:text-zinc-700 tracking-[0.2em] text-[9px] md:text-[10px] font-black uppercase" 
                    placeholder={lang === 'ka' ? 'სრული სახელი' : 'FULL NAME'}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-focus-within:w-full transition-all duration-700"></div>
                </div>
                <div className="relative group">
                  <input 
                    name="email"
                    type="email" 
                    required 
                    className="w-full bg-transparent border-b border-zinc-800 px-0 py-4 md:py-6 focus:border-gold outline-none transition-all text-white placeholder:text-zinc-700 tracking-[0.2em] text-[9px] md:text-[10px] font-black uppercase" 
                    placeholder={lang === 'ka' ? 'ელ-ფოსტა' : 'EMAIL ADDRESS'}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-focus-within:w-full transition-all duration-700"></div>
                </div>
                <div className="relative group">
                  <textarea 
                    name="message"
                    rows={4} 
                    required 
                    className="w-full bg-transparent border-b border-zinc-800 px-0 py-4 md:py-6 focus:border-gold outline-none transition-all text-white placeholder:text-zinc-700 tracking-[0.2em] text-[9px] md:text-[10px] font-black uppercase resize-none" 
                    placeholder={lang === 'ka' ? 'დამატებითი კითხვები' : 'ADDITIONAL QUESTIONS'}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-focus-within:w-full transition-all duration-700"></div>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-5 md:py-6 bg-gold text-black font-black tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[10px] hover:bg-white hover:shadow-2xl transition-all duration-500 uppercase rounded-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? (lang === 'ka' ? 'მუშავდება...' : 'PROCESSING...') : (lang === 'ka' ? 'რეგისტრაციის დასრულება' : 'FINISH REGISTRATION')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => (
  <footer className="py-16 md:py-24 bg-black border-t border-zinc-900">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-20">
        <div className="max-w-md">
          <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
            <LogoIcon className="w-10 h-10 md:w-12 md:h-12 text-gold" />
            <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold tracking-[0.1em] text-white">LAW<span className="text-gold italic">GICAL</span></span>
                <span className="text-[6px] md:text-[7px] tracking-[0.3em] md:tracking-[0.4em] text-zinc-500 uppercase font-black">
                    {lang === 'ka' ? 'სადაც ლოგიკა ხვდება სამართალს' : 'WHERE LOGIC MEETS LAW'}
                </span>
            </div>
          </div>
          <p className="text-zinc-600 text-[10px] md:text-[11px] leading-[2.2] md:leading-[2.5] tracking-[0.15em] md:tracking-[0.2em] uppercase mb-8 md:mb-10">
            Leading the Georgian legal landscape with absolute precision. We bridge the gap between complex legal challenges and logical, effective solutions.
          </p>
          <div className="flex space-x-6 md:space-x-8">
            {['LinkedIn', 'Twitter', 'Facebook'].map(social => (
                <a key={social} href="#" className="text-zinc-500 hover:text-gold transition-colors text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase">{social}</a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-12 md:gap-20 w-full lg:w-auto">
            <div className="space-y-4 md:space-y-6">
                <h5 className="text-white text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 md:mb-8">Navigation</h5>
                {navLinks.map(l => (
                    <a key={l.id} href="#" className="block text-zinc-600 hover:text-gold text-[9px] md:text-[10px] tracking-widest transition-colors uppercase">{l.label[lang]}</a>
                ))}
            </div>
        </div>
      </div>

      <div className="mt-16 md:mt-32 pt-8 md:pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col space-y-3">
          <div className="text-zinc-600 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-center md:text-left font-medium">
            © {new Date().getFullYear()} Lawgical Legal Associates.
          </div>
          <div className="text-white text-[11px] md:text-[13px] tracking-[0.1em] uppercase text-center md:text-left font-bold">
            © ყველა უფლება დაცულია დამზადებულია <span className="text-gold hover:underline cursor-pointer">CODEZERO ACADEMY</span> მიერ
          </div>
        </div>
        <div className="flex items-center space-x-6 text-zinc-800 text-[8px] md:text-[9px] tracking-[0.2em] uppercase font-black shrink-0">
            <span>Security Verified</span>
            <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full border border-zinc-800"></div>
            <span>Law Society Member</span>
        </div>
      </div>
    </div>
  </footer>
);

// --- Root Application ---

export default function App() {
  const [lang, setLang] = useState<Language>('ka');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const RenderPage = useMemo(() => {
    switch (currentPage) {
      case 'home': return <HomePage lang={lang} setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage lang={lang} onSelectService={setSelectedService} />;
      case 'team': return <TeamPage lang={lang} onSelectMember={setSelectedMember} />;
      case 'courses': return (
        <CoursesPage 
          lang={lang} 
          onEnroll={(course) => {
            setSelectedCourse(course);
            setCurrentPage('registration');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
      );
      case 'contact': return <ContactPage lang={lang} />;
      case 'registration': return <RegistrationPage lang={lang} selectedCourse={selectedCourse} />;
      default: return <HomePage lang={lang} setCurrentPage={setCurrentPage} />;
    }
  }, [currentPage, lang, selectedCourse]);

  return (
    <div className={`min-h-screen bg-black selection:bg-gold selection:text-black ${(selectedService || selectedMember) ? 'overflow-hidden' : ''}`}>
      <Navbar lang={lang} setLang={setLang} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {RenderPage}
      </main>
      
      {/* Modals */}
      <ServiceDetailModal 
        service={selectedService} 
        lang={lang} 
        onClose={() => setSelectedService(null)} 
        onContact={() => {
          setSelectedService(null);
          setCurrentPage('contact');
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 50);
        }}
      />

      <TeamMemberDetailModal 
        member={selectedMember} 
        lang={lang} 
        onClose={() => setSelectedMember(null)}
        onContact={() => {
          setSelectedMember(null);
          setCurrentPage('contact');
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 50);
        }}
      />

      <Footer lang={lang} />
    </div>
  );
}
