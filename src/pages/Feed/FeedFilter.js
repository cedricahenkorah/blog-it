const filterList = [
  "all",
  "lifestyle",
  "business",
  "technology",
  "news",
  "education",
  "entertainment",
];

export default function FeedFilter() {
  return (
    <div className="project-filter">
      <nav>
        <p>views:</p>
        {filterList.map((f) => (
          <button key={f} onClick={() => {}} className="">
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
