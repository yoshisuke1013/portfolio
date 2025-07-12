import { ContactSchema } from "@/schemas/contactSchema";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = ContactSchema.parse(body);

    // 実際のアプリケーションでは、ここでデータベースへの保存や
    // メール送信などの処理を実装します

    return NextResponse.json(
      {
        success: true,
        message: "お問い合わせを受け付けました",
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("APIエラー:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "バリデーションエラー",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
