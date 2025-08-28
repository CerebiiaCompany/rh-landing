// components/Hero.js
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Fondo con ondas */}
      <div className={styles.backgroundWaves}>
        <Image
          src="/mujer.png"
          alt="Background waves"
          fill
            style={{ objectFit: 'contain' }}  
          priority
        />
      </div>
      
{/* Header/Navbar */}
<header className={styles.header}>
  <div className={styles.container}>
    {/* Nueva estructura para móviles: Logo y botón en la misma fila */}
    <div className={styles.headerTopRow}>
      <div className={styles.logo}>
        <Image
          src="/Group.png"
          alt="Cerebiia Transcript"
          width={150}
          height={40}
          priority
        />
      </div>
      <button className={styles.loginBtn}>
        Inicio de sesión
      </button>
    </div>
    
    {/* Elementos originales para desktop */}
    <div className={styles.logo}>
      <Image
        src="/Group.png"
        alt="Cerebiia Transcript"
        width={150}
        height={40}
        priority
      />
    </div>
    
    {/* Navegación centrada */}
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <a href="#inicio" className={styles.navLink}>Inicio</a>
        <a href="#servicios" className={styles.navLink}>Servicios</a>
        <a href="#precios" className={styles.navLink}>Precios</a>
        <a href="#contacto" className={styles.navLink}>Contacto</a>
      </nav>
    </div>
    
    {/* Botón de login a la derecha */}
    <button className={styles.loginBtn}>
      Inicio de sesión
    </button>
  </div>
</header>

      {/* Contenido principal */}
      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
             
              <span className={styles.greenText}>Automatiza</span><span className={styles.darkText}> la gestion</span><br/>
              <span className={styles.darkText}> de talento en tu</span><br/>
              <span className={styles.darkText}>empresa</span>
            </h1>
            
            <p className={styles.subtitle}>
Protege el crecimiento de tu equipo y aumenta la efectividad de las contrataciones con procesos inteligentes, test psicotécnico DISC, análisis de CV con IA y reportes en tiempo real. Reduce el tiempo de contratación y mejora la calidad del talento incorporado.            </p>
            
            <button className={styles.ctaBtn}>
              Descubre nuestros servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
