import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { databaseRef } from "@/Firebase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Problem {
  id: string;
  ProblemID: string;
  Title: string;
  Level: string;
}

const LikedProblemsComponent = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    const fetchLikedProblems = async () => {
      const rawLikes = localStorage.getItem("Likes");
      if (!rawLikes) return;

      const likesArray = JSON.parse(rawLikes);
      if (!Array.isArray(likesArray) || likesArray.length === 0) return;

      const problemsCollection = collection(databaseRef, "Problems");
      const q = query(problemsCollection, where("ProblemID", "in", likesArray));
      const snapshot = await getDocs(q);

      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Problem),
      }));

      setProblems(fetched);
    };

    fetchLikedProblems();
  }, []);

  return (
    <div className="w-full max-w-lg rounded-lg bg-neutral-900 p-5 shadow-md">
      <h2 className="text-xl text-center text-zinc-200 font-semibold mb-4">
        ❤️ Liked Problems
      </h2>

      {problems.length === 0 ? (
        <p className="text-center text-zinc-400">No liked problems found.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-zinc-300">Problem</TableHead>
              <TableHead className="text-right text-zinc-300">Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {problems.map((prob) => (
              <TableRow key={prob.id}>
                <TableCell>{prob.Title}</TableCell>
                <TableCell className="text-right">
                  <span
                    className={`px-2 py-1 rounded-md text-white text-sm ${
                      prob.Level === "Medium"
                        ? "bg-yellow-600"
                        : "bg-green-600"
                    }`}
                  >
                    {prob.Level}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default LikedProblemsComponent;
