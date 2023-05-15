import "./globals.css";

export const metadata = {
  title: "EdVenture",
  description: "Stone2Stone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/olf8ahi.css"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
