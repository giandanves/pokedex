async function getUser() {
  let token = localStorage.getItem("token");
  let headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  let error;

  let requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const response = await fetch(
    "http://pokedex.jhonnymichel.com/profile",
    requestOptions
  );
  if (!response.ok) {
    error = response.status;
    throw error;
  }
  return response.json();
}

export async function signIn(user) {
  const { email, password } = user;
  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  let data = JSON.stringify({
    email: email,
    password: password,
  });

  let requestOptions = {
    method: "POST",
    headers: headers,
    body: data,
    redirect: "follow",
  };

  const response = await fetch(
    "http://pokedex.jhonnymichel.com/signin",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      let r = JSON.parse(result);
      console.log(result);
      if (r.message === "User signed in") {
        localStorage.setItem("token", r.token);
        return { success: r.message };
      }
      if (r.message === "Invalid Credentials") {
        return { error: "Incorrect email address or password" };
      }
    })
    .catch((error) => console.log("error", error));

  return response;
}

export default getUser;
