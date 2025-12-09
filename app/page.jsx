'use client'
import { useState } from 'react'

export default function Home() {
  const whatsappNumber = "33745947222"
  const whatsappMessage = encodeURIComponent("Bonjour! Je suis intéressé par l'abonnement IPTV. Pouvez-vous me donner plus d'informations?")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "Comment ça marche ?",
      answer: "C'est simple ! Après votre commande, vous recevez un code d'activation par WhatsApp. Installez l'application sur votre appareil (Smart TV, smartphone, tablette, box Android) et entrez votre code. Tout est prêt en quelques minutes."
    },
    {
      question: "Puis-je essayer avant d'acheter ?",
      answer: "Oui ! Nous offrons un code d'essai gratuit pour tester notre service. Contactez-nous sur WhatsApp pour recevoir votre code d'essai immédiatement."
    },
    {
      question: "Sur quels appareils ça fonctionne ?",
      answer: "Notre service fonctionne sur Smart TV (Samsung, LG, etc.), Android TV, smartphones et tablettes (Android/iOS), ordinateurs, et box IPTV comme MAG, Formuler, etc."
    },
    {
      question: "Comment se fait le paiement ?",
      answer: "Nous acceptons plusieurs méthodes de paiement sécurisées. Contactez-nous sur WhatsApp pour discuter des options disponibles."
    },
    {
      question: "Le support est-il vraiment disponible 24/7 ?",
      answer: "Oui, notre équipe est disponible tous les jours pour vous aider avec l'installation, les questions techniques, ou tout autre besoin."
    }
  ]

  return (
    <main className="main-container">
      {/* Hero Section - Mobile First */}
      <section className="hero">
        <div className="hero-glow"></div>

        <div className="hero-content">
          <div className="live-badge">
            <span className="live-dot"></span>
            EN DIRECT
          </div>

          <h1 className="hero-title">
            Tous vos
            <span className="title-highlight"> films et séries </span>
            préférés
          </h1>

          <p className="hero-subtitle">
            Accès illimité à plus de <strong>100 000 films</strong> et <strong>15 000 séries</strong> en qualité HD, 4K et 8K
          </p>

          <div className="trial-box">
            <div className="trial-text">
              <span className="trial-label">Essai gratuit</span>
              <span className="trial-desc">Testez avant de vous engager</span>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="trial-btn">
              Obtenir mon essai
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">100K+</span>
              <span className="stat-label">Films</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">15K+</span>
              <span className="stat-label">Séries</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-number">01</div>
            <span className="trust-text">Livraison instantanée</span>
          </div>
          <div className="trust-item">
            <div className="trust-number">02</div>
            <span className="trust-text">Installation facile</span>
          </div>
          <div className="trust-item">
            <div className="trust-number">03</div>
            <span className="trust-text">Support réactif</span>
          </div>
          <div className="trust-item">
            <div className="trust-number">04</div>
            <span className="trust-text">Essai gratuit</span>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="features-section">
        <h2 className="section-title">
          Ce que vous <span className="accent">obtenez</span>
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image">
              <img src="/tv1.jpg" alt="Smart TV Streaming" />
            </div>
            <div className="feature-content">
              <span className="feature-tag">Chaînes</span>
              <h3 className="feature-title">Chaînes Françaises</h3>
              <p className="feature-desc">
                Toutes les chaînes françaises populaires : TF1, France 2, M6, Canal+, et bien plus.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src="/cinema1.jpg" alt="Cinema" />
            </div>
            <div className="feature-content">
              <span className="feature-tag">Chaînes</span>
              <h3 className="feature-title">Chaînes Arabes</h3>
              <p className="feature-desc">
                Accès complet aux chaînes arabes du monde entier. MBC, Rotana, Al Jazeera.
              </p>
            </div>
          </div>

          <div className="feature-card featured">
            <div className="feature-image">
              <img src="/football3.jpg" alt="Football Stadium" />
            </div>
            <div className="feature-content">
              <span className="feature-tag">Sport</span>
              <h3 className="feature-title">Sports en Direct</h3>
              <p className="feature-desc">
                beIN Sports, Canal+ Sport, DAZN. Football, basketball, tennis - ne manquez jamais un match.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src="/movies1.jpg" alt="Movies Popcorn" />
            </div>
            <div className="feature-content">
              <span className="feature-tag">VOD</span>
              <h3 className="feature-title">Films & Séries</h3>
              <p className="feature-desc">
                100K+ films et séries en français, anglais et arabe. Nouveautés ajoutées régulièrement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section">
        <h2 className="section-title">
          Applications <span className="accent">disponibles</span>
        </h2>
        <p className="section-subtitle">Nous proposons plusieurs applications IPTV premium selon vos préférences</p>

        <div className="platforms-grid">
          {[
            { name: '4Matic 4K', img: '/4matic.jpg' },
            { name: 'King 4K', img: '/king4k.jpg' },
            { name: 'LYNX', img: '/lynx.jpg' },
            { name: 'IRON PRO', img: '/ironpro.jpg' },
            { name: 'Wolf IPTV', img: '/wolf.jpg' },
            { name: 'Eagle IPTV', img: '/eagle.jpg' },
            { name: 'DLTA 4K', img: '/dlta4k.jpg' },
            { name: 'Pure IPTV', img: '/pure.jpg' },
            { name: 'Crystal', img: '/crystal.jpg' },
            { name: 'MEGA OTT', img: '/megaott.jpg' },
            { name: 'Jupiter', img: '/jupiter.jpg' },
            { name: 'BluTV', img: '/blutv.jpg' },
          ].map((platform) => (
            <div key={platform.name} className="platform-card">
              <img src={platform.img} alt={platform.name} className="platform-img" />
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-card">
          <div className="pricing-badge">Tarifs simples</div>

          <h2 className="pricing-title">
            Choisissez votre <span className="accent">abonnement</span>
          </h2>

          <div className="price-display">
            <span className="price-from">À partir de</span>
            <div className="price-row">
              <span className="price">40€</span>
              <span className="price-sep">-</span>
              <span className="price">60€</span>
            </div>
            <span className="price-note">Selon la durée choisie</span>
          </div>

          <div className="pricing-includes">
            <div className="include-title">Tout inclus :</div>
            <ul className="include-list">
              <li>Toutes les chaînes françaises et arabes</li>
              <li>100K+ Films en HD/4K/8K</li>
              <li>15K+ Séries complètes</li>
              <li>Chaînes sport (beIN, Canal+, DAZN)</li>
              <li>Support technique 24/7</li>
              <li>Installation guidée gratuite</li>
            </ul>
          </div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-main">
            <span className="cta-text">Commander maintenant</span>
            <span className="cta-sub">Réponse rapide sur WhatsApp</span>
          </a>

          <p className="guarantee-text">
            Essai gratuit disponible - Testez avant de vous engager
          </p>
        </div>
      </section>

      {/* Devices Section */}
      <section className="devices-section">
        <h2 className="section-title">
          Compatible avec <span className="accent">tous vos appareils</span>
        </h2>

        <div className="devices-grid">
          <div className="device-item">
            <div className="device-name">Smart TV</div>
            <div className="device-brands">Samsung, LG, Sony, Philips</div>
          </div>
          <div className="device-item">
            <div className="device-name">Smartphone</div>
            <div className="device-brands">Android et iOS</div>
          </div>
          <div className="device-item">
            <div className="device-name">Tablette</div>
            <div className="device-brands">iPad, Android</div>
          </div>
          <div className="device-item">
            <div className="device-name">Box Android</div>
            <div className="device-brands">MAG, Formuler, Fire TV</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">
          Questions <span className="accent">fréquentes</span>
        </h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="final-content">
          <h2 className="final-title">Prêt à commencer ?</h2>
          <p className="final-text">
            Contactez-nous sur WhatsApp pour votre essai gratuit ou pour commander votre abonnement
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-final">
            Contacter sur WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">STORE ZH</div>
          <p className="footer-tagline">Votre divertissement, simplifié</p>
          <div className="footer-copy">© 2025 Store ZH. Tous droits réservés.</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="floating-whatsapp">
        <svg viewBox="0 0 24 24" fill="currentColor" className="wa-icon">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="wa-text">WhatsApp</span>
      </a>
    </main>
  )
}
