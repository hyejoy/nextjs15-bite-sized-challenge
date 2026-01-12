import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;

  return (
    <>
      <h1>BOOK{id}</h1>
    </>
  );
}
