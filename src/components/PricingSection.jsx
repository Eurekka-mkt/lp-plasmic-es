import { useCountry } from '../useCountry';

const plans = [
  { value: 35, label: 'US$ 35.00' },
  { value: 40, label: 'US$ 40.00' },
  { value: 50, label: 'US$ 50.00' },
  { value: 60, label: 'US$ 60.00' },
  { value: 70, label: 'US$ 70.00' },
];

export default function PricingSection() {
  const { currency } = useCountry();

  return (
    <section style={styles.section} id="prices">
      <div style={styles.inner}>
        <h2 style={styles.title}>
          ¿Cuánto te sentirías cómodo invirtiendo en tu terapia por sesión?
        </h2>
        <p style={styles.subtitle}>
          Contamos con terapeutas con diferentes niveles de experiencia, lo que da como resultado una variedad de valores.
        </p>
        <p style={styles.choose}>Elige una opción:</p>

        <div style={styles.grid}>
          {plans.map((plan) => (
            <a
              key={plan.value}
              href={`https://ci-terapia-es.eurekka.me/#/es/appointment?value=${plan.value}&source=padrao+undefined+undefined+undefined+undefined`}
              style={styles.card}
            >
              <div style={styles.cardContent}>
                <span style={styles.price}>{plan.label}</span>
                <span style={styles.perSession}>por sesión</span>
              </div>
              {currency && (
                <div style={styles.currencyBadge}>
                  Pague en {currency}
                </div>
              )}
            </a>
          ))}
        </div>

        <p style={styles.footer}>Tu cita será confirmada después del pago</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: '#ffffff',
    padding: '64px 0',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: '"Inter", sans-serif',
    gridColumn: '1 / -1',
  },
  inner: {
    maxWidth: '900px',
    width: '100%',
    margin: '0 auto',
    padding: '0 24px',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  title: {
    color: '#1a1a1a',
    fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)',
    fontWeight: 700,
    margin: '0 0 16px',
    lineHeight: 1.3,
  },
  subtitle: {
    color: '#555',
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
    margin: '0 0 8px',
    lineHeight: 1.5,
  },
  choose: {
    color: '#333',
    fontSize: '1rem',
    fontWeight: 600,
    margin: '0 0 32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '24px',
    maxWidth: '600px',
    margin: '0 auto 24px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f9f9f9',
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    padding: '28px 24px 20px',
    textDecoration: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
    cursor: 'pointer',
    gap: '12px',
    minWidth: 0,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  price: {
    color: '#1a1a1a',
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  perSession: {
    color: '#666',
    fontSize: '0.85rem',
  },
  currencyBadge: {
    background: '#FFCE3B',
    color: '#1a1a1a',
    fontSize: '0.7rem',
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: '20px',
    whiteSpace: 'nowrap',
  },
  footer: {
    color: '#888',
    fontSize: '0.85rem',
    margin: '16px 0 0',
  },
};
