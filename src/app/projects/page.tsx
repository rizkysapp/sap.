"use client";

import Container from "@/components/Container";
import Layout from "@/components/layouts/Layout";
import React from "react";
import { useLouded } from "@/hooks/useLouded";
import TitlePage from "@/components/content/TitlePage";

const Projects = () => {
  const isLouded = useLouded();

  return (
    <div>
      <Layout>
        <Container>
          <main className={`${isLouded && "animate-fade-in-down"} py-10`}>
            <section className="mb-5">
              <TitlePage title="Projects" desc="Lorem ipsum dolor sit amet consectetur adipisicing." />
            </section>
          </main>
        </Container>
      </Layout>
    </div>
  );
};

export default Projects;
