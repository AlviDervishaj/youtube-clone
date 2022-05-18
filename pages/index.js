// Next Components
import Head from 'next/head';

// Components
import Navigation from '../components/Navigation/Navigation';
import FooterNavigation from "../components/FooterNavigation/FooterNavigation"

export default function Home() {
  return (
    <main className="w-full h-full overflow-x-hidden relative overflow-y-visible">
      {/* inject code into head part of html */}
      <Head>
        <title>Youtube Clone</title>
      </Head>
      <div className="w-screen h-auto">
        <Navigation></Navigation>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <FooterNavigation></FooterNavigation>
      </div>
    </main>
  )
}
