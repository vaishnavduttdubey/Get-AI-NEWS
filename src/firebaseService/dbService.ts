import { databaseRef } from "@/Firebase";
import {
  addDoc,
  collection,
  setDoc,
  doc,
  getDocs,
  query,
  orderBy,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import generate30Dates from "@/utils/GenerateDates";
interface Post {
  id: string;
  photoUrl: string;
  userName: string;
  userID: string;
  postContent: string;
  timeStamp: Timestamp;
}
class DBService {
  async SaveUserProfile(
    UserID: string,
    UserEmail: string,
    UserImageUrl: string,
    UserName: string
  ) {
    try {
      await setDoc(doc(databaseRef, "User", UserID), {
        userEmail: UserEmail,
        userImageUrl: UserImageUrl,
        userName: UserName,
      });
      return { status: true, error: "" };
    } catch (error: any) {
      return { status: false, error: error.message };
    }
  }

  async SavePost(
    PhotoUrl: string,
    UserName: string,
    UserID: string,
    PostContent: string
  ) {
    const TimeStamp = serverTimestamp();

    try {
      await addDoc(collection(databaseRef, "Post"), {
        photoUrl: PhotoUrl,
        userName: UserName,
        userId: UserID,
        timeStamp: TimeStamp,
        postContent: PostContent,
      });
      return { status: true, error: "" };
    } catch (error: any) {
      return { status: false, error: error.message };
    }
  }

  async getPost() {
    try {
      const postQuery = query(
        collection(databaseRef, "Post"),
        orderBy("timeStamp", "desc")
      );
      const postSnapshot = await getDocs(postQuery);
      const posts: Post[] = postSnapshot.docs.map((doc) => ({
        id: doc.id, // Assuming Firestore document ID
        ...doc.data(),
      })) as Post[];
      return { status: true, post: posts };
    } catch (error: any) {
      return { status: false, error: error.message };
    }
  }

  async checkDocumentExists(collectionName: string, docID: string) {
    const document = doc(databaseRef, collectionName, docID);
    const docSnap = await getDoc(document);

    return docSnap.exists();
  }

  async saveDates(userId:string){
    const Dates=generate30Dates()
    try {
      await setDoc(doc(databaseRef,"ProblemDates",userId), Dates);
      return {status:true, data:"user"}
    } catch (error:any) {
      return {status:false, error:error.message}
    }
  }

  
}

const dbService = new DBService();
export default dbService;
