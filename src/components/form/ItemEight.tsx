export default function ItemEight() {
  return (
    <div className="flex flex-col gap-5 px-5 mt-5">
      <h1 className="text-gray-600 font-extrabold">6: تخلیه و تحویل ملک</h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="font-extrabold text-gray-600">
          تاریخ تحویل
        </label>
        <input
          type="text"
          className="py-1 px-2 rounded-md border outline-none w-1/3"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>
    </div>
  );
}
