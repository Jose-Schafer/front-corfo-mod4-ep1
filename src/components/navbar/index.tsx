import {
  NavigationMenu,
  NavigationMenuItem as BaseNavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { bgColor, textColor } from './constants'

export default function Navbar() {
  return (
    <NavigationMenu className={`fixed top-0 left-0 ${bgColor}`}>
      <NavigationMenuList className="w-screen">
        <NavigationMenuItem href="/" text="Inicio" />
        <NavigationMenuItem href="/equipo-medico" text="Equipo Médico" />
      </NavigationMenuList >
    </NavigationMenu >
  )
}

function NavigationMenuItem({ href, text }) {
  return (
    <BaseNavigationMenuItem className="m-4">
      <a href={`${href}`}>
        <NavigationMenuLink className={`${bgColor} ${textColor}`}>
          {text}
        </NavigationMenuLink>
      </a>
    </BaseNavigationMenuItem >
  )

}
