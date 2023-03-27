"use client";
import question_pic from "~/../assets/question_marks.png";
import fire_pic from "~/../assets/fire.gif";
import { type NextPage } from "next";
import Image from "next/image";
import Layout from "~/components/Layout";
import { useState } from "react";
const Landing: NextPage = () => {
  const FAQStateInit = [false, false, false];
  const [FaqState, setFaqState] = useState([...FAQStateInit]);
  const handleFAQClick = (key: number) => {
    const tempFaqState = FAQStateInit;
    tempFaqState[key] = !FaqState[key];
    setFaqState(tempFaqState);
  };
  return (
    <Layout>
      <div className="h-full w-full">
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
                src={question_pic}
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
        <section className="mx-16 flex h-screen flex-col justify-center">
          <div className="mx-auto space-y-16 text-center">
            <h1>What Students are Saying</h1>
            <div className="grid h-full max-w-screen-lg grid-cols-3 grid-rows-1">
              <div className="-z-50 flex h-full w-fit -rotate-3 flex-col justify-between rounded-lg border-2 bg-background p-8 shadow-default">
                <h4>
                  &quot;I think this is kinda illegal but uhhhhh anyways
                  gaslight gatekeep girlboss&quot;
                </h4>
                <p>Praneel, 2420</p>
              </div>
              <div className="flex h-full w-fit flex-col justify-between rounded-lg border-2 bg-background p-8 shadow-default">
                <h4>
                  &quot;This app helped me boost my WAM from 0 to 69&quot;
                </h4>
                <p>Michael, 2023</p>
              </div>
              <div className="-z-50 flex h-full w-fit rotate-3 flex-col justify-between rounded-lg border-2 bg-background p-8 shadow-default">
                <h4>
                  &quot;Made me from #ZeroWamNerd to #AcademicWeapon69 fr
                  fr&quot;
                </h4>
                <p>Eoin, 2069</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-16 flex h-screen flex-col justify-center">
          <div className="mx-auto w-full space-y-8 text-center">
            <h1>Frequently Asked Questions</h1>
            <div className="flex flex-col space-y-8 lg:px-32">
              {[...Array(3)].map((faq, key) => {
                console.log(FaqState[key]);
                return FaqState[key] === false ? (
                  <button
                    key={key}
                    className="flex h-fit flex-row justify-between rounded-lg border-2 p-4 shadow-default"
                    onClick={() => handleFAQClick(key)}
                  >
                    <h4 className="font-thin">Is this Legal?</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 96 960 960"
                      width="32"
                    >
                      <path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z" />
                    </svg>
                  </button>
                ) : (
                  <button
                    key={key}
                    className="flex h-fit flex-col space-y-4 rounded-lg border-2 border-accent-1 p-4 text-accent-1 shadow-default"
                    onClick={() => handleFAQClick(key)}
                  >
                    <div className="flex w-full flex-row justify-between fill-accent-1">
                      <h4 className="font-thin">Is this Legal?</h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        viewBox="0 96 960 960"
                        width="32"
                      >
                        <path d="M200 606v-60h560v60H200Z" />
                      </svg>
                    </div>
                    <p>
                      Absolutely, It is perfectly legal until you are caught
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
        <section className="mx-16 flex h-screen flex-col justify-center">
          <div className="h-full w-full space-y-8 text-center align-middle">
            <div className="inline-block h-3/5 w-4/5 rounded-2xl bg-accent-1">
              <Image
                className="h-full w-full rounded-2xl object-cover opacity-30"
                src={fire_pic}
                alt="fire"
              />
            </div>
            <div className="space-y-8">
              <h1>Our Sponsors</h1>
              <div className="grid grid-cols-5 grid-rows-1">
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </div>
          </div>
        </section>
        <footer className="flex h-fit flex-row justify-between bg-text p-4 text-background">
          <p>Copyright © CSESoc Trainee 3 23T1</p>
          <div className="space-x-4">
            <button>Hi</button>
            <button>Hi</button>
            <button>Hi</button>
            <button>Hi</button>
            <button>Hi</button>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Landing;
