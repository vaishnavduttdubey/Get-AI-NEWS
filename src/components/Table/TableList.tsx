import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";
import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";
import useProblemStore from "@/zustang/useProblemStore";
import useDataStore from "@/zustang/useDataStore";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import { useDateStore } from "@/zustang/useDateStore";
import useUserDataStore from "@/zustang/useUserData";
import { FaLock, FaLockOpen, FaLongArrowAltRight } from "react-icons/fa";
import { AlertDialogCustom } from "../ui/AlertDialogCustom";

interface Problem {
  id: string;
  ProblemID: string;
  Tag: string;
  Title: string;
  Statement: string;
  Level: string;
  Input: string;
  Output: string;
  Contraints: string;
}

interface TableListProps {
  problems: Problem[];
}

const TableList: React.FC<TableListProps> = ({ problems }) => {
  const [filter, setFilter] = useState("");
  const { updateProblem } = useProblemStore();
  const navigate = useNavigate();
  const { loading } = useDataStore();
  const { dateData, fetchData } = useDateStore();
  const { userData } = useUserDataStore();
  const [alert, setAlert] = useState({
    open: false,
    title: "",
    content: "",
  });

  useEffect(() => {
    fetchData(userData.uid);
  }, [userData.uid, fetchData]);

  const updateProblemState = (
    id: string,
    title: string,
    statement: string,
    level: string,
    input: string,
    output: string,
    constraints: string
  ) => {
    if (Number(dateData) >= Number(id) || Number(dateData) === -1) {
      updateProblem("Title", title);
      updateProblem("ID", id);
      updateProblem("Statement", statement);
      updateProblem("Level", level);
      updateProblem("Input", input);
      updateProblem("Output", output);
      updateProblem("Contraints", constraints);
      navigate("/problem");
    } else {
      const day = Number(id) + 1;
      setAlert({
        open: true,
        title: "This problem is currently locked",
        content: `You cannot access this problem. This problem is currently locked and will unlock on day ${day}.`,
      });
    }
  };

  const closeAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <>
      <div className="flex flex-col gap-10 py-12">
        <div className="flex flex-wrap gap-3">
          <div className="h-[20px] w-[100%] lg:w-[40%] md:w-[40%]">
            <Input
              type="text"
              placeholder="Search problems"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-zinc-200 bg-neutral-950 z-20"
            />
          </div>
        </div>
        <div className="outline outline-[1px] outline-zinc-200 rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-neutral-800">
                <TableHead className="w-fit text-zinc-200">Day</TableHead>
                <TableHead className="text-zinc-200">Status</TableHead>
                <TableHead className="text-zinc-200">Problems</TableHead>
                <TableHead className="text-zinc-200">Difficulty</TableHead>
                <TableHead className="text-zinc-200">Tags</TableHead>
                <TableHead className="text-zinc-200">Solve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-zinc-200">
              {loading
                ? Array.from({ length: 10 }).map((_, indx) => (
                    <TableRow key={indx} className="hover:bg-neutral-800">
                      <TableCell>
                        <Skeleton className="h-4 w-12" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-16" />
                      </TableCell>
                      <TableCell className="w-[420px]">
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-16" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-24" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-16" />
                      </TableCell>
                    </TableRow>
                  ))
                : problems
                    ?.filter((prob) =>
                      prob.Title.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map((prob, indx) => (
                      <TableRow key={indx} className="hover:bg-neutral-800">
                        <TableCell className="font-medium">
                          Day {indx + 1}
                        </TableCell>
                        <TableCell>
                          {Number(dateData) < Number(prob.id) ? (
                            <FaLock fontSize={17} color="yellow" />
                          ) : (
                            <FaLockOpen fontSize={17} color="yellow" />
                          )}
                        </TableCell>
                        <TableCell
                          className="cursor-pointer w-[420px]"
                          onClick={() =>
                            updateProblemState(
                              prob.id,
                              prob.Title,
                              prob.Statement,
                              prob.Level,
                              prob.Input,
                              prob.Output,
                              prob.Contraints
                            )
                          }
                        >
                          {prob.Title}
                        </TableCell>
                        <TableCell>
                          <p
                            className={
                              prob.Level === "Easy"
                                ? "bg-green-600 text-white p-1 font-bold px-2 w-fit rounded-md"
                                : "bg-yellow-600 p-1 text-white font-bold px-2 w-fit rounded-md"
                            }
                          >
                            {prob.Level}
                          </p>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-slate-800 w-fit h-fit">
                            {prob.Tag}
                          </Badge>
                        </TableCell>
                        <TableCell className="cursor-pointer">
                          <FaLongArrowAltRight
                            fontSize={22}
                            color="#2563eb"
                            onClick={() =>
                              updateProblemState(
                                prob.id,
                                prob.Title,
                                prob.Statement,
                                prob.Level,
                                prob.Input,
                                prob.Output,
                                prob.Contraints
                              )
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <AlertDialogCustom
        open={alert.open}
        onClose={closeAlert}
        title={alert.title}
        content={alert.content}
      />
    </>
  );
};

export default TableList;
