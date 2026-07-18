import { useLocation } from "react-router";
import Header from "../../components/Header/Header";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register") {
    return children;
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}
