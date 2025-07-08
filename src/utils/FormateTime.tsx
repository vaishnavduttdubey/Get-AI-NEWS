import { Timestamp } from "firebase/firestore";

const FormatPostTime = (timeStamp: Timestamp): string => {
  const postDate = timeStamp.toDate(); 
  const now = new Date();

  
  const diff = now.getTime() - postDate.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    if (days === 1) {
      return "Yesterday";
    } else {
      return `${postDate.toLocaleDateString()}`;
    }
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else {
    return "Just now";
  }
};

export default FormatPostTime;
