import { NextPage, NextComponentType } from "next";
import Layout from "~/components/Layout"
import RocketLaunchIcon from "@heroicons/react/24/solid/RocketLaunchIcon"
import FireIcon from "@heroicons/react/24/solid/FireIcon"
import ArrowLongRightIcon from "@heroicons/react/24/solid/ArrowLongRightIcon"
import { useEffect, useState } from "react";
import Link from "next/link";
import { allPostData } from "~/data/dummy";
import AllPosts from "~/components/Home/AllPosts";
import SearchBar from "~/components/Universal/SearchBar";
import AllCourses from "~/components/Home/AllCourses";
import Notifications from "~/components/Home/Notifications";

const Home: NextPage = () => {
  // do logic here
  const [query, setQuery] = useState("");
  // do something with query
  const [forYouSelected, setForYouSelected] = useState(true);

  useEffect(() => {
    // logic in here
    // api call to search up the results
    console.log(query);
    // make new api call for post data based on query
    // const newPostData = fetch""
    // setAllPosts(newPostData);
  }, [query]);


  return (
    <Layout>
      <div className="flex flex-row">
        {/* Middle Content */}
        <div className="w-3/5 px-8 py-12 h-screen overflow-y-scroll">
          {/* Search + Notif */}
          <div className="flex flex-row w-full space-x-4">
            <SearchBar onChange={(value) => setQuery(value)} />
            <Notifications />
          </div>

          {/* Tab Group */}
          <div className="mt-8 flex flex-row space-x-4">
            <ForYouTab selected={forYouSelected} onChange={(res: boolean) => setForYouSelected(res)} />
            <TopTab selected={!forYouSelected} onChange={(res: boolean) => setForYouSelected(res)} />
          </div>

          {/* Posts Section -> Maybe an array of posts or smth idk */}
          <AllPosts query={query} selected={forYouSelected} />
        </div>

        {/* Right Bar */}
        <div className="h-screen w-2/5 px-8 py-12">
          {/* Header Courses Watched*/}
          <div>
            <div className="flex flex-row justify-between">
              <h4>Courses Watched</h4>
              <Link href="" className="text-accent-1 flex flex-row space-x-1">
                <p className="text-color-accent-1">More</p>
                <ArrowLongRightIcon className="h-6 w-6" />
              </Link>
            </div>

            <AllCourses/>
          </div>
          <div className="h-0.5 my-12 w-full bg-secondary"></div>
          <div>
            {/* Header Recommended */}
            <div className="flex flex-row justify-between mt-12">
              <h4>Recommended users</h4>
              <Link href="" className="text-accent-1 flex flex-row space-x-1">
                <p className="text-color-accent-1">More</p>
                <ArrowLongRightIcon className="h-6 w-6" />
              </Link>
            </div>

            <UsersList />
          </div>

        </div>
      </div>
    </Layout>
  );
};

const ForYouTab = ({ selected, onChange }: { selected: boolean, onChange: CallableFunction }) => {
  return (
    <button onClick={() => onChange(true)} className={`rounded-full h-10 w-36 flex flex-row space-x-2 justify-center py-2 ${selected ? "text-white bg-accent-1" : "text-text/50 bg-white"}`}>
      <RocketLaunchIcon className="h-6 w-6" />
      <p>For you</p>
    </button>
  )
}

const TopTab = ({ selected, onChange }: { selected: boolean, onChange: CallableFunction }) => {
  return (
    <button onClick={() => onChange(false)} className={`rounded-full h-10 w-36 flex flex-row space-x-2 justify-center py-2 ${selected ? "text-white bg-accent-1" : "text-text/50 bg-white"}`}>
      <FireIcon className="h-6 w-6" />
      <p>Top</p>
    </button>
  )
}

const UsersList = () => {
  return (
    <div className="h-full">
UserList Lmao
    </div>
  )
}

export default Home;