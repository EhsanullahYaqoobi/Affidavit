type FieldConfig = {
    label: string;
    name: string;
    type?: "text" | "textarea";
  };

type SectionConfig = {
    title: string;
    fields: FieldConfig[];
  };
  
 export const formConfig: SectionConfig[] = [
    {
      title: "1: فروشنده",
      fields: [
        { label: "نام و نام خانوادگی", name: "sellerName" },
        { label: "شماره تذکره", name: "sellerId" },
        { label: "شماره تلفون", name: "sellerPhone" },
        { label: "آدرس", name: "sellerAddress" },
      ],
    },
    {
      title: "2: خریدار",
      fields: [
        { label: "نام و نام خانوادگی", name: "buyerName" },
        { label: "شماره تذکره", name: "buyerId" },
        { label: "شماره تلفون", name: "buyerPhone" },
        { label: "آدرس", name: "buyerAddress" },
      ],
    },
    {
      title: "3: مشخصات ملک",
      fields: [
        { label: "نوع ملک", name: "propertyType" },
        { label: "آدرس دقیق", name: "propertyAddress" },
        { label: "عرض زمین", name: "propertyWidth" },
        { label: "طول زمین", name: "propertyLength" },
        { label: "متراژ کلی زمین", name: "propertyArea" },
        { label: "سایر مشخصات", name: "propertyDetails", type: "textarea" },
      ],
    },
    {
      title: "4: مبلغ معامله",
      fields: [
        { label: "مبلغ کل معامله", name: "totalAmount" },
        { label: "مبلغ پیش پرداخت", name: "advancePayment" },
        { label: "مبلغ باقی مانده", name: "remainingAmount" },
      ],
    },
    {
      title: "5: شرایط پرداخت",
      fields: [
        { label: "تاریخ پیش پرداخت", name: "advancePaymentDate" },
        { label: "تاریخ پرداخت باقی مانده", name: "remainingAmountDate" },
      ],
    },
    {
      title: "7: تخلیه و تحویل ملک",
      fields: [{ label: "تاریخ تحویل", name: "deliveryDate" }],
    },
  ];