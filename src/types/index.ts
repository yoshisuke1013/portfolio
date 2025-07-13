export type ContentProps = {
  title: string;
  children: React.ReactNode;
};

export type CodeProps = {
  children: React.ReactNode;
};

export type FormStatus = {
  state: "idle" | "submitting" | "success" | "error";
  message: string;
};

export type FormMessageProps = {
  message: string | undefined;
  type: "success" | "error";
};
