import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditorInput from "./EditorInput";
import EditorOutput from "../Output/EditorOutput";

interface InputProps {
  input: string;
  output: unknown;
  onInputChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ input, output, onInputChange }) => {
  return (
    <Tabs defaultValue="output" className="w-[420px]">
      {/* Tab headers */}
      <TabsList className="grid grid-cols-2 bg-slate-800 text-sm text-zinc-200">
        <TabsTrigger value="output">Output</TabsTrigger>
        <TabsTrigger value="input">Input</TabsTrigger>
      </TabsList>

      {/* Output tab */}
      <TabsContent value="output">
        <Card className="h-[160px] overflow-auto bg-slate-900 p-3">
          <EditorOutput output={output} />
        </Card>
      </TabsContent>

      {/* Input tab */}
      <TabsContent value="input">
        <Card className="h-[160px] bg-slate-900 p-3">
          <EditorInput value={input} onChange={onInputChange} />
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Input;
