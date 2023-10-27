"use client";

import Container from "@/components/Container";
import Layout from "@/components/layouts/Layout";
import React from "react";
import { useLouded } from "@/hooks/useLouded";
import TitlePage from "@/components/content/TitlePage";

const Library = () => {
  const isLouded = useLouded();

  return (
    <div>
      <Layout>
        <Container>
          <main className={`${isLouded && "animate-fade-in-down"} py-10`}>
            <section className="mb-5">
              <TitlePage title="Projects" desc="Lorem ipsum dolor sit amet consectetur adipisicing." />
            </section>
            <section>
              <div>{/* TODO: Add projects */}</div>
              <div className="border"></div>
            </section>
          </main>
        </Container>
      </Layout>
    </div>
  );
};

export default Library;
