export function sortAsc(arr, param) {
  if (param === "address") {
    return [...arr].sort((a, b) => (a[param].city > b[param].city ? 1 : -1));
  } else {
    return [...arr].sort((a, b) => (a[param] > b[param] ? 1 : -1));
  }
}
export function sortDesc(arr, param) {
  if (param === "address") {
    return [...arr].sort((a, b) => (a[param].city < b[param].city ? 1 : -1));
  } else {
    return [...arr].sort((a, b) => (a[param] < b[param] ? 1 : -1));
  }
}
