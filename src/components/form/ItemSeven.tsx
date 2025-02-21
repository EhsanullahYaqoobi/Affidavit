export default function ItemSeven() {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <h1 className="font-extrabold text-gray-600 px-5">5: شرایط پرداخت</h1>
      <div className="flex items-center gap-5 px-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-gray-600 font-extrabold">
            تاریخ پیش پرداخت
          </label>
          <input
            type="text"
            className="py-1 rounded-md border px-2 outline-none"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="" className="text-gray-600 font-extrabold">
            تاریخ پرداخت باقی مانده
          </label>
          <input
            type="text"
            className="py-1 rounded-md border px-2 outline-none"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
