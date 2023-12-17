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
            Hello my name is Brian
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          background: 'url("/vanilla2.png") calc(0% + 50px) no-repeat',
          backgroundSize: "600px 375px",
          height: "560px",
          alignItems: "center",
          font: "2rem / 1.6",
          borderBottom: "2px solid #000",
          borderTop: "2px solid #000",
        }}
      >
        <h1
          style={{
            marginTop: "5rem",
            width: "35rem",
            left: "50%",
            fontSize: "3.75rem",
          }}
        >
          New Cinammon Flavor!
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          background: 'url("/icecream2.png") no-repeat calc(100% - 50px)',
          backgroundSize: "600px 375px",
          height: "560px",
          alignItems: "center",
          font: "2rem / 1.6",
          borderBottom: "2px solid #000",

          margin: "auto",
        }}
      >
        <h1
          style={{
            marginTop: "5rem",
            width: "35rem",
            left: "50%",
            fontSize: "3.75rem",
          }}
        >
          Winter Sale!
          <br /> All original <br /> flavors are 40% Off
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          background: 'url("/icecream2.png") calc(0% + 50px) no-repeat',
          backgroundSize: "600px 375px",
          height: "560px",
          alignItems: "center",
          font: "2rem / 1.6",
          borderBottom: "2px solid #000",
        }}
      >
        <h1
          style={{
            marginTop: "5rem",
            width: "35rem",
            left: "50%",
            fontSize: "3.75rem",
          }}
        >
          Look at our Delicious Cakes
        </h1>
      </div>
    </DefaultLayout>
  );
}
