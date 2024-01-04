import Image from "next/image";
import { ThemeSwitch } from "./ThemeSwitch";
import { Navbar } from "./Components/navbar.component";
import { HeroComponent } from "./Components/hero.component";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroComponent />
    </>
  )
}
