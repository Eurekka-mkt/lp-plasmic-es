import { useCountry } from '../useCountry';

export default function HeroSection() {
  const { currency } = useCountry();

  return (
    <section style={styles.section}>
      <div style={styles.logoBar}>
        <img
          src="https://site-assets.plasmic.app/1242cbfc96eb4a42b4a30be3aa07c3d9.svg"
          alt="Eurekka"
          style={styles.logo}
        />
      </div>

      <div className="hero-grid" style={styles.grid}>
        <div style={styles.textCol}>
          <h1 style={styles.title}>
            Terapia online en español, con un profesional que realmente encaje contigo
          </h1>
          <p style={styles.subtitle}>
            Encuentra apoyo para la ansiedad, las relaciones, la autoestima y otros desafíos emocionales. Elige tu horario y comienza tu proceso desde <strong>US$ 35 por sesión</strong>.
          </p>

          <a style={styles.cta} href="#prices">
            VER PROFESIONALES Y HORARIOS
          </a>

          {currency && (
            <div style={styles.currencyBadge}>
              Pague na moeda {currency}
            </div>
          )}

          <div style={styles.trustBar}>
            <span>Atención 100% online</span>
            <span style={styles.dot}>·</span>
            <span>Confidencial</span>
            <span style={styles.dot}>·</span>
            <span>Pago seguro</span>
            <span style={styles.dot}>·</span>
            <span>Profesionales seleccionados</span>
          </div>
        </div>

        <div style={styles.imageCol}>
          <div style={styles.imageWrapper}>
            <div style={styles.yellowCircle}></div>
            <img
              src="https://img.plasmic.app/img-optimizer/v1/img?src=https%3A%2F%2Fimg.plasmic.app%2Fimg-optimizer%2Fv1%2Fimg%2F33e03afab794cfe89d77be61fd7e5d95.webp&w=1080&q=75"
              alt="Terapeuta Eurekka"
              style={styles.heroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: '100%',
    background: '#f0f0f0',
    overflow: 'hidden',
  },
  logoBar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '32px 24px 0',
  },
  logo: {
    height: '48px',
    width: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'end',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 24px 0',
  },
  textCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingBottom: '40px',
  },
  title: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 'clamp(1.25rem, 2.8vw, 1.75rem)',
    fontWeight: 700,
    color: '#1a1a1a',
    lineHeight: 1.25,
    margin: 0,
  },
  subtitle: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
    color: '#444',
    lineHeight: 1.6,
    margin: 0,
  },
  cta: {
    display: 'inline-block',
    background: '#FFCE3B',
    color: '#000000',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.85rem',
    fontWeight: 700,
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    alignSelf: 'flex-start',
  },
  currencyBadge: {
    display: 'inline-block',
    background: '#FFF8DC',
    border: '1px solid #FFCE3B',
    color: '#1a1a1a',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.75rem',
    fontWeight: 600,
    padding: '5px 12px',
    borderRadius: '20px',
    alignSelf: 'flex-start',
  },
  trustBar: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '6px',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.75rem',
    color: '#666',
    marginTop: '4px',
  },
  dot: {
    color: '#bbb',
  },
  imageCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '550px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  yellowCircle: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    aspectRatio: '1',
    borderRadius: '50%',
    background: '#FFCE3B',
  },
  heroImg: {
    position: 'relative',
    width: '90%',
    height: 'auto',
    objectFit: 'contain',
    zIndex: 1,
  },
};
