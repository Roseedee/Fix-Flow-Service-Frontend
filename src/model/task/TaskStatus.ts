enum TaskStatus {
    IN_PROGRESS = "กำลังดำเนินการ",
    AWAITING_PARTS = "รออะไหล่",
    READY_FOR_PICKUP = "ซ่อมเสร็จ",
    COMPLETED = "สิ้นสุดงานซ่อม",
    CANCELLED = "ยกเลิกงานซ่อม",
    OTHER = "อื่นๆ"
}

const TaskStatusColors: Record<TaskStatus, string> = {
    [TaskStatus.IN_PROGRESS]: "#7dda31ff",
    [TaskStatus.AWAITING_PARTS]: "#b8b8b8ff",
    [TaskStatus.READY_FOR_PICKUP]: "#70b17eff",
    [TaskStatus.COMPLETED]: "#7cb9ffff",
    [TaskStatus.CANCELLED]: "#ff5468ff",
    [TaskStatus.OTHER]: "#555555ff"
};

const TaskColor = (status: TaskStatus): string => {
    return TaskStatusColors[status] || "#9b9b9b";
}

export { TaskColor };
export default TaskStatus;
