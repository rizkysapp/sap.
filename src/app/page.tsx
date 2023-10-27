"use client";

import Container from "@/components/Container";
import Button from "@/components/buttons/Button";
import Layout from "@/components/layouts/Layout";
import LinkSos from "@/components/links/LinkSos";
import Underline from "@/components/links/Underline";
import { useLouded } from "@/hooks/useLouded";
import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { BiDownArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import BlogCard from "@/components/content/blog/BlogCard";
import UnstyledLink from "@/components/links/UnstyledLink";
import Cart from "@/components/content/Card";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const Home = () => {
  const islouded = useLouded();
  const router = useRouter();

  // const handleLink = (e: any, path: any) => {
  //   if (path === "/blog") {
  //     e.preventDefault();
  //     router.push(`${path}`);
  //   }
  //   if (path === "/about") {
  //     e.preventDefault();
  //     router.push(`${path}`);
  //   }
  // };

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
            <section
              className="
                md:py-10 
                py-5 
                mb-28
              "
            >
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
                    onClick={() => router.push("/blog")}
                    label="Learn more blog"
                  />
                  <Button outline onClick={() => router.push("/about")} label="Learn more about me" />
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
                  <LinkSos
                    href={"https://github.com/rizkysapp"}
                    className="
                    text-base 
                    font-semibold
                  "
                  >
                    <BsGithub size={15} />
                    rizkysapp
                  </LinkSos>
                  <LinkSos
                    href={"git"}
                    className="
                    text-base 
                    font-semibold
                  "
                  >
                    <BsInstagram size={15} />
                    rizkysap_
                  </LinkSos>
                </div>
              </div>
            </section>
            <div
              className="
                flex 
                justify-center 
                items-center 
                relative
              "
            >
              <UnstyledLink
                href={"#intro"}
                className="
                  p-3 
                  rounded-full 
                  absolute 
                  -top-24 
                  shadow-md 
                  animate-bounce 
                  bg-gradient-to-t 
                from-[#ebf4f5] 
                to-[#b5c6e0]
                  cursor-pointer
                "
              >
                <BiDownArrowAlt size={28} />
              </UnstyledLink>
            </div>
            <InView triggerOnce rootMargin="-40% 0px">
              {({ inView, ref }) => (
                <section
                  ref={ref}
                  id="intro"
                  className={` m-
                    mt-32
                    mb-20 
                    bg-gradient-to-r 
                  from-[#ebf4f5] 
                  to-[#b5c6e0]
                  ${inView && "fade-in-start"}
                `}
                >
                  <article
                    className="
                      flex-col 
                      justify-center 
                      items-center 
                      py-10 
                      px-24
                    "
                  >
                    <div>
                      <h1
                        className="
                      text-center 
                      text-4xl 
                      font-bold 
                      text-gray-950
                    "
                      >
                        ini title CTA section
                      </h1>
                      <p
                        className="
                      my-1 
                      text-base 
                      font-light 
                      text-neutral-700
                    "
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora illo similique deleniti ad veritatis corrupti? Recusandae dicta fugit ipsum vero sunt! Illum dolore, aliquam
                        porro expedita voluptatem atque qui tempore?
                      </p>
                    </div>
                    <div
                      className="
                    flex 
                    justify-center 
                    items-center 
                    p-5
                  "
                    >
                      <UnstyledLink
                        href="hi"
                        className="
                        small-btn 
                        px-4 
                        py-1 
                        rounded-[2px] 
                        shadow-md
                      "
                      >
                        Read more
                      </UnstyledLink>
                    </div>
                  </article>
                </section>
              )}
            </InView>
            <InView triggerOnce rootMargin="-40% 0px">
              {({ inView, ref }) => (
                <section
                  ref={ref}
                  className={`
                    py-10 
                    ${inView && "fade-in-start"}
                  `}
                >
                  <article data-fade="2">
                    <div className="flex">
                      <h1
                        className="
                          text-2xl 
                          font-bold 
                          mb-5  
                          px-[1px] 
                          bg-gradient-to-r 
                          from-[#ece8e8] 
                          to-[#EAEAEA
                        "
                      >
                        Featured Posts
                      </h1>
                    </div>
                    <div>
                      <div
                        className="
                          grid 
                          gap-5 
                          sm:grid-cols-2 
                          lg:grid-cols-3
                        "
                      >
                        <BlogCard small title="" desc="" dateUp="" date="" look="" srcImage={"/test.jpg"} />
                      </div>
                      <div className="mt-10">
                        <UnstyledLink
                          href={"/blog"}
                          className="
                            small-btn 
                            px-2 
                            py-1 
                            text-base 
                            font-medium 
                            shadow-lg 
                            rounded
                          "
                        >
                          See more
                        </UnstyledLink>
                      </div>
                    </div>
                  </article>
                </section>
              )}
            </InView>
            <InView>
              {({ ref, inView }) => (
                <section
                  ref={ref}
                  className={`
                    mt-10
                    py-8 
                    ${inView && "fade-in-start"}
                  `}
                >
                  <article data-fade="3">
                    <div className="flex">
                      <h1
                        className="
                          text-2xl 
                          font-bold 
                          mb-8  
                          px-[1px] 
                          bg-gradient-to-r 
                          from-[#ece8e8] 
                          to-[#EAEAEA] 
                        "
                      >
                        Project posts
                      </h1>
                    </div>
                    <div>
                      <ul
                        className="
                          flex 
                          justify-between
                          items-center 
                          gap-4
                        "
                      >
                        <Cart className="flex-col justify-start p-2">
                          <h1 className="text-lg font-semibold"></h1>
                          <div className="w-full py-2">
                            <Image className="w-full shadow-md" height={100} width={100} src={"/test.jpg"} alt="hi" />
                          </div>
                          <p className=" text-sm font-light h-10 overflow-hidden"></p>
                          <div
                            className="
                        flex 
                        mt-2 
                        items-center 
                        justify-start
                      "
                          >
                            <Underline href="/test">
                              <span>Lee more</span>
                              <BiRightArrowAlt />
                            </Underline>
                          </div>
                        </Cart>
                      </ul>
                      <div className="mt-10">
                        <UnstyledLink
                          href={"/projects"}
                          className="
                      small-btn 
                      px-2 
                      py-1 
                      text-base 
                      font-medium 
                      shadow-lg 
                      rounded
                    "
                        >
                          See more
                        </UnstyledLink>
                      </div>
                    </div>
                  </article>
                </section>
              )}
            </InView>
            <InView>
              {({ ref, inView }) => (
                <section
                  ref={ref}
                  className={`
                    mt-10
                    py-8 
                    ${inView && "fade-in-start"}
                  `}
                >
                  <article data-fade="3">
                    <div className="flex">
                      <h1
                        className="
                          text-2xl 
                          font-bold 
                          mb-1  
                          px-[1px] 
                          bg-gradient-to-r 
                          from-[#ece8e8] 
                          to-[#EAEAEA] 
                        "
                      >
                        Library posts
                      </h1>
                    </div>
                    <p className="mb-5 text-sm font-light text-neutral-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div>
                      <ul
                        className="
                          flex 
                          justify-between
                          items-center 
                          gap-4
                        "
                      >
                        <Cart className="p-8">
                          <div>
                            <h1>tes</h1>
                          </div>
                        </Cart>
                        <Cart className="p-8">
                          <div>
                            <h1>tes</h1>
                          </div>
                        </Cart>
                        <Cart className="p-8">
                          <div>
                            <h1>tes</h1>
                          </div>
                        </Cart>
                      </ul>
                    </div>
                  </article>
                </section>
              )}
            </InView>
          </main>
        </Container>
      </Layout>
    </div>
  );
};

export default Home;
