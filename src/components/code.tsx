import parse from "html-react-parser";
import type { CodeProps } from "@/types/index";

export default function Code(props: CodeProps) {
  return (
    <pre className="text-primary py-4">
      <code className="whitespace-pre-wrap">
        {parse(String(props.children))}
      </code>
    </pre>
  );
}
