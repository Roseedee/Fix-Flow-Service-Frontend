import {getCurrentDate} from "@util/DateTime";

export default interface AddTask {
    name: string;
    phone: string;
    email: string;
    idCard: string;
    deviceType: string;
    brandModel: string; 
    symptoms: string;
    productNumber: string;
    serialNumber: string;
    defects: string;
    accessories: string;
    color: string;
    password: string;
    taskDate: string;
    deposit: number;
    repairTime: string;
    estimatedPrice: string;
    notes: string;
}

export const AddTaskData: AddTask = {
    name: "",
    phone: "",
    email: "",
    idCard: "",
    deviceType: "",
    brandModel: "",
    symptoms: "",
    productNumber: "",
    serialNumber: "",
    defects: "",
    accessories: "",
    color: "",
    password: "",
    taskDate: getCurrentDate(),
    deposit: 0,
    repairTime: "1",
    estimatedPrice: "100-500",
    notes: "",
}
