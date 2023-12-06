import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function IndexPage() {
  return (
    <div>
      <Navbar className="flex justify-center items-center">
        <NavbarItem>
          <Link color="foreground" href="#">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            ICE CREAM CAKES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            CAKES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            REWARDS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            ABOUT
          </Link>
        </NavbarItem>
      </Navbar>
    </div>
  );
}
