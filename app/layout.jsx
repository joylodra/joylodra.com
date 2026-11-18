import "./globals.css";

export const metadata = {
  title: "Joy Lodra — Co-founder & CEO of Seefluencer",
  description:
    "Joy Lodra, co-founder and CEO of Seefluencer. Explore his work in education, services, SaaS, and creator talent management.",
  icons: { icon: "/joy-icon.png" },
};

const initialTheme = `try {
  document.documentElement.dataset.theme = localStorage.getItem('studio-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
} catch {}`;

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initialTheme }} />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
