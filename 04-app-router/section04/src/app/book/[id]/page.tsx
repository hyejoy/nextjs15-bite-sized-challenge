export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <h1>book/{id} page 입니다.</h1>
    </>
  );
}
