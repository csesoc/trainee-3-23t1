"use client";
import question_pic from "~/../assets/question_marks.png";
import fire_pic from "~/../assets/fire.gif";
import unsw_pic from "~/../assets/unsw.png";
import csesoc_pic from "~/../assets/csesoc1.png";
import google_pic from "~/../assets/google-logo.png";
import pringles_pic from "~/../assets/pringles.svg.png";
import oreo_pic from "~/../assets/oreo.png";
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
        <nav className="sticky top-0 z-50 flex flex-row justify-between bg-transparent bg-opacity-80 py-4 pr-8 backdrop-blur-md">
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
                className="-z-50 h-full w-full object-cover lg:w-3/6 lg:max-w-lg lg:-translate-y-16"
                alt="?"
              />
            </div>
          </div>
        </section>
        <section className="mx-16 flex h-screen flex-col justify-center">
          <div className="mx-auto space-y-16 text-center">
            <h1>Our Features</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-8">
              {[...Array(6)].map((e, i) => {
                return (
                  <button
                    key={i}
                    className="h-fit w-full space-y-4 rounded-lg border-2 border-opacity-20 p-8 text-left shadow-default hover:shadow-default-solid"
                  >
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
                );
              })}
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
          <div className="mx-auto w-full space-y-16 text-center">
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
          <div className="h-full w-full space-y-16 text-center align-middle">
            <div className="relative inline-block h-3/5 w-4/5 rounded-2xl bg-accent-1">
              <div className="absolute z-30 flex h-full w-full flex-col justify-center space-y-4 text-background shadow-default">
                <h1 className="">Join Academic Misconduct Now</h1>
                <h4 className="pb-8 font-light">
                  Join now or you will regret it. This is your last chance.
                </h4>
                <button className="w-fit self-center rounded-full bg-background px-8 py-4 text-accent-1">
                  <h4> Sign up Now</h4>
                </button>
              </div>

              <Image
                className="-z-30 h-full w-full rounded-2xl object-cover opacity-20"
                src={fire_pic}
                alt="fire"
              />
            </div>
            <div className="space-y-8">
              <h1>Our Sponsors</h1>
              <div className="grid grid-cols-5 grid-rows-1 grayscale">
                <Image
                  className="h-32 w-full  object-contain"
                  src={unsw_pic}
                  alt="fire"
                />
                <Image
                  className="h-32 w-full  object-contain invert"
                  src={csesoc_pic}
                  alt="fire"
                />
                <Image
                  className="h-32 w-full  object-contain"
                  src={google_pic}
                  alt="fire"
                />
                <Image
                  className="h-32 w-full  object-contain"
                  src={pringles_pic}
                  alt="fire"
                />
                <Image
                  className="h-32 w-full  object-contain"
                  src={oreo_pic}
                  alt="fire"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="flex h-fit flex-row justify-between bg-text p-4 text-background">
          <p>Copyright © CSESoc Trainee 3 23T1</p>
          <div className="space-x-4">
            <button className="rounded-full bg-accent-1 fill-background p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height="16"
                width="16"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </button>
            <button className="rounded-full bg-accent-1 fill-background p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="16"
                width="16"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </button>
            <button className="rounded-full bg-accent-1 fill-background p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                height="16"
                width="16"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </button>
            <button className="rounded-full bg-accent-1 fill-background p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="16"
                width="16"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Landing;
