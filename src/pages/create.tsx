import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "~/components/Layout";
import CreatePostForm from "~/components/Universal/CreatePostForm";
const Create: NextPage = () => {
  const { push } = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      push("/");
    }
  }, [status]);

  return (
    <Layout>
      <div className="flex h-screen items-center justify-center">
        <CreatePostForm />
      </div>
    </Layout>
  );
};

export default Create;
