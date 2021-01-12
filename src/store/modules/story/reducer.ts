import { action } from 'typesafe-actions';
import { StoryState, StoryAction } from "./types";

const initialState: StoryState = {
  visible: false,
  currentStory: null,
};

export default function story(
  state = initialState,
  action: StoryAction
): StoryState {
  switch (action.type) {
    case "@story/SET_VISIBLE":
      return {
        ...state,
        visible: !state.visible,
      };
    case "@story/SET_CURRENT_STORY":
      return {
        ...state,
        currentStory: action.payload
      };
    default:
      return state;
  }
}
