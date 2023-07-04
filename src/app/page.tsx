"use client";

import Container from "@/components/Container";
import Button from "@/components/buttons/Button";
import Layout from "@/components/layouts/Layout";
import LinkSos from "@/components/links/LinkSos";
import UnstyledLink from "@/components/links/UnstyledLink";
import { useLouded } from "@/hooks/useLouded";
import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Blog from "@/components/content/blog/Blog";

const Home = () => {
  const islouded = useLouded();

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log({ islouded });
  //   }, 300);
  // }, [islouded]);

  return (
    <div>
      <Layout>
        <Container>
          <main
            className={`
              my-10 
              ${islouded && "animate-fade-in-down"}
            `}
          >
            <section className="md:py-10 py-5">
              <div>
                <h2
                  className="
                    hidden 
                    md:block 
                    text-4xl 
                    font-bold 
                    mb-[2px]
                  "
                >
                  Hi!
                </h2>
                <h1
                  className="
                    md:text-5xl 
                    text-4xl 
                    font-bold
                  "
                >
                  Welcome to my website
                  <span
                    className="
                      ml-2 
                      px-[1px] 
                      bg-gradient-to-r 
                      from-[#ece8e8] 
                      to-[#EAEAEA]
                    "
                  >
                    <span className="sp">Sap.</span>
                  </span>
                </h1>
                <p
                  className="
                    py-3 
                    md:w-[80%] 
                    md:text-lg 
                    text-base 
                    text-neutral-700 
                    font-normal
                  "
                >
                  I share here what I learned and share the latest technology and share what I'm working on, myself as a web full stack developer
                </p>
                <p
                  className="
                    md:text-lg 
                    text-base 
                    text-neutral-700 
                    font-normal
                  "
                >
                  Don't forget to visit my{" "}
                  <Link
                    href={"/"}
                    className="
                      cursor-pointer 
                      text-neutral-900 
                      font-medium 
                      link-underline 
                      link-underline-black
                    "
                  >
                    forum!
                  </Link>
                </p>
                <div
                  className="
                    flex 
                    justify-start 
                    items-center 
                    md:space-x-5 
                    w-[60%] 
                    py-5 
                    md:pt-8 
                    pb-4
                  "
                >
                  <Button
                    className="
                      md:block 
                      hidden
                    "
                    onClick={() => {}}
                    label="Learn more blog"
                  />
                  <Button outline onClick={() => {}} label="Learn more about me" />
                </div>
                <div
                  className="
                    flex 
                    justify-start 
                    items-center 
                    gap-2 
                    mt-2
                  "
                >
                  <LinkSos href={"git"}>
                    <BsGithub size={15} />
                    rizkysapp
                  </LinkSos>
                  <LinkSos href={"git"}>
                    <BsInstagram size={15} />
                    rizkysap_
                  </LinkSos>
                </div>
              </div>
            </section>
            <section>
              <Blog title="dyuqwhduiewh" srcImage="/test.jpg" desc="adsbwuhdeuw edbwyfguweuyfgew dgbxuewgb" />
            </section>
          </main>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Layout>
    </div>
  );
};

export default Home;
