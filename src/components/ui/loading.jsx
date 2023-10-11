import Logo from "@/assets/images/circle-logo.webp";

export function Loading() {
  return (
    <div className="absolute w-screen h-screen bg-white flex justify-center items-center">
      <img
        src={Logo}
        alt="loading logo"
        className="w-14 h-14 lg:w-20 lg:h-20 animate-pulse animate-infinite animate-delay-500"
      />
    </div>
  );
}
