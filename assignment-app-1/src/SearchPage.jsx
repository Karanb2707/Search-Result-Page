import { useEffect, useState } from "react";
import { results } from "./data";
import ResultCard from "./components/ResultCard";
import TagFilter from "./components/TagFilter";
import AutosuggestInput from "./components/AutosuggestInput";

export default function SearchPage() {
  const [filtered, setFiltered] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const uniqueTags = Array.from(new Set(results.flatMap(r => r.tags)));

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let data = [...results];
      if (selectedTag) {
        data = data.filter(r => r.tags.includes(selectedTag));
      }
      if (query) {
        const q = query.toLowerCase();
        data = data.filter(
          r =>
            r.title.toLowerCase().includes(q) ||
            r.tags.some(t => t.toLowerCase().includes(q))
        );
      }
      setFiltered(data);
      setLoading(false);
    }, 1000);
  }, [selectedTag, query]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <AutosuggestInput allData={results} onSelect={setQuery} />
      <TagFilter tags={uniqueTags} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No results found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(result => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
}
