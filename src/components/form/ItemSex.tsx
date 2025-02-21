export default function ItemSex() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="px-5 font-extrabold text-gray-600">4: مبلغ معامله</h1>
      <div className="flex items-center gap-5 px-5">
        <div className="flex flex-col gap-1 w-1/3">
          <label htmlFor="" className="text-gray-600 font-extrabold">
            مبلغ کل
          </label>
          <input
            type="text"
            className="outline-none py-1 rounded-md border px-2"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          />
        </div>
        <div className="flex flex-col gap-1 w-1/3">
          <label htmlFor="" className="text-gray-600 font-extrabold">
            مبلغ پیش پرداخت
          </label>
          <input
            type="text"
            className="outline-none py-1 rounded-md border px-2"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          />
        </div>
        <div className="flex flex-col gap-1 w-1/3">
          <label htmlFor="" className="text-gray-600 font-extrabold">
            مبلغ باقی مانده
          </label>
          <input
            type="text"
            className="outline-none py-1 rounded-md border px-2"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
