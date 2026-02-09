const Avatar_Stack = ({ items, size = 40 }) => {
  return (
    <div className="flex items-center">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            width: size,
            height: size,
            marginLeft: index === 0 ? 0 : -size / 3,
          }}
          className="rounded-full border-2 border-white flex items-center 
          justify-center overflow-hidden bg-gray-200 hover:scale-105 
          transition-all duration-200"
        >
          {item.src ? (
            <img
              src={item.src}
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span
              className={`w-full h-full flex items-center justify-center 
              font-semibold text-white ${item.bg || "bg-blue-500"}`}
            >
              {item.char}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Avatar_Stack;
