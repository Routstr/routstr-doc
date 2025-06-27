import {HomeAboutUs} from '@/components/Home/HomeAboutUs';
import {HomeHero} from '@/components/Home/HomeHero';
import {Navbar} from '@/components/NavBar/Navbar';
import {BackgroundPattern} from '@/components/Shared/BackgroundPattern';
import HomeFeatures from '@/components/Home/HomeFeatures';
import {HowItWorks} from '@/components/Home/HowItWorks';
import {RoutstrSupport} from '@/components/Home/RoutstrSupport';
import MajorApps from '@/components/Home/MajorApps';
import {DecentralizedProtocols} from '@/components/Home/DecentralizedProtocols';

export default function Home() {
  return (
    <div
      className="w-full min-h-screen flex justify-center overflow-hidden"
      style={{zIndex: '1', position: 'relative'}}>
      <div className="max-w-screen-lg flex flex-col justify-center">
        <Navbar />
        <HomeHero />
        <RoutstrSupport />
        <MajorApps />
        <DecentralizedProtocols />
        <HomeAboutUs />
        <HomeFeatures />
        <HowItWorks />
        <BackgroundPattern />
      </div>
    </div>
  );
}
