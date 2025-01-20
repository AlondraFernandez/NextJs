import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";


export const metadata = {
  title: "De todo un poco",
  authors: [{ name: "Alondra Fernandez" }],
  description: "Aplicacion de comercio electrónico",
  keywords: "comercio electrónico, aplicación, nextjs, tailwind, sass, react, lucide, tailwindcss, argentina, ecommerce"
}

function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="grow p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout