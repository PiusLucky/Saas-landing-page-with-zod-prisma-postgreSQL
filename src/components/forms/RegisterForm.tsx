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
import { CreateUserInputValidation } from "@/lib/validations";
import { useState } from "react";
import makeApiCallService from "@/service/apiService";
import { ICreateUserResponse } from "@/types";
import { useRouter } from "next/navigation";

const FormSchema = CreateUserInputValidation;

function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);

      const response = await makeApiCallService<ICreateUserResponse>(
        "/api/register",
        {
          method: "POST",
          body: data,
        }
      );

      if (response?.response?.meta?.success) {
        toast({
          title: "🎉 Registration success",
          description: response?.response?.meta?.message,
        });

        router.push("/login");
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <div className="w-full flex flex-col gap-[2.81rem] justify-center items-center h-screen px-4 lg:px-[4rem]">
      <div className="self-start">
        <p className="text-[#333] text-[1.625rem] font-[700]">Hello!</p>
        <p className="text-[#333] text-[1.125rem]">Sign Up to Get Started</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Full name"
                    {...field}
                    className="h-[3.75rem] w-full rounded-large"
                    startIcon="user"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
            text="Register"
            classes="h-[3.31rem] rounded-large"
            width="full_width"
            isSubmitable
            isLoading={loading}
          />

          <div className="flex justify-end text-[#191A15] mt-4">
            <Link href="/login">Login Instead?</Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default RegisterForm;
