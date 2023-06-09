import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "~/components/Layout";
import LoadingSpinner from "~/components/LoadingSpinner";
import CreatePostForm from "~/components/Universal/CreatePostForm";
const Create: NextPage = () => {
  const { push } = useRouter();
  const { status, data: session } = useSession();
  const [course, setCourse] = useState();

  useEffect(() => {
    if (status === "unauthenticated") {
      push("/");
    }
  }, [status]);

  return (
    <Layout>
      <div className="flex h-screen items-center justify-center">
        {!session ? <LoadingSpinner /> : <CreatePostForm userId={session.id} />}
      </div>
    </Layout>
  );
};

export default Create;
