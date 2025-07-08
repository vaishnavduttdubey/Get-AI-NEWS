import { useEffect } from "react";
import useDataStore from "@/zustang/useDataStore";
import TableList from "@/components/Table/TableList";

const ProblemList = () => {
  const { problems, getProblems } = useDataStore();

  useEffect(() => {
    getProblems();
  }, []);

  return (
    <>
      <section className="h-[100vh] bg-neutral-950">
        <div className="relative h-fit w-full bg-neutral-950">
          
          <div className="lg:px-20 md:px-20py-3 px-3">
            <div>
              <TableList problems={problems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemList;
