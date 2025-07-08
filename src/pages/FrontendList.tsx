import { useEffect } from "react";
import useFrontendStore from "@/zustang/useFrontendStore";
import FrontendTableList from "@/components/FrontendProblem/FrontendTable";

const FrontendList = () => {
  const { Frontendproblems, getFrontendProblems } = useFrontendStore();

  useEffect(() => {
    getFrontendProblems();
  }, []);

  return (
    <>
      <section className="h-[100vh] bg-neutral-950">
        <div className="relative h-fit w-full bg-neutral-950">
          <div className="lg:px-20 md:px-20py-3 px-3">
            <div>
              <FrontendTableList problems={Frontendproblems}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrontendList;
