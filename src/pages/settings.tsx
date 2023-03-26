import { type NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
const Settings: NextPage = () => {
  const path = useRouter().route;
  return (
    <Layout>
      <h1>{path}</h1>
    </Layout>
  );
};

export default Settings;
