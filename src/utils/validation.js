import { string } from "yup";

export const fullname = string()
  .required("Nama lengkap tidak boleh kosong")
  .min(4, "Nama Lengkap minimal 4 karakter")
  .matches(/^[a-zA-Z\s]+$/, "Format nama lengkap tidak sesuai");

export const email = string()
  .email("Format email tidak sesuai")
  .required("Email tidak boleh kosong");

export const password = string()
  .required("Password tidak boleh kosong")
  .matches(
    /^(?=.*[A-Z])(?=.*\d).{6,12}$/,
    "Password harus 6-12 karakter, minimal terdapat satu angka dan satu huruf kapital.",
  );
