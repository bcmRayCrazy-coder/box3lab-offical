"use client"

import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";

import { FaHandHoldingHeart, FaLeaf } from "react-icons/fa";
import { TbAlignBoxLeftTopFilled } from "react-icons/tb";

function Card(props: {
  icon: React.ReactNode,
  title: string,
  subTitle: string,
  introduction: string
}) {
  return (
    <div className="border-red-100/5 border-2 rounded-lg m-8 mt-16 transition-colors hover:border-red-500/60 p-4 shadow-sm shadow-red-300/5 flex-auto card-sm md:card">
      <div className="flex flex-row justify-start items-center">
        <IconContext.Provider value={{ size: '2rem' }}>{props.icon}</IconContext.Provider>
        <h3 className="ml-2 text-2xl">{props.title}</h3>
      </div>
      <p className="before:absolute before:h-8 before:w-12 before:-translate-x-1/6 before:rounded-full before:blur-2xl before:content-[''] before:bg-green-400 mt-2 text-green-400">{props.subTitle}</p>
      <div className="break-words mt-2 text-white/80">
        <p>{props.introduction}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div></div>
        <div className="relative flex place-items-center before:absolute before:h-[500px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-40 after:dark:from-red-900 after:dark:via-[#ff4d01] after:dark:opacity-30 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative"
            src="/logo.svg"
            alt="神岛实验室 Logo"
            width={1720 / 5}
            height={538 / 5}
            priority
          />
        </div>
        <div className="mb-16 flex text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left justify-center">
          <h2 className="mb-0 text-md md:text-xl text-red-100/45">为创作者所有, 由创作者共建, 因创作者而生</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center mb-16">
        <Card icon={<FaHandHoldingHeart />} title="所有" subTitle="For Community" introduction="实验室供创作者使用, 提供许多创作工具。" />
        <Card icon={<TbAlignBoxLeftTopFilled />} title="共建" subTitle="By Community" introduction="创作者们在这里共同发展, 共同建设。" />
        <Card icon={<FaLeaf />} title="生机" subTitle="Of Communnity" introduction="我们相信, 创作者定会带给实验室繁荣" />
      </div>

      <div className="m-32 flex flex-row justify-center">
        <p className="text-md text-red-100/45">&copy; {(new Date()).getFullYear()} 神岛实验室</p>
      </div>
    </main>
  );
}
