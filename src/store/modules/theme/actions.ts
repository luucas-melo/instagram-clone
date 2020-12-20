import { action } from "typesafe-actions";

export function toggleTheme({ theme }: {theme: string}) {
    return action('@theme/TOGGLE_THEME', theme) // type, payload
}
