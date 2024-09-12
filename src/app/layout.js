import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next-Hero",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-red-500 px-6 py-4">
          <h6>Logo</h6>
          <ul>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </nav>
        {children}
        <footer>
          <h1>This is Footer</h1>
        </footer>
      </body>
    </html>
  );
}
