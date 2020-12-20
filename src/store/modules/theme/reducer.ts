import light from "../../../theme/light";
import dark from "../../../theme/dark";
import { ThemeState, ThemeAction } from "./types";

const initialState: ThemeState = {
  title: light.title,
};

export default function theme(
  state = initialState,
  action: ThemeAction
): ThemeState {
  switch (action.type) {
    case "@theme/TOGGLE_THEME":
      console.log(state.title)
      return {
        ...state,
        title: state.title === 'light' ? dark.title : light.title,
      };
    default:
      return state;
  }
}
