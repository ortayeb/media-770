import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://media-770.vercel.app"),

  title: {
    default: "MEDIA 770 | חוויות דיגיטליות לעסקים",
    template: "%s | MEDIA 770",
  },

  description:
    "MEDIA 770 הופכים עסקים לחוויות דיגיטליות. אתרי תדמית, אתרי מכירות, קטלוגים דיגיטליים, מערכות הזמנה ופתרונות דיגיטליים בהתאמה אישית.",

  keywords: [
    "MEDIA 770",
    "בניית אתרים",
    "בניית אתרים לעסקים",
    "אתרי תדמית",
    "אתרי מכירות",
    "קטלוגים דיגיטליים",
    "מערכות הזמנה",
    "פיתוח אתרים",
    "עיצוב אתרים",
    "פתרונות דיגיטליים לעסקים",
  ],

  authors: [{ name: "MEDIA 770" }],
  creator: "MEDIA 770",
  publisher: "MEDIA 770",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://media-770.vercel.app",
    siteName: "MEDIA 770",
    title: "MEDIA 770 | חוויות דיגיטליות לעסקים",
    description:
      "לא רק אתר. כל החזית הדיגיטלית של העסק שלך — אתרים, קטלוגים, חנויות ומערכות דיגיטליות בהתאמה אישית.",
    images: [
      {
        url: "/media770-share.png",
        width: 1536,
        height: 1024,
        alt: "MEDIA 770 - חוויות דיגיטליות לעסקים",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MEDIA 770 | חוויות דיגיטליות לעסקים",
    description:
      "אנחנו הופכים עסקים לחוויות דיגיטליות.",
    images: ["/media770-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
