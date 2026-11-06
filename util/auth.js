const BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
const API_KEY = "";

// for both signup and login
export async function authenticate(mode, email, password) {
  // signUp?key=
  const url = `${BASE_URL}${mode}?key=${API_KEY}`;

  await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
}

export async function createUser(email, password) {
  await authenticate("signup", email, password);
}

export async function login(email, password) {
  await authenticate("signinWithPassword", email, password);
}
