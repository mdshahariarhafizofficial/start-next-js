import Image from "next/image";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Blogs from "./Components/Blogs";
import Faq from "./Components/Faq";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Feature></Feature>
      <Blogs></Blogs>
      <Faq></Faq>
    </>
  );
}
