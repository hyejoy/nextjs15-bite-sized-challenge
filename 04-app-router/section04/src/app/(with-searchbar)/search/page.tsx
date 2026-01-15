import ClinetCompnent from "@/components/client-component";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <>
      <h1>Search 페이지 : {q}</h1>
      <ClinetCompnent>
        <></>
      </ClinetCompnent>
    </>
  );
}
