import { action } from "typesafe-actions";
import { UsersPostsAction, UsersPostsState } from "./types";
import getUsersArray from "../../../utils/getUsersArray";

const initialState: UsersPostsState = {
  usersPosts: getUsersArray(),
  likedPost: null,
};

export default function post(
  state = initialState,
  action: UsersPostsAction
): UsersPostsState {
  switch (action.type) {
    case "@post/SET_LIKE":
      state.usersPosts.map((user: any) =>{
        if (action.payload === user.userName) user.isLiked = !user.isLiked;
      });
      return {
        ...state,
        likedPost: action.payload,
      };
    default:
      return state;
  }
}
