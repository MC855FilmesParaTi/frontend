export interface LoginResponseType {
  message: string;
  username: string;
  tokens: {
    access: string;
    refresh: string;
  };
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponseType> => {
  const reqBody = {
    email,
    password,
  };
  const response = await fetch(
    `https://filmes-pra-ti.azurewebsites.net/auth/login/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
      signal: AbortSignal.timeout(10000),
    }
  );
  if (!response.ok) {
    console.error(response);
    throw new Error("Something went wrong when calling api to setMovieScore");
  }
  return response.json();
};
