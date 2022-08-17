export const baseUrl = "http://localhost:3008";

export function getAuthUser(): any {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user") || "");
  }
}
