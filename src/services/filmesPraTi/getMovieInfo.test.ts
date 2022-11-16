import { getMovieInfo } from "./getMovieInfo";
test("successful query", async () => {
  const response = await getMovieInfo(
    "tt0113497",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4NTIxMzg5LCJpYXQiOjE2Njg0NDkzODksImp0aSI6ImNhYzVjOTFjNjJkYzQ0YjZiYTM4Yzc4ZTZiMGZjMjFjIiwidXNlcl9pZCI6Mn0.QRNbGQo9JCbMKmu7ev62jS3F64hJrY_kyWDMCq7XZVo"
  );
  console.log(response);
  expect(response.title).toBe("Jumanji");
});
