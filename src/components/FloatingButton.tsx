export default function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg transition-colors hover:bg-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </button>
  );
}
