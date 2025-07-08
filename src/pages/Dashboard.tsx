import LikeProblemComponent from "@/components/Dashboard/LikedProblems";
import SavedProblemsComponent from "@/components/Dashboard/SavedProblems";
import UserProfile from "@/components/Dashboard/Profile";

const Dashboard = () => {
  return (
    <section className="bg-neutral-950 h-fit p-5">
      {/* <LikeProblemComponent/> */}
      <div className="w-full flex h-[100vh]  bg-neutral-950 flex-col items-center gap-2 ">
        <UserProfile />
        <div className="flex gap-2 flex-wrap">
          <LikeProblemComponent />

          <SavedProblemsComponent />
        </div>
      </div>
     </section>
  );
};

export default Dashboard;
