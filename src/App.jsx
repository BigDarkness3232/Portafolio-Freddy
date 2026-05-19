import { DiPython, DiDjango, DiPhp, DiJavascript1 } from 'react-icons/di'
import { SiPowerbi, SiPandas, SiNumpy, SiAngular, SiTypescript, SiWoocommerce, SiGmail, SiMicrosoftexcel } from 'react-icons/si'
import { FaWhatsapp, FaLinkedin, FaDatabase, FaGithub } from 'react-icons/fa'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const iconStyle = { fontSize: '2.2rem', marginBottom: '.75rem', display: 'block' }

function App() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs.sendForm(
      'service_l89x7qv',
      'template_4ccmh49',
      formRef.current,
      'AvPqBuxwMU8pYBDvb'
    ).then(() => {
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    }).catch(() => {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    })
  }
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">FC · Portfolio</div>
        <div className="nav-links">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#analisis">Análisis</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div>
          <div className="hero-badge">📊 Ingeniero en Informática · Analista de Datos</div>
          <h1>Hola, soy <span>Freddy Cárdenas</span></h1>
          <p>Ingeniero en Informática titulado de Duoc UC. Transformo datos en decisiones estratégicas con Python, SQL y Power BI avanzado.</p>
          <div className="btn-group">
            <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
            <a href="#contacto" className="btn btn-outline">Contáctame</a>
          </div>
          <div className="scroll-hint">↓ Desplázate para explorar</div>
        </div>
      </div>

      {/* SOBRE MÍ */}
      <section id="sobre-mi">
        <div className="section-tag">01 · Sobre mí</div>
        <div className="section-title">¿Quién <span>soy?</span></div>
        <div className="divider"></div>
        <div className="about-grid">
          <img src="/Freddy.png" style={{width:'180px',height:'180px',borderRadius:'50%',objectFit:'cover',objectPosition:'center top',boxShadow:'0 0 40px rgba(108,99,255,.3)'}} alt="Freddy Cárdenas" />
          <div className="about-text">
            <p>Ingeniero en Informática titulado de Duoc UC (2026), con enfoque en análisis de datos y tecnologías de la información. Cuento con experiencia en SQL, Python y Power BI a nivel avanzado, desarrollando dashboards, modelando datos y generando insights para la toma de decisiones.</p>
            <p>Me especializo en transformar datos en información útil, optimizando procesos y apoyando la gestión empresarial. También tengo experiencia en desarrollo de software e integraciones con APIs REST.</p>
            <p>Idiomas: Español nativo · Inglés fluido</p>
            <div className="about-stats">
              <div className="stat"><div className="stat-num">Duoc UC</div><div className="stat-label">Ing. en Informática</div></div>
              <div className="stat"><div className="stat-num">2026</div><div className="stat-label">Titulado</div></div>
              <div className="stat"><div className="stat-num">4+</div><div className="stat-label">Tecnologías dominadas</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <div className="bg-alt" id="experiencia">
        <div className="inner">
          <div className="section-tag">02 · Experiencia</div>
          <div className="section-title">Trayectoria <span>profesional</span></div>
          <div className="divider"></div>
          <div className="exp-card">
            <h3>Practicante de Desarrollo de Software · Desarrollador de Integraciones</h3>
            <div className="exp-meta">San Miguel, Chile · Agosto 2025 – Noviembre 2025</div>
            <ul>
              <li>Desarrollé un motor de sincronización en PHP integrando APIs REST de Mercado Libre y WooCommerce, mejorando la consistencia de stock y precios.</li>
              <li>Optimicé modelos de base de datos asegurando integridad de la información y reduciendo tiempos de respuesta.</li>
              <li>Lideré el desarrollo de plugins estableciendo buenas prácticas y procesos de despliegue.</li>
              <li>Documenté el ecosistema técnico para mejorar la mantenibilidad del sistema.</li>
              <li>Diseñé flujos de pruebas para APIs, asegurando la estabilidad ante fallos y cambios externos.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* HABILIDADES */}
      <div className="bg-alt" id="habilidades">
        <div className="inner">
          <div className="section-tag">03 · Habilidades técnicas</div>
          <div className="section-title">Mi <span>stack</span></div>
          <div className="divider"></div>
          <div className="skills-grid">

            <div className="skill-card">
              <DiPython style={{...iconStyle, color:'#3776AB'}} />
              <h3>Python</h3>
              <div className="skill-tags">
                <span className="tag">Pandas</span>
                <span className="tag">NumPy</span>
                <span className="tag">Matplotlib</span>
              </div>
            </div>

            <div className="skill-card">
              <FaDatabase style={{...iconStyle, color:'#00d4ff'}} />
              <h3>SQL</h3>
              <div className="skill-tags">
                <span className="tag teal">Consultas avanzadas</span>
                <span className="tag teal">Modelamiento</span>
                <span className="tag teal">Integridad de datos</span>
              </div>
            </div>

            <div className="skill-card">
              <span style={iconStyle}>📊</span>
              <h3>Power BI · Avanzado</h3>
              <div className="skill-tags">
                <span className="tag green">DAX</span>
                <span className="tag green">Power Query (ETL)</span>
                <span className="tag green">Dashboards</span>
                <span className="tag green">KPIs</span>
                <span className="tag green">Modelado de datos</span>
              </div>
            </div>

            <div className="skill-card">
              <SiMicrosoftexcel style={{...iconStyle, color:'#217346'}} />
              <h3>Excel & Office</h3>
              <div className="skill-tags">
                <span className="tag amber">Excel Intermedio</span>
                <span className="tag amber">Microsoft Office</span>
                <span className="tag amber">Procesos ETL</span>
              </div>
            </div>

            <div className="skill-card">
              <DiPhp style={{...iconStyle, color:'#777BB4'}} />
              <h3>Desarrollo & APIs</h3>
              <div className="skill-tags">
                <span className="tag teal"><DiPhp style={{verticalAlign:'middle'}}/>PHP</span>
                <span className="tag teal"><DiDjango style={{verticalAlign:'middle'}}/>Django</span>
                <span className="tag teal"><SiWoocommerce style={{verticalAlign:'middle',marginRight:4}}/>WooCommerce</span>
                <span className="tag teal">Mercado Libre API</span>
              </div>
            </div>

            <div className="skill-card">
              <span style={iconStyle}>📈</span>
              <h3>Análisis de datos</h3>
              <div className="skill-tags">
                <span className="tag">Modelamiento</span>
                <span className="tag">ETL</span>
                <span className="tag">Insights</span>
                <span className="tag">Visualización</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PROYECTOS */}
      <section id="proyectos">
        <div className="section-tag">04 · Proyectos</div>
        <div className="section-title">Casos de <span>estudio</span></div>
        <div className="divider"></div>
        <div className="projects-grid">

          <div className="proj-card" style={{borderColor:'rgba(108,99,255,.5)'}}>
            <div className="proj-thumb p1">
              <span style={{position:'absolute',top:'10px',left:'10px',background:'linear-gradient(135deg,#6c63ff,#00d4ff)',fontSize:'.7rem',padding:'.2rem .7rem',borderRadius:'20px',color:'#fff',fontWeight:700}}>⭐ Proyecto de Título</span>
              📦
            </div>
            <div className="proj-body">
              <h3>LogisticFour</h3>
              <p>Proyecto de título: sistema de gestión de inventario desarrollado en Python, con análisis de datos integrado para optimizar el control de stock y la toma de decisiones.</p>
              <div className="proj-tools">
                <span className="tag"><DiPython style={{verticalAlign:'middle',marginRight:4}}/>Python</span>
                <span className="tag">Gestión de inventario</span>
                <span className="tag">Análisis de datos</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/BigDarkness3232/LogisticFour/tree/developers" className="proj-link"><FaGithub style={{verticalAlign:'middle',marginRight:4}}/>GitHub</a>
              </div>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-thumb p2">🔗</div>
            <div className="proj-body">
              <h3>Motor de sincronización E-Commerce</h3>
              <p>Integración de APIs REST de Mercado Libre y WooCommerce en PHP/Django para sincronizar stock y precios en tiempo real.</p>
              <div className="proj-tools">
                <span className="tag teal"><DiPhp style={{verticalAlign:'middle'}}/>PHP</span>
                <span className="tag teal"><DiDjango style={{verticalAlign:'middle'}}/>Django</span>
                <span className="tag teal">APIs REST</span>
                <span className="tag teal"><SiWoocommerce style={{verticalAlign:'middle',marginRight:4}}/>WooCommerce</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/BigDarkness3232/Motor-de-sincronizacion-ECommerce" className="proj-link"><FaGithub style={{verticalAlign:'middle',marginRight:4}}/>GitHub</a>
              </div>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-thumb p3"><DiPython style={{fontSize:'3.5rem',color:'#3776AB'}}/></div>
            <div className="proj-body">
              <h3>API Productos</h3>
              <p>API desarrollada en Python con Django para gestión de productos en proyectos e-commerce.</p>
              <div className="proj-tools">
                <span className="tag"><DiPython style={{verticalAlign:'middle'}}/>Python</span>
                <span className="tag"><DiDjango style={{verticalAlign:'middle'}}/>Django</span>
                <span className="tag teal">API REST</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/BigDarkness3232/apiproductos" className="proj-link"><FaGithub style={{verticalAlign:'middle',marginRight:4}}/>GitHub</a>
              </div>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-thumb p1"><DiJavascript1 style={{fontSize:'3.5rem',color:'#F7DF1E'}}/></div>
            <div className="proj-body">
              <h3>FerramasF</h3>
              <p>Plataforma e-commerce de ferretería desarrollada con Django y JavaScript con interfaz web completa.</p>
              <div className="proj-tools">
                <span className="tag amber"><DiPython style={{verticalAlign:'middle'}}/>Python</span>
                <span className="tag amber"><DiDjango style={{verticalAlign:'middle'}}/>Django</span>
                <span className="tag amber"><DiJavascript1 style={{verticalAlign:'middle'}}/>JavaScript</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/BigDarkness3232/FerramasF" className="proj-link"><FaGithub style={{verticalAlign:'middle',marginRight:4}}/>GitHub</a>
              </div>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-thumb p2"><DiDjango style={{fontSize:'3.5rem',color:'#092E20'}}/></div>
            <div className="proj-body">
              <h3>API Ferramas</h3>
              <p>Backend en Python con Django REST Framework para gestión de productos y pedidos del sistema Ferramas.</p>
              <div className="proj-tools">
                <span className="tag"><DiPython style={{verticalAlign:'middle'}}/>Python</span>
                <span className="tag"><DiDjango style={{verticalAlign:'middle'}}/>Django</span>
                <span className="tag teal">API REST</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/BigDarkness3232/api_ferramas-" className="proj-link"><FaGithub style={{verticalAlign:'middle',marginRight:4}}/>GitHub</a>
              </div>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-thumb p3"><SiAngular style={{fontSize:'3.5rem',color:'#DD0031'}}/></div>
            <div className="proj-body">
              <h3>RegistrAPP</h3>
              <p>Aplicación web de registro desarrollada en Angular con gestión de usuarios y autenticación.</p>
              <div className="proj-tools">
                <span className="tag green"><SiAngular style={{verticalAlign:'middle',marginRight:4}}/>Angular</span>
                <span className="tag green"><SiTypescript style={{verticalAlign:'middle',marginRight:4}}/>TypeScript</span>
                <span className="tag green">Auth</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/BigDarkness3232/RegistrAPP" className="proj-link"><FaGithub style={{verticalAlign:'middle',marginRight:4}}/>GitHub</a>
              </div>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-thumb p1"><DiJavascript1 style={{fontSize:'3.5rem',color:'#F7DF1E'}}/></div>
            <div className="proj-body">
              <h3>SunnyGo</h3>
              <p>Plataforma e-commerce de venta de componentes de computadores, desarrollada con Django y JavaScript con tests implementados con Pytest.</p>
              <div className="proj-tools">
                <span className="tag amber"><DiPython style={{verticalAlign:'middle'}}/>Python</span>
                <span className="tag amber"><DiDjango style={{verticalAlign:'middle'}}/>Django</span>
                <span className="tag amber"><DiJavascript1 style={{verticalAlign:'middle'}}/>JavaScript</span>
                <span className="tag amber">Pytest</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/BigDarkness3232/SunnyGo" target="_blank" rel="noreferrer" className="proj-link"><FaGithub style={{verticalAlign:'middle',marginRight:4}}/>GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ANÁLISIS DE DATOS */}
      <div className="bg-alt" id="analisis">
        <div className="inner">
          <div className="section-tag">05 · Análisis de Datos</div>
          <div className="section-title">Casos de <span>Analista de Datos</span></div>
          <div className="divider"></div>
          <div className="projects-grid">

            {/* <div className="proj-card">
              <div className="proj-thumb p1"><SiPowerbi style={{fontSize:'3.5rem',color:'#F2C811'}}/></div>
              <div className="proj-body">
                <h3>Dashboard de Ventas — Power BI</h3>
                <p>Panel interactivo con KPIs de ventas, análisis por categoría y tendencias mensuales. Modelado con DAX y transformación ETL via Power Query.</p>
                <div className="proj-tools">
                  <span className="tag green">Power BI</span>
                  <span className="tag green">DAX</span>
                  <span className="tag green">Power Query</span>
                  <span className="tag green">KPIs</span>
                </div>
                <div className="proj-links">
                  <a href="#" className="proj-link">🔗 Ver dashboard</a>
                </div>
              </div>
            </div>

            <div className="proj-card">
              <div className="proj-thumb p2"><SiPowerbi style={{fontSize:'3.5rem',color:'#F2C811'}}/></div>
              <div className="proj-body">
                <h3>Dashboard RR.HH. — Power BI</h3>
                <p>Reporte de gestión de personal con métricas de ausentismo, rotación y desempeño por área. Visualizaciones orientadas a la toma de decisiones.</p>
                <div className="proj-tools">
                  <span className="tag green">Power BI</span>
                  <span className="tag green">DAX</span>
                  <span className="tag teal">SQL</span>
                </div>
                <div className="proj-links">
                  <a href="#" className="proj-link">🔗 Ver dashboard</a>
                </div>
              </div>
            </div> */}

            <div className="proj-card">
              <div className="proj-thumb p3"><DiPython style={{fontSize:'3.5rem',color:'#3776AB'}}/></div>
              <div className="proj-body">
                <h3>Minería de datos — Google Colab</h3>
                <p>Análisis exploratorio y minería de datos con Python en Google Colab. Incluye limpieza de datos, visualizaciones y extracción de patrones con Pandas y Matplotlib.</p>
                <div className="proj-tools">
                  <span className="tag"><DiPython style={{verticalAlign:'middle'}}/>Python</span>
                  <span className="tag">Pandas</span>
                  <span className="tag">Matplotlib</span>
                  <span className="tag">Google Colab</span>
                </div>
                <div className="proj-links">
                  <a href="https://github.com/BigDarkness3232/Mineria-de-datos" target="_blank" rel="noreferrer" className="proj-link"><FaGithub style={{verticalAlign:'middle',marginRight:4}}/>GitHub</a>
                  <a href="https://colab.research.google.com/drive/1Bmd8ysyQNBotIsibvOZU6HtdOLCxJWt2?usp=sharing" target="_blank" rel="noreferrer" className="proj-link"><DiPython style={{verticalAlign:'middle',marginRight:4}}/>Ver notebook</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <div className="bg-alt" id="contacto">
        <div className="inner">
          <div className="section-tag">06 · Contacto</div>
          <div className="section-title">Trabajemos <span>juntos</span></div>
          <div className="divider"></div>
          <div className="contact-grid">
            <div className="contact-info">
              <p>¿Tienes un proyecto de datos en mente? Estoy disponible para colaborar en análisis, dashboards, integraciones o modelos de datos.</p>
              <div className="contact-links">
                <div className="contact-item">
                  <div className="contact-icon"><SiGmail style={{color:'#EA4335',fontSize:'1.2rem'}}/></div>
                  <span style={{color:'var(--muted)'}}>freddycardenas002@gmail.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><FaLinkedin style={{color:'#0A66C2',fontSize:'1.2rem'}}/></div>
                  <a href="https://www.linkedin.com/in/freddy-alejandro-cardenas-romero" target="_blank" rel="noreferrer" style={{color:'var(--accent2)'}}>Freddy Cárdenas</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><FaWhatsapp style={{color:'#25D366',fontSize:'1.2rem'}}/></div>
                  <a href="https://wa.me/56999254350" target="_blank" rel="noreferrer" style={{color:'var(--accent2)'}}>+569 99254350</a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" name="name" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="from_email" placeholder="tu@email.com" required />
                </div>
                <div className="form-group">
                  <label>Mensaje</label>
                  <textarea name="message" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
                </div>
                <button className="btn-send" type="submit" disabled={status === 'sending'}>
                  {status === 'idle' && 'Enviar mensaje '}
                  {status === 'sending' && 'Enviando...'}
                  {status === 'success' && '✅ Mensaje enviado'}
                  {status === 'error' && '❌ Error al enviar'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <p>© 2026 · Freddy Alejandro Cárdenas Romero · Ingeniero en Informática</p>
      </footer>
    </>
  )
}

export default App