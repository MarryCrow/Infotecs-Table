export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex justify-center items-center gap-4 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-2 border rounded disabled:opacity-50"
            >
                Назад
            </button>
            <span>
        {currentPage} / {totalPages}
      </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-6 py-2 border rounded disabled:opacity-50"
            >
                Вперед
            </button>
        </div>
    )
}