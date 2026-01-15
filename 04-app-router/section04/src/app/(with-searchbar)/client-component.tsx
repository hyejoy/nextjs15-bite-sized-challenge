"use client";

import { ReactNode } from "react";

export default function ClinetCompnent({ children }: { children: ReactNode }) {
  console.log("클라이언트 컴포넌트");

  return (
    <>
      {/* 자동으로 client 컴포넌트로 변환됨 */}
      {/* <ServerComponent /> */}
      {children}
    </>
  );
}
