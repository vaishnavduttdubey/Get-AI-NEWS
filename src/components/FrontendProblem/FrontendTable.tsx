import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import useFrontendStore from "@/zustang/useFrontendStore";
import useFrontendProblemStore from "@/zustang/useFrontendProblem";

interface FrontendProblem {
  id: string;
  Title: string;
  Statement: string;
  Level: "Easy" | "Medium" | "Hard";
  Constraints: string;
}

interface TableListProps {
  problems: FrontendProblem[];
}

const FrontendTableList: React.FC<TableListProps> = ({ problems }) => {
  const { Frontendloading } = useFrontendStore();
  const { updateProblem } = useFrontendProblemStore();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const sendData = (prob: FrontendProblem) => {
    updateProblem("ID", prob.id);
    updateProblem("Title", prob.Title);
    updateProblem("Contraints", prob.Constraints);
    updateProblem("Level", prob.Level);
    updateProblem("Statement", prob.Statement);
    navigate("/frontendproblem/react-editor");
  };

  /** Tag color based on difficulty */
  const levelBadge = (level: FrontendProblem["Level"]) => {
    const base = "px-2 py-0.5 rounded-md text-xs font-semibold";
    switch (level) {
      case "Easy":
        return `${base} bg-green-600 text-white`;
      case "Medium":
        return `${base} bg-yellow-600 text-white`;
      default:
        return `${base} bg-red-600 text-white`;
    }
  };

  return (
    <section className="flex flex-col gap-8 py-12">
      {/* Search bar */}
      <Input
        type="text"
        placeholder="Search problems…"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full max-w-sm bg-slate-900 text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-blue-600"
      />

      {/* Problems table */}
      <div className="rounded-lg border border-slate-700 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="w-20 text-zinc-300">#</TableHead>
              <TableHead className="text-zinc-300">Problem</TableHead>
              <TableHead className="w-36 text-zinc-300">Difficulty</TableHead>
              <TableHead className="w-20 text-zinc-300 text-center">Solve</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-slate-800 text-sm">
            {Frontendloading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <TableRow key={i} className="hover:bg-slate-800">
                    {[60, 160, 120, 80].map((w) => (
                      <TableCell key={w}>
                        <Skeleton className={`h-4 w-[${w}px]`} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : problems
                  .filter((p) =>
                    p.Title.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map((prob, i) => (
                    <TableRow
                      key={prob.id}
                      className="hover:bg-slate-800 transition-colors"
                    >
                      <TableCell>{i + 1}</TableCell>

                      <TableCell
                        className="cursor-pointer max-w-xs truncate"
                        onClick={() => sendData(prob)}
                      >
                        {prob.Title}
                      </TableCell>

                      <TableCell>
                        <span className={levelBadge(prob.Level)}>
                          {prob.Level}
                        </span>
                      </TableCell>

                      <TableCell className="text-center">
                        <FaLongArrowAltRight
                          size={22}
                          className="mx-auto cursor-pointer text-blue-500 hover:text-blue-600"
                          onClick={() => sendData(prob)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default FrontendTableList;
