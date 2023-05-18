export function getDate(date?: Date | null) {
  if (!date) return null
  const year = date.getFullYear()
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getDate() + 1
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  return `${year}-${month}-${day}`
}
