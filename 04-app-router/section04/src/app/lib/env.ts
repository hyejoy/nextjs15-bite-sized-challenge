export const API_SERVER_URL = (() => {
  const url = process.env.NEXT_PUBLIC_API_SERVER_URL;

  if (!url) {
    throw new Error("API SERVER URL이 설정되지 않았습니다.");
  }

  return url;
})();
