"use client";

import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();

  function navigate(href: string) {
    if (!document.startViewTransition) {
      router.push(href);
      return;
    }

    document.startViewTransition(() => {
      router.push(href);
    });
  }

  return (
    <nav className="navbar text-white text-shadow-lg/30 px-50 " style={{ viewTransitionName: "navbar" }}>
      <h1 className="font-bold text-3xl cursor-pointer" onClick={() => navigate("/")}>
        Fares
      </h1>

      <div className=" flex gap-5 font-bold text-3xl ">
        <h1 className="font-bold cursor-pointer" onClick={() => navigate("/gateway")}>
          Klauspillon
        </h1>

        <h1 className="font-bold cursor-pointer" onClick={() => navigate("/colony")}>
          Machine
        </h1>
      </div>
    </nav>
  );
}