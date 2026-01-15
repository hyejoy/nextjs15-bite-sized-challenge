"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSumbmit = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onSumbmit}>검색</button>
    </>
  );
}
