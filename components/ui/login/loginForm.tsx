"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "../input";

export const phoneSchema = z.object({
  phone: z.string().refine((value) => /^0?[3-9]\d{9}$/.test(value), {
    message: "Invalid number.",
  }),
});

export default function LoginForm({
  onSubmit,
  isLoading,
}: {
  onSubmit: (values: z.infer<typeof phoneSchema>) => Promise<void>;
  isLoading: boolean;
}) {
  const form = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: "" },
  });
  //   const { error } = useFormField();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-white"
      >
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-bold">Phone No:</FormLabel>
              <FormControl>
                <div
                  className={cn(
                    "flex w-full gap-4 rounded-lg border-2 border-[#ffffff4d] bg-gray-800 py-3 px-6 font-semibold text-white"
                  )}
                >
                  <p>+91</p>
                  <Input
                    placeholder="Enter your phone number"
                    {...field}
                    inputMode="numeric"
                    disabled={isLoading}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {isLoading ? "Sending..." : "GET OTP"}
        </Button>
      </form>
    </Form>
  );
}
