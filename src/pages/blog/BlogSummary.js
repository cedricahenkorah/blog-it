import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function BlogSummary({ blog }) {
  const { deleteDocument } = useFirestore("blogs");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = (e) => {
    deleteDocument(blog.id);
    navigate("/feed");
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="font-medium text-2xl">{blog.name}</h2>
        <p className="flex items-center mt-2">
          <Avatar src={blog.createdBy.photoURL} />
          <p className="ml-2">By: {blog.createdBy.displayName} </p>
          <p className="ml-auto">
            {formatDistanceToNow(blog.createdAt.toDate(), {
              addSuffix: true,
            })}
          </p>
        </p>

        <p className="details">{blog.details}</p>
      </div>
      {user.uid === blog.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          delete blog
        </button>
      )}
    </div>
  );
}
