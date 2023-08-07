import Container from "@/components/Container";
import HoverCartLink from "@/components/HoverCardLink";
import React from "react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <main className="border-t-2 border-gray-950">
      <Container>
        <section>
          <div
            className="
              flex 
              justify-center 
              items-center 
              gap-3 
              py-2
            "
          >
            <HoverCartLink href="fbsdh" title="hiii" desc="adnajd fbdijfw bfsdji" />
            <HoverCartLink href="fbsdh" title="hiii" desc="adnajd fbdijfw bfsdji" />
            <HoverCartLink href="fbsdh" title="hiii" desc="adnajd fbdijfw bfsdji" />
            <HoverCartLink href="fbsdh" title="hiii" desc="adnajd fbdijfw bfsdji" />
            <HoverCartLink href="fbsdh" title="hiii" desc="adnajd fbdijfw bfsdji" />
            <HoverCartLink href="fbsdh" title="hiii" desc="adnajd fbdijfw bfsdji" />
          </div>
          <div
            className="
              flex-col 
              justify-center 
              items-center 
              space-y-5 
              py-3
            "
          >
            <div
              className="
                flex 
                justify-center 
                items-center 
                gap-4
              "
            >
              <HoverCartLink href={"ig"} title={<BsInstagram size={24} />} desc="kunjungi instagram" />
              <HoverCartLink href={"git"} title={<BsGithub size={24} />} desc="kunjungi github" />
              <HoverCartLink href={"fb"} title={<BsFacebook size={24} />} desc="kunjungi facebook" />
            </div>
            <div className="text-center">&copy; 2019 - All rights reserved. Created by</div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Footer;
