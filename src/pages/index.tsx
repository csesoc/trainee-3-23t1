import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";
import HomePage from "~/components/Pages/HomePage";
import Landing from "~/components/Pages/LandingPage";

const Home: NextPage = () => {
  const [component, setComponent] = useState<ReactNode>();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setComponent(<HomePage />);
    } else if (status === "unauthenticated") {
      setComponent(<Landing />);
    }
  }, [status]);

  return <>{component}</>;
};

export default Home;
