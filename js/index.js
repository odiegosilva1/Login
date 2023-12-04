const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiIzNTkyZjMyNS0xODljLTQ5MjktYjU1Ny1mNWJjMmUzZTVkNDkiLCJpYXQiOjE3MDEzMDcwMzMsImV4cCI6MTcwMTMwODgzM30.Nq-yeX98PSC7J7GMS1hbXARN_tugkZT2Y-cJurZDcY0'
const id = '3592f325-189c-4929-b557-f5bc2e3e5d49'
const containerRecados = document.getElementById('recados')

const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

async function atualizarRecado(id) {
  try {
    const response = await instance.put(`/usuario/recados/${id}`, {
      accessToken,
      titulo: 'Novo titulo',
      descricao: 'Nova descrição'
    })
    console.log(response)
    carregarRecados()
  } catch (error) {
    console.log(error)
  }
}

async function apagarRecado(id) {
  try {
    const response = await instance.delete(`/usuario/recados/${id}`, {
      data: { accessToken },
    })
    console.log(response)
    carregarRecados()
  } catch (error) {
    console.log(error)
  }
}

async function carregarRecados() {
  try {
    const response = await instance.get(`/usuario/${id}/recados/`)
    const recados = response.data.recados
    containerRecados.innerHTML = ''
    recados.forEach((recado) => {
      // Crio uma div pra ser o meu recado
      const recadoDivEl = document.createElement("div");

      // Crio um paragrafo com o nome do recado e sua descricao
      const recadoPEl = document.createElement("p");
      recadoPEl.innerHTML = `${recado.titulo} | ${recado.descricao}`

      // Crio um botão pra atualizar o recado
      const recadoAtualizarEl = document.createElement("button");
      recadoAtualizarEl.innerHTML = 'Atualizar'
      recadoAtualizarEl.classList.add('button')
      recadoAtualizarEl.addEventListener('click', () => { atualizarRecado(recado.id) })

      // Crio um botão pra apagar o recado
      const recadoApagarEl = document.createElement("button");
      recadoApagarEl.innerHTML = 'Apagar'
      recadoApagarEl.classList.add('button')
      recadoApagarEl.addEventListener('click', () => { apagarRecado(recado.id) })

      recadoDivEl.appendChild(recadoPEl)
      recadoDivEl.appendChild(recadoAtualizarEl)
      recadoDivEl.appendChild(recadoApagarEl)

      containerRecados.appendChild(recadoDivEl)
    })
  } catch (error) {
    console.log(error)
  }
}

async function cadastrar(event) {
  event.preventDefault()
  const titulo = event.srcElement.titulo.value
  const descricao = event.srcElement.descricao.value

  try {
    const response = await instance.post('/usuario/recados/', {
      accessToken,
      titulo,
      descricao
    })
    carregarRecados()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

carregarRecados()
