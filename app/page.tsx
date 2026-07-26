import Image from "next/image";

export default function Gateway() {
  return (
    <main
      className="w-full h-screen relative"
    >
        <Image
            src="/fares.jpg"
            alt="d"
            fill
            className="object-cover"
          />
          <h1 className=" absolute bottom-15 text-9xl font-black left-20 z-10  text-white text-shadow-lg/30 ">Fares</h1>
    </main>
  );
}