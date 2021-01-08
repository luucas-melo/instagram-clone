import { action } from "typesafe-actions";

export function setStoryVisible() {
  return action("@story/SET_VISIBLE"); // type, payload
}
