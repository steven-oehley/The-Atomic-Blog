import { PostContext } from "./PostContext";

import { useContext } from "react";

export const usePosts = () => {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was called outside of PostProvider");
  return context;
};
