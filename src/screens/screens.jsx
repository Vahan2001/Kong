import CityOverview from "../components/cityOverview/cityOverview";
import HeroSection from "../components/heroSection/heroSection";
import FeaturesShowcase from "../components/featuresShowcase/featuresShowcase";
import FooterSection from "../components/footerSection/footerSection";
import StatisticsPanel from "../components/statisticsPanel/statisticsPanel";
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
