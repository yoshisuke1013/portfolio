import Content from "@/components/content";

export default function Contact() {
  return (
    <Content title="Contact">
      <form className="space-y-6 mt-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className={"w-full rounded-md border px-3 py-2"}
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={"w-full rounded-md border px-3 py-2"}
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className={"w-full rounded-md border px-3 py-2"}
            placeholder="お問い合わせ内容を入力してください"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-[var(--foreground)] text-[var(--background)] w-full flex items-center justify-center shadow-sm"
        >
          Send
        </button>
      </form>
    </Content>
  );
}
