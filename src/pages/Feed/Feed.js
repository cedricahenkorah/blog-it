import FeedFilter from "./FeedFilter";

// styles
import "./Feed.css";
import FeedList from "../../components/FeedList";

export default function Home() {
  return (
    <div className="md:px-20 lg:pt-1 px-5 flex-grow">
      <h2 className="text-3xl font-bold tracking-widest">Blogs feed</h2>
      <FeedFilter />
      <FeedList />
    </div>
  );
}
