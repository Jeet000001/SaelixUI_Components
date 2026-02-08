type AvatarProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

const Default_Avatar = ({
  src,
  width = 40,
  height = 40,
  alt = "avatar",
}: AvatarProps) => {
  return (
    <div
      style={{ width, height }}
      className="inline-block rounded-full hover:scale-110 transition-all duration-300"
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-full"
      />
    </div>
  );
};

export default Default_Avatar;
