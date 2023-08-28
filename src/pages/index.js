import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-blue-dark" style={{ overflow: "hidden" }}>
      <div className="container bg-blue-dark h-screen flex flex-col justify-between p-24">
        <header className="flex items-stretch items-right">
          <div className="flex-1 grow"></div>
          <div className="flex-1 grow ">
            <div className="flex flex-row-reverse">
              <a className="m-1">GitHub</a>
              <a className="m-1">LinkedIn</a>
              <a className="m-1">Curriculo</a>
            </div>
          </div>
        </header>
        <section
          className={`flex flex-col justify-between items-center ${inter.className}`}
        >
          <div>
            <h1 className="font-bold text-7xl">William Moreira da Silva</h1>
            <span className="text-xl font-serif tracking-widest">
              Engenheiro do Software
            </span>
          </div>
        </section>
        <footer className="flex flex-col items-center">By William</footer>
      </div>
    </main>
  );
}
