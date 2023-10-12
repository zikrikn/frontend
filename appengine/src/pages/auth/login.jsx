import { AuthLayout } from "@/layouts/auth-layout";
import { AuthForm } from "@/components/form/auth-form";
import { loginFormFields } from "@/constants/form-field";

export default function Login() {
  return (
    <AuthLayout>
      <AuthForm fields={loginFormFields} submitText="Masuk" />
    </AuthLayout>
  );
}
