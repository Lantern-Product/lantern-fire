import type { GlobalProvider } from "@ladle/react";
import "@lantern-fire/ui/styles";
import "./global.css";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  const isDark = globalState.theme === "dark";

  return (
    <div className={isDark ? "dark" : ""} style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      {children}
    </div>
  );
};
