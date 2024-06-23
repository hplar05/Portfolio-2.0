"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  SuggestionSchema,
  SuggestionType,
} from "@/lib/validation/suggestionSchema";
import toast, { Toaster } from "react-hot-toast";

export default function SuggestionInput() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SuggestionType>({
    resolver: zodResolver(SuggestionSchema),
  });

  const onSubmit = async (data: SuggestionType) => {
    // todo: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 4000));
    toast.success("Successfully submit!");
    reset();
  };

  return (
    <div className="rounded-lg  w-auto h-auto justify-center flex items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid w-[90%] gap-5 mx-8 my-5"
      >
        <Label htmlFor="message-2 text-lg">Contact Me</Label>
        <Input {...register("name")} type="name" placeholder="Name" />
        {errors.name && (
          <p className="text-red-500">{`${errors.name.message}`}</p>
        )}
        <Input {...register("email")} type="email" placeholder="Email" />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <Textarea
          {...register("text")}
          typeof="text"
          placeholder="Type your message here."
          id="message-2"
        />
        {errors.text && (
          <p className="text-red-500">{`${errors.text.message}`}</p>
        )}
        <p className="text-sm text-muted-foreground">
          Your message will be send.
        </p>
        <div>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
