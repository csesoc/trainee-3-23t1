import { NextPage, NextComponentType } from "next";
import Layout from "~/components/Layout"
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon"
import BellIcon from "@heroicons/react/24/outline/BellIcon"
import RocketLaunchIcon from "@heroicons/react/24/solid/RocketLaunchIcon"
import FireIcon from "@heroicons/react/24/solid/FireIcon"
import ArrowLongRightIcon from "@heroicons/react/24/solid/ArrowLongRightIcon"
import { SyntheticEvent, useEffect, useState } from "react";
import Link from "next/link";
import { postData } from "~/types/dataTypes";
import { allPostData } from "~/data/dummy";

const Home: NextPage = () => {
  // do logic here
  const [query, setQuery] = useState("");
  const [allPosts, setAllPosts] = useState(allPostData);
  // do something with query

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
          {/*funny back blur thing => "fixed backdrop-blur-sm py-8 w-full" */}
          <div className="flex flex-row space-x-4">
            <SearchBar onChange={(value) => setQuery(value)} />
            <Notifications />
          </div>

          {/* Tab Group */}
          <div className="mt-8 flex flex-row space-x-4">
            <ForYouTab />
            <TopTab />
          </div>

          {/* Posts Section -> Maybe an array of posts or smth idk */}
          <div className="mt-8 space-y-8">
            {allPostData.map((post, index) => {
              return <Post post={post} key={index} />
            })}
          </div>
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

            <CoursesList />
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
  )
}

const SearchBar = ({ onChange }: { onChange: FunctionStringCallback }) => {
  // put logic here
  const handleFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      query: { value: string };
    };
    const query: string = target.query.value;
    onChange(query);
  }

  return (
    <form id="search" onSubmit={handleFormSubmit}>
      <div className="bg-secondary drop-shadow rounded-full flex flex-row w-full space-x-4 py-2 px-4">
        <MagnifyingGlassIcon className="text-black h-6 w-6" />
        <input type="text" id="query" name="search" className="bg-secondary" placeholder="Search for anything..." />
      </div>
    </form>
  )
}

const Notifications = () => {
  return (
    <div className="bg-accent-1 rounded-full w-10 grid place-content-center">
      <BellIcon className="text-white h-6 w-6" />
    </div>
  )
}

const ForYouTab = () => {
  return (
    <div className="bg-accent-1 rounded-full h-10 w-36 flex flex-row space-x-2 justify-center py-2">
      <RocketLaunchIcon className="text-white h-6 w-6" />
      <p className="text-white">For you</p>
    </div>
  )
}

const TopTab = () => {
  return (
    <div className="bg-secondary rounded-full h-10 w-28 flex flex-row space-x-2 justify-center py-2">
      <FireIcon className="text-zinc h-6 w-6" />
      <p className="text-zinc">Top</p>
    </div>
  )
}

const Post = ({ post }: { post: postData }) => {

  return (
    <div className="bg-secondary rounded-3xl w-full h-48 py-8 px-7 flex flex-col space-y-3 border border-background shadow-default">
      {/* Avatar Group */}
      <div className="flex flex-row space-x-4">
        {/* Place profile pic here ig */}
        <div className="bg-accent-1 h-12 w-12 rounded-full"></div>
        <div className="flex flex-col space-y-1">
          <h5>{post.author}</h5>
          <p>in <span className="text-accent-1 font-semibold">{post.course}</span></p>
        </div>
      </div>
      {/* Post Details */}
      <h4 className="truncate">{post.title}</h4>
      <p className="truncate">{post.content}</p>
    </div>
  )
}

const CoursesList = () => {
  return (
    <div className="h-full">
      <Course />
      <Course />
    </div>
  )
}

const Course = () => {
  return (
    <div className="mt-4 h-16 w-full bg-secondary rounded-lg p-4 flex flex-row space-x-4 border border-background shadow-default">
      {/* image lel */}
      <div className="bg-accent-1 h-8 w-8 rounded-full"></div>
      <h5 className="m-1">COMP1511</h5>
    </div>
  )
}

const UsersList = () => {
  return (
    <div className="h-full">

    </div>
  )
}

const User = () => {
  return (
    <div>

    </div>
  )
}

export default Home;