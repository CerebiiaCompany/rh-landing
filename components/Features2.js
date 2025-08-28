// components/Features2.js
import styles from '../styles/Features2.module.css';
import Image from 'next/image';

export default function Features2() {
  return (
    <section className={styles.features2}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Contenido de texto */}
          <div className={styles.textContent}>
            <div className={styles.badge}>
RRHH en tus procesos.           
 </div>
            
            <h2 className={styles.title}>
              ¿Por qué usar 
Cerebiia RRHH?
            </h2>
            
            <p className={styles.description}>
Nuestro software de gestión de Recursos Humanos responde a los retos principales del reclutamiento y selección modernos. Integra tecnología, datos y evaluaciones psicotécnicas para que contrates con mayor precisión, en menos tiempo y con mejor información. Es personalizable y fácil de usar.

            </p>

            {/* Lista de características */}
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <Image
                    src="/img24.png"
                    alt="Estandariza"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.featureText}>
                  <h3>Evalúa con presición</h3>
                  <p>Integra el test psicotécnico DISC para conocer el perfil conductual de cada candidato y su compatibilidad con el cargo.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <Image
                    src="/img25.png"
                    alt="Asegura"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.featureText}>
                  <h3>Acelera la contratación</h3>
                  <p>Automatiza el filtrado de hojas de vida, la comunicación y la organización de entrevistas para reducir tiempos y costos.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <Image
                    src="/img26.png"
                    alt="Mejora"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.featureText}>
                  <h3>Toma desiciones estretégicas</h3>
                  <p>Accede a reportes en tiempo real sobre candidatos, procesos y métricas para mejorar continuamente la selección de personal.</p>
                </div>
              </div>
            </div>

            <button className={styles.ctaButton}>
              Más información
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Imagen */}
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/persona.png"
                alt="Hombre usando smartphone para transcripción"
                width={600}
                height={500}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
