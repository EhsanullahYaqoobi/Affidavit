export const InputField: React.FC<{
    label: string;
    name: string;
    value: string;
    className: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: "text" | "textarea";
  }> = ({ label, name, value, onChange, type = "text" }) => {
    return (
      <div className="flex flex-col gap-4 w-1/3" dir="rtl">
        <label className="pr-5 font-extrabold">{label}</label>
        {type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            className="border border-gray-300 p-1 outline-blue-400"
          />
        ) : (
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="border border-gray-300 p-1 outline-blue-400"
          />
        )}
      </div>
    );
  };