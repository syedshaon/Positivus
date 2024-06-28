import Header from "@/components/Header";
import Companys from "@/components/Companys";
import Services from "@/components/Services";
import Happen from "@/components/Happen";
import Case from "@/components/Case";
import Faq from "@/components/Faq";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Companys />
      <Services />
      <Happen />
      <Case />
      <Faq />
      <Teams />
      <Testimonials />
      <Contact />
    </main>
  );
}
