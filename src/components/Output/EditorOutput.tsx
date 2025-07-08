interface EditorOutputProps {
  Output: any;
}

const EditorOutput: React.FC<EditorOutputProps> = ({ Output }) => {
  const OutputDetail = () => {
    let statusId = Output?.status.id;

    if (statusId == 6) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(Output?.compile_output)}
        </pre>
      );
    } else if (statusId == 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(Output.stdout) !== null ? `${atob(Output.stdout)}` : null}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(Output?.stderr)}
        </pre>
      );
    }
  };

  return (
    <div className="w-full h-full rounded-lg bg-[#121a30] p-2 overflow-y-auto overflow-x-auto">
      {Output ? OutputDetail() : ""}
    </div>
  );
};

export default EditorOutput;
