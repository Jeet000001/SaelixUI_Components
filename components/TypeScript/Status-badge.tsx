type StatusBadgeProps = {
  text: string;
  color?: string;
  className?: string;
};

const Status_Badge: React.FC<StatusBadgeProps> = ({
  text,
  color = "",
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${className}`}
      style={{
        backgroundColor: `${color}20`,
        color: color,
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />

      <span>{text}</span>
    </div>
  );
};

export default Status_Badge;
