import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import DefaultLayout from "@/layouts/default";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import { GetStaticProps } from "next";
import { PostData, getSortedPostsData } from "../lib/posts";

interface HomeProps {
  allPostsData: PostData[];
}

export default function icecreampage({ allPostsData }: HomeProps) {
  return (
    <DefaultLayout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "150px",
          backgroundColor: "#FFF0D9",
          margin: "10px",
        }}
      >
        <p
          className="hello"
          style={{
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "Mandali",
          }}
        >
          Enjoy Flavorful Ice Cream
        </p>
      </div>
      <div
        className="flex-grow flex justify-between"
        style={{ margin: "0 60px" }}
      >
        <h1 style={{ fontSize: "48px", marginTop: "40px" }}>Original Flavor</h1>
        <h1 style={{ fontSize: "48px", marginTop: "40px", color: "red" }}>
          40% Off
        </h1>
      </div>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
        {allPostsData.map((post) =>
          post.cards.map((card, index) => (
            <div key={index}>
              <Card shadow="sm">
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    src={card.img}
                    width="100%"
                    className="w-full object-cover h-[140px]"
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <div>
                    <b>{card.title}</b>
                    <p className="text-default-500">{card.date}</p>
                  </div>
                  <div>
                    <p className="text-default-500" style={{ color: "red" }}>
                      {card.date}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))
        )}
      </div>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
