# Fix-Flow-Service-Frontend

### File Struct
```
    my-ts-react-app/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/               
    │   │   ├── images/
    │   │   └── icons/
    │
    │   ├── components/           
    │   │   ├── Button.tsx
    │   │   ├── Modal.tsx
    │   │   └── UserCard.tsx
    │
    │   ├── features/  
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
    │   ├── models/    
    │   │   └── User.ts
    │   │   └── RepairOrder.ts
    │
    │   ├── services/  
    │   │   ├── api.ts
    │   │   └── repairService.ts
    │
    │   ├── store/     
    │   │   └── repairStore.ts
    │
    │   ├── styles/    
    │   │   ├── App.module.css
    │   │   └── variables.css
    │
    │   ├── utils/     
    │   │   └── formatDate.ts
    │
    │   ├── App.tsx
    │   ├── main.tsx   
    │   └── router.tsx 
    │
    ├── .env
    ├── tsconfig.json
    ├── package.json
    └── README.md

```