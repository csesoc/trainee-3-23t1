'use client';

import { type NextPage } from "next";
import Layout from "~/components/Layout";
import { useSelectedLayoutSegment } from "next/navigation";

const Home: NextPage = () => {
  console.log(useSelectedLayoutSegment());
  return (
    <Layout>
      <h1>Hello World!</h1>
    </Layout>
  );
};

export default Home;
