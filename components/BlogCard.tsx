import Author from "./BlogCard/Author";
import ThumbIcon from "./BlogCard/ThumbIcon";

interface BlogCardProps {
  title: string;
  date: string;
  imageSource: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, imageSource }) => {
  return (
    <article className="pt-4 pb-4">
      <figure>
        <Author />
        <img
          className="shadow-md rounded w-full h-32 object-cover"
          src={imageSource}
          alt="Blog Image"
        />
      </figure>
      <div>
        <div className="flex justify-between pt-2">
          <span className="text-xs text-secondary">{date}</span>
          <div className="flex">
            <ThumbIcon thumbUp={true} />
            <ThumbIcon thumbUp={false} />
          </div>
        </div>

        <h2 className="font-bold text-xl">{title}</h2>
      </div>
    </article>
  );
};
export default BlogCard;
