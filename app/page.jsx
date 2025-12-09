'use client'

export default function Home() {
  const whatsappNumber = "213000000000" // Replace with Bonar's WhatsApp number
  const whatsappMessage = encodeURIComponent("Bonjour! Je suis intéressé par l'abonnement IPTV. Pouvez-vous me donner plus d'informations?")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <main>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <div style={styles.topLabel} className="animate-in">
              <span style={styles.pulseDot}></span>
              STREAMING PREMIUM
            </div>

            <h1 style={styles.heroTitle} className="animate-in animate-delay-1">
              DÉCOUVREZ
              <span style={styles.heroTitleAccent}> TOUS LES CHAÎNES </span>
              DU MONDE
            </h1>

            <p style={styles.heroSubtitle} className="animate-in animate-delay-2">
              Abonnement IPTV de qualité supérieure avec accès illimité à plus de
              <span style={styles.highlight}> 100,000 films</span> et
              <span style={styles.highlight}> 15,000 séries</span>
            </p>

            <div style={styles.heroStats} className="animate-in animate-delay-3">
              <div style={styles.stat}>
                <div style={styles.statNumber}>100K+</div>
                <div style={styles.statLabel}>Films HD/4K</div>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.stat}>
                <div style={styles.statNumber}>15K+</div>
                <div style={styles.statLabel}>Séries</div>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.stat}>
                <div style={styles.statNumber}>24/7</div>
                <div style={styles.statLabel}>Support</div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaPrimary}
              className="animate-in animate-delay-4"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 217, 255, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.4)'
              }}
            >
              <span style={styles.ctaText}>COMMENCER MAINTENANT</span>
              <span style={styles.ctaSubtext}>Contactez-nous sur WhatsApp</span>
            </a>

            <div style={styles.trialBadge} className="animate-in animate-delay-4">
              ✓ Code d'essai gratuit disponible
            </div>
          </div>

          <div style={styles.heroVisual} className="animate-in animate-delay-2">
            <div style={styles.visualCard}>
              <div style={styles.visualGlow}></div>
              <div style={styles.visualContent}>
                <div style={styles.visualTitle}>CONTENU PREMIUM</div>
                <div style={styles.visualList}>
                  <div style={styles.visualItem}>Netflix • Amazon Prime • Disney+</div>
                  <div style={styles.visualItem}>Audio: FR | EN | AR</div>
                  <div style={styles.visualItem}>Qualité 4K/8K disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.scrollIndicator}>
          <div style={styles.scrollLine}></div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            CE QUE VOUS <span style={styles.titleAccent}>OBTENEZ</span>
          </h2>
          <div style={styles.sectionLine}></div>
        </div>

        <div style={styles.featuresGrid}>
          <div style={styles.featureCard} className="animate-in">
            <div style={styles.featureNumber}>01</div>
            <h3 style={styles.featureTitle}>CHAÎNES FRANÇAISES</h3>
            <p style={styles.featureDescription}>
              Accès complet à toutes les chaînes françaises populaires.
              Divertissement, actualités, documentaires et plus encore.
            </p>
            <div style={styles.featureAccent}></div>
          </div>

          <div style={styles.featureCard} className="animate-in animate-delay-1">
            <div style={styles.featureNumber}>02</div>
            <h3 style={styles.featureTitle}>CHAÎNES ARABES</h3>
            <p style={styles.featureDescription}>
              Toutes les chaînes arabes du monde entier. Restez connecté
              à votre culture et votre divertissement préféré.
            </p>
            <div style={styles.featureAccent}></div>
          </div>

          <div style={styles.featureCard} className="animate-in animate-delay-2">
            <div style={styles.featureNumber}>03</div>
            <h3 style={styles.featureTitle}>SPORTS EN DIRECT</h3>
            <p style={styles.featureDescription}>
              beIN Sports • Canal+ • ZDF • DAZN+ et plus.
              Ne manquez jamais un match important.
            </p>
            <div style={styles.featureAccent}></div>
          </div>

          <div style={styles.featureCard} className="animate-in animate-delay-3">
            <div style={styles.featureNumber}>04</div>
            <h3 style={styles.featureTitle}>FILMS & SÉRIES</h3>
            <p style={styles.featureDescription}>
              100K+ films et 15K+ séries de Netflix, Amazon Prime, Disney+.
              Audio en français, anglais et arabe.
            </p>
            <div style={styles.featureAccent}></div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section style={styles.providers}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            PLATEFORMES <span style={styles.titleAccent}>PREMIUM</span>
          </h2>
          <p style={styles.providersSubtitle}>
            Accès aux meilleures plateformes IPTV du marché
          </p>
        </div>

        <div style={styles.providersGrid}>
          {[
            'ESP TV', 'KING 4K', 'LYNX', 'STRONG 4K',
            'IRON TV PRO', 'FAMILY 4K', 'ATLAS PRO', 'MAX OTT'
          ].map((provider, index) => (
            <div
              key={provider}
              style={styles.providerCard}
              className="animate-in"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'var(--electric-cyan)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={styles.providerName}>{provider}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={styles.pricing}>
        <div style={styles.pricingCard}>
          <div style={styles.pricingGlow}></div>

          <div style={styles.pricingContent}>
            <div style={styles.pricingBadge}>OFFRE SPÉCIALE</div>

            <h2 style={styles.pricingTitle}>
              COMMENCEZ VOTRE <span style={styles.titleAccent}>AVENTURE</span>
            </h2>

            <div style={styles.pricingAmount}>
              <span style={styles.pricingCurrency}>À PARTIR DE</span>
              <div style={styles.pricingNumbers}>
                <span style={styles.pricingPrice}>40€</span>
                <span style={styles.pricingSeparator}>/</span>
                <span style={styles.pricingPrice}>60€</span>
              </div>
            </div>

            <div style={styles.pricingFeatures}>
              <div style={styles.pricingFeature}>✓ Tous les chaînes inclus</div>
              <div style={styles.pricingFeature}>✓ 100K+ Films & 15K+ Séries</div>
              <div style={styles.pricingFeature}>✓ Qualité HD/4K/8K</div>
              <div style={styles.pricingFeature}>✓ Support 24/7</div>
              <div style={styles.pricingFeature}>✓ Code d'essai gratuit</div>
              <div style={styles.pricingFeature}>✓ Installation facile</div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaSecondary}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #00D9FF 0%, #8B5CF6 100%)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--electric-cyan)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              S'ABONNER MAINTENANT
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={styles.finalCta}>
        <div style={styles.finalCtaContent}>
          <h2 style={styles.finalCtaTitle}>
            PRÊT À COMMENCER?
          </h2>
          <p style={styles.finalCtaText}>
            Contactez-nous sur WhatsApp et obtenez votre code d'essai gratuit immédiatement
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ctaFinal}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 217, 255, 0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 217, 255, 0.5)'
            }}
          >
            CONTACTER SUR WHATSAPP
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>BONAR IPTV</div>
          <div style={styles.footerText}>
            Votre passerelle vers le divertissement mondial premium
          </div>
          <div style={styles.footerCopyright}>
            © 2025 Bonar IPTV. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.floatingButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        <svg style={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </main>
  )
}

const styles = {
  // Hero Section
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px',
    overflow: 'hidden',
  },
  heroBackground: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 217, 255, 0.15) 0%, transparent 50%)',
    zIndex: 0,
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1400px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '80px',
    alignItems: 'center',
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  topLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--electric-cyan)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  pulseDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--electric-cyan)',
    animation: 'glow 2s ease-in-out infinite',
  },
  heroTitle: {
    fontSize: 'clamp(48px, 8vw, 96px)',
    lineHeight: '0.95',
    marginBottom: '10px',
  },
  heroTitleAccent: {
    display: 'block',
    background: 'linear-gradient(135deg, var(--electric-cyan) 0%, var(--purple) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: 'clamp(16px, 2vw, 20px)',
    lineHeight: '1.6',
    color: 'var(--gray-text)',
    maxWidth: '600px',
  },
  highlight: {
    color: 'var(--electric-cyan)',
    fontWeight: '700',
  },
  heroStats: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginTop: '20px',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  statNumber: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(32px, 4vw, 48px)',
    color: 'var(--electric-cyan)',
    lineHeight: '1',
  },
  statLabel: {
    fontSize: '14px',
    color: 'var(--gray-text)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  statDivider: {
    width: '2px',
    height: '40px',
    background: 'rgba(255, 255, 255, 0.1)',
  },
  ctaPrimary: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '24px 48px',
    background: 'var(--electric-cyan)',
    color: 'var(--black)',
    textDecoration: 'none',
    borderRadius: '0px',
    fontWeight: '800',
    fontSize: '18px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: 'fit-content',
  },
  ctaText: {
    fontFamily: 'var(--font-display)',
    fontSize: '24px',
  },
  ctaSubtext: {
    fontSize: '12px',
    opacity: '0.8',
    fontWeight: '600',
    textTransform: 'none',
    letterSpacing: '0.5px',
  },
  trialBadge: {
    fontSize: '14px',
    color: 'var(--gray-text)',
    fontWeight: '600',
  },
  heroVisual: {
    position: 'relative',
  },
  visualCard: {
    position: 'relative',
    padding: '40px',
    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    animation: 'float 6s ease-in-out infinite',
  },
  visualGlow: {
    position: 'absolute',
    inset: '-2px',
    background: 'linear-gradient(135deg, var(--electric-cyan), var(--purple))',
    opacity: '0.3',
    filter: 'blur(20px)',
    zIndex: '-1',
  },
  visualContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  visualTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '28px',
    color: 'var(--electric-cyan)',
  },
  visualList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  visualItem: {
    fontSize: '16px',
    color: 'var(--gray-text)',
    paddingLeft: '20px',
    borderLeft: '2px solid var(--electric-cyan)',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  scrollLine: {
    width: '2px',
    height: '60px',
    background: 'linear-gradient(to bottom, transparent, var(--electric-cyan))',
    animation: 'float 2s ease-in-out infinite',
  },

  // Features Section
  features: {
    padding: '120px 20px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '80px',
  },
  sectionTitle: {
    fontSize: 'clamp(40px, 6vw, 72px)',
    marginBottom: '20px',
  },
  titleAccent: {
    color: 'var(--electric-cyan)',
  },
  sectionLine: {
    width: '100px',
    height: '4px',
    background: 'var(--electric-cyan)',
    margin: '0 auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  featureCard: {
    position: 'relative',
    padding: '40px 30px',
    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.8) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
  },
  featureNumber: {
    fontFamily: 'var(--font-display)',
    fontSize: '72px',
    color: 'rgba(0, 217, 255, 0.2)',
    lineHeight: '1',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '24px',
    marginBottom: '15px',
    color: 'var(--white)',
  },
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'var(--gray-text)',
  },
  featureAccent: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '3px',
    background: 'linear-gradient(90deg, var(--electric-cyan), var(--purple))',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.4s ease',
  },

  // Providers Section
  providers: {
    padding: '120px 20px',
    maxWidth: '1400px',
    margin: '0 auto',
    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 217, 255, 0.05) 50%, transparent 100%)',
  },
  providersSubtitle: {
    fontSize: '18px',
    color: 'var(--gray-text)',
    marginTop: '15px',
    textAlign: 'center',
  },
  providersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '60px',
  },
  providerCard: {
    padding: '30px',
    background: 'rgba(26, 26, 26, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  providerName: {
    fontFamily: 'var(--font-display)',
    fontSize: '20px',
    color: 'var(--white)',
    textAlign: 'center',
  },

  // Pricing Section
  pricing: {
    padding: '120px 20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  pricingCard: {
    position: 'relative',
    padding: '60px 50px',
    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)',
    border: '2px solid rgba(0, 217, 255, 0.3)',
    overflow: 'hidden',
  },
  pricingGlow: {
    position: 'absolute',
    inset: '-50%',
    background: 'conic-gradient(from 0deg, var(--electric-cyan), var(--purple), var(--electric-cyan))',
    opacity: '0.1',
    filter: 'blur(40px)',
    animation: 'float 8s ease-in-out infinite',
  },
  pricingContent: {
    position: 'relative',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },
  pricingBadge: {
    padding: '8px 20px',
    background: 'var(--electric-cyan)',
    color: 'var(--black)',
    fontSize: '12px',
    fontWeight: '800',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  pricingTitle: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    textAlign: 'center',
  },
  pricingAmount: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  pricingCurrency: {
    fontSize: '14px',
    color: 'var(--gray-text)',
    letterSpacing: '2px',
  },
  pricingNumbers: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  pricingPrice: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(48px, 8vw, 72px)',
    color: 'var(--electric-cyan)',
    lineHeight: '1',
  },
  pricingSeparator: {
    fontSize: '48px',
    color: 'var(--gray-text)',
  },
  pricingFeatures: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    width: '100%',
    marginTop: '20px',
  },
  pricingFeature: {
    fontSize: '16px',
    color: 'var(--gray-text)',
    fontWeight: '600',
  },
  ctaSecondary: {
    padding: '20px 60px',
    background: 'var(--electric-cyan)',
    color: 'var(--black)',
    textDecoration: 'none',
    fontFamily: 'var(--font-display)',
    fontSize: '24px',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    marginTop: '20px',
  },

  // Final CTA Section
  finalCta: {
    padding: '120px 20px',
    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
  },
  finalCtaContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },
  finalCtaTitle: {
    fontSize: 'clamp(40px, 6vw, 64px)',
  },
  finalCtaText: {
    fontSize: '20px',
    color: 'var(--gray-text)',
    lineHeight: '1.6',
  },
  ctaFinal: {
    padding: '24px 60px',
    background: 'var(--electric-cyan)',
    color: 'var(--black)',
    textDecoration: 'none',
    fontFamily: 'var(--font-display)',
    fontSize: '28px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)',
  },

  // Footer
  footer: {
    padding: '60px 20px',
    background: 'rgba(10, 10, 10, 0.8)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  footerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  footerBrand: {
    fontFamily: 'var(--font-display)',
    fontSize: '32px',
    color: 'var(--electric-cyan)',
  },
  footerText: {
    fontSize: '16px',
    color: 'var(--gray-text)',
  },
  footerCopyright: {
    fontSize: '14px',
    color: 'var(--gray-text)',
    marginTop: '10px',
  },

  // Floating WhatsApp Button
  floatingButton: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#25D366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: '1000',
    textDecoration: 'none',
    animation: 'float 3s ease-in-out infinite',
  },
  whatsappIcon: {
    width: '32px',
    height: '32px',
    color: 'white',
  },
}
