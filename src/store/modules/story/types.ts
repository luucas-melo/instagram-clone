import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type StoryAction = ActionType<typeof actions>;

export interface StoryState {
  readonly visible: boolean;
  readonly currentStory: string | null;
}
