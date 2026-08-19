import React, { useState } from 'react';
import { Star, MapPin, Globe, ChevronDown } from 'lucide-react';

const therapists = [
  {
    tabName: 'Oscar',
    testimonials: [
      {
        title: 'Confianza desde el minuto cero',
        shortText: 'Te hace entrar en confianza desde el minuto cero y te permite expresar todo lo que te preocupa.',
        fullText: 'Creo que no he encontrado mejor psicólogo que Oscar, de Eurekka. Es una persona que te hace entrar en confianza desde el minuto cero. Tiene una manera de abordar los problemas sumamente apropiada: te deja hablar, expresarte y comunicar qué es lo que te preocupa. Después, con unas pocas palabras, te ayuda a replantear toda la carga negativa.\n\nEs un profesional sumamente implicado y responsable. Hace de la terapia un momento de total confianza, en el que puedes hablar abiertamente. Sus sesiones me han ayudado a resolver mis problemas.\n\nEstoy realizando la terapia desde España y Oscar ha sabido adaptarse al horario sin inconveniente alguno.',
        initials: 'JM',
        name: 'John Morales',
        location: 'España',
      },
      {
        title: 'Me siento comprendida y segura',
        shortText: 'Me asombra cada sesión. Me siento comprendida, segura y sé que me guía de la mejor manera.',
        fullText: 'Oscar es un profesional de la salud capacitado para afrontar diferentes dilemas. Soy su paciente y me asombra cada sesión; siempre espero con ansias la próxima cita. Me siento comprendida, segura y sé que me guía de la mejor manera.\n\nEs un profesional que se construye todos los días para darles lo mejor a sus pacientes. Tomo la terapia desde el estado de Tlaxcala, México, y me siento agradecida con Eurekka por tener terapeutas capacitados como el psicólogo Oscar.',
        initials: 'AO',
        name: 'Adriana Ojeda',
        location: 'Tlaxcala, México',
      },
      {
        title: 'Desde la primera sesión sentí el cambio',
        shortText: 'Buscar ayuda psicológica fue la mejor decisión para mi vida y encontrar a Oscar en este camino ha sido mi salvación.',
        fullText: 'Mi experiencia con Oscar ha sido excelente. Se nota su profesionalismo y, desde la primera sesión, siento el cambio. Buscar ayuda psicológica fue la mejor decisión para mi vida y encontrar a Oscar en este camino ha sido mi salvación.\n\nGracias, Oscar. Todavía continúo en terapia y lo recomiendo al 100%. Si necesitas ayuda profesional, no dudes en contactar con Eurekka.',
        initials: 'MC',
        name: 'Maricarmen Carrasquero',
        location: 'Chile',
      },
    ],
  },
  {
    tabName: 'Alejandra',
    testimonials: [
      {
        title: 'Puedo expresarme sin sentirme juzgada',
        shortText: 'Ale me brinda la seguridad para expresar mis sentimientos y cuestionarme muchas cosas sin sentirme juzgada.',
        fullText: 'La experiencia con Alejandra ha sido muy gratificante y de mucha confianza. Es mi tercera vez llevando un proceso como este y Ale me brinda la seguridad para expresar mis sentimientos y cuestionarme muchas cosas sin sentirme juzgada o mal.\n\nHan sido sesiones de mucha comprensión y de preguntas difíciles de responder, pero el acompañamiento de Ale ha sido un gran pilar.\n\nMe gusta que, al final de cada sesión, me pregunte cómo me sentí y cómo recibí lo que hablamos y aprendimos. También me ofrece puntos de vista que muchas veces no tomo en cuenta, siempre desde una posición neutral y validando mis sentimientos y opiniones. Por el momento, estoy muy contenta con la atención recibida.',
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
    ],
  },
  {
    tabName: 'Irma',
    testimonials: [
      {
        title: 'Una conexión que no había encontrado antes',
        shortText: 'En otras terapias todo era más mecánico. Contigo siento empatía, conexión y que realmente tratas de entenderme.',
        fullText: 'Creo que tiene mucho que ver con la terapeuta. Me gusta que seas empática y que trates de entenderme. En otras terapias que había tomado, todo era más mecánico. No había una conexión, no la sentía y terminaba dejando de ir.\n\nAprecio que estés disponible por WhatsApp y que siempre me contestes. Eso para mí es fundamental. Con mis terapeutas anteriores, a veces no podía contactarlas.',
        initials: 'Pd',
        name: 'Paciente de Eurekka',
        location: 'Experiencia verificada',
      },
      {
        title: 'Un avance significativo en poco tiempo',
        shortText: 'He tenido un avance significativo y he podido trabajar cosas que no había logrado mejorar con mi terapeuta anterior.',
        fullText: 'Siento que he tenido un avance significativo en poco tiempo. Me has ayudado a acomodar cosas que tenía desde antes y que no había podido mejorar con mi terapeuta anterior. He sentido ese cambio en un periodo corto. Muchas gracias.',
        initials: 'Pd',
        name: 'Paciente de Eurekka',
        location: 'Experiencia verificada',
      },
    ],
  },
];

function TestimonialCard({ testimonial }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-brand-yellow fill-brand-yellow" />
        ))}
      </div>

      <h4 className="text-lg font-bold text-gray-900 leading-snug mb-3">
        {testimonial.title}
      </h4>

      <p className="text-gray-600 leading-relaxed flex-1 mb-4 text-[15px]">
        &ldquo;{testimonial.shortText}&rdquo;
      </p>

      <div
        className={`grid transition-all duration-500 ease-out ${
          expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="whitespace-pre-line pt-2 pb-4 border-t border-gray-100 text-gray-700 text-sm leading-relaxed">
            {testimonial.fullText}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
            <span className="text-brand-purple font-bold text-sm">{testimonial.initials}</span>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 text-sm truncate">{testimonial.name}</p>
            <p className="text-gray-400 text-xs flex items-center gap-1">
              <MapPin size={12} />
              {testimonial.location}
            </p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm font-semibold text-brand-purple hover:gap-1.5 transition-all duration-200 shrink-0 cursor-pointer"
        >
          <span>{expanded ? 'Ver menos' : 'Experiencia real'}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTherapist = therapists[activeTab];
  const cols = activeTherapist.testimonials.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-brand-purple text-sm font-semibold mb-4">
            Experiencias reales de pacientes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] mb-5">
            Lo que cambia cuando encuentras al terapeuta adecuado
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Conoce las experiencias de personas que encontraron en Eurekka un espacio seguro para hablar, comprenderse y avanzar.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['Atención online', 'Terapeutas seleccionados', 'Pacientes en diferentes países'].map(
              (pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 bg-white border border-brand-purple/15 rounded-full px-4 py-2 text-sm text-brand-purple font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                  {pill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10">
          {therapists.map((t, i) => (
            <button
              key={t.tabName}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === i
                  ? 'bg-brand-purple text-white shadow-lg scale-105'
                  : 'bg-white text-brand-purple border border-brand-purple/20 hover:bg-brand-purple/5'
              }`}
            >
              {t.tabName}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        {activeTherapist.testimonials.length > 0 ? (
          <div className={`grid grid-cols-1 ${cols} gap-6`}>
            {activeTherapist.testimonials.map((testimonial, i) => (
              <TestimonialCard key={`${activeTab}-${i}`} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg py-16">
            Próximamente más experiencias.
          </p>
        )}

        {/* Countries strip */}
        <div className="mt-14 text-center">
          <p className="text-lg text-gray-700 font-medium mb-5">
            Personas dentro y fuera de México ya realizan su terapia online con Eurekka.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['México', 'España', 'Chile'].map((country) => (
              <span
                key={country}
                className="inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/10 rounded-full px-4 py-2 text-sm text-brand-purple font-semibold"
              >
                <Globe size={14} />
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-brand-purple to-brand-purple/85 rounded-3xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-text leading-tight mb-4">
            Tu historia también puede empezar con una primera conversación
          </h3>
          <p className="text-brand-lavender text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            No necesitas tener todo claro para comenzar. Solo necesitas encontrar un profesional con quien puedas sentirte seguro, escuchado y comprendido.
          </p>
          <a
            href="#valores"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('valores')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-brand-yellow text-gray-900 font-bold px-10 py-4 rounded-full text-lg shadow-[0_4px_20px_rgba(255,206,59,0.4)] hover:bg-yellow-300 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Encontrar a mi terapeuta
          </a>
          <p className="text-brand-lavender/70 text-sm mt-5">
            Atención online, estés donde estés.
          </p>
        </div>
      </div>
    </section>
  );
}
