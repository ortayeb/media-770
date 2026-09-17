import {
  ArrowLeft,
  Layers3,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "אתרי תדמית",
    text: "חזית דיגיטלית מדויקת שמציגה את העסק, השירותים והמותג שלך.",
  },
  {
    icon: ShoppingBag,
    title: "אתרי מכירות",
    text: "חנויות אונליין שנבנות כדי להפוך גלישה לחוויה שמובילה לפעולה.",
  },
  {
    icon: Layers3,
    title: "קטלוגים דיגיטליים",
    text: "דרך חכמה, נקייה ומרשימה להציג מוצרים ושירותים.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="orb orb-a" />
        <div className="orb orb-b" />

        <div className="nav shell">
          <div className="brand">MEDIA 770</div>
          <a href="#contact" className="nav-cta">
            בואו נדבר
          </a>
        </div>

        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={16} />
              החזית הדיגיטלית של העסק שלך
            </div>

            <h1>
              אנחנו הופכים עסקים
              <span>לחוויות דיגיטליות.</span>
            </h1>

            <p>
              לא רק אתר. אנחנו בונים את הדרך שבה העסק שלך נראה, מרגיש ופוגש
              לקוחות בדיגיטל.
            </p>

            <div className="actions">
              <a href="#contact" className="primary">
                בואו נבנה את זה
                <ArrowLeft size={18} />
              </a>

              <a href="#services" className="secondary">
                מה אנחנו עושים
              </a>
            </div>
          </div>

          <div className="glass-card">
            <div className="glass-top">
              <span />
              <span />
              <span />
            </div>

            <div className="glass-content">
              <p>MEDIA 770</p>
              <h2>לא רק אתר.</h2>
              <h3>כל החזית הדיגיטלית של העסק שלך.</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section shell">
        <div className="section-head">
          <p>מה אנחנו עושים</p>
          <h2>בונים נוכחות דיגיטלית שמרגישה כמו העסק שלך.</h2>
        </div>

        <div className="cards">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="icon-wrap">
                <Icon size={24} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="self-demo">
        <div className="shell self-demo-inner">
          <p className="mini">האתר שמציג את עצמו</p>

          <h2>האתר שאתם נמצאים בו עכשיו הוא חלק מההוכחה.</h2>

          <p>
            כל פרט כאן — מהעיצוב, דרך התנועה ועד חוויית המשתמש — נבנה כדי
            להמחיש מה אפשר ליצור עבור העסק שלכם.
          </p>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <div>
          <p className="mini">MEDIA 770</p>

          <h2>
            העסק שלך כבר קיים. עכשיו הגיע הזמן לתת לו חזית דיגיטלית.
          </h2>
        </div>

        <a
          className="primary"
          href="#"
        >
          מתחילים בוואטסאפ
          <ArrowLeft size={18} />
        </a>
      </section>
    </main>
  );
}
