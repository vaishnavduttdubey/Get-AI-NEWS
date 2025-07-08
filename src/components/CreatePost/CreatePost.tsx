import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "@/zod/PostSchema";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { LuPenSquare } from "react-icons/lu";
import dbService from "@/firebaseService/dbService";
import useUserDataStore from "@/zustang/useUserData";
import { toast,Toaster } from "react-hot-toast";

const CreatePost = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { userData } = useUserDataStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: any) => {
    const processedPostContent = data.postContent.split("\n").join("\\n");
    await uploadPost(processedPostContent);
    setIsDialogOpen(false);
  };

  const uploadPost = async (content: string) => {
    try {
      const res = await dbService.SavePost(
        userData.userImageUrl,
        userData.userName,
        userData.uid,
        content
      );
      if (res.status) {
        toast.success("Post created successfully!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });


      } else {
         toast.error(`Error: ${res.error}`, {
           style: {
             borderRadius: "10px",
             background: "#333",
             color: "#fff",
           },
         });

      }
    } catch (error: any) {
      toast.error(`Error: ${error}`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

    }
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <section className="bg-neutral-800 hover:bg-neutral-900  cursor-pointer p-3 h-fit w-fit rounded-full">
            <LuPenSquare color="white" fontSize={22} />
          </section>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-neutral-950 text-zinc-200 custom-padding-x">
          <DialogHeader>
            <DialogTitle>Create Post</DialogTitle>
            <DialogDescription>
              Share your thoughts with your network. Click post when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Textarea
                id="post-content"
                placeholder="What do you want to talk about? (Content)"
                className="col-span-3 bg-neutral-950 min-h-40 text-white"
                rows={6}
                {...register("postContent")}
              />
              {errors.postContent && (
                <p className="text-red-500 text-sm">
                  {errors.postContent.message as string}
                </p>
              )}
            </div>
            <DialogFooter>
              <Button type="submit">Post</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default CreatePost;
