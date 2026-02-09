type AvatarCharacterProps = {
  size?: number;
  char: string;
  bg?: string;
  textColor?: string;
};

const Avatar_character = ({
  size = 40,
  char,
  bg = "bg-blue-300",
  textColor = "text-blue-700",
}: AvatarCharacterProps) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`${bg} rounded-full flex justify-center items-center`}
    >
      <p className={`${textColor} font-bold`}>{char}</p>
    </div>
  );
};

export default Avatar_character;
