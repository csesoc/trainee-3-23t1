"use client";
import pic from "~/../assets/question_marks.png";
import { type NextPage } from "next";
import Image from "next/image";
import Layout from "~/components/Layout";
const Landing: NextPage = () => {
  return (
    <Layout>
      <div className="w-full">
        <nav className="sticky top-0 flex flex-row justify-between bg-transparent bg-opacity-80 py-4 pr-8 backdrop-blur-md">
          <h1 className="pl-8 font-normal text-text">
            Academic<span className="text-accent-1">Misconduct</span>
          </h1>

          <div className="hidden flex-row space-x-4 lg:flex">
            <button className="rounded-2xl bg-accent-1 py-2 px-8 text-secondary hover:border-2 hover:border-accent-1 hover:bg-transparent hover:text-accent-1">
              Sign up
            </button>
            <button className="rounded-2xl border-2 py-2 px-8 text-accent-1 hover:border-accent-1 hover:bg-accent-1 hover:text-background">
              Login
            </button>
          </div>
        </nav>
        <section className="mx-16 flex h-screen flex-col justify-center">
          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div>
                <p className="z-30 text-lg font-normal text-text lg:px-4 lg:text-2xl">
                  By Students for Students
                </p>
                <h1 className="z-30 text-4xl font-normal text-text lg:text-8xl">
                  Academic
                </h1>
                <h1 className="z-30 mb-8 text-4xl font-normal text-accent-1 lg:text-8xl">
                  Misconduct
                </h1>
                <button className="z-30 w-32 rounded-2xl bg-accent-1 py-2 px-8 text-background">
                  Sign up
                </button>
              </div>
              <Image
                src={pic}
                className="h-full w-full object-cover lg:w-3/6 lg:max-w-lg lg:-translate-y-16"
                alt="?"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;
