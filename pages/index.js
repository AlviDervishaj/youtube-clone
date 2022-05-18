// React
import { useState } from "react";
// Next Components
import Head from "next/head";

// Components
import Navigation from "../components/Navigation/Navigation";
import FooterNavigation from "../components/FooterNavigation/FooterNavigation";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navigation toggleMenu={toggleMenu} />
      <main className="w-full h-full overflow-x-hidden overflow-y-visible">
        <Head>
          <title>Youtube Clone</title>
        </Head>
        <div className="w-screen h-auto">
          <section className="w-full h-full flex flex-row gap-0">
            {isOpen && (
              <div className="w-screen relative block h-full">
                <Sidebar />
              </div>
            )}
          </section>
        </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full sm:hidden block">
        <FooterNavigation />
      </div>
    </>
  );
}
