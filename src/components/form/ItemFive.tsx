export default function ItemFive() {
    return (
      <div className="flex flex-col gap-5 p-5">
        <h1 className="font-extrabold text-gray-600">3: مشخصات ملک</h1>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-1 w-1/2">
            <label htmlFor="" className="font-extrabold text-gray-600">
              نوع ملک
            </label>
            <input
              type="text"
              className="border py-1 rounded-md outline-gray-300 px-2"
              placeholder="مثال: زمین، باغ، آپارتمان"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-extrabold text-gray-600">
              آدرس دقیق
            </label>
            <input
              type="text"
              className="outline-gray-300 px-2 rounded-md py-1 border"
              placeholder="مثال: ناحیه ششم، صوفی آباد"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2">
            <label htmlFor="" className="font-extrabold text-gray-600">
              عرض
            </label>
            <input
              type="text"
              className="outline-gray-300 px-2 rounded-md py-1 border"
              placeholder="مثال: 9 متر"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2">
            <label htmlFor="" className="font-extrabold text-gray-600">
              طول
            </label>
            <input
              type="text"
              className="outline-gray-300 px-2 rounded-md py-1 border"
              placeholder="مثال: 17 متر"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2">
            <label htmlFor="" className="font-extrabold text-gray-600">
              متراژ کلی
            </label>
            <input
              type="text"
              className="outline-gray-300 px-2 rounded-md py-1 border"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-extrabold text-gray-600">
              سایر مشخصات
            </label>
            <textarea
              className="outline-gray-300 px-2 rounded-md py-1 border"
              placeholder=""
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  