export function guardaNoLocalStorage(item: string) {
  localStorage.setItem("email", item);
}

export function lerNoLocalStorage() {
  return localStorage.getItem("email");
}
