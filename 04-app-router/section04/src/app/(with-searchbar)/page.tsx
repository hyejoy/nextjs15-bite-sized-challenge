import BookItem from "@/components/book-item";
import style from "./page.module.css";
import type { Book } from "@/types/book";
const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

if (!BASE_URL) {
  throw new Error("API SERVER URL이 설정되지 않았습니다.");
}

async function AllBooks() {
  const response = await fetch(`${BASE_URL}/book`, {
    cache: "no-store",
  });
  // const response = await fetch(`${BASE_URL}/book`);
  if (!response.ok) {
    return <div>등록 도서 오류 발생 ❌</div>;
  }
  const allBooks: Book[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  const response = await fetch(`${BASE_URL}/book/random`, {
    next: { revalidate: 3 },
  }); // 3초마다 새로운 데이터 요청
  // fetch 예외처리 필수 !⭐⭐⭐
  if (!response.ok) {
    return <div>등록 도서 오류 발생 ❌</div>;
  }
  const recoBooks: Book[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Home() {
  // const allBook = await apiFetch<Book[]>("/book");
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
