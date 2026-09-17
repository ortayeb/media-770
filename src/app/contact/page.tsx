import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { business } from "@/lib/business";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(
    business.whatsapp.message
  )}`;

  return (
    <main className="contact-page">
      <div className="contact-page-grid" />

      <div className="contact-page-glow contact-page-glow-one" />
      <div className="contact-page-glow contact-page-glow-two" />

      <nav className="contact-nav shell">
        <a href="/" className="brand">
          MEDIA <span>770</span>
        </a>

        <a href="/" className="back-home">
          <ArrowRight size={17} />
          חזרה לאתר
        </a>
      </nav>

      <section className="contact-hero shell">
        <div className="contact-heading">
          <div className="eyebrow">
            <span className="live-dot" />
            LET&apos;S CREATE SOMETHING
          </div>

          <h1>
            יש לך עסק?
            <span>בוא נבנה לו משהו אחר.</span>
          </h1>

          <p>
            אתר תדמית, חנות דיגיטלית, קטלוג, מערכת הזמנות או פתרון שנבנה
            במיוחד לעסק שלך — ספר לנו מה אתה רוצה ליצור.
          </p>
        </div>

        <div className="contact-options">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-method contact-method-main"
          >
            <div className="contact-method-icon">
              <MessageCircle size={25} />
            </div>

            <div className="contact-method-text">
              <small>WHATSAPP</small>
              <strong>דברו איתנו בוואטסאפ</strong>
              <span>{business.phone}</span>
            </div>

            <ArrowLeft className="contact-method-arrow" size={21} />
          </a>

          <a
            href={`tel:${business.phoneInternational}`}
            className="contact-method"
          >
            <div className="contact-method-icon">
              <Phone size={24} />
            </div>

            <div className="contact-method-text">
              <small>PHONE</small>
              <strong>התקשרו אלינו</strong>
              <span>{business.phone}</span>
            </div>

            <ArrowLeft className="contact-method-arrow" size={21} />
          </a>

          <a href={`mailto:${business.email}`} className="contact-method">
            <div className="contact-method-icon">
              <Mail size={24} />
            </div>

            <div className="contact-method-text">
              <small>EMAIL</small>
              <strong>שלחו לנו מייל</strong>
              <span>{business.email}</span>
            </div>

            <ArrowLeft className="contact-method-arrow" size={21} />
          </a>
        </div>

        <div className="contact-bottom-message">
          <Sparkles size={18} />

          <p>
            לא בטוחים בדיוק מה אתם צריכים?
            <strong> זה בסדר. מתחילים משיחה.</strong>
          </p>
        </div>
      </section>

      <footer className="contact-page-footer">
        <div className="shell contact-page-footer-inner">
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
