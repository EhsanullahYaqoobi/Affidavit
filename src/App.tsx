import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "./App.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Item1 from "./components/form/1_Item";

function App() {
  const pdfRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    date: "",
    notaryOffice: "",
    ThePartiesToTheContract: "",
    sellerName: "",
    sellerId: "",
    sellerPhone: "",
    sellerAddress: "",
    buyerName: "",
    buyerId: "",
    buyerPhone: "",
    buyerAddress: "",
    propertyType: "",
    propertyAddress: "",
    propertyWidth: "",
    propertyLength: "",
    propertyArea: "",
    propertyDetails: "",
    totalAmount: "",
    advancePayment: "",
    remainingAmount: "",
    advancePaymentDate: "",
    remainingAmountDate: "",
    deliveryDate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const downloadPDF = () => {
    toast("Affidavit successfully downloaded!");
    const input = pdfRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4", true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const totalPages = Math.ceil((imgHeight * ratio) / pdfHeight);

        for (let i = 0; i < totalPages; i++) {
          const imgY = -i * pdfHeight;
          pdf.addImage(
            imgData,
            "PNG",
            imgX,
            imgY,
            imgWidth * ratio,
            imgHeight * ratio
          );
          if (i < totalPages - 1) {
            pdf.addPage();
          }
        }
        pdf.save("Affidavit.pdf");
      });
    }
  };

  return (
    <div className="flex flex-col p-5 w-full">
      <div className="flex flex-col p-5 w-full" ref={pdfRef} dir="rtl">
        <Item1 />
        <div className="flex flex-col gap-3 mt-5" dir="rtl">
          <div className="flex w-full gap-5 items-center">
            <div className="flex flex-col gap-4" dir="rtl w-1/3">
              <label className="pr-5 font-extrabold">تاریخ : </label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 outline-blue-400 px-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-2/3">
              <label className="pr-5 font-extrabold" dir="rtl">
                دفــتر تنظیم قولنامه :
              </label>
              <input
                type="text"
                name="notaryOffice"
                value={formData.notaryOffice}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 outline-blue-400"
              />
            </div>
          </div>
          <h1 className="pr-5 font-extrabold" dir="rtl">
            طرفین قولنامه :
          </h1>
          <input
            type="text"
            name="ThePartiesToTheContract"
            value={formData.ThePartiesToTheContract}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-5 font-extrabold" dir="rtl">
            1: فروشنـــــــده
          </h1>
          <h1 className="pr-12 font-extrabold" dir="rtl">
            نام و نام خانوادگی :
          </h1>
          <input
            type="text"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-12 font-extrabold" dir="rtl">
            شماره تذکره
          </h1>
          <input
            type="text"
            name="sellerId"
            value={formData.sellerId}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-12 font-extrabold" dir="rtl">
            شماره تلفون
          </h1>
          <input
            type="text"
            name="sellerPhone"
            value={formData.sellerPhone}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-12 font-extrabold" dir="rtl">
            آدرس
          </h1>
          <input
            type="text"
            name="sellerAddress"
            value={formData.sellerAddress}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-5 font-extrabold">2: خــریدار</h1>
          <h1 className="pr-12 font-extrabold">نام و نام خانوادگی :</h1>
          <input
            type="text"
            name="buyerName"
            value={formData.buyerName}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-12 font-extrabold">شماره تذکره</h1>
          <input
            type="text"
            name="buyerId"
            value={formData.buyerId}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-12 font-extrabold">شماره تلفون</h1>
          <input
            type="text"
            name="buyerPhone"
            value={formData.buyerPhone}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-12 font-extrabold">آدرس</h1>
          <input
            type="text"
            name="buyerAddress"
            value={formData.buyerAddress}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-5 font-extrabold">3: مشخصات ملک</h1>
          <h1 className="pr-16 font-extrabold">نوع ملک :</h1>
          <input
            type="text"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-16 font-extrabold">آدرس دقیق :</h1>
          <input
            type="text"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-16 font-extrabold">عرض زمین</h1>
          <input
            type="text"
            name="propertyWidth"
            value={formData.propertyWidth}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-16 font-extrabold">طول زمین</h1>
          <input
            type="text"
            name="propertyLength"
            value={formData.propertyLength}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-16 font-extrabold">متراژ کلی زمین</h1>
          <input
            type="text"
            name="propertyArea"
            value={formData.propertyArea}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-16 font-extrabold">سایر مشخصات</h1>
          <textarea
            name="propertyDetails"
            value={formData.propertyDetails}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-5 font-extrabold">4: مبلغ معامله</h1>
          <h1 className="pr-16 font-extrabold">مبلغ کل معامله</h1>
          <input
            type="text"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-16 font-extrabold">مبلغ پیش پرداخت</h1>
          <input
            type="text"
            name="advancePayment"
            value={formData.advancePayment}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-16 font-extrabold">مبلغ باقی مانده</h1>
          <input
            type="text"
            name="remainingAmount"
            value={formData.remainingAmount}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-5 font-extrabold">5: شرایط پرداخت</h1>
          <h3 className="pr-16 font-extrabold">
            خــریدار متعهد می شود مبلغ پیش را در تاریخ معین شده به
            فروشنـــــــده پرداخت کند.
          </h3>

          <input
            type="text"
            name="advancePaymentDate"
            value={formData.advancePaymentDate}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h2 className="pr-16 font-extrabold">
            مبلغ باقی مانده به تاریخ معین شده به خــریدار پرداخت می شود.
          </h2>
          <input
            type="text"
            name="remainingAmountDate"
            value={formData.remainingAmountDate}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />

          <h2 className="pr-5 font-extrabold">6: شرایط انتقال سند </h2>
          <h1 className="pr-16 font-extrabold">
            انتقال سند مالکیت در تاریخ تعیین شده در دفتر رهنمای معاملات
            عبدالکریم نیکویی انجام خواهد شد.
          </h1>
          <h1 className="pr-5 font-extrabold">7: تخلیه و تحویل ملک</h1>
          <h1 className="pr-16 font-extrabold">
            فروشنـــــــده تعهد می دهد که ملک را در تاریخ ذیل به خــریدار تحویل
            می دهد.
          </h1>
          <input
            type="text"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleInputChange}
            className="border border-gray-300 p-1"
          />
          <h1 className="pr-5 font-extrabold">8: حق انتقال</h1>
          <h1 className="pr-16 font-extrabold">
            خــریدار حق انتقال این قولنامه را به شخص ثالث را ندارد.
          </h1>
          <h1 className="pr-5 font-extrabold">9: وجه التزام</h1>
          <h1 className="pr-16 font-extrabold">
            در صورت عدم حضور یکی از طرفین اصلی در تاریخ تعیین شده، قولنامه امضاء
            نخواهد شد.
          </h1>
          <h1 className="pr-5 font-extrabold">10: مالیات و هزینه ها</h1>
          <h1 className="pr-16 font-extrabold">
            هزینه های مربوط به انتقال سند و مالیات بر عهده فروشنـــــــده و
            خــریدار خواهد بود.
          </h1>
          <h1 className="pr-5 font-extrabold">11: نسخه های قولنامه</h1>
          <h1 className="pr-16 font-extrabold">
            این قولنامه در دو نسخه تنظیم شده و هر نسخه دارای اعتبار یکسان است.
          </h1>
          <h1 className="pr-5 font-extrabold">12: امضاء طرفین</h1>
          <div className="flex gap-40">
            <h1 className="pr-5 font-extrabold">
              فروشنـــــــده: _______________________
            </h1>
            <h1 className="pr-5 font-extrabold">
              خــریدار: ______________________________
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="bg-gradient-to-r from-indigo-600 to-violet-600 p-2 text-white font-semibold rounded-md px-4 outline-none"
          onClick={downloadPDF}
        >
          دانلود قولنامه
        </button>
      </div>
    </div>
  );
}

export default App;
