import { ThumbIcon, StarIcon } from "../Icons/Icons";
import Author from "./Author";

interface BlogCardProps {
  title: string;
  date: string;
  imageSource: string;
}

const HeaderBlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  imageSource,
}) => {
  return (
    <article className="flex">
      <img
        className="shadow-md rounded max-w-md h-80 object-cover"
        src={imageSource}
        alt="Blog Image"
      />
      <div className="pl-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between pb-2">
            <Author />
            <div className="self-end">
              <StarIcon />
            </div>
          </div>
          <h2 className="text-5xl font-bold pb-2">{title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
            nesciunt! Dicta quam ex, rem mollitia labore molestiae perferendis
            ipsam aut?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Inventore qui nesciunt obcaecati minus sapiente magni. Mollitia modi
            voluptatem dolorum enim!
          </p>
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-sm text-secondary font-light">{date}</span>
          <div className="flex">
            <ThumbIcon thumbUp={true} />
            <ThumbIcon thumbUp={false} />
          </div>
        </div>
      </div>
    </article>
  );
};
export default HeaderBlogCard;
