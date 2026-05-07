import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useSeo from '../hooks/useSeo.js';
import {
  Loader,

  Nav,
  Hero,
  Ticker,
  Products,
  Historia,
  Reviews,
  CartaPreview,
  Galeria,
  Local,
  CtaBanner,
  FooterIndex
} from '../components/Sections.jsx';

export default function HomePage() {
  useSeo({
    title: 'Ottimo Bakery · Pastelería Italiana Artesanal en Madrid',
    description: 'Pastelería italiana artesanal en Villa de Vallecas, Madrid. Focaccias pugliesas, brunch box, tartas por encargo y bollería italiana hecha a mano. Pedidos a domicilio.',
    canonical: 'https://ottimobakery.es/',
    image: 'https://ottimobakery.es/assets/focaccia_main.jpg',
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    let ctx = gsap.context(() => {
      // Hide hero elements initially
      gsap.set(['.hero-tag', '#heroT1', '#heroT2', '#heroDesc', '#heroActions', '#heroStats'], { opacity: 0 });
      gsap.set('.hero-tag', { y: 20 });
      gsap.set('#heroT1', { y: 80 });
      gsap.set('#heroT2', { y: 50 });
      gsap.set('#heroDesc', { y: 30 });
      gsap.set(['#heroActions', '#heroStats'], { y: 20 });

      // Prevent scroll until loader finishes
      document.body.style.overflow = 'hidden';

      // Loader animation
      const loaderTl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = 'auto';
          window.scrollTo(0, 0);
          animateHero();
          // Force refresh ScrollTrigger after everything is visible
          setTimeout(() => ScrollTrigger.refresh(), 100);
        }
      });

      loaderTl
        .to('#lwOttimo', { opacity: 1, duration: .7, ease: 'power3.out' })
        .to('#lwBakery', { opacity: 1, duration: .5, ease: 'power3.out' }, '-=.4')
        .to('#loaderSub', { opacity: 1, duration: .4 }, '-=.2')
        .to('#loaderLine', { scaleX: 1, duration: .8, ease: 'power3.inOut' }, '-=.3')
        .to(['#lwOttimo','#lwBakery','#loaderSub','#loaderLine'], { opacity: 0, duration: .3 }, '+=.5')
        .to('#loaderLeft',  { xPercent: -100, duration: .9, ease: 'expo.inOut' }, '-=.1')
        .to('#loaderRight', { xPercent:  100, duration: .9, ease: 'expo.inOut' }, '<')
        .set('#loader', { display: 'none' });

      function animateHero() {
        const tl = gsap.timeline();
        tl.to('.hero-tag', { y: 0, opacity: 1, duration: .6 })
          .to('#heroT1', { y: 0, opacity: 1, duration: .9, ease: 'expo.out' }, '-=.3')
          .to('#heroT2', { y: 0, opacity: 1, duration: .7, ease: 'expo.out' }, '-=.5')
          .to('#heroDesc', { y: 0, opacity: 1, duration: .6 }, '-=.3')
          .to('#heroActions', { y: 0, opacity: 1, duration: .5 }, '-=.3')
          .to('#heroStats', { y: 0, opacity: 1, duration: .5 }, '-=.2')
          .to('#heroImg', { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'expo.out' }, '-=.8')
          .to('#heroImg img', { scale: 1, duration: 1.2, ease: 'expo.out' }, '<')
          .to('#heroBadge', { opacity: 1, y: 0, scale: 1, duration: .6, ease: 'back.out(2)' }, '-=.3')
          .to('#heroTag', { opacity: 1, x: 0, duration: .5, ease: 'back.out(1.5)' }, '-=.3')
          .to('#heroScroll', { opacity: 1, duration: .4 }, '-=.1');

        const targets = [
          { el: '#sn1', val: 190 },
          { el: '#sn2', val: 100 },
          { el: '#sn3', val: 30 }
        ];
        targets.forEach(t => {
          const obj = { n: 0 };
          gsap.to(obj, {
            n: t.val, duration: 1.8, ease: 'power2.out', delay: 2,
            onUpdate() { const e = document.querySelector(t.el); if(e) e.textContent = Math.round(obj.n); }
          });
        });
      }

      gsap.to('#tickerTrack', {
        xPercent: -50, repeat: -1, duration: 25, ease: 'none'
      });

      gsap.from('.product-card, .product-cta-card', {
        y: 60, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.products-grid', start: 'top 80%' }
      });

      gsap.fromTo('#histImgMain', 
        { clipPath: 'inset(0 0 100% 0)', y: 40, opacity: 0 },
        { clipPath: 'inset(0 0 0% 0)', y: 0, opacity: 1, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: '#histImgWrap', start: 'top 75%' }
        }
      );
      gsap.fromTo('#histImgAccent', 
        { clipPath: 'inset(0 100% 0 0)', x: -20, opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', x: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: .3,
          scrollTrigger: { trigger: '#histImgWrap', start: 'top 70%' }
        }
      );
      gsap.from('.historia-quote,.historia-text p,.historia-sig', {
        y: 30, opacity: 0, stagger: .12, duration: .7,
        scrollTrigger: { trigger: '.historia', start: 'top 70%' }
      });

      // Historia counters
      const hTargets = [
        { el: '#hn1', target: 190 },
        { el: '#hn2', target: 100 },
        { el: '#hn3', target: 13 }
      ];
      hTargets.forEach(t => {
        const el = document.querySelector(t.el);
        if(el) {
          const obj = { n: 0 };
          gsap.to(obj, {
            n: t.target, duration: 1.8, ease: 'power2.out',
            onUpdate() { el.textContent = (t.el === '#hn1' ? '+' : '') + Math.round(obj.n); },
            scrollTrigger: { trigger: '.historia-facts', start: 'top 80%' }
          });
        }
      });

      gsap.to('.review-card', {
        y: 0, opacity: 1,
        stagger: { each: .1, from: 'start' },
        duration: .8, ease: 'expo.out',
        scrollTrigger: { trigger: '.reviews-grid', start: 'top 75%' }
      });

      gsap.from('.carta-timeline-line', {
        scaleX: 0, transformOrigin: 'left', duration: 1.5, ease: 'expo.out',
        scrollTrigger: { trigger: '.carta-timeline', start: 'top 85%' }
      });

      gsap.from('.carta-timeline-step', {
        y: 40, opacity: 0, stagger: .2, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: '.carta-timeline', start: 'top 80%' }
      });

      gsap.from('.carta-item', {
        y: 60, opacity: 0, stagger: .15, duration: .8, ease: 'expo.out',
        scrollTrigger: { trigger: '.carta-grid', start: 'top 75%' }
      });

      ScrollTrigger.batch('.galeria-item', {
        onEnter: els => gsap.from(els, { opacity: 0, scale: .95, stagger: .08, duration: .7, ease: 'expo.out' })
      });

      gsap.to('#localMap', {
        opacity: 1, scale: 1, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: '#localMap', start: 'top 75%' }
      });

      gsap.from('.local-item', {
        x: -30, opacity: 0, stagger: .1, duration: .7,
        scrollTrigger: { trigger: '.local-items', start: 'top 80%' }
      });

      gsap.from('.cta-banner h2,.cta-banner p,.cta-banner-btns', {
        y: 40, opacity: 0, stagger: .15, duration: .8, ease: 'expo.out',
        scrollTrigger: { trigger: '.cta-banner', start: 'top 70%' }
      });

      document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
          const r = btn.getBoundingClientRect();
          gsap.to(btn, {
            x: (e.clientX - r.left - r.width/2) * .18,
            y: (e.clientY - r.top  - r.height/2) * .18,
            duration: .3, ease: 'power2.out'
          });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.4)' });
        });
      });

      gsap.to('.hero-right', {
        yPercent: 12,
        scrollTrigger: { trigger: '.hero', scrub: 1.5 }
      });

      // Check if there is a hash to scroll to
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      
      <Loader />
      <Nav />
      <Hero />
      <Ticker />

      <Products />
      <Historia />
      <CartaPreview />
      <Reviews />
      <Galeria />
      <Local />
      <CtaBanner />
      <FooterIndex />
    </>
  );
}
