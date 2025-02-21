export default function ItemFour() {
    return (
      <div className="flex flex-col gap-5 p-5">
        <h1 className="font-extrabold text-gray-600">2: خریدار</h1>
        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-1 w-1/6">
            <label htmlFor="" className="font-extrabold text-gray-600">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              className="border py-1 rounded-md outline-gray-300 px-2"
              placeholder="مثال: احمد احمدی"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-1/6">
            <label htmlFor="" className="font-extrabold text-gray-600">
              شماره تذکره
            </label>
            <input
              type="text"
              className="outline-gray-300 px-2 rounded-md py-1 border"
              placeholder="مثال: 23401-3495-1404"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-1/6">
            <label htmlFor="" className="font-extrabold text-gray-600">
              شماره تلفون
            </label>
            <input
              type="text"
              className="outline-gray-300 px-2 rounded-md py-1 border"
              placeholder="مثال: 0799499400"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-3/6">
            <label htmlFor="" className="font-extrabold text-gray-600">
              آدرس
            </label>
            <input
              type="text"
              className="outline-gray-300 px-2 rounded-md py-1 border"
              placeholder="مثال: صوفی آباد، ناحیه ششم، کوچه دوم، پلاک سوم"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  