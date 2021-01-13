import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type UsersPostsAction = ActionType<typeof actions>;

export interface UsersPostsState {
  readonly usersPosts: Array<Object>;
  readonly likedPost : string | null;
}
