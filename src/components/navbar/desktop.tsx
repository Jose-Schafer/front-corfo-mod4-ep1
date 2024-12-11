import {
  NavigationMenu,
  NavigationMenuItem as BaseNavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { routes } from '@/config/routes'

import { bgColor, textColor } from './constants'

export function Navbar() {
  return (
    <NavigationMenu className={`fixed top-0 left-0 ${bgColor}`}>
      <NavigationMenuList className="w-screen">
        {routes.map((route, index) => (
          <NavigationMenuItem href={route.path} text={route.text} key={index} />
        ))}
      </NavigationMenuList >
    </NavigationMenu >
  )
}

function NavigationMenuItem({ href, text }) {
  return (
    <BaseNavigationMenuItem className="my-4 pl-8">
      <NavigationMenuLink href={`${href}`} className={`${bgColor} ${textColor} text-2xl`}>
        {text}
      </NavigationMenuLink>
    </BaseNavigationMenuItem >
  )

}
