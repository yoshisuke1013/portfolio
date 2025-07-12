import * as z from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "お名前は2文字以上で入力してください" })
    .max(50, { message: "お名前は50文字以内で入力してください" }),
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください" }),
  message: z
    .string()
    .min(10, { message: "お問い合わせ内容は10文字以上で入力してください" })
    .max(1000, { message: "お問い合わせ内容は1000文字以内で入力してください" }),
});

export type ContactValues = z.infer<typeof ContactSchema>;
