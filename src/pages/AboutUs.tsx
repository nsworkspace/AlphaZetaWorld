import Hero from "../components/About/Hero";
import Model from "../components/About/model";
import Execution  from "../components/About/execution";
import Principles from "../components/About/principles";
import Team from "../components/About/Team";
import CTA from "../components/Home/CTA";


export default function Home() {
  return (
    <>
      <Hero />
      <Model />
      <Execution />
      <Principles  />
      <Team />
      <CTA />
      
    </>
  );
}