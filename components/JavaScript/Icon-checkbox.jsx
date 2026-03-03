//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

const Icon_Checkbox = ({
  items,
  selected,
  onChange,
}) => {
  const toggle = (id) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="flex items-center gap-8 bg-[#EDEDED] p-6 rounded-md w-fit">
      {items.map((item) => {
        const isChecked = selected.includes(item.id);

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => toggle(item.id)}
            className="transition-transform duration-150 hover:scale-110"
          >
            {isChecked ? item.filled : item.outline}
          </button>
        );
      })}
    </div>
  );
};

export default Icon_Checkbox;