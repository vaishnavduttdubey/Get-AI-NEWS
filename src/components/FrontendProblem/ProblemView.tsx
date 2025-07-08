import useFrontendProblemStore from "@/zustang/useFrontendProblem";
import TimeCounter from "../Timer/timer";

const ProblemView = () => {
  const { problems } = useFrontendProblemStore();

  /** Converts `\n`‑separated constraints to numbered list */
  const renderConstraints = (text: string) =>
    text
      .split("\\n")
      .filter(Boolean)
      .map((line, idx) => (
        <p
          key={idx}
          className="rounded-md bg-slate-800 p-2 text-sm leading-6 tracking-wide text-zinc-200"
        >
          {idx + 1}. {line}
        </p>
      ));

  return (
    <aside className="flex max-h-screen w-[29.5%] flex-col gap-4 overflow-y-auto rounded-lg bg-slate-900 p-4">
      <TimeCounter />

      <h1 className="text-lg font-semibold text-zinc-100">{problems.Title}</h1>

      <p className="whitespace-pre-wrap text-sm tracking-wide text-zinc-200">
        {problems.Statement}
      </p>

      <div>
        <h2 className="mb-2 text-base font-semibold text-zinc-100">
          Constraints
        </h2>
        {renderConstraints(problems.Contraints)}
      </div>
    </aside>
  );
};

export default ProblemView;
