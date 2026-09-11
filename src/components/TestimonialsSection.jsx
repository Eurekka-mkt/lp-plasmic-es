import React, { useState } from 'react';

const testimonials = [
  {
    title: 'Confianza desde el minuto cero',
    shortText: 'Te hace entrar en confianza desde el minuto cero y te permite expresar todo lo que te preocupa.',
    fullText: 'Creo que no he encontrado mejor psicólogo en Eurekka. Es una persona que te hace entrar en confianza desde el minuto cero. Tiene una manera de abordar los problemas sumamente apropiada: te deja hablar, expresarte y comunicar qué es lo que te preocupa. Después, con unas pocas palabras, te ayuda a replantear toda la carga negativa.\n\nEs un profesional sumamente implicado y responsable. Hace de la terapia un momento de total confianza, en el que puedes hablar abiertamente. Sus sesiones me han ayudado a resolver mis problemas.\n\nEstoy realizando la terapia desde España y mi terapeuta ha sabido adaptarse al horario sin inconveniente alguno.',
    initials: 'JM',
    name: 'John Morales',
    location: 'España',
  },
  {
    title: 'Me siento comprendida y segura',
    shortText: 'Me asombra cada sesión. Me siento comprendida, segura y sé que me guía de la mejor manera.',
    fullText: 'Mi terapeuta es un profesional de la salud capacitado para afrontar diferentes dilemas. Soy su paciente y me asombra cada sesión; siempre espero con ansias la próxima cita. Me siento comprendida, segura y sé que me guía de la mejor manera.\n\nEs un profesional que se construye todos los días para darles lo mejor a sus pacientes. Tomo la terapia desde el estado de Tlaxcala, México, y me siento agradecida con Eurekka por tener terapeutas tan capacitados.',
    initials: 'AO',
    name: 'Adriana Ojeda',
    location: 'Tlaxcala, México',
  },
  {
    title: 'Desde la primera sesión sentí el cambio',
    shortText: 'Buscar ayuda psicológica fue la mejor decisión para mi vida y encontrar Eurekka en este camino ha sido mi salvación.',
    fullText: 'Mi experiencia ha sido excelente. Se nota el profesionalismo y, desde la primera sesión, siento el cambio. Buscar ayuda psicológica fue la mejor decisión para mi vida y encontrar Eurekka en este camino ha sido mi salvación.\n\nTodavía continúo en terapia y lo recomiendo al 100%. Si necesitas ayuda profesional, no dudes en contactar con Eurekka.',
    initials: 'MC',
    name: 'Maricarmen Carrasquero',
    location: 'Chile',
  },
  {
    title: 'Puedo expresarme sin sentirme juzgada',
    shortText: 'Me brinda la seguridad para expresar mis sentimientos y cuestionarme muchas cosas sin sentirme juzgada.',
    fullText: 'La experiencia con mi terapeuta ha sido muy gratificante y de mucha confianza. Es mi tercera vez llevando un proceso como este y me brinda la seguridad para expresar mis sentimientos y cuestionarme muchas cosas sin sentirme juzgada o mal.\n\nHan sido sesiones de mucha comprensión y de preguntas difíciles de responder, pero el acompañamiento ha sido un gran pilar.\n\nMe gusta que, al final de cada sesión, me pregunte cómo me sentí y cómo recibí lo que hablamos y aprendimos. También me ofrece puntos de vista que muchas veces no tomo en cuenta, siempre desde una posición neutral y validando mis sentimientos y opiniones. Por el momento, estoy muy contenta con la atención recibida.',
    initials: 'Pd',
    name: 'Paciente de Eurekka',
    location: 'Terapia individual',
  },
  {
    title: 'Ahora entendemos mejor cómo funcionamos',
    shortText: 'No solo nos ha servido como pareja, sino también a nivel personal. Ahora contamos con más herramientas para afrontar los conflictos.',
    fullText: 'Mi chico y yo comenzamos terapia de pareja y estamos muy contentos con la experiencia. El terapeuta sabe exactamente qué preguntas hacer para invitarte a reflexionar, no solo sobre cómo resolver los problemas del presente, sino también sobre su origen.\n\nNos ha ayudado a identificar cómo nuestras experiencias de la infancia y la adolescencia influyen en la forma en la que actuamos hoy, muchas veces sin ser conscientes de ello.\n\nLo que más valoramos es que no solo nos ha servido como pareja, sino también a nivel personal. He podido entenderme mejor y eso ha sido muy enriquecedor. Ahora sentimos que contamos con muchas más herramientas para afrontar posibles conflictos o situaciones difíciles, porque entendemos mejor cómo funcionamos y buscamos soluciones que nos favorezcan a ambos.',
    initials: 'Pd',
    name: 'Paciente de Eurekka',
    location: 'Terapia de pareja',
  },
  {
    title: 'Una conexión que no había encontrado antes',
    shortText: 'En otras terapias todo era más mecánico. Aquí siento empatía, conexión y que realmente tratan de entenderme.',
    fullText: 'Creo que tiene mucho que ver con el terapeuta. Me gusta la empatía y que tratan de entenderme. En otras terapias que había tomado, todo era más mecánico. No había una conexión, no la sentía y terminaba dejando de ir.\n\nAprecio la disponibilidad por WhatsApp y que siempre me contesten. Eso para mí es fundamental. Con mis terapeutas anteriores, a veces no podía contactarlos.',
    initials: 'Pd',
    name: 'Paciente de Eurekka',
    location: 'Experiencia verificada',
  },
  {
    title: 'Un avance significativo en poco tiempo',
    shortText: 'He tenido un avance significativo y he podido trabajar cosas que no había logrado mejorar con mi terapeuta anterior.',
    fullText: 'Siento que he tenido un avance significativo en poco tiempo. Mi terapeuta me ha ayudado a acomodar cosas que tenía desde antes y que no había podido mejorar anteriormente. He sentido ese cambio en un periodo corto. Muchas gracias.',
    initials: 'Pd',
    name: 'Paciente de Eurekka',
    location: 'Experiencia verificada',
  },
];

const PURPLE = '#5f236f';
const YELLOW = '#FFCE3B';
const LAVENDER = '#bfa7c5';

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={YELLOW} stroke={YELLOW} strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TestimonialCard({ testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 20,
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #f0f0f0',
        boxShadow: hovered ? '0 12px 40px rgba(95,35,111,0.12)' : '0 2px 12px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        minHeight: 320,
      }}
    >
      <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
      </div>

      <h4 style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.3, marginBottom: 12, fontFamily: 'Carlito, sans-serif' }}>
        {testimonial.title}
      </h4>

      <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6, flex: 1, marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>
        &ldquo;{testimonial.shortText}&rdquo;
      </p>

      {expanded && (
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 16, marginBottom: 16 }}>
          <p style={{ whiteSpace: 'pre-line', fontSize: 14, color: '#444', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
            {testimonial.fullText}
          </p>
        </div>
      )}

      <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%', background: `${PURPLE}15`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
          }}>
            <span style={{ color: PURPLE, fontWeight: 700, fontSize: 14 }}>{testimonial.initials}</span>
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontWeight: 600, color: '#1a1a1a', fontSize: 14, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {testimonial.name}
            </p>
            <p style={{ color: '#999', fontSize: 12, margin: '2px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {testimonial.location}
            </p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: 'flex', alignItems: 'center', gap: 4,
            fontSize: 13, fontWeight: 600, color: PURPLE,
            border: 'none', background: 'none', cursor: 'pointer',
            padding: '6px 12px', borderRadius: 20,
            transition: 'background 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = `${PURPLE}10`}
          onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
        >
          <span>{expanded ? 'Ver menos' : 'Leer más'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" style={{
      padding: '80px 0', background: '#f7f6f4',
      gridColumnStart: 1, gridColumnEnd: -1,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            textTransform: 'uppercase', letterSpacing: 3, color: PURPLE,
            fontSize: 13, fontWeight: 600, marginBottom: 16, fontFamily: 'Inter, sans-serif'
          }}>
            Experiencias reales de pacientes
          </p>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 700, color: '#1a1a1a',
            lineHeight: 1.15, marginBottom: 16, fontFamily: 'Carlito, sans-serif',
            maxWidth: 700, marginLeft: 'auto', marginRight: 'auto'
          }}>
            Lo que cambia cuando encuentras al terapeuta adecuado
          </h2>
          <p style={{
            fontSize: 17, color: '#666', lineHeight: 1.6,
            maxWidth: 580, margin: '0 auto 32px', fontFamily: 'Inter, sans-serif'
          }}>
            Conoce las experiencias de personas que encontraron en Eurekka un espacio seguro para hablar, comprenderse y avanzar.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {['Atención online', 'Terapeutas seleccionados', 'Pacientes en diferentes países'].map((pill) => (
              <span key={pill} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', border: `1px solid ${PURPLE}22`,
                borderRadius: 50, padding: '8px 18px', fontSize: 13,
                color: PURPLE, fontWeight: 500, fontFamily: 'Inter, sans-serif'
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: YELLOW, display: 'inline-block' }} />
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="testimonials-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>

        <div style={{
          marginTop: 64, background: `linear-gradient(135deg, ${PURPLE}, ${PURPLE}dd)`,
          borderRadius: 24, padding: '48px 32px', textAlign: 'center',
          boxShadow: `0 16px 48px ${PURPLE}30`,
        }}>
          <h3 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: '#f8f8f8', lineHeight: 1.3, marginBottom: 16, fontFamily: 'Carlito, sans-serif' }}>
            Tu historia también puede empezar con una primera conversación
          </h3>
          <p style={{ fontSize: 17, color: LAVENDER, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
            No necesitas tener todo claro para comenzar. Solo necesitas encontrar un profesional con quien puedas sentirte seguro, escuchado y comprendido.
          </p>
          <a
            href="#prices"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'inline-block', background: YELLOW, color: '#1a1a1a',
              fontWeight: 700, padding: '16px 40px', borderRadius: 50,
              fontSize: 17, textDecoration: 'none',
              boxShadow: `0 4px 20px ${YELLOW}66`,
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontFamily: 'Montserrat, Inter, sans-serif',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = `0 6px 28px ${YELLOW}88`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 4px 20px ${YELLOW}66`; }}
          >
            Encontrar a mi terapeuta
          </a>
          <p style={{ color: `${LAVENDER}99`, fontSize: 13, marginTop: 20, fontFamily: 'Inter, sans-serif' }}>
            Atención online, estés donde estés.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
