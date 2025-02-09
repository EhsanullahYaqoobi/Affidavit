import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "./App.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { formConfig } from "./components/libs/FormData";
import { InputField } from "./components/form/InputField";
import ItemOne from "./components/form/ItemOne";
import ItemTwo from "./components/form/ItemTwo";

type FormData = {
  [key: string]: string;
};

function App() {
  const pdfRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({});

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
  <div className="flex flex-col w-full p-12">
    <div className="flex flex-col w-full border rounded-md" ref={pdfRef} dir="rtl">
      <ItemOne />
      <ItemTwo />ّ
      {formConfig.map((section, index) => (
        <div key={index} className="flex flex-col gap-3 mt-3" dir="rtl">
          <label className="pr-3 font-extrabold">{section.title}</label>
          {section.title === "تاریخ و دفتر تنظیم قولنامه" ? (
            <div className="flex gap-5"> {/* Flex container for fields in one row */}
              {section.fields.map((field) => (
                <InputField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  type={field.type}
                  className=""
                />
              ))}
            </div>
          ) : (
            section.fields.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
                type={field.type}
                className=""
              />
            ))
          )}
        </div>
      ))}
      <div className="flex gap-40 mt-5">
        <h1 className="pr-5 font-extrabold">
          فروشنده: _______________________
        </h1>
        <h1 className="pr-5 font-extrabold">
          خریدار: ______________________________
        </h1>
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