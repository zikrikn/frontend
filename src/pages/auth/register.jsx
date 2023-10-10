import { AuthLayout } from "@/layouts/auth-layout";
import { AuthForm } from "@/components/form/auth-form";
import { registerFormFields } from "@/constants/form-field";

export default function Register() {
  return (
    <AuthLayout>
      <AuthForm fields={registerFormFields} submitText="Daftar" />
    </AuthLayout>
  );
}
