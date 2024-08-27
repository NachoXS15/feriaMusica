import { NavLink } from "react-router-dom";
import bg from '../../../public/assets/qa_bg.webp'
export default function QARules() {
  return (
    <div className='w-full px-48 h-screen bg-cover bg-center flex flex-col justify-between py-10 items-start' style={{ backgroundImage: `url(${bg})` }}>
      <h2 className=' pt-20 text-7xl font-bold text-yellow-300' style={{ fontFamily: 'dynapuff' }}>Juego de la Memoria</h2>
      <div>
        <p className='pb-2 text-5xl font-bold text-yellow-300' style={{ fontFamily: 'dynapuff-semi-condensed' }}>OBJETIVO DEL JUEGO:</p>
        <span className='text-4xl font-semibold text-yellow-300' style={{ fontFamily: 'dynapuff-condensed' }}>Para ganar debes responder la mayor cantidad <br /> de preguntas de manera correcta</span>
      </div>
      <NavLink to='/qa-play' className='text-5xl rounded-full bg-green-600 text-white px-7 py-3 mb-20' style={{ fontFamily: 'dynapuff' }}>
        Jugar
      </NavLink>
    </div>
  )
}
