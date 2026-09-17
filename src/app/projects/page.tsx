import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  LayoutDashboard,
  ShoppingBag,
  Sparkles,
  Smartphone,
} from "lucide-react";

import { business } from "@/lib/business";

export default function ProjectsPage() {
  const eden = business.projects[0];

  return (
    <main className="projects-page">
      <div className="projects-grid-background" />

      <div className="projects-glow projects-glow-one" />
      <div className="projects-glow projects-glow-two" />

      <nav className="projects-nav shell">
        <a href="/" className="brand">
          MEDIA <span>770</span>
        </a>

        <a href="/" className="back-home">
          <ArrowRight size={17} />
          חזרה לאתר
        </a>
      </nav>

      <section className="projects-hero shell">
        <div className="projects-heading">
          <div className="eyebrow">
            <span className="live-dot" />
            SELECTED WORK
          </div>

          <h1>
            העבודות
            <span>שלנו.</span>
          </h1>

          <p>
            לא רק מספרים מה אנחנו יודעים לעשות.
            <br />
            כאן אפשר לראות את זה עובד.
          </p>
        </div>

        <div className="projects-counter">
          <span>01</span>
          <small>PROJECTS</small>
        </div>
      </section>

      <section className="featured-project shell">
        <div className="project-number">01</div>

        <div className="project-info">
          <div className="project-label">
            <Sparkles size={15} />
            FEATURED PROJECT
          </div>

          <h2>EDEN BAKERY</h2>
          <h3>הקונדיטוריה של עדן</h3>

          <p>
            חוויה דיגיטלית מלאה לקונדיטוריה של עדן — משלב הצגת המותג
            והמוצרים ועד קטלוג, עגלת קניות ותהליך הזמנה פשוט ונוח ללקוח.
          </p>

          <div className="project-features">
            <div>
              <ShoppingBag size={18} />
              <span>קטלוג והזמנות</span>
            </div>

            <div>
              <Smartphone size={18} />
              <span>התאמה מלאה למובייל</span>
            </div>

            <div>
              <LayoutDashboard size={18} />
              <span>מערכת ניהול</span>
            </div>
          </div>

          <a
            href={eden.url}
            target="_blank"
            rel="noreferrer"
            className="project-live-button"
          >
            לצפייה באתר החי
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="project-showcase">
          <div className="project-orbit project-orbit-one" />
          <div className="project-orbit project-orbit-two" />

          <div className="desktop-mockup">
            <div className="mockup-browser">
              <div className="mockup-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="mockup-url">
                sweet-catalog.vercel.app
              </div>
            </div>

            <div className="eden-preview">
              <div className="eden-preview-nav">
                <div>
                  <strong>EDEN</strong>
                  <span>BAKERY</span>
                </div>

                <small>MENU</small>
              </div>

              <div className="eden-preview-content">
                <small>EDEN BAKERY • HOLON</small>

                <h4>
                  רגעים מתוקים
                  <span>מתחילים כאן.</span>
                </h4>

                <p>קונדיטוריה • קינוחים • הזמנות</p>

                <div className="eden-preview-button">
                  לקטלוג שלנו
                  <ArrowLeft size={13} />
                </div>
              </div>

              <div className="eden-preview-decoration eden-ball-one" />
              <div className="eden-preview-decoration eden-ball-two" />
            </div>
          </div>

          <div className="phone-mockup">
            <div className="phone-speaker" />

            <div className="phone-screen">
              <div className="phone-brand">
                EDEN
                <span>BAKERY</span>
              </div>

              <div className="phone-cake">
                <Sparkles size={30} />
              </div>

              <strong>מתוק. מדויק.</strong>
              <small>נוצר באהבה.</small>

              <div className="phone-button">
                לקטלוג
              </div>
            </div>
          </div>

          <div className="project-floating-badge">
            <span className="project-live-dot" />
            <div>
              <strong>LIVE</strong>
              <small>PROJECT</small>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-next">
        <div className="shell projects-next-inner">
          <Sparkles size={22} />

          <p>הפרויקט הבא יכול להיות שלכם.</p>

          <h2>
            יש לכם רעיון?
            <span>בואו נהפוך אותו לדיגיטלי.</span>
          </h2>

          <a href="/contact" className="main-button">
            מתחילים פרויקט
            <ArrowLeft size={18} />
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
