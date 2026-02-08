const Avatar_Card = ({ src, name, role }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl w-fit border-2 border-gray-200">
      
      <div className="inline-block rounded-full bg-gray-300 p-0.5">
        <img
          src={src}
          alt={name}
          className="rounded-full object-cover w-12 h-12"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-lg text-black">{name}</h2>
        </div>

        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default Avatar_Card;
