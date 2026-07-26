import Image from "next/image";

export default function Gateway() {
  return (
    <main
      style={{
        height: "100vh",
     
      }}
    >
        <Image
            src="/machine.jpg"
            alt=""
            fill
            className="object-cover"
          />
              <h1 className=" absolute bottom-15 text-9xl font-black left-20 z-10  text-white text-shadow-lg/30 ">Machine</h1>
    </main>
  );
}