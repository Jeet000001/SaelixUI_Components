const Clickable_Avatar = ({
  src,
  width = 40,
  height = 40,
  alt = "avatar",
  href,
}) => {
  return (
    <div
      style={{ width, height }}
      className="inline-block rounded-full bg-gray-300 p-0.5"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full rounded-full"
        />
      </a>
    </div>
  );
};

export default Clickable_Avatar;
