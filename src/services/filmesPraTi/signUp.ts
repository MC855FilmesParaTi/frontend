export const signUp = async (
  email: string,
  username: string,
  password: string
) => {
  const reqBody = {
    email,
    username,
    password,
  };
  const response = await fetch(
    `https://filmes-pra-ti.azurewebsites.net/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }
  );
  if (!response.ok) {
    console.error(response);
    throw new Error("Something went wrong when calling api to setMovieScore");
  }
  return response.json();
};
