import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css"

interface RootLayout {
  children: React.ReactNode;
}

const Layout = ({children}: RootLayout) => {
  return (
    <>
      <html>
        <body>
          <div className="min-h-screen flex flex-col">
          <Header />
          <main className="container mx-auto flex-grow p-4">
            {children}
            </main>
          <Footer />
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;