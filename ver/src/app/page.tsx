import { redirect } from 'next/navigation'

export default function Home() {

  redirect('/dashboard/counter');

  // se puede borrar
  // return (
  //   <>
  //     <h1>Hola mundo</h1>
  //   </>
  // )
}
