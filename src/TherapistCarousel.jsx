import { useState, useEffect, useCallback } from 'react';

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

export default function TherapistCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(getVisibleCount);

  useEffect(() => {
    const handle = () => setVisible(getVisibleCount());
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

  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <h2 style={styles.title}>Conozca a nuestros terapeutas</h2>
        <p style={styles.subtitle}>Profesionales certificados listos para acompañarte</p>
        <div style={styles.carouselWrapper}>
          <button style={styles.arrow} onClick={prev} aria-label="Anterior">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div style={styles.track}>
            <div
              style={{
                ...styles.slider,
                transform: `translateX(calc(-${safeIndex} * (${100 / visible}% + ${12 / visible}px)))`,
              }}
            >
              {therapists.map((t, i) => (
                <div key={i} style={{ ...styles.card, flex: `0 0 calc(${100 / visible}% - ${(12 * (visible - 1)) / visible}px)` }}>
                  <div style={styles.photoWrap}>
                    <img
                      src={t.photo}
                      alt={t.name}
                      style={styles.photo}
                      loading="lazy"
                    />
                  </div>
                  <div style={styles.info}>
                    <span style={styles.name}>{t.name}</span>
                    <span style={styles.formation}>{t.formation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button style={styles.arrow} onClick={next} aria-label="Próximo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
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
    background: '#3a1447',
    padding: '48px 0',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    display: 'block',
    margin: '24px'
  },
  inner: {
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    padding: '0 16px',
    boxSizing: 'border-box',
  },
  title: {
    color: '#FFCE3B',
    fontSize: 'clamp(1.25rem, 4vw, 2rem)',
    fontWeight: 700,
    textAlign: 'center',
    margin: '0 0 8px',
    lineHeight: 1.2,
  },
  subtitle: {
    color: '#bfa7c5',
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
    textAlign: 'center',
    margin: '0 0 32px',
  },
  carouselWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
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
    gap: '12px',
    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'transform',
  },
  card: {
    background: '#4a1a5e',
    borderRadius: '14px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    flexShrink: 0,
  },
  photoWrap: {
    width: '100%',
    aspectRatio: '3 / 4',
    overflow: 'hidden',
    background: '#5f236f',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center',
    display: 'block',
  },
  info: {
    padding: '12px 14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  name: {
    color: '#f8f8f8',
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  formation: {
    color: '#FFCE3B',
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  arrow: {
    background: 'rgba(255,206,59,0.15)',
    border: '1px solid rgba(255,206,59,0.3)',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    minWidth: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#FFCE3B',
    flexShrink: 0,
    transition: 'background 0.2s',
    padding: 0,
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'rgba(255,206,59,0.3)',
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
