import React from 'react';
import '@styles/components/DashboardUsersList.css'

interface UserData {
    id: string;
    img?: string;
    name: string;
    position: string;
}

interface UsersDataListProps {
    users: UserData[];
}

export default function DashboardUsersList({ users }: UsersDataListProps) {
    return (
        <div className="dashboard-sub-content user-loged-in-list">
            {
                users.map((user, index) => (
                    <div className="user-card card">
                        <div className="user-card-img">
                            <img src={ user.img } alt="" />
                        </div>
                        <h5>รอซ๊ดี เจ๊ะแล๊ะ</h5>
                        <span>พนักงานซ่อม</span>
                    </div>
                ))
            }
        </div>
    );
}