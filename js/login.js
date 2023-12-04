const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiIzNTkyZjMyNS0xODljLTQ5MjktYjU1Ny1mNWJjMmUzZTVkNDkiLCJpYXQiOjE3MDEzMDcwMzMsImV4cCI6MTcwMTMwODgzM30.Nq-yeX98PSC7J7GMS1hbXARN_tugkZT2Y-cJurZDcY0'
const form = document.getElementById('login')
form.addEventListener('submit', loginUser);

const instance = axios.create({
    baseURL: 'http://localhost:8080',
  });

async function loginUser(event) {
event.preventDefault();

const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;

try {
    const response = await instance.post('/usuario/login', {
        accessToken,
        email,
        senha
    })
    console.log(response)
} catch (error) {
    console.log(error)
    }
}

 