export default function ItemTwo() {
  return (
    <div className="flex w-full items-center justify-center gap-5 mt-5">
      <div className="flex flex-col gap-1 px-2">
        <label htmlFor="" className="font-extrabold text-gray-600">
          تاریخ
        </label>
        <input
          type="text"
          className="border p-1 px-2 rounded-md outline-gray-300"
          placeholder="تاریخ را وارد کنید!"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>
      <div className="flex flex-col gap-1 w-1/3">
        <label htmlFor="" className="font-extrabold text-gray-600">
          دفتر تنظیم قولنامه
        </label>
        <input
          type="text"
          className="border p-1 px-2 rounded-md outline-gray-300"
          placeholder="مثال: دفتر رهنمای معاملات عبدالکریم نیکویی"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>
      <div className="flex flex-col gap-1 w-1/3">
        <label htmlFor="" className="font-extrabold text-gray-600">
          طرفین قولنامه
        </label>
        <input
          type="text"
          className="border p-1 px-2 rounded-md outline-gray-300"
          placeholder="مثال: علی اکبری و احمد احمدی"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>
    </div>
  );
}
