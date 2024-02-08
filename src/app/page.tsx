import Image from "next/image";

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
          <h2 className="mb-0 text-lg text-red-100/45">为创作者所有, 由创作者共建, 因创作者而生</h2>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        
      </div>
    </main>
  );
}
