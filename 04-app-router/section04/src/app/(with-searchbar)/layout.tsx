import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>임시 서치바</h1>
      {children}
    </>
  );
}
