import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function IndexPage() {
  const containerStyle = {
    position: "relative",
    width: "1400px",
    height: "400px",
  };

  const textContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 1,
  };

  const customTextStyle = {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  };

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

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="font-sans">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Navbar className="flex justify-center">
        <NavbarItem>
          <Link color="foreground" href="#" className="font-sans">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" className="font-sans">
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

      <div
        style={{
          position: "relative",
          display: "flex",
          textAlign: "center",
          width: "1000px",
          height: "400px",
          backgroundImage: 'url("/icecream.png")',
          margin: "auto",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <p
          style={{
            color: "black",
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          Your Text Here
        </p>
      </div>
    </div>
  );
}
