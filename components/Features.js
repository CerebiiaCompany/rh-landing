// components/Features.js
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Features.module.css';

export default function Features() {
  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </Head>
     
      <section className={styles.features}>
        <div className={styles.container}>

          {/* Primera sección */}
          <div className={styles.featureRow}>
            {/* Columna texto */}
            <div className={styles.featureTextCol}>
              <div className={styles.featureIcon}>
                <Image
                  src="/img8-5.png"
                  alt="Icono campaña"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.featureTitle}>
                Test psicotécnico
<br />integrado
              </h3>
              <p className={styles.featureDescription}>
                Evalúa automáticamente el perfil conductual de cada candidato para predecir su desempeño y compatibilidad con el equipo.
              </p>
            </div>

            {/* Columna imagen */}
            <div className={styles.featureImageCol}>
              <Image
                src="/image3-5.png"
                alt="Vista de formulario de gestión de calidad"
                width={600}
                height={400}
                className={styles.featureImage2}
              />
            </div>
          </div>

          <div className={styles.featureRow}>
            {/* Columna imagen */}
            <div className={styles.featureImageCol}>
              <div className={styles.featureImageWrap}>
                <Image
                  src="/image4-5.png"
                  alt="Indicador de satisfacción de campañas"
                  width={580}
                  height={420}
                  className={styles.featureImage4}
                  priority
                />
              </div>
            </div>

            {/* Columna texto (derecha) */}
            <div className={styles.featureTextCol}>
              <div className={styles.featureIcon}>
                <Image
                  src="/img12-5.png"
                  alt="Icono análisis"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.featureTitle}>
                Gestión y filtrado de CV con IA 
              </h3>
              <p className={styles.featureDescription}>
                Clasifica postulaciones de forma automática según experiencia, formación y habilidades clave.
              </p>
            </div>
          </div>

          {/* === Nueva sección: Examina estadísticas === */}
          <div className={styles.featureRow}>
            {/* Columna texto */}
            <div className={styles.featureTextCol}>
              <div className={styles.featureIcon}>
                <Image
                  src="/img13-5.png"
                  alt="Icono estadísticas"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.featureTitle}>
                Panel de control interactivo
              </h3>
              <p className={styles.featureDescription}>
               Visualiza en tiempo real el estado de cada vacante, candidatos en proceso y métricas de selección.

              </p>
            </div>

            {/* Columna imagen */}
            <div className={styles.featureImageCol}>
              <Image
                src="/img14c.png"
                alt="Vista de estadísticas de calidad"
                width={580}
                height={420}
                className={styles.featureImage}
              />
            </div>
          </div>

          <div className={styles.featureRow}>
            {/* Columna imagen */}
            <div className={styles.featureImageCol}>
              <div className={styles.featureImageWrap}>
                <Image
                  src="/img16c.png"
                  alt="Indicador de satisfacción de campañas"
                  width={580}
                  height={420}
                  className={styles.featureImage2}
                  priority
                />
              </div>
            </div>

            {/* Columna texto */}
            <div className={styles.featureTextCol}>
              <div className={styles.featureIcon}>
                <Image src="/img15b.png" alt="Icono de alertas" width={48} height={48} />
              </div>

              <h3 className={styles.featureTitle}>
                Base de datos centralizada de talento
              </h3>

              <p className={styles.featureDescription}>
                Accede al historial completo de cada candidato y empleado en un solo lugar.

              </p>
            </div>
          </div>

          {/* Última sección */}
          <div className={styles.featureRow}>
            {/* Columna texto */}
            <div className={styles.featureTextCol}>
              <div className={styles.featureIcon}>
                <Image
                  src="/img17b.png"
                  alt="Icono campaña"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.featureTitle}>
               Publicación multicanal de vacantes
              </h3>
              <p className={styles.featureDescription}>
               Difunde tus ofertas laborales en portales de empleo, redes sociales y tu propia web con un solo clic.
              </p>
            </div>

            {/* Columna imagen */}
            <div className={styles.featureImageCol}>
              <Image
                src="/img18b.png"
                alt="Vista de formulario de gestión de calidad"
                width={600}
                height={400}
                className={styles.featureImage4}
              />
            </div>
          </div>

           <div className={styles.featureRow}>
            {/* Columna imagen */}
            <div className={styles.featureImageCol}>
              <div className={styles.featureImageWrap}>
                <Image
                  src="/img19b.png"
                  alt="Indicador de satisfacción de campañas"
                  width={580}
                  height={420}
                  className={styles.featureImage4}
                  priority
                />
              </div>
            </div>

            {/* Columna texto (derecha) */}
            <div className={styles.featureTextCol}>
              <div className={styles.featureIcon}>
                <Image
                  src="/img20b.png"
                  alt="Icono análisis"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.featureTitle}>
               Agendamiento y seguimiento de entrevistas
              </h3>
              <p className={styles.featureDescription}>
Organiza entrevistas presenciales o virtuales y guarda los resultados directamente en el sistema.              </p>
            </div>
          </div>

          {/* === Nueva sección: Examina estadísticas === */}
          <div className={styles.featureRow}>
            {/* Columna texto */}
            <div className={styles.featureTextCol}>
              <div className={styles.featureIcon}>
                <Image
                  src="/img21b.png"
                  alt="Icono estadísticas"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.featureTitle}>
Comunicación automatizada              </h3>
              <p className={styles.featureDescription}>
Envía mensajes y recordatorios personalizados a candidatos y responsables de contratación.

              </p>
            </div>

            {/* Columna imagen */}
            <div className={styles.featureImageCol}>
              <Image
                src="/img22b.png"
                alt="Vista de estadísticas de calidad"
                width={580}
                height={420}
                className={styles.featureImage4}
              />
            </div>
          </div>

          <div className={styles.featureRow}>
            {/* Columna imagen */}
            <div className={styles.featureImageCol}>
              <div className={styles.featureImageWrap}>
                <Image
                  src="/img23b.png"
                  alt="Indicador de satisfacción de campañas"
                  width={580}
                  height={420}
                  className={styles.featureImage4}
                  priority
                />
              </div>
            </div>

            {/* Columna texto */}
            <div className={styles.featureTextCol}>
              <div className={styles.featureIcon}>
                <Image src="/img24b.png" alt="Icono de alertas" width={48} height={48} />
              </div>

              <h3 className={styles.featureTitle}>
Reportes y análisis sociodemográficos              </h3>

              <p className={styles.featureDescription}>
Obtén información estratégica sobre el perfil de tus postulantes y empleados para decisiones más precisas.

              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
