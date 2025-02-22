export default function TodoModal({ isOpen, onClose, newTodoText, setNewTodoText, handleAddTodo }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-semibold">새로운 할 일 추가</h2>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="할 일을 입력하세요"
            className="mb-4 w-full rounded-md border border-gray-300 p-2"
            autoFocus
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100">
              취소
            </button>
            <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              추가
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
