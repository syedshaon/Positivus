"use client";
import React from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "./parts/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(960, {
      message: "Message must not be longer than 960 characters.",
    }),
  type: z.enum(["sayhi", "quote"], {
    required_error: "You need to select a notification type.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Must be a valid email address.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      username: "",
      bio: "",
      type: "sayhi",
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
    <div className="container my-20">
      <div className="header lg:flex text-center items-center gap-5 mb-10">
        <h3 className="text-3xl p-1 font-bold m-0 inline-block lg:block self-center bg-csGreen rounded-md">Contact Us</h3>
        <p className="max-w-[600px] lg:text-left lg:mr-auto">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>
      <div className="flex justify-between items-center p-5 py-10 lg:pr-0 bg-csLGray min-h-[400px] rounded-2xl">
        <div className="form h-full w-full lg:w-3/4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-10/12 mx-auto space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} className="flex space-y-1">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="sayhi" />
                          </FormControl>
                          <FormLabel className="font-normal">Say Hi</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="quote" />
                          </FormControl>
                          <FormLabel className="font-normal">Get a Quote</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" className="border border-csGray" {...field} />
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
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input className="border border-csGray" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Message" className="border border-csGray resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button classes="!w-full" text="Submit" />
            </form>
          </Form>
        </div>
        <div className="hidden lg:flex h-full w-1/4 items-center overflow-hidden justify-end">
          <Image className="h-full w-auto" src="/Illustration.png" width={692} height={649} alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
