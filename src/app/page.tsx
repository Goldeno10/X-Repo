import { authOptions } from "@/authOptions";
import { getServerSession } from "next-auth";
import CTASection from "./components/CTASection/CTASection";
import FeaturesSection from "./components/FeatureSection/FeatureSection";
import Hero from "./components/Hero/Hero";
import TestimonialsSection from "./components/Testimonials/Testimonials";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />

      {/* <h1>Home {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <Image src={img} alt="Vercel Logo" width={72} height={160} /> */}
    </main>
  );
}
