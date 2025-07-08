export const editLocalStorage = (
  ProblemID: string,
  key: string,
  status: boolean
) => {
  let likedPosts = JSON.parse(localStorage.getItem(key) || "[]");

  if (!status) {
    // Remove like
    likedPosts = likedPosts.filter((id: string) => id !== ProblemID);
    localStorage.setItem(key, JSON.stringify(likedPosts));
    return false;
  } else {
    // Add like
    likedPosts.push(ProblemID);
    localStorage.setItem(key, JSON.stringify(likedPosts));
    return true;
  }
};

export const getStorage = (problemID: string, key: string) => {
  const likedPosts = JSON.parse(localStorage.getItem(key) || "[]");
  return likedPosts.includes(problemID);
};

export const getStorageItems=(key:string)=>{
  return JSON.parse(localStorage.getItem(key) || "[]")
}

export const saveProblem=(problemID:string, key:string)=>
{
  const item=JSON.parse(localStorage.getItem(key) || "[]" );
  let set=new Set(item);
  set.add(problemID)
  localStorage.setItem(key,JSON.stringify(Array.from(set)))
}


export const ProblemLength=()=>{
  const item = JSON.parse(localStorage.getItem("CompletedProblems") || "[]");
  return item.length;
}
