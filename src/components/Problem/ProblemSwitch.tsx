import YouTube from "react-youtube";
import ProblemStatement from "./ProblemStatement";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "../ui/card";
const ProblemSwitch = () => {
  const opts = {
    height: "250",
    width: "350",
  };

  return (
    <Tabs defaultValue="output" className="w-[400px] px-3 ">
      <TabsList className="grid w-full grid-cols-2 h-[40px] bg-neutral-800  text-zinc-200">
        <TabsTrigger value="output">Problem</TabsTrigger>
        <TabsTrigger value="input">Solution</TabsTrigger>
      </TabsList>
      <TabsContent value="output">
        <Card className="h-[330px]">
          <ProblemStatement />
        </Card>
      </TabsContent>
      <TabsContent value="input">
        <Card className="h-[330px] p-3 bg-neutral-800 outline-none">
          <h1 className="text-sm font-bold text-zinc-200 my-2">
            Helpful Video with solution:
          </h1>
          <div>
            <YouTube videoId="UXDSeD9mN-k" opts={opts} />
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProblemSwitch;
