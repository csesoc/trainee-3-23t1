"use client";

import { type NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
const Home: NextPage = () => {
  const path = useRouter().route;
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
