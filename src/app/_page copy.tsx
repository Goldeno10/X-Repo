import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import img from "../../public/img.jpg";
import { authOptions } from "@/authOptions";

// import HeavyComponet from "./components/HeavyComponent/HeavyComponet";

// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(
//   () => import("./components/HeavyComponent/HeavyComponet"),
//   {
//     ssr: false, // prevent the component from being rendered on the server
//     loading: () => <p>Loading...</p>, // show a loading component while the component is being loaded
//   }
// );

export default async function Home() {
  const session = await getServerSession(authOptions);
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <main>
      <h1>Home {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>

      <Image src={img} alt="Vercel Logo" width={72} height={160} />
      {/* // HeavyComponet is a heavy component that will be loaded only when needed */}
      {/* <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <HeavyComponent />} */}
    </main>
  );
}

// for dynamic metadata (SEO)
// export async function generateMetadata() {
//   const product = await fetch("https://api.example.com/product/1");
//   return {
//     title: " product.title",
//     description: "product.description",
//     openGraph: {
//       title: " product.title",
//       description: "product.description",
//     },
//   };
// }
