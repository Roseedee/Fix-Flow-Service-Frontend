import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.content}>
        <Header />
        <div style={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
  } as React.CSSProperties,
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    padding: "10px 20px",
  },
  main: {
    padding: "16px",
    flex: 1,
  },
};
