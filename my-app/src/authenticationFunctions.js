export function createAccount(name, email, password) {
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
  fetch("http://pokedex.jhonnymichel.com/signup", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      let parsed = JSON.parse(result);
      if (parsed.message === "User created") {
        signIn(email, password);
      }
    })
    .catch((error) => console.log("error", error));
}
export function signIn(email, password) {
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

  fetch("http://pokedex.jhonnymichel.com/signin", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      let parsed = JSON.parse(result);
      if (parsed.message === "User signed in") {
        localStorage.setItem("token", parsed.token);
      }
    })
    .catch((error) => console.log("error", error));
}

export function getUser() {
  let headers = new Headers();
  let token = localStorage.getItem("token");
  headers.append("Authorization", `Bearer ${token}`);

  let requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch("http://pokedex.jhonnymichel.com/profile", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export function signOut() {
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
      let parsed = JSON.parse(result);
      if (parsed.message === "User signed out") {
        localStorage.removeItem("token");
      }
    })
    .catch((error) => console.log("error", error));
}
