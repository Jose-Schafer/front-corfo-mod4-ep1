import { BsJustify } from "react-icons/bs";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { bgColor, textColor } from './constants'

export function Navbar() {
  return (
    <Drawer>
      <DrawerTrigger className={`${textColor} ${bgColor} rounded-none`}><BsJustify className="text-4xl font-bold" /></DrawerTrigger>
      <DrawerContent className="fixed top-0 left-0">
        <DrawerHeader>
          <DrawerTitle>Menú de navegación</DrawerTitle>
        </DrawerHeader>
        <NavigationMenuItem href="/" text="Inicio" />
        <NavigationMenuItem href="/equipo-medico" text="Equipo Médico" />
      </DrawerContent>
    </Drawer>
  )
}

function NavigationMenuItem({ href, text }) {
  return (
    <a href={`${href}`} className={`${textColor} text-2xl mx-4 m-2`}>
      {text}
    </a>
  )
}
