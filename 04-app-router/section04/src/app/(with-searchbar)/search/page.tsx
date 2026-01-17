import BookItem from "@/components/book-item";
import { API_SERVER_URL } from "@/app/lib/env";
import { Book } from "@/types/book";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  const response = await fetch(`${API_SERVER_URL}/book/search?q=${q}`);
  if (!response.ok) {
    return <div>오류가 발생했습니다</div>;
  }

  const books: Book[] = await response.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
