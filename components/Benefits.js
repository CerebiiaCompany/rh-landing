// components/Benefits.js
import Image from 'next/image';
import styles from '../styles/Benefits.module.css';

const Benefits = () => {
  const benefits = [
    {
      img: '/Vector.png',
      title: 'Evaluaciones DISC integradas',
      description: 'Analiza el perfil conductual de cada candidato para asegurar la compatibilidad con el puesto y la cultura organizacional.'
    },
    {
      img: '/ic_round-autorenew.png',
      title: 'Automatización del reclutamiento',
      description: 'Reduce tareas manuales con filtros automáticos de CV y clasificación de candidatos según criterios definidos.'
    },
    {
      img: '/mingcute_chart-pie-2-line.png',
      title: 'Decisiones basadas en datos',
      description: 'Panel de control con métricas clave para optimizar cada etapa del proceso de selección.'
    },
    {
      img: '/Vector1.png',
      title: 'Comunicación automatizada',
      description: 'Envía notificaciones, recordatorios y respuestas a postulantes de forma automática y personalizada.'
    }
  ];

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.greenText}>Beneficios</span> Clave para<br />
            Tu Empresa
          </h2>
          <p className={styles.subtitle}>
            Estandariza el control permanente de calidad y centraliza toda la información en una plataforma para detectar problemas a tiempo y tomar acciones correctivas rápidamente.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.icon}>
                <Image
                  src={benefit.img}
                  alt={benefit.title}
                  width={65}
                  height={65}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className={styles.callToAction}>
  <p>
    Gestionar las buenas prácticas de Recursos Humanos en tu organización
    <br />
    <span>¡nunca fue tan fácil!</span>
  </p>
</section>

    </section>
  );
};

export default Benefits;
