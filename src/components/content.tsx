import { Terminal } from "lucide-react";

type ContentProps = {
  title: string;
  content: string;
};

export default function Content(props: ContentProps) {
  return (
    <section
      id="about"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-5xl ">
                {props.title}
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[600px] md:h-[600px] lg:h-[600px] rounded-lg overflow-hidden border shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5/6 h-4/5 bg-background rounded-lg shadow-lg p-4 overflow-hidden">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between pb-2 border-b">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>

                      <div className="ml-2 flex items-center text-lg text-muted-foreground">
                        <Terminal className="w-5 h-5 mr-2" />
                        terminal
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden font-mono text- p-2">
                      <pre className="text-primary py-4">
                        <code
                          className="whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{ __html: props.content }}
                        />
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
