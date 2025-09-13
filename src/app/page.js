import Image from "next/image";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Blogs from "./Components/Blogs";
import Faq from "./Components/Faq";
import Contact from "./Components/Contact";
import Form from "./Components/Form";
import Cta from "./Components/Cta";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Feature></Feature>
      <Blogs></Blogs>
      <Faq></Faq>
      <Contact></Contact>
      <Form></Form>
      <Cta></Cta>
    </>
  );
}
