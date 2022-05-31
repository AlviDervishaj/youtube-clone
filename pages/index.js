import { useState } from "react";
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';
import FooterNavigation from "../components/FooterNavigation/FooterNavigation"
import Sidebar from "../components/Sidebar/Sidebar"

export default function Home() {

  const [isOpen, setIsOpen] = useState(true);

  const toggleState = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Head>
        <title>Youtube Clone</title>
      </Head>
      {/* Navigation */}
      <Navigation toggleSidebar={toggleState} />
      <main className="w-full h-screen overflow-x-hidden relative overflow-y-visible flex flex-col md:flex-row gap-0">
        {/* Sidebar */}
        <div className="w-auto h-auto flex-row gap-0 md:flex hidden">
          <section className="w-auto h-full flex flex-row">
            {isOpen && <div className="w-auto relative block h-full">
              <Sidebar />
            </div>}
          </section>
        </div>
        {/* Main Content of page */}
        {/* Footer */}
        <div className="fixed bottom-0 left-0 w-full md:hidden block z-50">
          <FooterNavigation />
        </div>
      </main>
    </>
  )
}
