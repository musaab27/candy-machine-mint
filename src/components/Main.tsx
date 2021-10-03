import { Header } from "./Header";
import { Faq } from "./FAQ";
import { Team } from "./Team";
import { Testimonials } from "./Testimonials";
import { RoadMapHeader } from "./RoadMapHeader";
import { RoadMapTwo } from "./RoadMapTwo";
import { Rarity } from "./Rarity";
import { Navigation } from "./Navigation";

export const Main = () => {
    return (
      <>
      <Navigation/>
      <Header/>
      <Testimonials />
      <Rarity/>
      <RoadMapHeader/>
      <RoadMapTwo/>
      <Faq/>
      <Team/>
      </>
    );
  };
  