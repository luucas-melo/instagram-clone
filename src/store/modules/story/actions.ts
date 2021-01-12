import { action } from "typesafe-actions";

export function setStoryVisible() {
  return action("@story/SET_VISIBLE"); // type, payload
}

export function setCurrentStory({ currentStory }: { currentStory: string | null}) {
  console.log("dale", currentStory)
  return action("@story/SET_CURRENT_STORY", currentStory); // type, payload
}
