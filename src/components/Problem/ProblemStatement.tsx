import useProblemStore from "@/zustang/useProblemStore";
import TimeCounter from "../Timer/timer";
const ProblemStatement = () => {
  const { problems } = useProblemStore();

    const paragraphs = problems.Contraints.split('\n').map((paragraph, index) => (
    // Map each part to a <p> element with a unique key
    <p key={index}>{paragraph}</p>
  ));
  
  return (
    <>
      <div className="w-full h-full overflow-scroll p-3 text-sm rounded-lg text-zinc-200 bg-neutral-800">
        <div>
          <TimeCounter />
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">{problems.Title}</h1>
            <div className="bg-green-600 text-white py-1 px-2 rounded-lg font-semibold tex-sm w-fit h-fit ">
              {problems.Level}
            </div>
          </div>
        </div>
        <h1 className="mt-2  tracking-wider">{problems.Statement}</h1>
        <h1 className="font-bold my-3">Input:</h1>
        <code className=" p-2 rounded-sm bg-neutral-700">{problems.Input}</code>
        <h1 className="font-bold my-3">Output:</h1>
        <code className="bg-neutral-700 p-2 rounded-sm">{problems.Output}</code>
        <h1 className="font-bold my-3">Contraints:</h1>
        <div className="tracking-wide text-m bg-neutral-700 p-2 rounded-sm">
          {paragraphs}
        </div>
      </div>
    </>
  );
};

export default ProblemStatement;
