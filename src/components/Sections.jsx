import { Star, MapPin, Clock, Package, CreditCard, Smartphone, Camera, Utensils, Lightbulb, Croissant, Pizza, CakeSlice, Info, X } from 'lucide-react';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const Loader = () => (
  <div className="loader" id="loader">
    <div className="loader-panel" id="loaderLeft">
      <span className="loader-word" id="lwOttimo">OTTIMO</span>
    </div>
    <div className="loader-panel" id="loaderRight">
      <span className="loader-word" id="lwBakery">BAKERY</span>
    </div>
    <div className="loader-line" id="loaderLine"></div>
    <span className="loader-sub" id="loaderSub">Pastelería Artesanal · Madrid</span>
  </div>
);

export const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    const label = document.getElementById('cursorLabel');
    if (!cursor || !ring || !label) return;

    let mx = 0, my = 0;
    const onMouseMove = (e) => {
      mx = e.clientX; my = e.clientY;
      gsap.to(cursor, { x: mx, y: my, duration: .1 });
      gsap.to(ring, { x: mx, y: my, duration: .45, ease: 'power2.out' });
      gsap.to(label, { x: mx, y: my, duration: .4 });
    };

    document.addEventListener('mousemove', onMouseMove);

    const hoverEls = 'a, button, .carta-item, .product-card, [onclick], .h-scroll-wrapper';
    const onMouseEnter = (e) => {
      if (e.target.closest('.h-scroll-wrapper')) {
        label.textContent = 'Desliza';
      } else {
        label.textContent = 'Ver';
      }
      gsap.to(ring, { scale: 2.2, opacity: .4, duration: .3 });
      gsap.to(label, { opacity: 1, duration: .2 });
    };
    const onMouseLeave = () => {
      gsap.to(ring, { scale: 1, opacity: .6, duration: .3 });
      gsap.to(label, { opacity: 0, duration: .2 });
    };

    const attachEvents = () => {
      document.querySelectorAll(hoverEls).forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    };

    attachEvents();
    // Re-attach after a small delay to handle dynamic elements
    setTimeout(attachEvents, 1000);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll(hoverEls).forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <div className="cursor-label" id="cursorLabel">Ver</div>
    </>
  );
};

export const Nav = () => {
  const toggleMob = () => {
    document.getElementById('mobMenu').classList.toggle('open');
  };

  const closeMob = () => {
    document.getElementById('mobMenu').classList.remove('open');
  };

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('nav');
      if (nav) nav.classList.toggle('solid', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="mob-menu" id="mobMenu">
        <button className="mob-menu-close" onClick={closeMob} aria-label="Cerrar menú">
          <X size={28} strokeWidth={1.5} />
        </button>
        <a href="#productos" onClick={closeMob}>Productos</a>
        <a href="#nosotros" onClick={closeMob}>Nosotros</a>
        <a href="#carta" onClick={closeMob}>Pedidos</a>
        <a href="#local" onClick={closeMob}>Local</a>
      </div>
      <nav className="nav-index" id="nav">
        <Link to="/" className="nav-logo">
          OTTIMO BAKERY
          <em>Pastelería Italiana · Madrid</em>
        </Link>
        <ul className="nav-links">
          <li><a href="#productos">Productos</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#carta">Pedidos</a></li>
          <li><a href="#local">Local</a></li>
        </ul>
        <div className="nav-actions">
          <Link to="/carta" className="nav-pill">Pedir Ahora</Link>
          <div className="hamburger" id="hamburger" onClick={toggleMob}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-text">IT</div>
      <div className="hero-left">
        <div className="hero-tag"><span className="hero-tag-line"></span>Villa de Vallecas · Madrid</div>
        <h1 className="hero-title" id="heroT1">OTTIMO</h1>
        <p className="hero-title-sub" id="heroT2">Bakery</p>
        <p className="hero-desc" id="heroDesc">
          Focaccias, brunch y pastelería artesanal italiana hecha a mano, cada día, con ingredientes de primera calidad y recetas del sur de Italia.
        </p>
        <div className="hero-actions" id="heroActions">
          <Link to="/carta" className="btn btn-dark">Realizar pedido</Link>
          <a href="#local" className="btn btn-outline">Visítanos</a>
        </div>
        <div className="hero-stats" id="heroStats">
          <div>
            <div className="hero-stat-num"><span id="sn1">0</span>+</div>
            <div className="hero-stat-label">Reseñas Google <span style={{ display: "inline-flex", gap: "2px", marginLeft: "4px" }}><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></span></div>
          </div>
          <div>
            <div className="hero-stat-num"><span id="sn2">0</span>%</div>
            <div className="hero-stat-label">Artesanal</div>
          </div>
          <div>
            <div className="hero-stat-num"><span id="sn3">0</span>+</div>
            <div className="hero-stat-label">Recetas italianas</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-wrap" id="heroImg">
          <img src="/assets/focaccia_10.jpg" alt="Focaccia artesanal Ottimo Bakery" />
        </div>
        <div className="hero-float-badge" id="heroBadge">
          <strong><Star size={24} fill="currentColor" style={{ display: "inline", marginBottom: "-4px" }} /> 5</strong>
          <span>Google Reviews</span>
        </div>
        <div className="hero-float-tag" id="heroTag">Hecho a mano <MapPin size={12} style={{ display: "inline", marginLeft: "4px", verticalAlign: "middle" }} /></div>
      </div>
      <div className="hero-scroll" id="heroScroll">
        <div className="hero-scroll-track"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export const Ticker = () => {
  return (
    <div className="ticker">
      <div className="ticker-track" id="tickerTrack">
        {[...Array(2)].map((_, j) => (
          <React.Fragment key={j}>
            <span className="ticker-item">Focaccia Pugliesa <span className="ticker-dot"></span></span>
            <span className="ticker-item">Pastelería Artesanal <span className="ticker-dot"></span></span>
            <span className="ticker-item">Brunch del Finde <span className="ticker-dot"></span></span>
            <span className="ticker-item">Tartas por Encargo <span className="ticker-dot"></span></span>
            <span className="ticker-item">Entrega a Domicilio <span className="ticker-dot"></span></span>
            <span className="ticker-item">Ingredientes de Primera Calidad <span className="ticker-dot"></span></span>
            <span className="ticker-item">Sabor Auténtico Italiano <span className="ticker-dot"></span></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};



export const Products = () => {
  return (
    <section className="products" id="productos">
      <div className="products-intro">
        <span className="section-tag">Lo que hacemos</span>
        <h2 className="section-title">Nuestros Productos</h2>
        <p>Todo elaborado a mano, cada día en nuestro local. Calidad que se nota en cada bocado.</p>
      </div>
      <div className="products-grid">

        <div className="product-card">
          <img src="/assets/focaccia_main.jpg" alt="Focaccias gourmet" />
          <div className="product-card-overlay">
            <p className="product-card-tag">Producto Estrella</p>
            <h3 className="product-card-name">Focaccia Gourmet</h3>
            <p className="product-card-desc">Masa pugliesa de fermentación lenta con rellenos gourmet. Mortazza & pistacho, jamón & setas, exótica con gambas...</p>
          </div>
        </div>

        <div className="product-card">
          <img src="/assets/brunch.jpg" alt="Brunch artesanal" />
          <div className="product-card-overlay">
            <p className="product-card-tag">Fines de semana</p>
            <h3 className="product-card-name">Brunch Box</h3>
            <p className="product-card-desc">Brioche relleno, focaccia clásica, croissants de crema, tenerina de chocolate, fruta y queso. El plan perfecto del finde.</p>
          </div>
        </div>

        <div className="product-card">
          <img src="/assets/tarta_chocolate.jpg" alt="Tartas artesanales" />
          <div className="product-card-overlay">
            <p className="product-card-tag">Para eventos</p>
            <h3 className="product-card-name">Tartas Artesanales</h3>
            <p className="product-card-desc">Desde Tentación al Cacao hasta Tarta Alegría. 13 tartas distintas para tus celebraciones especiales.</p>
          </div>
        </div>

        <div className="product-card">
          <img src="/assets/tiramisu.jpg" alt="Tiramisú casero" />
          <div className="product-card-overlay">
            <p className="product-card-tag">Dulces italianos</p>
            <h3 className="product-card-name">Tiramisú Casero</h3>
            <p className="product-card-desc">Auténtico tiramisú con savoiardi, mascarpone, café y cacao. Receta tradicional italiana.</p>
          </div>
        </div>

        <div className="product-card">
          <img src="/assets/croissant.jpg" alt="Croissant artesanal" />
          <div className="product-card-overlay">
            <p className="product-card-tag">Bollería italiana</p>
            <h3 className="product-card-name">Bollería Artesanal</h3>
            <p className="product-card-desc">Croissants, brioches, cornetti y más. Recién horneados, con ingredientes de primera calidad.</p>
          </div>
        </div>

        <div className="product-card">
          <img src="/assets/macarons.jpg" alt="Macarons de pistacho" />
          <div className="product-card-overlay">
            <p className="product-card-tag">Pastelería fina</p>
            <h3 className="product-card-name">Pastelería Fina</h3>
            <p className="product-card-desc">Macarons de pistacho ibérico, crostata de pera, zeppole, tenerina de chocolate y más delicias.</p>
          </div>
        </div>

        <div className="product-card">
          <img src="/assets/tarta_evento.jpg" alt="Tartas para eventos especiales" />
          <div className="product-card-overlay">
            <p className="product-card-tag">Por encargo</p>
            <h3 className="product-card-name">Tartas de Encargo</h3>
            <p className="product-card-desc">¿Buscas una tarta especial para tu evento? Diseño personalizado, ingredientes de calidad, recogida o entrega.</p>
          </div>
        </div>

        <div className="product-cta-card">
          <h3>¿Lo quieres todo?</h3>
          <p>Pásate por nuestro local y disfruta de la carta o haz tu pedido online.</p>
          <Link to="/carta" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Ver Carta de Pedidos</Link>
        </div>

      </div>
    </section>
  );
};

export const Historia = () => {
  return (
    <section className="historia" id="nosotros">
      <div className="historia-bg-word">OTTIMO</div>
      <div className="historia-grid">
        <div>
          <span className="section-tag">Nuestra Historia</span>
          <blockquote className="historia-quote">
            "Nací en el sur de Italia en una familia de <span>apasionados por la cocina casera.</span>"
          </blockquote>
          <div className="historia-text">
            <p>Soy <strong>Matteo</strong>. Viví en Dublín, Lisboa, Buenos Aires y ahora en Madrid. De cada ciudad me llevé sus influencias, pero las raíces son siempre las mismas: las recetas de mi tierra, el aceite de oliva virgen extra, la fermentación lenta, el cariño en cada elaboración.</p>
            <p>En <strong>Ottimo Bakery</strong> no somos un restaurante, somos un rincón. Un pedacito de Apulia en Villa de Vallecas donde cada día horneamos focaccias pugliesas, brioches rellenos y tartas artesanales con ingredientes de primera calidad.</p>
            <p><strong>+190 clientes</strong> lo dicen: se nota el mimo, se nota la pasión, se nota que esto lo hace alguien que ama lo que hace.</p>
            <div className="historia-facts">
              <div className="historia-fact">
                <div className="historia-fact-num" data-target="190" id="hn1">0</div>
                <div className="historia-fact-label">Reseñas <span style={{ display: "inline-flex", gap: "2px", marginLeft: "4px" }}><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></span></div>
              </div>
              <div className="historia-fact">
                <div className="historia-fact-num" data-target="100" id="hn2">0</div>
                <div className="historia-fact-label">% Artesanal</div>
              </div>
              <div className="historia-fact">
                <div className="historia-fact-num" data-target="13" id="hn3">0</div>
                <div className="historia-fact-label">Tartas únicas</div>
              </div>
            </div>
          </div>
          <p className="historia-sig">— Matteo</p>
        </div>
        <div className="historia-img-wrap" id="histImgWrap">
          <div className="historia-img-main" id="histImgMain">
            <img src="/assets/local.jpg" alt="Local de Ottimo Bakery en Villa de Vallecas, Madrid" />
          </div>
          <div className="historia-img-accent" id="histImgAccent">
            <img src="/assets/matteo.jpg" alt="Matteo, fundador de Ottimo Bakery" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews-header">
        <span className="section-tag">Lo que dicen</span>
        <div className="reviews-stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
        <h2 className="section-title">+190 reseñas<br /><em>de cinco estrellas</em></h2>
      </div>
      <div className="reviews-grid">
        <div className="review-card">
          <div className="review-stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
          <p className="review-text">"Sus focaccias son, sin duda, de las mejores que he probado: masa perfecta, ingredientes de calidad y ese toque casero que te transporta directamente a Italia con cada bocado."</p>
          <div className="review-author">Michael R.</div>
        </div>
        <div className="review-card">
          <div className="review-stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
          <p className="review-text">"Matteo es un mago del buen gusto. He probado el roscón, pizzas, pan, bollería y todo es una maravilla. Repetiremos las veces que sea necesario."</p>
          <div className="review-author">Daniel B.</div>
        </div>
        <div className="review-card">
          <div className="review-stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
          <p className="review-text">"Para mí, desde que lo conozco, es mi sitio de confianza. Echaba muchísimo de menos un auténtico italiano. Lo único malo es que no lo conocí antes."</p>
          <div className="review-author">Simona M.</div>
        </div>
        <div className="review-card">
          <div className="review-stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
          <p className="review-text">"Han sido muy amables, comentándonos todo lo que tenían. Se nota la calidad y el mimo que le ponen a cada producto. ¡Ya estamos pensando cuándo volver!"</p>
          <div className="review-author">Marta H.</div>
        </div>
        <div className="review-card">
          <div className="review-stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
          <p className="review-text">"Pero lo que realmente hace especial el lugar es Mateo. Siempre te recibe con una sonrisa, es súper atento y se toma el tiempo de explicarte cada opción."</p>
          <div className="review-author">Fernando R.</div>
        </div>
        <div className="review-card">
          <div className="review-stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
          <p className="review-text">"Atención personalizada, dedicada y con alma. ¡Increíble todo lo que haces! Los dulces, las pizzas y las focaccias están riquísimos, con calidad superior y garantizada."</p>
          <div className="review-author">Coral G. &amp; Lei</div>
        </div>
      </div>
      <div className="reviews-cta">
        <a href="https://maps.app.goo.gl/xaRLusbFiAMQLCpS9" target="_blank" rel="noreferrer" className="btn btn-forest">Ver todas las reseñas en Google</a>
      </div>
    </section>
  );
};

export const CartaPreview = () => {
  return (
    <section className="carta" id="carta">
      <div className="carta-bg-num">3</div>
      <div className="carta-header">
        <span className="section-tag">Pedidos a la Carta</span>
        <h2 className="section-title">Elige tu<br /><em>experiencia</em></h2>
        <p>Tres propuestas para cada ocasión. Todos con entrega a domicilio incluida.</p>
      </div>

      <div className="carta-timeline">
        <div className="carta-timeline-line"></div>
        <div className="carta-timeline-steps">
          <div className="carta-timeline-step">
            <div className="cts-num">1</div>
            <h4>Elige tu menú</h4>
            <p>Explora la carta y elige entre el Brunch Box, Focaccias Gourmet o Tartas Artesanales.</p>
          </div>
          <div className="carta-timeline-step">
            <div className="cts-num">2</div>
            <h4>Escríbenos</h4>
            <p>Contacta por WhatsApp o Instagram con tu dirección y fecha. Te confirmamos en minutos.</p>
          </div>
          <div className="carta-timeline-step">
            <div className="cts-num">3</div>
            <h4>Recibe en casa</h4>
            <p>Te lo llevamos a la dirección indicada en el horario acordado. ¡Disfruta!</p>
          </div>
        </div>
      </div>
      <div className="carta-grid">
        <Link to="/carta#brunch" className="carta-item">
          <span className="carta-item-num">BB</span>
          <div className="carta-icon"><img src="/assets/brunch_icon.png" alt="Brunch Icon" style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} /></div>
          <p className="carta-sub">Sábados y Domingos</p>
          <h3 className="carta-name">Brunch Box</h3>
          <p className="carta-desc">La experiencia completa del brunch italiano. Brioche relleno, focaccia, croissants, tenerina y fruta. Una caja, todo incluido, entrega a tu puerta.</p>
          <div className="carta-price">45€ <span style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.35)' }}>+ IVA · entrega incl.</span></div>
          <span className="carta-arrow">Ver menú →</span>
        </Link>
        <Link to="/carta#focaccias" className="carta-item">
          <span className="carta-item-num">FG</span>
          <div className="carta-icon"><img src="/assets/focaccia.png" alt="Focaccia Icon" style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} /></div>
          <p className="carta-sub">Para 2-3 personas</p>
          <h3 className="carta-name">Focaccias Gourmet</h3>
          <p className="carta-desc">7 variedades de focaccia pugliesa con rellenos premium. Ingredientes frescos, masa artesanal, fermentación lenta. Pedido mínimo 40€, 24h de antelación.</p>
          <div className="carta-price">Desde 18€</div>
          <span className="carta-arrow">Ver focaccias →</span>
        </Link>
        <Link to="/carta#tartas" className="carta-item">
          <span className="carta-item-num">TA</span>
          <div className="carta-icon"><img src="/assets/cake.png" alt="Cake Icon" style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} /></div>
          <p className="carta-sub">Eventos y celebraciones</p>
          <h3 className="carta-name">Tartas Artesanales</h3>
          <p className="carta-desc">13 tartas únicas para tus momentos especiales. Desde Lemon Pie hasta Tarta Alegría. Encargo personalizable, diseño a medida, sorprende a quien quieras.</p>
          <div className="carta-price">Desde 25€</div>
          <span className="carta-arrow">Ver tartas →</span>
        </Link>
      </div>
      <div className="carta-bottom">
        <Link to="/carta" className="btn btn-white" style={{ fontSize: '.82rem', padding: '1rem 2.5rem' }}>Realizar mi pedido</Link>
      </div>
    </section>
  );
};


export const Galeria = () => {
  const trackRef = React.useRef(null);

  const items = [
    { type: 'img', src: '/assets/brunch_2.jpg', alt: 'Brunch Ottimo' },
    { type: 'video', src: '/assets/focaccia_video.mp4' },
    { type: 'img', src: '/assets/tiramisu_3.jpg', alt: 'Tiramisu Clásico' },
    { type: 'video', src: '/assets/cookies_video.mp4' },
    { type: 'img', src: '/assets/tarta_evento.jpg', alt: 'Torta Artesanal' },
    { type: 'video', src: '/assets/showreel_video.mp4' },
    { type: 'img', src: '/assets/focaccia_3.jpg', alt: 'Focaccia Gourmet' },
    { type: 'img', src: '/assets/tarta_chocolate.jpg', alt: 'Tarta de Chocolate' },
    { type: 'img', src: '/assets/focaccia_8.jpg', alt: 'Focaccia Gourmet' },
    { type: 'video', src: '/assets/merienda_video.mp4' },
    { type: 'img', src: '/assets/quiche.jpg', alt: 'Quiche Mediterránea' }
  ];

  useEffect(() => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;
    
    const animation = gsap.to(track, {
      x: -totalWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
      onReverseComplete: () => animation.totalTime(animation.rawTime() + animation.duration())
    });

    const onEnter = () => gsap.to(animation, { timeScale: 0, duration: 0.5 });
    const onLeave = () => gsap.to(animation, { timeScale: 1, duration: 0.5 });

    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);

    return () => {
      animation.kill();
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const renderItems = (itemsList) => itemsList.map((item, i) => (
    <div className="galeria-item" key={i}>
      {item.type === 'img' ? (
        <img src={item.src} alt={item.alt} />
      ) : (
        <video autoPlay muted loop playsInline src={item.src} />
      )}
      <div className="galeria-overlay"></div>
    </div>
  ));

  return (
    <section className="galeria">
      <div className="galeria-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <span className="section-tag">Ottimo en redes</span>
          <h2 className="section-title">Momentos <em>Artigianale</em></h2>
        </div>
      </div>
      
      <div className="galeria-carousel">
        <div className="galeria-track" ref={trackRef}>
          {renderItems(items)}
          {renderItems(items)}
        </div>
      </div>
    </section>
  );
};

export const Local = () => {
  return (
    <section className="local" id="local">
      <div className="local-inner">
        <div className="local-info">
          <span className="section-tag">Visítanos</span>
          <h2 className="section-title">Nuestro local<br />en <em>Vallecas</em></h2>
          <div className="local-items">
            <div className="local-item">
              <div className="local-icon"><MapPin size={20} /></div>
              <div className="local-item-content">
                <p className="local-item-label">Dirección</p>
                <p className="local-item-val">C. Eulogio Pedrero, 36, Villa de Vallecas<br />28031 Madrid</p>
              </div>
            </div>
            <div className="local-item">
              <div className="local-icon"><Clock size={20} /></div>
              <div className="local-item-content">
                <p className="local-item-label">Horario del local</p>
                <div className="local-schedule">
                  <div className="schedule-row">
                    <span className="day">Lunes a Viernes</span>
                    <span className="time">8:30–14:30 <span className="sep">·</span> 17:00–20:30</span>
                  </div>
                  <div className="schedule-row">
                    <span className="day">Sábados</span>
                    <span className="time">9:00–14:30</span>
                  </div>
                  <div className="schedule-row closed">
                    <span className="day">Domingos</span>
                    <span className="time">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="local-item">
              <div className="local-icon"><Package size={20} /></div>
              <div className="local-item-content">
                <p className="local-item-label">Servicio</p>
                <p className="local-item-val">Compra en local · Delivery a domicilio<br />Entrega incluida en Madrid</p>
              </div>
            </div>
          </div>
          <div className="local-btns">
            <a href="https://maps.app.goo.gl/bCFk3Kf6iSzAiYs37" target="_blank" rel="noreferrer" className="btn btn-forest">Ver en Google Maps</a>
          </div>
        </div>
        <div className="local-map" id="localMap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.636500504376!2d-3.6242566241749823!3d40.372583671446634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4225c0daf8bee1%3A0xbe8a07eac74fe2b6!2sOttimo%20Bakery!5e0!3m2!1ses!2ses!4v1778011053126!5m2!1ses!2ses" allowFullScreen loading="lazy" title="Ottimo Bakery Madrid"></iframe>
        </div>
      </div>
    </section>
  );
};

export const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <h2>Tu próximo plan<br /><em>italiano</em> te espera.</h2>
      <p>Escríbenos y te lo preparamos. Entrega a domicilio incluida. Sin complicaciones.</p>
      <div className="cta-banner-btns">
        <a href="https://wa.me/34645390276" target="_blank" rel="noreferrer" className="btn btn-forest"><img src="/assets/whatsapp.png" alt="" style={{ width: '16px', height: '16px', marginRight: '6px', display: 'inline', verticalAlign: 'text-bottom', filter: 'brightness(0) invert(1)' }} /> WhatsApp</a>
        <a href="https://www.instagram.com/ottimo.bakery/" target="_blank" rel="noreferrer" className="btn btn-dark"><img src="/assets/instagram.png" alt="" style={{ width: '16px', height: '16px', marginRight: '6px', display: 'inline', verticalAlign: 'text-bottom', filter: 'brightness(0) invert(1)' }} /> Instagram</a>
        <Link to="/carta" className="btn btn-white-outline">Ver la Carta</Link>
      </div>
    </section>
  );
};

export const FooterIndex = () => {
  return (
    <footer className="footer-index">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            OTTIMO BAKERY
            <span>Pastelería Italiana · Madrid</span>
          </div>
          <p>Focaccias, brunch y pastelería artesanal italiana en Villa de Vallecas. Hecho a mano, con amor y los mejores ingredientes.</p>
        </div>
        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#carta">Pedidos</a></li>
            <li><a href="#local">Local</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://wa.me/34645390276" target="_blank" rel="noreferrer"><img src="/assets/whatsapp.png" alt="" style={{ width: '16px', height: '16px', marginRight: '6px', display: 'inline', verticalAlign: 'text-bottom' }} /> WhatsApp</a></li>
            <li><a href="https://www.instagram.com/ottimo.bakery/" target="_blank" rel="noreferrer"><img src="/assets/instagram.png" alt="" style={{ width: '16px', height: '16px', marginRight: '6px', display: 'inline', verticalAlign: 'text-bottom' }} /> Instagram</a></li>
            <li><a href="https://maps.app.goo.gl/bCFk3Kf6iSzAiYs37" target="_blank" rel="noreferrer"><MapPin size={16} style={{ marginRight: "6px", display: "inline", verticalAlign: "text-bottom" }} /> C. Eulogio Pedrero, 36</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Ottimo Bakery · Todos los derechos reservados</span>
        <div className="footer-social">
          <a href="https://www.instagram.com/ottimo.bakery/" target="_blank" rel="noreferrer"><img src="/assets/instagram.png" alt="" style={{ width: '18px', height: '18px', opacity: '0.8' }} /></a>
          <a href="https://wa.me/34645390276" target="_blank" rel="noreferrer"><img src="/assets/whatsapp.png" alt="" style={{ width: '18px', height: '18px', opacity: '0.8' }} /></a>
          <a href="https://maps.app.goo.gl/bCFk3Kf6iSzAiYs37" target="_blank" rel="noreferrer"><MapPin size={16} /></a>
        </div>
      </div>
    </footer>
  );
};
