import Blog from "./components/blog";
import Calculate from "./components/calculate";
import Favourites from "./components/favourites";
import Features from "./components/features";
import HeroPage from "./components/heroPage";
import LimitedOffer from "./components/limitedOffer";
import Quantum from "./components/quantum";
import TwoPic from "./components/twopic";
import Upgrade from "./components/upgrade";
import ZoomInto from "./components/zoom";

export default function Home() {
  return (
    <div className="">
      <HeroPage />
      <Upgrade />
      <Favourites />
      <LimitedOffer />
      <Features />
      <TwoPic />
      <Calculate />
      <Quantum />
      <Blog />
      <ZoomInto />
    </div>
  );
}
