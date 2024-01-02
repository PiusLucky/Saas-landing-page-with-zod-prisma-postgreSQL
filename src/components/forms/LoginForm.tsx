"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import MainButton from "../common/MainButton";
import Link from "next/link";
import { useState } from "react";
import makeApiCallService from "@/service/apiService";
import { useRouter } from "next/navigation";
import { ILoginUserResponse } from "@/types";

const FormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Enter a valid email",
    })
    .min(2, {
      message: "email must be at least 2 characters.",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(25, {
      message: "Password must be at most 25 characters.",
    }),
});

function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);

      const response = await makeApiCallService<ILoginUserResponse>(
        "/api/login",
        {
          method: "POST",
          body: data,
        }
      );

      if (response?.response?.meta?.success) {
        localStorage.setItem("TOKEN", response?.response?.data?.token);
        toast({
          title: "🎉 Login success",
          description: response?.response?.meta?.message,
        });

        router.push("/home");
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <div className="w-full flex flex-col gap-[2.81rem] justify-center items-center h-screen px-4 lg:px-[4rem]">
      <div className="self-start">
        <p className="text-[#333] text-[1.625rem] font-[700]">Hello Again!</p>
        <p className="text-[#333] text-[1.125rem]">Welcome Back</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    {...field}
                    className="h-[3.75rem] w-full rounded-large"
                    startIcon="email"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="h-[3.75rem] w-full rounded-large"
                    startIcon="padlock"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <MainButton
            text="Login"
            classes="h-[3.31rem] rounded-large"
            width="full_width"
            isSubmitable
            isLoading={loading}
          />

          <div className="flex justify-end text-[#191A15] mt-4">
            <Link href="/register">Register Instead?</Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;
