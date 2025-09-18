import React, { useState } from 'react'
import Input from './components/Input'
import initialAlunos from './database'
import './App.css'

function App() {

  const [name, setName] = useState("")
  const [ra, setRa] = useState("")
  const [age, setAge] = useState("")
  const [media, setMedia] = useState("")
  const [sex, setSex] = useState("")
  const [filter, setFilter] = useState("")
  const [alunos, setAlunos] = useState(initialAlunos)
  let filteredAlunos = [...alunos]
  
  function handleSubmit(e) {
    e.preventDefault()
    const newAluno = {
      name,
      ra,
      age,
      media,
      sex,
    }
    setAlunos((prevAlunos) => [...prevAlunos, newAluno])
    alert("Adicionado")
  }

  function showAlunosByName() {
    filteredAlunos.sort((a, b) => a.name.localeCompare(b.name))
  }

  function showAlunosByRA() {
    filteredAlunos.sort((a, b) => b.ra - a.ra)
  }

  function showAlunosByNameAprove() {
    filteredAlunos = filteredAlunos.filter((aluno) => aluno.media >= 6)
    filteredAlunos.sort((a, b) => a.name.localeCompare(b.name))
  }


  if(filter == "nome") {
    showAlunosByName()
  } else if(filter == "ra") {
    showAlunosByRA()
  } else {
    showAlunosByNameAprove()
  }

  return (
    <>
      <section className='flex justify-center items-center gap-10 h-screen w-screen'>
        <div className='flex flex-col justify-between h-140 mb-0'>
          <p className='text-3xl pb-5'>Cria um aluno</p>
          <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <p>Nome:</p>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Escreva o nome aqui" type="text" />
            <p>RA:</p>
            <Input value={ra} onChange={(e) => setRa(e.target.value)} placeholder="Digite seu codigo RA" type="number" />
            <p>Idade:</p>
            <Input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Digite a idade" type="number" />
            <p>Media:</p>
            <Input value={media} onChange={(e) => setMedia(e.target.value)} placeholder="Qual foi a media do aluno" type="number" step="0.1" />
            <p>Sexo:</p>
            <select value={sex} onChange={(e) => setSex(e.target.value)} className='px-5 py-2 border-1 rounded-sm transition-all durations-300 hover:border-gray-400'>
              <option className='bg-black hidden'>Selecione o Sexo</option>
              <option className='bg-black' value="Masculino">Masculino</option>
              <option className='bg-black' value="Feminino">Feminino</option>
              <option className='bg-black' value="esquisito">outro</option>
            </select>
            <button type='submit'>Enviar</button>
          </form>
        </div>
        <div className='flex flex-col justify-between h-140'>
          <p className='text-3xl'>Lista:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className='px-5 py-2 w-100 border-1 rounded-sm transition-all durations-300 hover:border-gray-400'>
            <option className='bg-black hidden'>Filtrar por:</option>
            <option className='bg-black' value="nome">Nome</option>
            <option className='bg-black' value="ra">Ra</option>
            <option className='bg-black' value="aprovados">Nome dos aprovados</option>
          </select>
          <div className='h-105 w-100 p-4 border-1 overflow-y-auto'>
            {filteredAlunos.map((aluno, i) => (
              <>
                <p>ID: {i} - Nome: {aluno.name} / RA: {aluno.ra} / Idade: {aluno.age} / Media: {aluno.media} / Sexo: {aluno.sex} / Resultado: {aluno.media >= 6 ? "Aprovado" : "Reprovado"}</p>
                <hr />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
