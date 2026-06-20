type paginationProps = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

const Pagination=({
  page,
  totalPages,
  onPrev,
  onNext,
}: paginationProps)=> {
  return (
    <div className="flex justify-center items-center gap-4 mt-8 pb-10">
      <button
        disabled={page === 1}
        onClick={onPrev}
        className="cursor-pointer px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="font-semibold">
        Page {page} of {totalPages || 1}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={onNext}
        className="cursor-pointer px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}


export default Pagination;