import StackBlitzEditor from "@/components/StackBlitzEditor/StackBlitzEditor"
import ProblemView from "@/components/FrontendProblem/ProblemView";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const FrontendProblemPage=()=>{
  
    return (
      <>
        <div className="flex justify-between w-full px-3 py-2 bg-neutral-950">
          <div>
            <section className="flex w-full justify-between pr-3 items-center">
              <Link
                to={"/frontendproblemlist"}
                className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800"
              >
                <FaArrowLeft color="white" fontSize={20} />
              </Link>
            </section>
            <div className="h-[92vh] flex bg-neutral-950 justify-between pt-3">
              <ProblemView />
              <StackBlitzEditor width="w-[70%]" height="h-full" />
            </div>
          </div>
        </div>
      </>
    );
}

export default FrontendProblemPage