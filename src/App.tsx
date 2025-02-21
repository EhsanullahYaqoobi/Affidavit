import { useRef } from "react";
import { toast } from "react-toastify";
import "./App.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ItemOne from "./components/form/ItemOne";
import ItemTwo from "./components/form/ItemTwo";
import ItemThree from "./components/form/ItemThree";
import ItemFour from "./components/form/ItemFour";
import ItemFive from "./components/form/ItemFive";
import ItemSex from "./components/form/ItemSex";
import ItemSeven from "./components/form/ItemSeven";
import ItemEight from "./components/form/ItemEight";
import ItemNine from "./components/form/ItemNine";

// type FormData = {
//   [key: string]: string;
// };

function App() {
  const pdfRef = useRef<HTMLDivElement | null>(null);
  // const [formData, setFormData] = useState<FormData>({});

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

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
      <div
        className="flex flex-col w-full border rounded-md"
        ref={pdfRef}
        dir="rtl"
      >
        <ItemOne />
        <ItemTwo />
        <ItemThree />
        <ItemFour />
        <ItemFive />
        <ItemSex />
        <ItemSeven />
        <ItemEight />
        <ItemNine />
       
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
