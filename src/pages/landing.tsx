"use client";

import { type NextPage } from "next";
import Layout from "~/components/Layout";
const Landing: NextPage = () => {
  return (
    <Layout>
      <div className="w-full">
        <nav className="flex flex-row justify-between bg-transparent bg-opacity-80 pb-2 pr-8 backdrop-blur-md">
          <h1 className="pl-8 font-normal text-text">
            Academic<span className="text-accent-1">Misconduct</span>
          </h1>

          <div className="flex flex-row space-x-4">
            <button className="rounded-2xl bg-accent-1 py-2 px-8 text-secondary">
              Sign up
            </button>
            <button className="rounded-2xl border-2 py-2 px-8 text-accent-1">
              Login
            </button>
          </div>
        </nav>
        <section className="mx-16 flex h-screen flex-col justify-center">
          <p className="z-30 px-4 text-2xl font-normal text-text">
            By Students for Students
          </p>
          <h1 className="z-30 text-8xl font-normal text-text">Academic</h1>
          <h1 className="z-30 mb-8 text-8xl font-normal text-accent-1">
            Misconduct
          </h1>
          <button className="z-30 w-32 rounded-2xl bg-accent-1 py-2 px-8 text-background">
            Sign up
          </button>
          <div className="absolute z-0 translate-x-[32rem] whitespace-normal bg-gradient-to-bl from-light-accent-1 to-transparent bg-clip-text text-[32rem] font-black text-transparent">
            ????
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;
