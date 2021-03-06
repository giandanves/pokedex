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
    .then((response) => response.json())
    .then((result) => {
      if (result.token) {
        localStorage.setItem("token", result.token);
      } else {
        throw result;
      }
    });
  return response;
}

export const createAccount = async (values) => {
  const { email, name, password } = values;
  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  let data = JSON.stringify({
    email: email,
    password: password,
    name: name,
  });

  let requestOptions = {
    method: "POST",
    headers: headers,
    body: data,
    redirect: "follow",
  };

  const response = await fetch(
    "http://pokedex.jhonnymichel.com/signup",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.dir(result);
      if (result.token) {
        localStorage.setItem("token", result.token);
      } else {
        throw result;
      }
    });

  return response;
};

export const signOut = async () => {
  let headers = new Headers();
  let token = localStorage.getItem("token");
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);

  let requestOptions = {
    method: "POST",
    headers: headers,
    redirect: "follow",
  };

  fetch("http://pokedex.jhonnymichel.com/signout", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      let r = JSON.parse(result);
      if (r.message === "User signed out") {
        localStorage.removeItem("token");
      }
    })
    .catch((error) => console.log("error", error));
};

export default getUser;
