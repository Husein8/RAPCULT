import {
  Navbar,
  Hero,
  Logo,
  WorkProcedure,
  Packages,
  // Carousel,
  FAQ,
} from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Logo />
      <WorkProcedure />
      <Packages />
      {/* <Carousel /> */}
      <FAQ />
    </main>
  );
}
