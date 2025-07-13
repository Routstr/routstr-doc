import {HomeAboutUs} from '@/components/Home/HomeAboutUs';
import {HomeHero} from '@/components/Home/HomeHero';
import {Navbar} from '@/components/NavBar/Navbar';
import {BackgroundPattern} from '@/components/Shared/BackgroundPattern';
import HomeFeatures from '@/components/Home/HomeFeatures';
import {RoutstrSupport} from '@/components/Home/RoutstrSupport';
import MajorApps from '@/components/Home/MajorApps';
import {DecentralizedProtocols} from '@/components/Home/DecentralizedProtocols';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden" style={{zIndex: '1', position: 'relative'}}>
      <Navbar />
      <div className="flex-1 w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <HomeHero />
        </div>
        <RoutstrSupport />
        <MajorApps />
        <DecentralizedProtocols />
        <HomeAboutUs />
        <HomeFeatures />
      </div>
      <BackgroundPattern />
    </div>
  );
}
