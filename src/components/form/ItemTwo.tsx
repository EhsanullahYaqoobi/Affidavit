export default function ItemTwo() {
  return (
    <div className="flex w-full items-center justify-center gap-5 mt-5">
      <div className="flex flex-col gap-1 px-2">
        <label htmlFor="" className="font-extrabold">
          تاریخ
        </label>
        <input
          type="date"
          className="border p-1 px-2 rounded-md outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 w-1/3">
        <label htmlFor="" className="font-extrabold">
          دفتر تنظیم قولنامه
        </label>
        <input
          type="text"
          className="border p-1 px-2 rounded-md outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 w-1/3">
        <label htmlFor="" className="font-extrabold">
          طرفین قولنامه
        </label>
        <input
          type="text"
          className="border p-1 px-2 rounded-md outline-none"
        />
      </div>
    </div>
  );
}
