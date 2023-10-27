import Container from "@/components/Container";
import SelectMenu from "@/components/selects/SelectMenu";
import Layout from "@/components/layouts/Layout";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <Layout>
        <Container>
          <main className="flex justify-start my-10 space-x-12">
            <section className="my-5">
              <div className="mb-5">
                <h1 className=" text-3xl font-semibold mb-1 font-serif">About</h1>
                <h1 className="text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#866ee7] via-[#ea60da] to-[#272351]">Rizky Saputra</h1>
              </div>
              <div className="flex-col space-y-8 pr-4">
                <div className="text-gray-600 font-light text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita pariatur totam libero impedit. Adipisci, nihil? Ullam veritatis architecto natus? Nam, odio. Dolores quam
                  aspernatur quia nam est eius consequuntur sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a, odio quod sequi totam blanditiis maiores quaerat. Illum rerum
                  quod quidem hic soluta aspernatur deleniti quos dicta fugiat quae. Incidunt!
                </div>
                <div className="font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum consequatur alias vel, dolore totam laudantium mollitia aliquid dolor deleniti odit aliquam minus tenetur eligendi
                  voluptatibus ducimus molestiae eius aperiam repellendus?
                </div>
                <div className="font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis sapiente, rem quisquam iure mollitia necessitatibus laudantium, animi itaque possimus similique reprehenderit
                  blanditiis amet aut ad, molestias quam. Expedita, nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sed.
                </div>
              </div>
            </section>
            <section className="w-[70%] my-28">
              <Image className="w-full rounded-md shadow" src={"/profile.jpg"} alt="profile" width={100} height={100} />
            </section>
          </main>
        </Container>
      </Layout>
    </div>
  );
};

export default About;
