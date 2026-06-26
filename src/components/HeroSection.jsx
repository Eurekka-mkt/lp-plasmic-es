import { useCountry } from '../useCountry';

export default function HeroSection() {
  const { currency } = useCountry();

  return (
    <section style={styles.section}>
      <section className="ρd__all ρd__section ρmGcay">
        <div className="ρebpgu __wab_img-wrapper" style={{height: "auto"}}>
          <img alt="" aria-hidden="true" className="__wab_img-spacer-svg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMDAiIGhlaWdodD0iMjk4NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{width: "100%", height: "auto", minHeight: "100%"}}/>
          <picture className="__wab_picture">
            <img alt="" loading="lazy" className="__wab_img" decoding="async" src="https://site-assets.plasmic.app/1242cbfc96eb4a42b4a30be3aa07c3d9.svg" style={{width: 0, height: 0}}/>
          </picture>
        </div>
      </section>

      <div style={styles.content}>
        <div style={styles.textColumn}>
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

        <div style={styles.imageColumn}>
          <div className="ρgfLE __wab_img-wrapper" style={{height: "auto"}}>
            <img alt="" aria-hidden="true" className="__wab_img-spacer-svg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQxMiIgaGVpZ2h0PSIxMTgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg==" style={{width: "100%", height: "auto", minHeight: "100%"}}/>
            <picture className="__wab_picture">
              <source type="image/webp" srcSet="https://img.plasmic.app/img-optimizer/v1/img?src=https%3A%2F%2Fimg.plasmic.app%2Fimg-optimizer%2Fv1%2Fimg%2F33e03afab794cfe89d77be61fd7e5d95.webp&amp;w=640&amp;q=75&amp;f=webp 1x, https://img.plasmic.app/img-optimizer/v1/img?src=https%3A%2F%2Fimg.plasmic.app%2Fimg-optimizer%2Fv1%2Fimg%2F33e03afab794cfe89d77be61fd7e5d95.webp&amp;w=1080&amp;q=75&amp;f=webp 2x"/>
              <img alt="Terapia online Eurekka" loading="lazy" className="__wab_img" decoding="async" src="https://img.plasmic.app/img-optimizer/v1/img?src=https%3A%2F%2Fimg.plasmic.app%2Fimg-optimizer%2Fv1%2Fimg%2F33e03afab794cfe89d77be61fd7e5d95.webp&amp;w=1080&amp;q=75" srcSet="https://img.plasmic.app/img-optimizer/v1/img?src=https%3A%2F%2Fimg.plasmic.app%2Fimg-optimizer%2Fv1%2Fimg%2F33e03afab794cfe89d77be61fd7e5d95.webp&amp;w=640&amp;q=75 1x, https://img.plasmic.app/img-optimizer/v1/img?src=https%3A%2F%2Fimg.plasmic.app%2Fimg-optimizer%2Fv1%2Fimg%2F33e03afab794cfe89d77be61fd7e5d95.webp&amp;w=1080&amp;q=75 2x" style={{width: 0, height: 0}}/>
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: '48px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '48px 24px 64px',
    flexWrap: 'wrap',
  },
  textColumn: {
    flex: '1 1 480px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    fontWeight: 700,
    color: '#1a1a1a',
    lineHeight: 1.2,
    margin: 0,
  },
  subtitle: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
    color: '#444',
    lineHeight: 1.6,
    margin: 0,
  },
  cta: {
    display: 'inline-block',
    background: '#FFCE3B',
    color: '#000000',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.95rem',
    fontWeight: 700,
    padding: '16px 32px',
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
    fontSize: '0.8rem',
    fontWeight: 600,
    padding: '6px 14px',
    borderRadius: '20px',
    alignSelf: 'flex-start',
  },
  trustBar: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '6px',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.8rem',
    color: '#666',
    marginTop: '4px',
  },
  dot: {
    color: '#bbb',
  },
  imageColumn: {
    flex: '1 1 400px',
    maxWidth: '520px',
  },
};
