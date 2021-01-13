import { action } from "typesafe-actions";


export function setPostLike({ likedPost }: { likedPost: string}) {
  console.log("dale", likedPost)
  return action("@post/SET_LIKE", likedPost); // type, payload
}
