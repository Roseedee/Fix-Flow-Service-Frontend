# Fix-Flow-Service-Frontend

### File Struct
```
    my-ts-react-app/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/               # ไฟล์รูปภาพ ไอคอน โลโก้ ฯลฯ
    │   │   ├── images/
    │   │   └── icons/
    │
    │   ├── components/           # ส่วนประกอบ UI ย่อย (Reusable Components)
    │   │   ├── Button.tsx
    │   │   ├── Modal.tsx
    │   │   └── UserCard.tsx
    │
    │   ├── features/             # แต่ละ feature หรือ module แยกตามหน้าจอ
    │   │   ├── dashboard/
    │   │   │   ├── DashboardPage.tsx
    │   │   │   ├── DashboardHeader.tsx
    │   │   │   ├── widgets/
    │   │   │   │   ├── StatusSummary.tsx
    │   │   │   │   ├── RecentRepairs.tsx
    │   │   │   │   └── RevenueChart.tsx
    │   │   │   └── dashboard.module.css
    │   │   ├── repairs/
    │   │   │   ├── RepairsPage.tsx
    │   │   │   ├── RepairForm.tsx
    │   │   │   └── repair.module.css
    │   │   └── users/
    │   │       ├── UsersPage.tsx
    │   │       └── UserCard.tsx
    │
    │   ├── models/               # Interfaces, Types
    │   │   └── User.ts
    │   │   └── RepairOrder.ts
    │
    │   ├── services/             # เรียก API ต่าง ๆ
    │   │   ├── api.ts
    │   │   └── repairService.ts
    │
    │   ├── store/                # Zustand หรือ Redux Store
    │   │   └── repairStore.ts
    │
    │   ├── styles/               # Global styles และ CSS variables
    │   │   ├── App.module.css
    │   │   └── variables.css
    │
    │   ├── utils/                # ฟังก์ชันช่วยเหลือต่าง ๆ
    │   │   └── formatDate.ts
    │
    │   ├── App.tsx
    │   ├── main.tsx              # (ถ้าใช้ Vite) หรือ index.tsx (CRA)
    │   └── router.tsx            # (ถ้ามีระบบ Routing)
    │
    ├── .env
    ├── tsconfig.json
    ├── package.json
    └── README.md

```