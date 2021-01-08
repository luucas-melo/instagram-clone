import { StoryState, StoryAction } from "./types";

const initialState: StoryState = {
  visible: false,
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
    default:
      return state;
  }
}
