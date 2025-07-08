import useUserDataStore from "@/zustang/useUserData";
import Progressbar from "../ProgressBar/Progressbar";
import { ProblemLength } from "@/utils/LocalStorage";

const UserProfile = () => {
  const { userData } = useUserDataStore();
  const length = ProblemLength();

  return (
    <section className="bg-neutral-900 rounded-lg w-full max-w-5xl p-6 flex flex-wrap justify-between items-center gap-6 shadow-lg">
      <div className="flex items-center gap-4">
        <img
          src={userData.userImageUrl}
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-lg"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-zinc-100 text-2xl font-semibold">{userData.userName}</h2>
          <p className="text-zinc-300">{userData.userEmail}</p>
          <p className="text-sm text-zinc-400">
            <span className="font-medium">Role:</span> <span className="text-blue-500">User</span>
          </p>
        </div>
      </div>

      <div className="w-full md:w-auto">
        <Progressbar problemLength={length} />
      </div>
    </section>
  );
};

export default UserProfile;
