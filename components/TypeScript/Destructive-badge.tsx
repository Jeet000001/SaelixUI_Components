type Props = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Destructive_Badge: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-block bg-red-600 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400 text-white font-medium text-sm px-3 py-0.5 rounded-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Destructive_Badge;
