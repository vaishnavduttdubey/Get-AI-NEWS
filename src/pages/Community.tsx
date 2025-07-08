import CreatePost from "@/components/CreatePost/CreatePost";
import dbService from "@/firebaseService/dbService";
import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";
import PostComp from "@/components/Post/Post";
import { Skeleton } from "@/components/ui/skeleton";

interface Post {
  id: string;
  photoUrl: string;
  userName: string;
  userID: string;
  postContent: string;
  timeStamp: Timestamp;
}

const CommunityPage = () => {
  const [allPost, setPost] = useState<Post[]>();

  useEffect(() => {
    const getAllPost = async () => {
      try {
        const data = await dbService.getPost();
        if (data.status && data.post) {
          setPost(data.post);
        } else {
          console.log(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllPost();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center">
      <section className="flex-1 max-w-[800px] w-full overflow-y-auto p-4">
        {allPost ? (
          allPost.map((post) => (
            <div key={post.id} className="py-2">
              <PostComp Post={post} />
            </div>
          ))
        ) : (
          // Skeleton loading while waiting for data
          <>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="py-2 flex flex-col gap-3 outline w-full"
              >
                <div className="flex items-center space-x-4 gap-3">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[300px]" />
                    <Skeleton className="h-4 w-[300px]" />
                  </div>
                </div>
                <Skeleton className="h-7 w-full" />
              </div>
            ))}
          </>
        )}
      </section>
      <div className="flex-shrink-0 max-w-[800px] w-full md:w-auto p-8">
        <div className="fixed bottom-9 right-9">
          <CreatePost />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
