import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useUser } from "@/context/user-context";
import { cn } from "@/utils/cn";

import Logo from "@/assets/images/circle-logo.webp";
import AuthImg from "@/assets/images/auth-img.jpg";
import { Navigate } from "react-router-dom";

export function AuthLayout({ children }) {
  const { user } = useUser();
  const { pathname } = useLocation();
  const authType = pathname.replace("/auth/", "");

  const authText = {
    register: {
      instruction: "Silahkan isi kolom dibawah untuk mendaftarkan akun anda",
      navText: "Masuk",
      navLink: "/auth/login",
    },
    login: {
      instruction: "Masukan akun anda terlebih dahulu sebelum melanjutkan ",
      navText: "Daftar",
      navLink: "/auth/register",
    },
  };

  if (user) return <Navigate to="/" replace />;

  return (
    <div
      className={cn(
        "flex items-center justify-between",
        "max-w-[1600px] w-full h-full font-inter mx-auto",
        "lg:min-h-[650px] 2xl:max-w-full",
      )}
    >
      {/* Left */}
      <div
        className={cn(
          "flex flex-col justify-center items-center",
          "w-full h-full px-4 py-10 lg:max-w-[550px] 2xl:max-w-[50%]",
        )}
      >
        <div className="mx-auto min-w-[300px] max-w-[400px] w-full 2xl:max-w-2xl">
          <img
            src={Logo}
            alt="logo info bencana"
            className="w-14 h-14 mx-auto"
          />
          <div className="text-center mt-5 w-5/6 mx-auto sm:w-full">
            <h1 className="text-black font-semibold text-xl xl:text-2xl">
              Selamat Datang
            </h1>
            <p className="text-gray text-sm font-medium mt-2">
              {authText[authType].instruction}
            </p>
          </div>
          <div className="mt-16">{children}</div>
          <div className="flex w-fit mx-auto text-sm text-center space-x-1 mt-9">
            <p className="text-gray font-medium ">
              {authType === "register" ? "Sudah " : "Belum "} memiliki akun?
            </p>
            <Link
              to={authText[authType].navLink}
              className="font-semibold text-green"
            >
              {authText[authType].navText}
            </Link>
          </div>
        </div>
      </div>
      {/* Right */}
      <div
        className={cn(
          "items-center justify-start",
          "hidden w-full min-w-[420px]",
          "lg:flex lg:h-full max-h-[1000px]",
          "lg:max-w-[760px] xl:max-w-full 2xl-max-w-[50%] 2xl:max-h-full",
        )}
      >
        <img
          src={AuthImg}
          alt="disaster image"
          className="w-full h-full lg:object-cover transition-all"
          draggable="false"
        />
      </div>
    </div>
  );
}
