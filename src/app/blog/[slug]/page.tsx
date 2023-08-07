"use client";

import Container from "@/components/Container";
import Layout from "@/components/layouts/Layout";
import React from "react";
import Image from "next/image";
import LinkSos from "@/components/links/LinkSos";

const Page = ({ params, searchParams }: any) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log({ params });
  //     console.log({ searchParams });
  //   }, 300);
  // }, [params, searchParams]);

  return (
    <>
      <Layout>
        <Container>
          <main className="py-8">
            <section>
              <div className="w-full h-72">
                <Image src={"/test.jpg"} alt="blogProfil" width={100} height={100} className="w-full object-cover h-full overflow-hidden shadow-lg rounded" />
              </div>
              <div className="mt-4 flex">
                <h1 className="page-h1">Ini title blog perslug {params.slug}</h1>
              </div>
              <p className="mt-2 text-sm font-light text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo culpa vitae unde eum beatae, alias, aliquid saepe eligendi debitis veritatis. Corporis, ex ut alias mollitia
                officiis ipsa corrupti eos?
              </p>
            </section>
            <section className="flex-between mt-14 h-full relative">
              <div className="border w-[80%]">
                <div className="py-5">
                  <div className="mb-7">
                    <h1 className="text-xl font-semibold font-mono mb-2">ini link title</h1>
                    <p
                      className="text-sm
                    text-gray-800"
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi tempora quisquam dolores assumenda voluptatum in expedita eius. Iste illum, inventore, molestiae nihil quod,
                      officia minus sed nisi eos recusandae quidem!
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold font-mono mb-2">Lorem ipsum dolor sit amet.</h2>
                    <p
                      className="text-sm
                    text-gray-800"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam corporis iste veniam veritatis, sunt optio quis iure illo temporibus. Repellendus, et assumenda. Optio,
                      perferendis dignissimos. Animi, at dolorum quas rem earum optio amet quod illo quibusdam ducimus consectetur doloribus omnis nam sapiente explicabo hic, officiis laborum. Quae
                      ipsum nihil minima quia, incidunt, doloremque eius voluptas error facere architecto quidem. Nobis autem maxime, impedit aspernatur iste repellendus corporis nulla excepturi quo
                      suscipit, omnis vero ad, nostrum dolores. Odio distinctio, laboriosam nihil sapiente similique dolores laudantium ipsam, accusantium molestiae qui modi placeat unde, minima
                      obcaecati quis officia? Saepe corrupti nulla similique!
                    </p>
                  </div>
                </div>
              </div>
              <div className="border flex-col justify-start items-center space-y-4 p-4 absolute top-0 right-24 bg-white">
                <LinkSos href="gd">testing 1</LinkSos>
                <LinkSos href="gd">testing 1</LinkSos>
                <LinkSos href="gd">testing 1</LinkSos>
                <LinkSos href="gd">testing 1</LinkSos>
                <LinkSos href="gd">testing 1</LinkSos>
                <LinkSos href="gd">testing 1</LinkSos>
                <LinkSos href="gd">testing 1</LinkSos>
                <LinkSos href="gd">testing 1</LinkSos>
                <LinkSos href="gd">testing 1</LinkSos>
                <LinkSos href="gd">testing 1</LinkSos>
              </div>
            </section>
          </main>
        </Container>
      </Layout>
    </>
  );
};

export default Page;
