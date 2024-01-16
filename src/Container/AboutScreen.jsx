import AboutHero from "../Components/About/AboutHero"
import ActionPlans from "../Components/About/ActionPlans"
import CoreValues from "../Components/About/CoreValues"
import Goals from "../Components/About/Goals"
import HealthcareFulf from "../Components/About/HealthcareFulf"
import Objectives from "../Components/About/Objectives"
import Strategies from "../Components/About/Strategies"
import Uniqueness from "../Components/About/Uniqueness"
import VisionMission from "../Components/About/VisionMission"
import WhoWeAre from "../Components/About/WhoWeAre"
import Faq from "../Components/Home/Faq"
import NoAnswer from "../Components/Home/NoAnswer"

const AboutScreen = () => {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <Objectives />
      <Strategies />
      <ActionPlans />
      <Uniqueness />
      <CoreValues />
      <HealthcareFulf />
      <Goals />
      <Faq />
      <NoAnswer />
    </div>
  )
}

export default AboutScreen