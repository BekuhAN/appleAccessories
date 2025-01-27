import { useEffect, useState } from "react";
import { api } from "../api";
import { Comments } from "../../interfaces/comments";

export const useComments = () => {
  const [comments, setComments] = useState<Array<Comments>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<Comments>({ path: "comments" });
      setComments(items);
    };
    get();
  }, []);
  return comments;
};
