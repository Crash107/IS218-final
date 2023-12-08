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
import styles from "../styles/hero.module.css";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
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

      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "800px",
          background: 'url("/hero.png") no-repeat',
          backgroundPosition: "center", // Center the background image
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "black",
              fontSize: "98px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Hello5
          </p>
        </div>
      </div>

      <section className={styles.hero}>
        <h1
          style={{
            marginTop: "5rem",
            width: "35rem",

            left: "50%",

            fontSize: "72px",
          }}
        >
          Winter Sale!
          <br /> All original flavors are 40% Off
        </h1>
      </section>

      <section className={styles.hero1}>
        <h1
          style={{
            marginTop: "5rem",
            width: "35rem",
            color: "#ffea00",

            left: "50%",

            textAlign: "center",
          }}
        >
          Irresistible Deal! Join Mailchimp and receive
        </h1>
      </section>
    </DefaultLayout>
  );
}
