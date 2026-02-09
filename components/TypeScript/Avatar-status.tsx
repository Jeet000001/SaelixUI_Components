type AvatarProps = {
  src: string;
  size?: number;
  isOnline?: boolean;
};

const Avatar_Status = ({ src, size = 40, isOnline = true }: AvatarProps) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative inline-block"
    >
      <img
        src={src}
        alt="avatar"
        className="w-full h-full object-cover rounded-full"
      />

      {isOnline && (
        <span className="absolute -bottom-0.5 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
};

export default Avatar_Status;
