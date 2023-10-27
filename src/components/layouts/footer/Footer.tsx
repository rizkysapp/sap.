import Container from "@/components/Container";
import HoverCartLink from "@/components/HoverCardLink";
import React from "react";
import { IconType } from "react-icons/lib";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-950">
      <Container>
        <section>
          <FooterLinks />
          <div
            className="
              flex-col 
              justify-center 
              items-center 
              space-y-5 
            "
          >
            <div
              className="
                mb-5
                flex-col
                justify-center
                items-center
              "
            >
              <h2 className="text-center text-base py-2 font-medium text-neutral-600">Reach me out</h2>
              <FooterSosialLink />
            </div>
            <div className="text-center font-normal text-neutral-600 text-sm py-2">&copy; Rizkysap 2023</div>
          </div>
        </section>
      </Container>
    </footer>
  );
};

type Sosial = {
  id: string;
  href: String;
  icon: IconType;
  text: String;
};

const SosialLinks: Sosial[] = [
  {
    id: "github",
    href: "https://github.com/rizkysapp",
    icon: BsGithub,
    text: "See my projects on Github",
  },
  {
    id: "facebook",
    href: "https://github.com/rizkysapp",
    icon: BsFacebook,
    text: "See my sosial Facebook",
  },
  {
    id: "instagram",
    href: "https://github.com/rizkysapp",
    icon: BsInstagram,
    text: "See my sosial media instagram ",
  },
];

const FooterSosialLink = () => {
  return (
    <div
      className=" 
        flex 
        justify-center 
        items-center 
        gap-3
      "
    >
      {SosialLinks.map((sosial) => (
        <HoverCartLink key={sosial.id} href={sosial.href} title={<sosial.icon size={26} />} desc={sosial.text} />
      ))}
    </div>
  );
};

const Links = [
  {
    href: "https://github.com/rizkysapp/sap.",
    text: "Source Code",
    tooltip: "this website is open source",
  },
  {
    href: "https://hihi",
    text: "Docs",
    tooltip: "Personal documentation about my best practices on development",
  },
  {
    href: "https://sap.link/um",
    text: "Analytics",
    tooltip: "Sap.com views and visitors analytics",
  },
  {
    href: "/statistics",
    text: "Statistics",
    tooltip: "Blog, Projects, and Library Statistics",
  },
];

const FooterLinks = () => {
  return (
    <div
      className="
        flex 
        justify-center 
        items-center 
        gap-3 
        py-4
      "
    >
      {Links.map(({ href, text, tooltip }) => (
        <HoverCartLink key={href} href={href} title={text} desc={tooltip} />
      ))}
    </div>
  );
};

export default Footer;
