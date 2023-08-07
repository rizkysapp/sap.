"use client";

import Container from "@/components/Container";
import { useLouded } from "@/hooks/useLouded";
import Input from "@/components/form/Input";
import Layout from "@/components/layouts/Layout";
import React from "react";
import Tag from "@/components/content/Tag";
import TitlePage from "@/components/content/TitlePage";
import { BiSearch } from "react-icons/bi";
import BlogCard from "@/components/content/blog/BlogCard";
import ListBox from "@/components/content/DropdownMenu";
import UnstyledLink from "@/components/links/UnstyledLink";
import Dropdown from "@/components/content/DropdownMenu";

const Blog = () => {
  const isLouded = useLouded();

  const search = (q: any) => {
    console.log({ input: q });
  };

  return (
    <div>
      <Layout>
        <Container>
          <main
            className={`
              ${isLouded && "animate-fade-in-down"} 
              py-10
            `}
          >
            <section className="mb-5">
              <TitlePage title="Blog" desc="Lorem ipsum dolor sit amet consectetur adipisicing." />
            </section>
            <section>
              <div
                className="
                  flex 
                  justify-center 
                  items-center
                "
              >
                <Input onSubmit={() => {}} onChange={({ target }: any) => search(target.value)} icon={<BiSearch size={26} />} placeholder="Search blog" className="" />
              </div>
              <div className="mt-3">
                <Tag href="hi">tekno</Tag>
              </div>
              <div
                className="
                  flex 
                  justify-between 
                  items-center 
                  mt-8
                "
              >
                <UnstyledLink
                  href={"h"}
                  className="px-2 
                    py-1 
                    border 
                  border-gray-950 
                    rounded-md 
                    shadow-md 
                    hover:shadow-lg
                    scale-100 
                    transform-gpu 
                    hover:scale-[1.03] 
                    active:scale-[0.97] 
                    transition duration-100
                  "
                >
                  testing
                </UnstyledLink>
                <div>
                  <Dropdown />
                </div>
              </div>
              <div className="border-b-2 border-gray-900 my-5"></div>
            </section>
            <section>
              <div
                className="
                  grid 
                  gap-5 
                  sm:grid-cols-2 
                  lg:grid-cols-3
                "
              >
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
                <BlogCard
                  small
                  title="testong sduys bdsj"
                  desc="vusdf vsdhj furbe vfhsj dfbysgfyurw jwefdbewufbw fwe fwfwbfwfbw"
                  dateUp="20 min read"
                  date="september 21, 2020"
                  look="4.543"
                  srcImage={"/test.jpg"}
                />
              </div>
            </section>
          </main>
        </Container>
      </Layout>
    </div>
  );
};

export default Blog;
