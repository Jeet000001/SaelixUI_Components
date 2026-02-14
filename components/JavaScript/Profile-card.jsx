import { BadgeCheck, User, Eye } from "lucide-react";

const Profile_Card = ({
  name,
  role,
  image,
  followers = 0,
  views = 0,
  verified = false,
  buttonText = "Follow",
  className = "",
}) => {
  return (
    <div
      className={`
      w-65 rounded-3xl bg-gray-100 p-4 shadow-sm 
      transition-all duration-300 ease-out
      hover:shadow-xl hover:scale-102

      dark:bg-[#111827]
      dark:border dark:border-[#1F2937]
      dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]

      ${className}
    `}
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-[220px] object-cover rounded-2xl
          transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold dark:text-[#E5E7EB]">{name}</h2>
          {verified && (
            <BadgeCheck
              size={18}
              className="text-blue-500 dark:text-[#3B82F6]"
            />
          )}
        </div>

        <p className="text-sm text-gray-500 mt-1 leading-relaxed dark:text-[#9CA3AF]">
          {role}
        </p>

        <div className="flex justify-center items-center gap-4 text-gray-600 text-sm dark:text-[#9CA3AF]">
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-1">
              <User size={16} />
              {followers}
            </div>

            <div className="flex items-center gap-1">
              <Eye size={16} />
              {views}
            </div>
          </div>

          <button
            className="mt-5 w-full bg-white rounded-full py-2 text-sm font-medium
            shadow-sm border border-gray-200
            hover:bg-gray-200
            hover:shadow-md
            transition-all duration-300 active:scale-95

            dark:bg-[#0B0F19]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:bg-[#3B82F6]
            dark:hover:text-white
            dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            {buttonText} +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile_Card;
