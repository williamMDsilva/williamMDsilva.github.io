import Image from "next/image";
import { Inter } from "next/font/google";
import IconLinkedIn from "@/components/icons/LinkedIn";
import IconGitHub from "@/components/icons/GitHub";
import IconBook from "@/components/icons/Book";
import HoverBadge from "@/components/icons/Hover";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="bg-gradient-to-b from-blue-dark to-black"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="container h-screen flex flex-col justify-between p-6 sm:p-24">
        <header className="flex items-stretch items-right ">
          <div className="flex-1 grow"></div>
          <div className="flex-1 grow ">
            <div className="flex flex-row-reverse items-center">
              <HoverBadge label="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/williammdsilva/"
                  className="flex m-0.5 bg-yellow p-3 text-black font-black rounded-t-lg"
                  target="blank"
                >
                  <IconLinkedIn boxSize="20px" />
                </a>
              </HoverBadge>
              <HoverBadge label="GitHub">
                <a
                  href="https://github.com/williamMDsilva"
                  target="blank"
                  className="flex m-0.5 bg-yellow p-3 text-black font-black rounded-t-lg"
                >
                  <IconGitHub boxSize="20px" />
                </a>
              </HoverBadge>
              <HoverBadge label="Resume">
                <a
                  href="./resume.pdf"
                  download
                  className="flex m-0.5 bg-yellow p-3 text-black font-black rounded-t-lg"
                >
                  <div>
                    <IconBook boxSize="20px" />
                  </div>
                </a>
              </HoverBadge>
              {/*
                <a
                  href="https://medium.com/@william.moreirasilva"
                >
                  Medium
                </a> */}
            </div>
          </div>
        </header>

        <section
          className={`flex flex-col justify-between items-center ${inter.className}`}
        >
          <div className="text-center">
            <h1 className="font-bold text-2xl sm:text-7xl">
              William Moreira da Silva
            </h1>
          </div>
          <div className="flex flex-row items-left">
            <div className="flex-1 flex-grow ">
              <div className="typewriter bg-yellow ">
                <span className="sm:text-2xl font-serif tracking-widest p-2 m-1 text-black font-normal">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-2">
          <div className="border-solid border-l-4 border-yellow p-3">
            <span className="text-3xl font-black">Contacts</span>
          </div>
          <div className="flex">
            <div className="flex-1 flex-col p-2">
              <ul className="list-outside divide-y divide-yellow text-md font-thin">
                <li className="p-1">william.moreirasilva@hotmail</li>
                <li className="p-1">+55 (45) 9 9835 - 2261</li>
                <li></li>
              </ul>
            </div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
          </div>
        </section>
      </div>

      <footer className="flex flex-col items-right">
        <div className="flex flex-col items-center bg-yellow text-black font-thin text-sm">
          <span>By William - {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
