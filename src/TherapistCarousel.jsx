import { useState, useEffect, useCallback, useRef } from 'react';

const therapists = [
  {
    name: 'Kathya Jacquelin Hernández Plascencia',
    formation: 'DBT · TCC · ACT · Mindfulness',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/daccb0b4-1d86-4e5b-a50b-300aa27c0694.jpeg',
  },
  {
    name: 'Nelsibeth Cristina Fuenmayor León',
    formation: 'Psicóloga Clínica',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/084584ef-cd1a-4aa2-b1b0-fb3efe16377e.jpeg',
  },
  {
    name: 'Silvia Jarque',
    formation: 'Psicología del Deporte · TCC',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/302c345e-6980-43ea-a818-dca2c3349346.jpeg',
  },
  {
    name: 'Maloa Añez González',
    formation: 'TCC · ACT · CFT · DBT',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/07c42c83-f998-412b-92e9-356568ba93ec.jpeg',
  },
  {
    name: 'Itze Nallely Gomez Leon',
    formation: 'Maestría en Neurociencia Cognitiva y Conductual',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/646032c7-56c1-466e-8108-24b5b30ecf40.jpeg',
  },
  {
    name: 'Alex Guarnier Lima',
    formation: 'Neuropsicología · TCC · Análise do Comportamento',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/f1417ec2-ec2b-43fb-ba90-386d4a211ab2.webp',
  },
  {
    name: 'Denise Boglietti',
    formation: 'ACT · TCC · IBCT · FAP',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/d6669a99-bdad-41ea-a49a-2e69a642ddd1.png',
  },
  {
    name: 'Alejandro Londoño Velásquez',
    formation: 'Especialista en Psicoterapia y Consultoría Sistémica',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/acf5b1d5-b5f7-4a25-9b81-e4cfbde508ba.jpeg',
  },
  {
    name: 'Juan Pablo Chamorro Fajardo',
    formation: 'Maestría en Psicología Clínica y de la Salud',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/f5a5fe53-41b5-40f4-b48b-fb684b4df2c7.jpeg',
  },
  {
    name: 'Irma Diaz',
    formation: 'DBT · DBT-PE · DBT-PTSD',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/aa06c9e1-f013-45c2-a7a8-e2d8cbaafa68.webp',
  },
  {
    name: 'Jehisson Stee Avila Santiago',
    formation: 'Maestría en Psicología Educativa',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/9c4820ea-fbb8-438d-9c63-e350fa1e0a76.jpeg',
  },
  {
    name: 'María Paula Poveda Pérez',
    formation: 'Magister en Psicología Clínica',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/d46c4718-bab5-4298-8c48-b3e4d27a167f.jpeg',
  },
  {
    name: 'Yenifer Alfonso Ortiz',
    formation: 'Terapias de Tercera Generación · TCC',
    photo: 'https://pub-f5d0586f05c84fe88781bc7d59f52d11.r2.dev/3e7c6c4a-7693-4fc3-98f1-67cf4b5a52c7.jpeg',
  },
];

function getVisibleCount() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 960) return 2;
  return 3;
}

function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 600;
}

export default function TherapistCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(getVisibleCount);
  const [mobile, setMobile] = useState(isMobile);
  const touchRef = useRef({ startX: 0, startY: 0 });

  useEffect(() => {
    const handle = () => {
      setVisible(getVisibleCount());
      setMobile(isMobile());
    };
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  const total = therapists.length;
  const maxIndex = total - visible;

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  const safeIndex = Math.min(current, maxIndex);

  const handleTouchStart = (e) => {
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchRef.current.startX;
    const dy = e.changedTouches[0].clientY - touchRef.current.startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
  };

  const gap = mobile ? 0 : 24;

  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.titleRow}>
          <span style={styles.titleBar} />
          <h2 style={styles.title}>Conozca a nuestros terapeutas</h2>
        </div>
        <p style={styles.subtitle}>Profesionales certificados listos para acompañarte</p>

        <div style={styles.carouselOuter}>
          {!mobile && (
            <button style={styles.arrow} onClick={prev} aria-label="Anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div
            style={styles.track}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                ...styles.slider,
                gap: `${gap}px`,
                transform: `translateX(calc(-${safeIndex} * (${100 / visible}% + ${gap / visible}px)))`,
              }}
            >
              {therapists.map((t, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.card,
                    flex: `0 0 calc(${100 / visible}% - ${(gap * (visible - 1)) / visible}px)`,
                  }}
                >
                  <div style={styles.photoWrap}>
                    <img
                      src={t.photo}
                      alt={t.name}
                      style={styles.photo}
                      loading="lazy"
                    />
                  </div>
                  <div style={styles.goldLine} />
                  <div style={styles.info}>
                    <span style={styles.name}>{t.name}</span>
                    <span style={styles.formation}>{t.formation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!mobile && (
            <button style={styles.arrow} onClick={next} aria-label="Siguiente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        <div style={styles.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{ ...styles.dot, ...(safeIndex === i ? styles.dotActive : {}) }}
              aria-label={`Ir al grupo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: '#f0f0f0',
    padding: '64px 0 56px',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    display: 'block',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 24px',
    boxSizing: 'border-box',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '12px',
  },
  titleBar: {
    width: '4px',
    height: '32px',
    background: '#FFCE3B',
    borderRadius: '2px',
    flexShrink: 0,
  },
  title: {
    color: '#1a1a1a',
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.2,
  },
  subtitle: {
    color: '#555',
    fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
    textAlign: 'center',
    margin: '0 0 40px',
    fontWeight: 400,
  },
  carouselOuter: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  track: {
    flex: 1,
    overflow: 'hidden',
    minWidth: 0,
  },
  slider: {
    display: 'flex',
    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'transform',
  },
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    flexShrink: 0,
  },
  photoWrap: {
    width: '100%',
    aspectRatio: '3 / 4',
    overflow: 'hidden',
    background: '#f5f5f5',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center',
    display: 'block',
  },
  goldLine: {
    width: '100%',
    height: '3px',
    background: '#FFCE3B',
  },
  info: {
    padding: '16px 18px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  name: {
    color: '#1a1a1a',
    fontSize: '0.95rem',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  formation: {
    color: '#666',
    fontSize: '0.8rem',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  arrow: {
    background: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    minWidth: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#333',
    flexShrink: 0,
    transition: 'box-shadow 0.2s, border-color 0.2s',
    padding: 0,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '32px',
    flexWrap: 'wrap',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#ccc',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    flexShrink: 0,
    transition: 'background 0.2s',
  },
  dotActive: {
    background: '#FFCE3B',
  },
};
