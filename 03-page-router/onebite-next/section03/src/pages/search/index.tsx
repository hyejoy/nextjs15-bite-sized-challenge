import { useRouter } from "next/router";
export default function Page() {
  // 라우팅 정보 저장되어있음
  const router = useRouter();
  console.log(router);
  // 📝 쿼리스트링 출력하기
  /**
   * http://localhost:3000/search?q=최수수
   * const {q} = router.query; // 최수수
   */
  const { q } = router.query; // 최수수
  console.log(q);

  return (
    <>
      <h1>search Component {q}</h1>
    </>
  );
}
