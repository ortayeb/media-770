import {
  ArrowLeft,
  ArrowUpLeft,
  Code2,
  Layers3,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "אתרי תדמית",
    text: "אתרים שמספרים את הסיפור של העסק ויוצרים רושם מהרגע הראשון.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "אתרי מכירות",
    text: "חנויות דיגיטליות שמשלבות עיצוב, חוויית משתמש ותהליך רכישה פשוט.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "קטלוגים דיגיטליים",
    text: "קטלוגים חכמים ומעוצבים שמציגים את המוצרים והשירותים בצורה אחרת.",
  },
  {
    number: "04",
    icon: Code2,
    title: "מערכות בהתאמה אישית",
    text: "מערכות הזמנה ופתרונות דיגיטליים שנבנים סביב הדרך שבה העסק שלך עובד.",
  },
];

const ticker = [
  "אתרי תדמית",
  "אתרי מכירות",
  "קטלוגים דיגיטליים",
  "מערכות הזמנה",
  "חוויית משתמש",
  "עיצוב דיגיטלי",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="grid-background" />

        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="glow glow-three" />

        <nav className="nav shell">
          <a href="#" className="brand">
            MEDIA <span>770</span>
          </a>

          <div className="nav-links">
            <a href="#services">שירותים</a>
            <a href="#showcase">מי אנחנו</a>
          </div>

          <a href="#contact" className="nav-button">
            בואו נדבר
            <ArrowUpLeft size={16} />
          </a>
        </nav>

        <div className="hero-content shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" />
              החזית הדיגיטלית של העסק שלך
            </div>

            <h1>
              אנחנו הופכים
              <br />
              עסקים ל־
              <span className="gradient-text">חוויות דיגיטליות.</span>
            </h1>

            <p className="hero-description">
              לא רק אתר. אנחנו יוצרים את הדרך שבה העסק שלך נראה, מרגיש
              ומתקשר עם הלקוחות שלו בעולם הדיגיטלי.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="main-button">
                מתחילים מכאן
                <ArrowLeft size={18} />
              </a>

              <a href="#services" className="ghost-button">
                גלו מה אנחנו עושים
              </a>
            </div>
          </div>

          <div className="visual-area">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="main-glass">
              <div className="browser-top">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="browser-url">media770.digital</div>
              </div>

              <div className="browser-content">
                <div className="small-label">
                  <Sparkles size={14} />
                  DIGITAL EXPERIENCE
                </div>

                <h2>
                  לא רק
                  <br />
                  <span>אתר.</span>
                </h2>

                <p>כל החזית הדיגיטלית של העסק שלך.</p>

                <div className="fake-button">EXPLORE</div>
              </div>
            </div>

            <div className="floating-card card-one">
              <div className="floating-icon">
                <Zap size={18} />
              </div>
              <div>
                <small>EXPERIENCE</small>
                <strong>Fast & Interactive</strong>
              </div>
            </div>

            <div className="floating-card card-two">
              <div className="floating-icon">
                <WandSparkles size={18} />
              </div>
              <div>
                <small>DESIGN</small>
                <strong>Built Different.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <span />
          גלול כדי לגלות
        </div>
      </section>

      <section className="ticker-section">
        <div className="ticker">
          {[...ticker, ...ticker].map((item, index) => (
            <div className="ticker-item" key={`${item}-${index}`}>
              {item}
              <Sparkles size={17} />
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="shell">
          <div className="section-intro reveal">
            <div>
              <p className="section-tag">WHAT WE DO</p>
              <h2>
                לא בונים עוד אתר.
                <br />
                <span>בונים נוכחות.</span>
              </h2>
            </div>

            <p className="section-description">
              כל עסק שונה. לכן אנחנו יוצרים חוויה דיגיטלית שמתאימה למותג,
              ללקוחות ולמטרות שלו.
            </p>
          </div>

          <div className="services-grid">
            {services.map(({ number, icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="card-glow" />

                <div className="service-top">
                  <span>{number}</span>
                  <div className="service-icon">
                    <Icon size={24} />
                  </div>
                </div>

                <h3>{title}</h3>
                <p>{text}</p>

                <div className="service-arrow">
                  <ArrowUpLeft size={20} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="showcase-section">
        <div className="showcase-glow" />

        <div className="shell showcase-grid">
          <div className="showcase-copy">
            <p className="section-tag">THE WEBSITE IS THE PROOF</p>

            <h2>
              האתר שאתם נמצאים בו
              <span>מציג את עצמו.</span>
            </h2>

            <p>
              אנחנו יכולים לספר לכם על עיצוב, אנימציות וחוויית משתמש.
              אבל אנחנו מעדיפים שתראו את זה בעצמכם.
            </p>

            <p>
              כל תנועה, מעבר ופרט באתר הזה הם חלק מהדרך שבה אנחנו חושבים על
              החזית הדיגיטלית של עסק.
            </p>
          </div>

          <div className="showcase-window">
            <div className="window-line" />

            <div className="showcase-number">770</div>

            <div className="showcase-message">
              <small>MEDIA</small>
              <strong>MAKE IT MOVE.</strong>
              <span>MAKE IT MEMORABLE.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="statement-section">
        <div className="shell statement">
          <Sparkles className="statement-star star-one" size={30} />
          <Sparkles className="statement-star star-two" size={20} />

          <p>העסק שלך כבר קיים.</p>

          <h2>
            עכשיו בוא ניתן לו
            <span>נוכחות שאי אפשר לפספס.</span>
          </h2>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-box">
          <div className="contact-glow" />

          <div>
            <p className="section-tag">LET&apos;S CREATE</p>
            <h2>יש לך עסק?</h2>
            <h3>בוא נבנה לו משהו אחר.</h3>
          </div>

          <a href="#" className="contact-button">
            מתחילים פרויקט
            <ArrowLeft size={20} />
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div className="brand">
            MEDIA <span>770</span>
          </div>

          <p>אנחנו הופכים עסקים לחוויות דיגיטליות.</p>

          <span>© 2026 MEDIA 770</span>
        </div>
      </footer>
    </main>
  );
}
