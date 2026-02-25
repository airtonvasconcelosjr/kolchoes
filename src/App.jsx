import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bed, Star, ChevronRight, Menu, X, ShieldCheck,
  Truck, Clock, Upload, Database, Smartphone,
  ArrowRight, Info, CheckCircle2, ShoppingBag, Globe, Award
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "NightFall Onyx Elite",
    brand: "Lattoflex Luxury",
    price: "R$ 12.899,00",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000",
    description: "O ápice do suporte ergonômico com tecnologia alemã de molas de suspensão ativa.",
    details: ["Ajuste Automático", "Zonas de Conforto Carbono", "Termorregulação Ativa"]
  },
  {
    id: 2,
    name: "Golden Silk Cloud",
    brand: "Serta Heritage",
    price: "R$ 8.499,00",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000",
    description: "Revestimento em seda natural e camadas de látex talalay para uma sensação de nuvem.",
    details: ["Seda Natural 100%", "Látex Talalay", "Pillow Top Europeu"]
  },
  {
    id: 3,
    name: "Velvet Rest Titanium",
    brand: "Simmons Pro",
    price: "R$ 9.200,00",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1000",
    description: "Molas ensacadas com reforço de titânio para suporte inigualável e durabilidade extrema.",
    details: ["Estrutura de Titânio", "Espuma Visco Gel", "Tecido Anti-Estático"]
  },
  {
    id: 4,
    name: "Zen Master Organic",
    brand: "NaturaSleep",
    price: "R$ 7.999,00",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1000",
    description: "Construção 100% orgânica com algodão egípcio e fibras de coco naturais.",
    details: ["Certificado Orgânico", "Zero Químicos", "Biodegradável"]
  },
  {
    id: 5,
    name: "Royal Emerald Pocket",
    brand: "Kolchoes",
    price: "R$ 15.500,00",
    image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=1000",
    description: "Série limitada com acabamento em veludo verde esmeralda e fios de cobre.",
    details: ["Edição Limitada", "Fios de Cobre Terapêutico", "Suporte Ultra Soft"]
  },
  {
    id: 6,
    name: "Arctic Freeze Cooling",
    brand: "IceTech",
    price: "R$ 6.800,00",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1000",
    description: "Ideal para climas quentes, resfriamento constante através de microcápsulas de gel.",
    details: ["Resfriamento 5°C", "Alta Respirabilidade", "Anti-Umidade"]
  }
];

const BRANDS = ["SIMMONS", "SERTA", "LATTOFLEX", "KOLCHOES", "SEALY", "TEMPUR", "STEARNS & FOSTER"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="glass-nav" style={{ padding: scrolled ? '15px 8%' : '25px 8%' }}>
      <div className="logo">
        <Bed size={32} />
        KOLCHOES.com
      </div>

      <div className="nav-links d-none d-lg-flex">
        <a href="#home">Collection</a>
        <a href="#catalogo">Boutique</a>
        <a href="#marcas">Maisons</a>
        <a href="#admin">Concierge</a>
      </div>

      <div className="d-flex align-items-center gap-4">
        <button className="btn-premium d-none d-md-flex">Private Access</button>
        <button className="d-lg-none" onClick={() => setMobileMenu(true)} style={{ background: 'none', color: 'white' }}>
          <Menu size={32} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: 'var(--bg-deep)', zIndex: 2000, padding: '100px 8%' }}
          >
            <button style={{ position: 'absolute', top: 30, right: 30, background: 'none', color: 'white' }} onClick={() => setMobileMenu(false)}>
              <X size={40} />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
              <a href="#home" className="product-title" style={{ fontSize: '2.5rem' }} onClick={() => setMobileMenu(false)}>Collection</a>
              <a href="#catalogo" className="product-title" style={{ fontSize: '2.5rem' }} onClick={() => setMobileMenu(false)}>Boutique</a>
              <a href="#marcas" className="product-title" style={{ fontSize: '2.5rem' }} onClick={() => setMobileMenu(false)}>Maisons</a>
              <a href="#admin" className="product-title" style={{ fontSize: '2.5rem' }} onClick={() => setMobileMenu(false)}>Concierge</a>
              <button className="btn-premium" style={{ width: '100%', marginTop: '40px' }}>Contact Specialist</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ProductCard = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="product-card"
  >
    <div className="product-image-container">
      <img src={product.image} alt={product.name} />
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 2 }}>
        <div style={{ background: 'var(--secondary)', color: 'black', padding: '4px 12px', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
          Collection 2026
        </div>
      </div>
    </div>
    <div className="product-info">
      <div className="product-brand">{product.brand}</div>
      <h3 className="product-title">{product.name}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="product-price">{product.price}</span>
        <button style={{ background: 'none', border: 'none', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
          EXPLORE <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </motion.div>
);

const BrandCarousel = () => {
  const brandsExtended = [...BRANDS, ...BRANDS, ...BRANDS];
  return (
    <div className="brand-carousel-v2">
      <div className="carousel-track-v2">
        {brandsExtended.map((brand, i) => (
          <div key={i} className="brand-logo-v2">
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div style={{ maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="product-brand" style={{ fontSize: '0.9rem', marginBottom: '30px' }}>
                Est. 2010 | São Paulo
              </div>
              <h1>Sleep is the <span>Ultimate Luxury.</span></h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ fontSize: '1.4rem', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '600px' }}
            >
              Curadoria exclusiva das melhores casas de design de sono do mundo. Tecnologia invisível para um descanso inesquecível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ display: 'flex', gap: '20px' }}
            >
              <button className="btn-premium">View Catalog</button>
              <button style={{ background: 'none', border: '1px solid var(--glass-border)', color: 'white', padding: '16px 40px', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 600 }}>
                OUR STORY
              </button>
            </motion.div>
          </div>
        </section>

        {/* STATS/AWARDS */}
        <section style={{ borderTop: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', padding: '0 8%' }}>
            {[
              { icon: <Award size={32} />, label: "Luxury Choice 2025", value: "Best in Show" },
              { icon: <Globe size={32} />, label: "Global Partners", value: "15+ Countries" },
              { icon: <Smartphone size={32} />, label: "Concierge 24/7", value: "Personalized Support" }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--secondary)', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CATALOGUE */}
        <section id="catalogo">
          <div style={{ padding: '0 8%', marginBottom: '60px' }}>
            <div className="product-brand">Exclusive Curated Boutique</div>
            <h2 style={{ fontSize: '4rem' }}>The Collection</h2>
          </div>

          <div className="featured-grid">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* BRANDS CAROUSEL */}
        <BrandCarousel />

        {/* ADMIN PROTOTYPE (Refined) */}
        <section id="admin" style={{ padding: '120px 8%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div className="product-brand">Enterprise Solutions</div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '30px' }}>Maison Admin Panel</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.2rem' }}>
                Sistema inteligente para gestão de múltiplas marcas. Sincronize catálogos internacionais via XML/CSV com processamento em tempo real.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                  <div style={{ fontSize: '2rem', color: 'var(--secondary)', fontWeight: 700 }}>0.4s</div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Sync Speed</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', color: 'var(--secondary)', fontWeight: 700 }}>100%</div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Automation</div>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '50px', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ textAlign: 'center', padding: '60px', border: '2px dashed var(--glass-border)', cursor: 'pointer' }}>
                <Upload size={48} color="var(--secondary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '10px' }}>Import Mark Catalog</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Drop your .csv or .xml file here</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ background: '#000', padding: '100px 8% 50px', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '80px' }}>
          <div>
            <div className="logo" style={{ marginBottom: '30px' }}>KOLCHOES</div>
            <p style={{ color: 'var(--text-muted)' }}>A referência em luxo e saúde para o sono no Brasil.</p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px' }}>Explore</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-muted)' }}>
              <a href="#home">Home</a>
              <a href="#catalogo">Boutique</a>
              <a href="#marcas">Partners</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-muted)' }}>
              <span>Privacy Policy</span>
              <span>Terms of Luxury Use</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '100px', borderTop: '1px solid var(--glass-border)', paddingTop: '40px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          2026 KOLCHOES.COM | ALL RIGHTS RESERVED
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/5511000000000" className="whatsapp-float" target="_blank" rel="noreferrer">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M12.031 6.062c-3.276 0-5.941 2.663-5.941 5.938 0 1.055.273 2.08.79 2.98l-.837 3.056 3.125-.82c.866.47 1.84.72 2.837.72h.001c3.276 0 5.941-2.663 5.941-5.939 0-1.586-.617-3.076-1.737-4.197-1.121-1.121-2.612-1.738-4.197-1.138-.042.062 0-.062-.042zm3.43 8.35c-.147.414-.736.758-1.018.805-.27.046-.61.085-1.57-.318-1.156-.484-1.92-1.66-1.986-1.747-.064-.087-.525-.698-.525-1.332 0-.635.334-.946.452-1.074.12-.128.26-.16.347-.16h.252c.08 0 .187-.03.292.215.114.267.387.944.422 1.015.035.071.058.154.01.25-.045.093-.068.153-.136.234-.067.081-.141.18-.201.242-.073.076-.149.16-.064.305.085.146.376.62.808 1.006.556.496 1.022.65 1.168.723.146.073.23.06.315-.04.086-.1.36-.42.456-.563.096-.143.19-.12.32-.072.13.048.823.388.966.46.143.072.238.107.273.167.035.06.035.344-.112.758z" />
        </svg>
      </a>
    </div >
  );
}

export default App;
