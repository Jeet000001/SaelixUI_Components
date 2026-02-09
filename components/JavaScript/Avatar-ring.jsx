const Avatar_Ring = ({
  src,
  size = 50,
  borderColor = "border-gray-400",
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-full border-2 ${borderColor} flex justify-center items-center`}
    >
      <div className="w-[90%] h-[90%] rounded-full border border-transparent flex justify-center items-center">
        <img
          src={src}
          alt="avatar"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar_Ring;
