import React, { useState } from 'react'
import Input from './components/Input'
import './App.css'

function App() {

  const [name, setName] = useState("")
  const [ra, setRa] = useState("")
  const [age, setAge] = useState("")
  const [media, setMedia] = useState("")
  const [sex, setSex] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name)
    console.log(ra)
    console.log(age)
    console.log(media)
    console.log(sex)
  }

  return (
    <>
      <section className='flex justify-center items-center w-screen'>
        <div className='border-1 p-10'>
          <p className='text-3xl pb-5'>Cria um aluno</p>
          <form className='flex flex-col gap-10 ' onSubmit={handleSubmit}>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Escreva o nome aqui" type="text" />
            <Input value={ra} onChange={(e) => setRa(e.target.value)} placeholder="Digite seu codigo RA" type="number" />
            <Input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Digite a idade" type="number" />
            <Input value={media} onChange={(e) => setMedia(e.target.value)} placeholder="Qual foi a media do aluno" type="number" step="0.1" />
            <select value={sex} onChange={(e) => setSex(e.target.value)} className='px-5 py-2 border-1 rounded-sm transition-all durations-300 hover:border-gray-400'>
              <option className='bg-black'>Selecione o Sexo</option>
              <option className='bg-black' value="Masculino">Masculino</option>
              <option className='bg-black' value="Feminino">Feminino</option>
              <option className='bg-black' value="esquisito">outro</option>
            </select>
            <button type='submit'>Enviar</button>
          </form>
        </div>
        <div>
          
        </div>
      </section>
    </>
  )
}

export default App
