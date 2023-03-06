import { useState } from "react";
import Select from "react-select";

const categories = [
  { value: "lifestyle", label: "Lifestyle" },
  { value: "business", label: "Business" },
  { value: "technology", label: "Technology" },
  { value: "news", label: "News" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" },
];

export default function Create() {
  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [formError, setFormError] = useState(null);

  return (
    <div className="max-w-5xl md:px-20 lg:pt-8 px-5 flex-grow">
      <h2 className="text-3xl font-bold tracking-widest ">Create a new blog</h2>
      <form>
        <label>
          <span className="text-2xl">Blog title:</span>
          <input type="text" required onChange={() => {}} value={name} />
        </label>
        <label>
          <span className="text-2xl">Content:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span className="text-2xl">Blog category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>

        <button className="btn">blog it</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
