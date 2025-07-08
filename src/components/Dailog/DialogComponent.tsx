import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useProblemStore from "@/zustang/useProblemStore";
import { useState, useEffect, useRef } from "react";
import geminiService from "@/geminiService/geminiService";
import Markdown from "markdown-to-jsx";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // or any other theme you prefer

interface DialogProps {
  code: string;
  language: string;
}

interface CodeBlockProps {
  className: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({  children }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, []);

  return (
    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm whitespace-pre-wrap">
      <code ref={codeRef} className="">
        {children}
      </code>
    </pre>
  );
};

const DialogComp: React.FC<DialogProps> = ({
  code = "",
  language = "",
}: DialogProps) => {
  const { problems } = useProblemStore();
  const [geminiResp, setGeminiResp] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);

  const handleGemini = () => {
    setProcessing(true);
    if (!language) {
      language = "javascript";
    }
    let req = "";
    if (code) {
      req = `help me with ${problems.Title}, I tried the code: ${code} + in js`;
    } else {
      req = `help me with ${problems.Title} in js`;
    }

    console.log(language);

    geminiService
      .run(req)
      .then((res: string) => {
        setGeminiResp(res);
        setProcessing(false);
      })
      .catch((err: any) => {
        console.log(err);
        setProcessing(false);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-neutral-800 outline-none font-bold  min-w-20 hover:bg-neutral-700"
          onClick={handleGemini}
        >
          {processing ? "Processing..." : "Ask Gemini"}
        </Button>
      </DialogTrigger>
      {geminiResp ? (
        <DialogContent className="max-w-[850px] max-h-[400px] w-full overflow-x-auto overflow-y-auto">
          <div className="grid">
            <div className="w-full">
              <Markdown
                className="w-full"
                options={{
                  overrides: {
                    pre: {
                      component: CodeBlock,
                    },
                    code: {
                      component: CodeBlock,
                    },
                  },
                }}
              >
                {geminiResp}
              </Markdown>
            </div>
          </div>
        </DialogContent>
      ) : (
        ""
      )}
    </Dialog>
  );
};

export default DialogComp;
