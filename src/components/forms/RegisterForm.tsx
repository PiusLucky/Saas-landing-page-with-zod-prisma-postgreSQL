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

const FormSchema = z.object({
  full_name: z
    .string()
    .min(3, {
      message: "Full name must be at least 3 characters.",
    })
    .max(50, {
      message: "Full name must be at most 50 characters.",
    }),
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

function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
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
