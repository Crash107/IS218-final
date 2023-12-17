import { ChangeEvent, FormEvent, useState } from "react";
import {
  Center,
  Container,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import DefaultLayout from "@/layouts/default";

import Image from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
export default function Home() {
  const [emailInput, setEmailInput] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const toast = useToast();
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailInput) {
      return toast({
        description: "Email is required",
        status: "error",
      });
    }
    setButtonLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: emailInput }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Joined successfully.",
          description: "Thank you for joining the waitlist!",
          status: "success",
        });
      } else {
        throw new Error(
          data?.error || "Something went wrong, please try again later"
        );
      }
    } catch (e) {
      toast({
        description: (e as Error).message,
        status: "error",
      });
    }
    setEmailInput("");
    setButtonLoading(false);
  };
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
          style={{
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "Mandali",
          }}
        >
          Join Our Family!
        </p>
        <img src="icecream.png" alt="Ice Cream" width="75" height="75" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleFormSubmit}>
          <div>
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={emailInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmailInput(e.target.value)
              }
            />
          </div>

          <Button isLoading={buttonLoading} type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </DefaultLayout>
  );
}
