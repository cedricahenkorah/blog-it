import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import FeedFilter from "./FeedFilter";
import FeedList from "../../components/FeedList";

// styles
import "./Feed.css";

export default function Feed() {
  const { documents, error } = useCollection("blogs");
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const blogs = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "lifestyle":
          case "business":
          case "technology":
          case "education":
          case "entertainment":
          case "news":
            console.log(document.category, currentFilter);
            return document.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div className="md:px-20 lg:pt-1 px-5 flex-grow">
      <h2 className="text-3xl font-bold tracking-widest">Blogs feed</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <FeedFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {blogs && <FeedList blogs={blogs} />}
    </div>
  );
}
