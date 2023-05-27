import { useState } from "react";
import { Header, Footer, Navbar, Main, MobileNav } from "./components/index";

export default function App() {
  const [closed, setClosed] = useState(false);
  return (
    <div className="container mx-auto min-h-screen font-inter py-3 relative">
      <Header action={{ closed, setClosed }}>
        <Navbar />
      </Header>
      <Main />
      <Footer />
      {closed && <MobileNav action={{ closed, setClosed }} />}
    </div>
  );
}
