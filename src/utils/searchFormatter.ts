function searchFormatter(search: string): string {
  const valueCapitalized = search
    .split(" ")
    .map((searchItem) => searchItem.slice(0, 1).toUpperCase() + searchItem.slice(1).toLowerCase())
    .join(" ")
  return valueCapitalized
}

export { searchFormatter }
