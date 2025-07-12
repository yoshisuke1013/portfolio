"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { ContactValues, ContactSchema } from "@/schemas/contactSchema";
import FormMessage from "@/components/form-message";
import { cn } from "@/lib/utils";
import Content from "@/components/content";
import type { FormStatus } from "@/types/index";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    state: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactValues) => {
    setFormStatus({ state: "submitting", message: "" });

    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const emailjsPublicId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID!;

    try {
      emailjs
        .send(emailjsServiceId, emailjsTemplateId, data, {
          publicKey: emailjsPublicId,
        })
        .then(
          () => {
            setFormStatus({
              state: "success",
              message: "お問い合わせを受け付けました。",
            });
            reset();
          },
          (err) => {
            console.error("例外エラー:", err);
            setFormStatus({
              state: "error",
              message: `エラーが発生しました。お手数ですが、再度お試しください。`,
            });
          }
        );
    } catch (err) {
      console.error("例外エラー:", err);
      setFormStatus({
        state: "error",
        message: `エラーが発生しました。お手数ですが、再度お試しください。`,
      });
    }
  };

  const isSubmitting = formStatus.state === "submitting";

  return (
    <Content title="Contact">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
        <div className="mt-4">
          {formStatus.state === "success" && (
            <FormMessage type="success" message={formStatus.message} />
          )}
          {formStatus.state === "error" && (
            <FormMessage type="error" message={formStatus.message} />
          )}
        </div>
        <div>
          <label htmlFor="name" className="block mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className={cn(
              "w-full rounded-md border px-3 py-2",
              errors.name ? "border-red-500 focus:border-red-500" : ""
            )}
            placeholder="山田 太郎"
            {...register("name")}
            disabled={isSubmitting}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={cn(
              "w-full rounded-md border px-3 py-2",
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                : ""
            )}
            placeholder="example@email.com"
            {...register("email")}
            disabled={isSubmitting}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className={cn(
              "w-full rounded-md border px-3 py-2",
              errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                : ""
            )}
            placeholder="お問い合わせ内容を入力してください"
            {...register("message")}
            disabled={isSubmitting}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-[var(--foreground)] text-[var(--background)] w-full flex items-center justify-center shadow-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>Send</>
          )}
        </button>
      </form>
    </Content>
  );
}
