import React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type PaginationProps, getPaginationRange } from "@/lib/pagination"

export function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const paginationRange = getPaginationRange(currentPage, totalPages)

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8">
      <Button variant="outline" size="icon" onClick={onPrevious} disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {paginationRange.map((pageNumber, index) => (
        <React.Fragment key={index}>
          {pageNumber === "..." ? (
            <span className="px-2">...</span>
          ) : (
            <Button
              variant={currentPage === pageNumber ? "default" : "outline"}
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </Button>
          )}
        </React.Fragment>
      ))}
      <Button variant="outline" size="icon" onClick={onNext} disabled={currentPage === totalPages}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  )
}

