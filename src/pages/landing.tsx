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
                className="-z-50 h-full  w-full object-cover lg:w-3/6 lg:max-w-lg lg:-translate-y-16"
                alt="?"
              />
            </div>
          </div>
        </section>
        <section className="mx-16 flex h-screen flex-col justify-center">
          <div className="mx-auto space-y-8 text-center">
            <h1>Our Features</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-8">
              <button className="h-fit w-full space-y-4 rounded-lg border-2 border-opacity-20 p-8 text-left shadow-default duration-75 hover:shadow-default-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 96 960 960"
                  width="64"
                >
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
                <h4>Find Fellow Peers to help with your courses</h4>
                <p>idk bro</p>
              </button>
              <button className="h-fit w-full space-y-4 rounded-lg border-2 border-opacity-20 p-8 text-left shadow-default hover:shadow-default-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 96 960 960"
                  width="64"
                >
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
                <h4>Find Fellow Peers to help with your courses</h4>
                <p>idk bro</p>
              </button>
              <button className="h-fit w-full space-y-4 rounded-lg border-2 border-opacity-20 p-8 text-left shadow-default hover:shadow-default-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 96 960 960"
                  width="64"
                >
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
                <h4>Find Fellow Peers to help with your courses</h4>
                <p>idk bro</p>
              </button>
              <button className="h-fit w-full space-y-4 rounded-lg border-2 border-opacity-20 p-8 text-left shadow-default hover:shadow-default-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 96 960 960"
                  width="64"
                >
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
                <h4>Find Fellow Peers to help with your courses</h4>
                <p>idk bro</p>
              </button>
              <button className="h-fit w-full space-y-4 rounded-lg border-2 border-opacity-20 p-8 text-left shadow-default hover:shadow-default-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 96 960 960"
                  width="64"
                >
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
                <h4>Find Fellow Peers to help with your courses</h4>
                <p>idk bro</p>
              </button>
              <button className="h-fit w-full space-y-4 rounded-lg border-2 border-opacity-20 p-8 text-left shadow-default hover:shadow-default-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 96 960 960"
                  width="64"
                >
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
                <h4>Find Fellow Peers to help with your courses</h4>
                <p>idk bro</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;
