import { NavbarMain } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import { start } from "repl";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-07XM55RLGD" />
      <Head />
      <NavbarMain />
      <main>
        {children}
        <CookieBanner />
      </main>
      <footer className="w-full flex items-center py-3">
        <div className="flex-grow flex justify-between">
          <div>
            <h1>CONTACT US</h1>
            <h2>scoopseuphoria@gmail.com</h2>
            <h2>832-734-8946</h2>
            <h2>123 Maple Street, Newark NJ</h2>
          </div>
          <div>
            <Link color="foreground" href="/about" className="font-sans">
              ABOUT US
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
