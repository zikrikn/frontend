import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation } from "react-router-dom";

import authApi from "@/api/auth";
import { FormField, FormItem, FormControl, FormMessage } from "./form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApi } from "@/hooks/use-api";
import { toast } from "@/hooks/use-toast";
import { registerSchema, loginSchema } from "@/utils/schema";
import { handleAuth } from "@/utils/auth";

export function AuthForm({ fields, submitText }) {
  const { pathname } = useLocation();

  const authType = pathname.replace("/auth/", "");
  const authSchema = {
    register: registerSchema,
    login: loginSchema,
  };

  const { loading, request } = useApi(authApi[authType]);

  const form = useForm({
    resolver: yupResolver(authSchema[authType]),
  });

  const requestAuth = async (data) => {
    const response = await request(data);

    toast({
      variant: response.status ? "default" : "destructive",
      title: response.status ? "Authentikasi berhasil" : "Authentikasi gagal",
      description: response.message,
    });

    if (response.status) {
      handleAuth(response.data.token);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(requestAuth)}>
        <div className="flex flex-col space-y-4">
          {fields.length
            ? fields.map((input) => (
                <FormField key={input.name} name={input.name}>
                  <FormItem>
                    <FormControl>
                      <Input
                        label={input.displayName}
                        {...form.register(input.name)}
                        {...input}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              ))
            : false}
        </div>
        <Button
          loading={loading}
          text={submitText}
          disabled={loading}
          size="lg"
          className="w-full mt-8"
        >
          {submitText}
        </Button>
      </form>
    </FormProvider>
  );
}
