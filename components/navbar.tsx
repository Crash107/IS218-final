import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

export const NavbarMain = () => {
  return (
    <div>
      <Navbar>
        <NavbarContent justify="start">
          <NavbarBrand>
            <p className="font-bold text-inherit font-literata">
              Scoops of Euphoria
            </p>
            <Image width={50} alt="NextUI hero Image" src="/ice.png" />
          </NavbarBrand>
        </NavbarContent>
      </Navbar>

      <Navbar className="flex justify-center">
        <NavbarItem>
          <Link color="foreground" href="/" className="font-sans">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/icecreampage" color="foreground" className="font-sans">
            ICE CREAM CAKES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="font-sans">
            CAKES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="font-sans">
            REWARDS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="font-sans">
            ABOUT
          </Link>
        </NavbarItem>
      </Navbar>
    </div>
  );
};
