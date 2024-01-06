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
        <NavbarBrand>
          <p className="font-bold text-inherit" style={{ fontSize: "2.25rem" }}>
            Scoops of Eurphoria
          </p>
          <Image width={50} alt="NextUI hero Image" src="/ice.png" />
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <Link color="foreground" href="/HomePage2" className="signup1">
              Sign Up
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Navbar className="flex justify-center">
        <NavbarContent>
          <NavbarItem className="mr-4">
            <Link color="foreground" href="/" className="home1">
              HOME
            </Link>
          </NavbarItem>
          <NavbarItem className="mr-4">
            <Link href="/icecreampage" color="foreground" className="icecream1">
              ICE CREAM
            </Link>
          </NavbarItem>
          <NavbarItem className="mr-4">
            <Link
              color="foreground"
              href="/cakepage"
              className="font-sans cakes1"
            >
              CAKES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/privacy" className="privacy1">
              PRIVACY
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};
