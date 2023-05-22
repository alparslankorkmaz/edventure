import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/olf8ahi.css"
        ></link>
        <title>EdVenture</title>
      </head>

      <body className="container mx-auto px-3 lg:px-32">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
