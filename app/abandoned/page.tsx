import Image from "next/image";

export default function Gateway() {
  return (
    <main
      style={{
        height: "100vh",
  
      }}
    >
        <Image
            src="/abandoned.jpg"
            alt=""
            fill
            className="object-cover"
          />
                    <h1 className=" absolute bottom-15 text-9xl font-black left-20 z-10  text-white text-shadow-lg/30 ">Abandoned</h1>

    </main>
  );
}