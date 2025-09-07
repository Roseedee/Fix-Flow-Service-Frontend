import TaskStatus from "@model/task/TaskStatus"

export default interface Task {
    id: string
    status: TaskStatus
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

export const TaskDataEx: Task[] = [
  {
    id: "1254687791",
    status: TaskStatus.IN_PROGRESS,
    color: '',
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
    status: TaskStatus.IN_PROGRESS,
    color: '',
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
    status: TaskStatus.READY_FOR_PICKUP,
    color: '',
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
    id: "1254687794",
    status: TaskStatus.CANCELLED,
    color: '',
    getter: "สายสมร พรมทอง",
    cName: "อนันต์ ดีมาก",
    cPhone: "0845566778",
    taskType: "#Tablet",
    brand: "Samsung Galaxy Tab S6",
    sn: "TAB998877",
    pn: "PN55667788",
    price: "1200-1400",
    repairer: "ช่างแดง",
    report: "หน้าจอแตก ไม่สามารถซ่อมได้",
  },
  {
    id: "1254687795",
    status: TaskStatus.COMPLETED,
    color: '',
    getter: "วิไลวรรณ สมหวัง",
    cName: "กมล ศรีสุข",
    cPhone: "0923344556",
    taskType: "#Phone",
    brand: "iPhone 11",
    sn: "IP11SN3344",
    pn: "PN11223344",
    price: "2500-3000",
    repairer: "ช่างบอย",
    report: "เปลี่ยนแบตเตอรี่และตรวจสอบระบบเรียบร้อย",
  },
  {
    id: "1254687796",
    status: TaskStatus.IN_PROGRESS,
    color: '',
    getter: "เจนจิรา มณีทอง",
    cName: "ภาณุวัฒน์ สายทอง",
    cPhone: "0998877665",
    taskType: "#PC",
    brand: "MSI Gaming",
    sn: "MSI2023001",
    pn: "PNGAME9988",
    price: "3000-3500",
    repairer: "ช่างเอก",
    report: "Mainboard มีปัญหา เปิดติดบ้างไม่ติดบ้าง",
  }
];
