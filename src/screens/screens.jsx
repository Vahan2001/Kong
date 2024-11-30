import CityOverview from "../components/cityOverview/cityOverview";
import HeroSection from "../components/heroSection/heroSection";
import FeaturesShowcase from "../components/featuresShowcase/featuresShowcase";
import StatisticsPanel from "../components/statisticsPanel/statisticsPanel";
import FooterSection from "../components/footerSection/footerSection";
export default function Screens() {
  return (
    <>
      <HeroSection />
      <CityOverview />
      <FeaturesShowcase />
      <StatisticsPanel />
      <FooterSection />
    </>
  );
}
