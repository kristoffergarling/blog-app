import Author from "./Author";
import { ThumbIcon, StarIcon } from "../Icons/Icons";

interface BlogCardProps {
  title: string;
  date: string;
  imageSource: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, imageSource }) => {
  return (
    <article className="max-w-md">
      <figure>
        <div className="flex justify-between pb-2">
          <Author />
          <div className="self-end">
            <StarIcon />
          </div>
        </div>
        <img
          className="shadow-md rounded w-full h-32 object-cover"
          src={imageSource}
          alt="Blog Image"
        />
      </figure>
      <div>
        <div className="flex justify-between pt-2">
          <span className="text-xs text-secondary font-light">{date}</span>
          <div className="flex">
            <ThumbIcon thumbUp={true} />
            <ThumbIcon thumbUp={false} />
          </div>
        </div>

        <h2 className="text-xl font-normal">{title}</h2>
      </div>
    </article>
  );
};
export default BlogCard;
