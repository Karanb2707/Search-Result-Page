export default function TagFilter({ tags, selectedTag, setSelectedTag }) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {tags.map(tag => (
        <button
          key={tag}
          className={`px-3 py-1 rounded-full border transition text-sm ${
            selectedTag === tag ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </button>
      ))}
      {selectedTag && (
        <button onClick={() => setSelectedTag(null)} className="text-sm text-red-500 underline">
          Clear filters
        </button>
      )}
    </div>
  );
}
