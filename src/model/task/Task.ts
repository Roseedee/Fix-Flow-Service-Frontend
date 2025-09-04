export default interface Task {
    id: string
    color: string
    getter: string
    cName: string
    cPhone: string
    taskType: string
    brand: string
    sn: string
    pn: string
    price: string
    repairer: string
    report: string
}

export const TaskDataEx : Task[] = [
    {
        id: "1254687791",
        color: '#a9c352',
        getter: "รอซีดี เจ๊ะแล๊ะ",
        cName: "มูฮัมหมัด เจ๊ะแล๊ะ",
        cPhone: "0630742165",
        taskType: "#Printer",
        brand: "Epson L3110",
        sn: "MP2FNXRY",
        pn: "LNVNB161216",
        price: "1000-1200",
        repairer: "ไม่มี",
        report: "Microsoft Word ใช้งานไม่ได้",
    },
    {
        id: "1254687792",
        color: '#a9c352',
        getter: "สมศักดิ์ คงดี",
        cName: "ศิริพร ใจดี",
        cPhone: "0812345678",
        taskType: "#Notebook",
        brand: "Lenovo Ideapad 3",
        sn: "MP2AABBCC",
        pn: "LNVNB151234",
        price: "800-1000",
        repairer: "ช่างชัย",
        report: "เครื่องเปิดไม่ติด ต้องกดหลายครั้ง",
    },
    {
        id: "1254687793",
        color: '#b9b39b',
        getter: "สุภาพร แสงทอง",
        cName: "ประหยัด สุวรรณ",
        cPhone: "0898765432",
        taskType: "#PC",
        brand: "Acer Aspire",
        sn: "SN12345678",
        pn: "PN98765432",
        price: "1500-2000",
        repairer: "ช่างหนึ่ง",
        report: "มีเสียงดังผิดปกติจากพัดลม",
    },
    {
        id: "1254687793",
        color: 'red',
        getter: "สุภาพร แสงทอง",
        cName: "ประหยัด สุวรรณ",
        cPhone: "0898765432",
        taskType: "#PC",
        brand: "Acer Aspire",
        sn: "SN12345678",
        pn: "PN98765432",
        price: "1500-2000",
        repairer: "ช่างหนึ่ง",
        report: "มีเสียงดังผิดปกติจากพัดลม",
    }
];