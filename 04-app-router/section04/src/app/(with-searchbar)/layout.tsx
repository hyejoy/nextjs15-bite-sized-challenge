import { ReactNode } from "react";
import SearchBar from "../../components/searchbar";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SearchBar />
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
      </header>
      {children}
    </>
  );
}
