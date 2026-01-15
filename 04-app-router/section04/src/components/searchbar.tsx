"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./serachbar.module.css";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams(); // 페이지에 전달된 쿼리스트링값을 꺼내오는 기능을 제공
  const [search, setSearch] = useState("");

  const q = searchParams.get("q"); //q라는 이름의 쿼리스트링을 불러오기
  /**
   * ❕ 비교 )
   * - Page Router에서는
   *   router.query.q 이런식으로 불러왔었음
   * - App Router에서는 useSearhParamas() 함수를 이용해 쿼리스트링 가져옴
   */

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
