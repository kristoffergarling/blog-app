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
        className="shadow-md rounded w-1/2 h-64 object-cover"
        src={imageSource}
        alt="Blog Image"
      />
      <div className="pl-4">
        <span className="text-xs text-secondary font-light">{date}</span>
        <h2 className="text-xl font-bold">
          {title} asdas jda jsodajia sdjasi djasjpsad
        </h2>
      </div>
    </article>
  );
};
export default HeaderBlogCard;
