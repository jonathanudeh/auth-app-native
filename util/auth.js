const BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
const API_KEY = "";

// for both signup and login
export async function authenticate(mode, email, password) {
  // signUp?key=
  const url = `${BASE_URL}${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export async function createUser(email, password) {
  const token = await authenticate("signup", email, password);
  return token;
}

export function login(email, password) {
  // we could return the token by leaving the func synchronous just return the authenticate func or do it like in the createUser func
  return authenticate("signinWithPassword", email, password);
}
