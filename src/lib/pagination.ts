export interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

export function getPaginationRange(currentPage: number, totalPages: number) {
  const delta = 2
  const range = []
  const rangeWithDots = []
  let l

  range.push(1)

  if (totalPages <= 7) {
    for (let i = 2; i < totalPages; i++) {
      range.push(i)
    }
  } else {
    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i < totalPages && i > 1) {
        range.push(i)
      }
    }
  }

  range.push(totalPages)

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push("...")
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
}

