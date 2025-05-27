import React from "react";

export default function Header() {
  return (
    <div style={styles.header}>
      <h4>ระบบจัดการงานซ่อม</h4>
      <input placeholder="Quick Search" style={styles.search} />
    </div>
  );
}

const styles = {
  header: {
    padding: "10px 16px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #e0e0e0",
  },
  search: {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
};
