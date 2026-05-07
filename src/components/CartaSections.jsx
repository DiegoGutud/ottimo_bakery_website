import { Star, MapPin, Clock, Package, CreditCard, Smartphone, Camera, Utensils, Lightbulb, Info, Croissant, CakeSlice, Truck, Pizza, Cookie, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const NavCarta = () => {
  const [active, setActive] = useState('brunch');

  useEffect(() => {
    const sections = ['brunch','focaccias','tartas'];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // We use a slightly more complex check to ensure the section is actually visible at the top
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setActive(entry.target.id);
        }
      });
    }, { 
      threshold: [0.1, 0.5],
      rootMargin: '-66px 0px -70% 0px' // Match the navbar height
    });
    
    sections.forEach(s => {
      const el = document.getElementById(s);
      if(el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setActive(id); // Manually set active on click for immediate feedback
    const el = document.getElementById(id);
    if (el) {
      const offset = 66; // Precise offset for the fixed header height
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="nav-carta">
      <div className="nav-left">
        <Link to="/" className="back-link">← Inicio</Link>
        <span className="nav-sep">/</span>
        <span className="nav-logo">La Carta</span>
      </div>
      <div className="nav-tabs">
        <button className={`nav-tab ${active === 'brunch' ? 'active' : ''}`} onClick={() => scrollToSection('brunch')}>Brunch</button>
        <button className={`nav-tab ${active === 'focaccias' ? 'active' : ''}`} onClick={() => scrollToSection('focaccias')}>Focaccias</button>
        <button className={`nav-tab ${active === 'tartas' ? 'active' : ''}`} onClick={() => scrollToSection('tartas')}>Tartas</button>
      </div>
      <div className="nav-right">
        <a href="https://wa.me/34645390276" target="_blank" rel="noreferrer" className="btn-sm btn-sm-forest"><img src="/assets/whatsapp.png" alt="WhatsApp" style={{width:'16px', height:'16px', marginRight:'6px', display:'inline', verticalAlign:'text-bottom', filter:'brightness(0) invert(1)'}} /> Pedir</a>
      </div>
    </nav>
  );
};

export const CartaHero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="carta-hero" id="top">
      <div className="carta-hero-bg" aria-hidden="true">C</div>
      <div>
        <p className="carta-hero-tag">Ottimo Bakery · Madrid</p>
        <h1 className="carta-hero-title" id="ctHero">Nuestra<br/><em>Carta</em></h1>
        <p className="carta-hero-desc">Todo artesanal, todo con amor. Elige tu experiencia italiana y pídela a domicilio en Madrid.</p>
      </div>
      <div className="carta-hero-right">
        <div className="carta-hero-cards" id="ctCards">
          <div className="hero-mini-card bc" onClick={() => scrollToSection('brunch')}>
            <div className="mini-icon"><img src="/assets/brunch_icon_dark.png" alt="Brunch" style={{width:'28px', height:'28px', objectFit:'contain'}} /></div>
            <div className="mini-name">Brunch Box</div>
            <div className="mini-price">45€ + IVA</div>
          </div>
          <div className="hero-mini-card bf" onClick={() => scrollToSection('focaccias')}>
            <div className="mini-icon"><img src="/assets/focaccia_dark.png" alt="Focaccias" style={{width:'28px', height:'28px', objectFit:'contain'}} /></div>
            <div className="mini-name">Focaccias</div>
            <div className="mini-price">Desde 18€</div>
          </div>
          <div className="hero-mini-card bt" onClick={() => scrollToSection('tartas')}>
            <div className="mini-icon"><img src="/assets/cake_dark.png" alt="Tartas" style={{width:'28px', height:'28px', objectFit:'contain'}} /></div>
            <div className="mini-name">Tartas</div>
            <div className="mini-price">Desde 25€</div>
          </div>
        </div>
      </div>
    </header>
  );
};



export const BrunchSection = () => {
  return (
    <section className="menu-section" id="brunch">
      <div className="menu-section-header">
        <span className="ms-eyebrow">Sábados y Domingos · Entrega incluida</span>
        <h2 className="ms-title">Brunch <em>Box</em></h2>
        <p className="ms-desc">La experiencia completa del brunch italiano. Una caja con todo lo que necesitas para un finde perfecto, directo a tu puerta.</p>
      </div>
      <div className="brunch-layout">
        <div className="brunch-box-card" id="brunchCard">
          <div className="brunch-box-img">
            <img src="/assets/brunch_3.png" alt="Brunch Box Ottimo Bakery" />
          </div>
          <div className="brunch-box-body">
            <div className="brunch-price-chip">
              <strong>45€</strong><span>+ IVA</span>
            </div>
            <h3 className="brunch-box-title">¿Qué incluye?</h3>
            <p className="brunch-box-tag">Todo hecho a mano · Delivery incluido</p>
            <ul className="brunch-includes">
              <li>Un brioche relleno a elegir (ver opciones →)</li>
              <li>Una focaccia clásica recién horneada</li>
              <li>Dos croissants (crema pastelera o dulce de leche)</li>
              <li>Dos tenerinas de chocolate</li>
              <li>Fruta, queso y nueces</li>
            </ul>
            <p className="brunch-note"><Truck size={24} style={{display:"inline", verticalAlign:"middle", marginRight:"6px"}}/> <strong>Entrega sábados y domingos.</strong> Pedidos entre semana. Bizum, efectivo o PayPal.</p>
          </div>
        </div>

        <div>
          <h3 className="brunch-variants-title">Opciones de Brioche</h3>
          <div className="variant-cards">
            <div className="variant-card" id="vc1">
              <div className="variant-n">01</div>
              <h4>Clásico Mixto</h4>
              <p>Mitad con mayonesa, lechuga, jamón y mozzarella. Otra mitad con queso crema, salmón y aguacate. El equilibrio perfecto.</p>
            </div>
            <div className="variant-card" id="vc2">
              <div className="variant-n">02</div>
              <h4>Bufala Premium</h4>
              <p>Brioche relleno con mayonesa, lechuga, jamón y mozzarella di bufala. La versión premium para los más exigentes.</p>
            </div>
          </div>

          <div className="brunch-cta-box">
            <p>Pedidos entre semana para recibir tu brunch el sábado o domingo. Indica nombre, dirección, WhatsApp, opción de brioche y fecha de entrega.</p>
            <div className="cta-row">
              <a href="#como-pedir" className="btn-full btn-dark">Realizar mi pedido</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FocacciasSection = () => {
  return (
    <section className="menu-section" id="focaccias">
      <div className="menu-section-header">
        <span className="ms-eyebrow">Para 2-3 personas · Pedido mín. 40€ · 24h antelación</span>
        <h2 className="ms-title">Focaccias <em>Gourmet</em></h2>
        <p className="ms-desc">La focaccia pugliese es una obra maestra de la panadería italiana. Masa de fermentación lenta, aceite de oliva virgen extra, ingredientes premium.</p>
      </div>

      <div className="focaccia-alert">
        <Clock size={24} style={{color:'var(--peach)', flexShrink:0}} />
        <span>Por la calidad de nuestros ingredientes y la elaboración artesanal, aceptamos pedidos a partir de <strong>40€</strong> con <strong>24h de antelación</strong>. Entrega a domicilio incluida.</span>
      </div>

      <div className="focaccia-intro-box">
        Preparada con harina de calidad, aceite de oliva virgen extra y <em>fermentación lenta</em>, nuestra focaccia es pura esencia mediterránea. Perfecta para compartir. <strong>Cada focaccia es para 2 personas (o casi 3).</strong>
      </div>

      <div className="focaccia-grid">
        <div className="fc-card" id="fc1">
          <div className="fc-img"><img src="/assets/focaccia_5.jpg" alt="Mortazza y Pistacho" /></div>
          <div className="fc-body">
            <div>
              <div className="fc-name">Mortazza y Pistacho</div>
              <div className="fc-desc">Focaccia blanca, salsa de pistacho y albahaca, mortadela, burrata y mucho pistacho más.</div>
            </div>
            <div className="fc-footer">
              <span className="fc-price">30€</span>
              <span className="fc-persons">2-3 pers.</span>
            </div>
          </div>
        </div>
        <div className="fc-card" id="fc2">
          <div className="fc-img"><img src="/assets/focaccia_9.jpg" alt="Jamón y Setas" /></div>
          <div className="fc-body">
            <div>
              <div className="fc-name">Jamón y Setas</div>
              <div className="fc-desc">Masa de calabaza, mozzarella, queso, setas, jamón, crema de albahaca y pistacho.</div>
            </div>
            <div className="fc-footer">
              <span className="fc-price">30€</span>
              <span className="fc-persons">2-3 pers.</span>
            </div>
          </div>
        </div>
        <div className="fc-card" id="fc3">
          <div className="fc-img"><img src="/assets/focaccia_3.jpg" alt="Exótica" /></div>
          <div className="fc-body">
            <div>
              <div className="fc-name">Exótica</div>
              <div className="fc-desc">Mozzarella, burrata, tomate seco, gambas, pistacho y crema de albahaca.</div>
            </div>
            <div className="fc-footer">
              <span className="fc-price">30€</span>
              <span className="fc-persons">2-3 pers.</span>
            </div>
          </div>
        </div>
        <div className="fc-card" id="fc4">
          <div className="fc-img"><img src="/assets/focaccia_4.jpg" alt="Ibérica" /></div>
          <div className="fc-body">
            <div>
              <div className="fc-name">Ibérica</div>
              <div className="fc-desc">Queso tetilla, jamón ibérico y pimiento del piquillo. Italia y España en un bocado.</div>
            </div>
            <div className="fc-footer">
              <span className="fc-price">30€</span>
              <span className="fc-persons">2-3 pers.</span>
            </div>
          </div>
        </div>
        <div className="fc-card" id="fc5">
          <div className="fc-img"><img src="/assets/focaccia_7.png" alt="Del Bosque" /></div>
          <div className="fc-body">
            <div>
              <div className="fc-name">Del Bosque</div>
              <div className="fc-desc">Mucho queso italiano y boletus. Intensa, aromática, para amantes de los hongos.</div>
            </div>
            <div className="fc-footer">
              <span className="fc-price">28€</span>
              <span className="fc-persons">2-3 pers.</span>
            </div>
          </div>
        </div>
        <div className="fc-card" id="fc6">
          <div className="fc-img"><img src="/assets/focaccia_8.jpg" alt="Focaccia Rellena" /></div>
          <div className="fc-body">
            <div>
              <div className="fc-name">Focaccia Rellena</div>
              <div className="fc-desc">Blanca rellena de mozzarella, queso tetilla y cebolla. Un clásico argentino con alma italiana.</div>
            </div>
            <div className="fc-footer">
              <span className="fc-price">28€</span>
              <span className="fc-persons">2-3 pers.</span>
            </div>
          </div>
        </div>
        <div className="fc-card" id="fc7">
          <div className="fc-img"><img src="/assets/focaccia_6.png" alt="La Pugliese" /></div>
          <div className="fc-body">
            <div>
              <div className="fc-name">La Pugliese</div>
              <div className="fc-desc">Clásica con tomate, aceitunas, albahaca y mozzarellinas. La receta original del sur de Italia.</div>
            </div>
            <div className="fc-footer">
              <span className="fc-price">18€</span>
              <span className="fc-persons">Clásica</span>
            </div>
          </div>
        </div>
      </div>

      <div className="focaccia-postre">
        <span style={{fontSize:'1.3rem'}}><Cookie size={24} style={{display:"inline", verticalAlign:"middle", marginRight:"6px"}}/></span>
        <span>Completa tu pedido con un postre: <strong>tiramisú cremoso, tarta de chocolate o postre de pistacho.</strong> Solo 4€ la porción.</span>
      </div>

      <div className="foc-cta">
        <a href="#como-pedir" className="btn-full btn-dark">Realizar mi pedido</a>
      </div>
    </section>
  );
};

export const TartasSection = () => {
  return (
    <section className="menu-section" id="tartas">
      <div className="menu-section-header">
        <span className="ms-eyebrow">Elaboradas a mano · Para tus celebraciones</span>
        <h2 className="ms-title">Tartas para <em>Eventos</em></h2>
        <p className="ms-desc">13 tartas artesanales para endulzar tus momentos más especiales. Cada una elaborada con dedicación y los mejores ingredientes.</p>
      </div>

      <div className="tartas-grid">
        <div className="tarta-card" id="tc1">
          <div className="tarta-img"><img src="/assets/artisanal_cake_1.jpg" alt="Tentación al Cacao" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Tentación al Cacao y Caramelo</div>
            <p className="tarta-desc">Bizcocho al cacao, almíbar de caramelo, dulce de leche, ganache de chocolate blanco, capa de chocolate negro, merengue italiana y frambuesas.</p>
            <div className="tarta-footer"><span className="tarta-price">35€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc2">
          <div className="tarta-img"><img src="/assets/artisanal_cake_2.jpg" alt="Pasión de Higos" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Pasión de Higos</div>
            <p className="tarta-desc">Base de pastafrola, mermelada de higos, bizcocho con almíbar de higo y compota de higo con ganache de chocolate blanco.</p>
            <div className="tarta-footer"><span className="tarta-price">30€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc3">
          <div className="tarta-img"><img src="/assets/artisanal_cake_3.jpg" alt="Lemon Pie" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Lemon Pie</div>
            <p className="tarta-desc">Clásica tarta de lemon pie con mucho carácter y un sabor suave. Acidez y dulzor en perfecto equilibrio.</p>
            <div className="tarta-footer"><span className="tarta-price">30€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc4">
          <div className="tarta-img"><img src="/assets/artisanal_cake_4.jpg" alt="Chocotiramisú" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Chocotiramisú</div>
            <p className="tarta-desc">Pastafrola, dulce de leche, bizcocho al cacao con almíbar de café, crema de mascarpone y corona de dulce de leche.</p>
            <div className="tarta-footer"><span className="tarta-price">35€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc5">
          <div className="tarta-img"><img src="/assets/artisanal_cake_5.jpg" alt="La de Arándanos" /></div>
          <div className="tarta-body">
            <div className="tarta-name">La de Arándanos</div>
            <p className="tarta-desc">Pastafrola, mermelada de arándanos, bizcocho con almíbar de arándanos, ganache de chocolate blanco y ganache a la vainilla.</p>
            <div className="tarta-footer"><span className="tarta-price">30€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc6">
          <div className="tarta-img"><img src="/assets/artisanal_cake_6.png" alt="Tarta de Mascarpone" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Tarta de Mascarpone</div>
            <p className="tarta-desc">Bizcocho con almíbar de leche y naranja, mermelada de frutos rojos, crema al mascarpone y frambuesas.</p>
            <div className="tarta-footer"><span className="tarta-price">35€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc7">
          <div className="tarta-img"><img src="/assets/artisanal_cake_7.jpg" alt="Fresón" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Fresón</div>
            <p className="tarta-desc">Tarta de ricota con mermelada de fresa y fresas en rodaja sobre base de pastafrola de limón.</p>
            <div className="tarta-footer"><span className="tarta-price">28€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc8">
          <div className="tarta-img"><img src="/assets/artisanal_cake_8.png" alt="Tenerina al Dulce de Leche" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Tenerina al Dulce de Leche</div>
            <p className="tarta-desc">Base de tarta tenerina de chocolate negro, dulce de leche y merengue italiano. Crujiente por fuera.</p>
            <div className="tarta-footer"><span className="tarta-price">30€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc9">
          <div className="tarta-img"><img src="/assets/artisanal_cake_9.jpg" alt="Bizcocho Casi Healthy" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Bizcocho Casi Healthy</div>
            <p className="tarta-desc">Cacao y crema de cacahuete, sin azúcares añadidos (casi). Fruta del bosque y crema pastelera.</p>
            <div className="tarta-footer"><span className="tarta-price">30€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc10">
          <div className="tarta-img"><img src="/assets/artisanal_cake_10.png" alt="Tenerina" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Tenerina</div>
            <p className="tarta-desc">Tarta de chocolate puro. Sabor intenso, crujiente fuera y suave y húmeda por dentro. Un clásico.</p>
            <div className="tarta-footer"><span className="tarta-price">25€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc11">
          <div className="tarta-img"><img src="/assets/artisanal_cake_11.png" alt="Tarta de Ricota" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Tarta de Ricota y Frutos Rojos</div>
            <p className="tarta-desc">Pastafrola al limón con ricota y frutos rojos. Delicada, fresca, perfecta para cualquier ocasión.</p>
            <div className="tarta-footer"><span className="tarta-price">30€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc12">
          <div className="tarta-img"><img src="/assets/artisanal_cake_12.png" alt="Café Plus" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Café Plus</div>
            <p className="tarta-desc">Bizcocho de cacao y dulce de leche, almíbar al café, dulce de leche y ganache al café. Intensa.</p>
            <div className="tarta-footer"><span className="tarta-price">30€</span></div>
          </div>
        </div>
        <div className="tarta-card" id="tc13">
          <div className="tarta-img"><img src="/assets/tartas_encargo.jpg" alt="Tarta Alegría" /></div>
          <div className="tarta-body">
            <div className="tarta-name">Tarta Alegría <Sparkles size={24} style={{display:"inline", verticalAlign:"middle", marginRight:"6px"}}/></div>
            <p className="tarta-desc">Bizcocho de vainilla, almíbar naranja, frutos rojos, crema mascarpone, chocolate rojo, merengue bicolor de fresa y frambuesas.</p>
            <div className="tarta-footer"><span className="tarta-price">40€</span></div>
          </div>
        </div>
      </div>

      <div className="tartas-encargo-strip">
        <div>
          <h3 className="tec-title">¿Tarta especial para tu evento?</h3>
          <p className="tec-desc">Cumpleaños, aniversarios, celebraciones. Hablamos y creamos la tarta perfecta para tu ocasión. Diseño personalizado, tamaños a medida.</p>
          <div className="tec-btns">
            <a href="#como-pedir" className="btn-full btn-dark">Realizar mi pedido</a>
          </div>
        </div>
        <div className="tec-img">
          <img src="/assets/artisanal_cake_13.jpg" alt="Tartas especiales" />
        </div>
      </div>
    </section>
  );
};

export const OrderSection = () => {
  return (
    <section className="order-section" id="como-pedir" aria-label="Cómo pedir">
      <div className="order-inner">
        <div>
          <h2 className="order-title">Pedir es<br/><em>sencillo.</em></h2>
          <div className="order-note">
            <strong>Entrega a domicilio incluida.</strong><br/>Pago por Bizum, efectivo o PayPal.
          </div>
        </div>
        <div>
          <div className="order-steps">
            <div className="order-step">
              <div className="os-num">1</div>
              <div><p className="os-title">Lee la carta y elige</p><p className="os-desc">Revisa los productos y selecciona lo que quieres pedir.</p></div>
            </div>
            <div className="order-step">
              <div className="os-num">2</div>
              <div><p className="os-title">Escríbenos</p><p className="os-desc">Por WhatsApp o Instagram: nombre, dirección, WhatsApp, fecha y productos.</p></div>
            </div>
            <div className="order-step">
              <div className="os-num">3</div>
              <div><p className="os-title">Confirma y espera en casa</p><p className="os-desc">Te confirmamos por WhatsApp y te lo llevamos a tu puerta.</p></div>
            </div>
          </div>
          <div className="order-cta">
            <a href="https://wa.me/34645390276" target="_blank" rel="noreferrer" className="btn-full btn-forest"><img src="/assets/whatsapp.png" alt="" style={{width:'16px', height:'16px', marginRight:'6px', display:'inline', verticalAlign:'text-bottom', filter:'brightness(0) invert(1)'}} /> WhatsApp</a>
            <a href="https://www.instagram.com/ottimo.bakery/" target="_blank" rel="noreferrer" className="btn-full btn-dark"><img src="/assets/instagram.png" alt="" style={{width:'16px', height:'16px', marginRight:'6px', display:'inline', verticalAlign:'text-bottom', filter:'brightness(0) invert(1)'}} /> Instagram</a>
            <Link to="/" className="btn-back">← Volver al inicio</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FooterCarta = () => {
  return (
    <div className="footer-carta">
      <div className="footer-logo">OTTIMO BAKERY</div>
      <span className="footer-copy">© 2025 Ottimo Bakery · Villa de Vallecas, Madrid</span>
      <div className="footer-links">
        <a href="https://www.instagram.com/ottimo.bakery/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://wa.me/34645390276" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="https://maps.app.goo.gl/xaRLusbFiAMQLCpS9" target="_blank" rel="noreferrer">Google Maps</a>
      </div>
    </div>
  );
};
