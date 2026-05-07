import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useSeo from '../hooks/useSeo.js';
import {
  NavCarta,
  CartaHero,
  BrunchSection,
  FocacciasSection,
  TartasSection,
  OrderSection,
  FooterCarta
} from '../components/CartaSections.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function CartaPage() {
  useSeo({
    title: 'Carta · Brunch, Focaccias y Tartas Artesanales · Ottimo Bakery Madrid',
    description: 'Carta de Ottimo Bakery: Brunch Box italiano (45€), 7 focaccias gourmet pugliesas y 13 tartas artesanales por encargo. Entrega a domicilio en Madrid.',
    canonical: 'https://ottimobakery.vercel.app/carta',
    image: 'https://ottimobakery.vercel.app/assets/brunch_3.png',
  });

  useLayoutEffect(() => {
    // Reset body overflow just in case coming from index loader
    document.body.style.overflow = 'auto';
    window.scrollTo(0, 0);

    gsap.from('#ctHero', { y: 60, opacity: 0, duration: 1, ease: 'expo.out', delay: .2 });
    gsap.from('.carta-hero-desc', { y: 30, opacity: 0, duration: .8, ease: 'expo.out', delay: .5 });
    gsap.from('#ctCards .hero-mini-card', { y: 40, opacity: 0, stagger: .1, duration: .7, ease: 'expo.out', delay: .6 });

    gsap.from('#brunchCard', {
      y: 50, opacity: 0, duration: .9, ease: 'expo.out',
      scrollTrigger: { trigger: '#brunchCard', start: 'top 80%' }
    });
    gsap.to(['#vc1','#vc2'], {
      x: 0, opacity: 1, stagger: .15, duration: .8, ease: 'expo.out',
      scrollTrigger: { trigger: '#vc1', start: 'top 80%' }
    });

    ScrollTrigger.batch('.fc-card', {
      onEnter: els => gsap.to(els, { y: 0, opacity: 1, stagger: .08, duration: .7, ease: 'expo.out' })
    });

    ScrollTrigger.batch('.tarta-card', {
      onEnter: els => gsap.to(els, { y: 0, opacity: 1, stagger: .06, duration: .7, ease: 'expo.out' })
    });

    document.querySelectorAll('.fc-card, .tarta-card').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        gsap.to(el, { rotateY: x*6, rotateX: -y*6, duration:.35, ease:'power2.out', transformPerspective: 600 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { rotateY:0, rotateX:0, duration:.5, ease:'elastic.out(1,.5)' });
      });
    });

    document.querySelectorAll('.btn-full,.btn-sm').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, {
          x: (e.clientX - r.left - r.width/2) * .15,
          y: (e.clientY - r.top - r.height/2) * .15,
          duration: .3, ease: 'power2.out'
        });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x:0, y:0, duration:.5, ease:'elastic.out(1,.4)' });
      });
    });

    gsap.from('.order-step', {
      x: -30, opacity: 0, stagger: .15, duration: .7, ease: 'expo.out',
      scrollTrigger: { trigger: '.order-steps', start: 'top 75%' }
    });
    
    // Check if there is a hash to scroll to
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, []);

  return (
    <>
      
      <NavCarta />
      <CartaHero />

      <BrunchSection />
      <FocacciasSection />
      <TartasSection />
      <OrderSection />
      <FooterCarta />
    </>
  );
}
