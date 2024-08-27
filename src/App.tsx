// import { NavLink } from "react-router-dom"

import { NavLink } from "react-router-dom"

function App() {
	return (
		<>
			<div className='w-full bg-black '>
				<div className="w-full flex justify-between relative overflow-hidden">
					<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" style={{ position: 'relative', top: '-300px', left: '-200px' }} viewBox="0 0 1267 1267">
						<g id="Grupo_1" data-name="Grupo 1" transform="translate(205.785 -1153.215)">
							<circle id="Elipse_1" data-name="Elipse 1" cx="633.5" cy="633.5" r="633.5" transform="translate(-205.785 1153.215)" fill="#fe615e" />
							<circle id="Elipse_2" data-name="Elipse 2" cx="523" cy="523" r="523" transform="translate(-95.785 1263.215)" fill="#efde5a" />
							<circle id="Elipse_3" data-name="Elipse 3" cx="402" cy="402" r="402" transform="translate(25.215 1384.215)" fill="#68caf1" />
							<circle id="Elipse_13" data-name="Elipse 13" cx="287" cy="287" r="287" transform="translate(140.215 1499.215)" />
						</g>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="613" height="670" style={{ position: 'relative', top: '-400px', left: '200px' }} viewBox="0 0 613 670">
						<g id="Grupo_4" data-name="Grupo 4" transform="translate(-1457 183)">
							<path id="Unión_1" data-name="Unión 1" d="M270.137,576.135A183.091,183.091,0,0,1,59.731,318.256,183.016,183.016,0,1,1,350.48,109.133,183.037,183.037,0,0,1,578.835,380.5a183.022,183.022,0,1,1-308.7,195.635Z" transform="translate(1457 -183)" fill="#1da05c" />
							<path id="Unión_2" data-name="Unión 2" d="M218.137,464.347a148.235,148.235,0,0,1-37.256,4.727c-81.613,0-147.773-66.035-147.773-147.493A146.673,146.673,0,0,1,48.233,256.5,147,147,0,0,1,0,147.492C0,66.034,66.16,0,147.773,0A147.818,147.818,0,0,1,283.014,87.958a147.4,147.4,0,0,1,64.213-14.615C428.84,73.343,495,139.378,495,220.835a146.646,146.646,0,0,1-27.588,85.836A146.645,146.645,0,0,1,495,392.507C495,473.965,428.84,540,347.227,540A147.778,147.778,0,0,1,218.137,464.347Z" transform="translate(1516 -118)" fill="#d5e9a1" />
						</g>
					</svg>
				</div>
				<img src="/assets/items/cosa.webp" className="absolute w-full m-auto z-0 top-20" alt="" />
				<div className="w-full flex justify-between bottom-0 pb-20 overflow-hidden">
					<img src="/assets/items/rayo.webp" width={400} style={{ position: 'relative', left: '-100px', bottom: '-100px' }} alt="" />
					<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" style={{ position: 'relative', right: '-200px', bottom: '-150px', overflow: 'hidden' }} viewBox="0 0 1267 1267">
						<g id="Grupo_1" data-name="Grupo 1" transform="translate(205.785 -1153.215)">
							<circle id="Elipse_1" data-name="Elipse 1" cx="633.5" cy="633.5" r="633.5" transform="translate(-205.785 1153.215)" fill="#fe615e" />
							<circle id="Elipse_2" data-name="Elipse 2" cx="523" cy="523" r="523" transform="translate(-95.785 1263.215)" fill="#efde5a" />
							<circle id="Elipse_3" data-name="Elipse 3" cx="402" cy="402" r="402" transform="translate(25.215 1384.215)" fill="#68caf1" />
							<circle id="Elipse_13" data-name="Elipse 13" cx="287" cy="287" r="287" transform="translate(140.215 1499.215)" />
						</g>
					</svg>
				</div>
			</div>
			<div className="opacity-30 fixed inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(/assets/texture.png)` }}
			>
			</div>
			<div className="flex flex-col items-center h-1">
				<img src="/assets/items/Logo.webp" className="absolute z-10 top-16 m-auto left-0 right-0" width={300} alt="" />
				<iframe className="absolute top-72 left-0 right-0 m-auto rounded-md" src="https://open.spotify.com/embed/playlist/6E6n0pbdcfj4vlZQzqzwEK?utm_source=generator" width="80%" height="500" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				<div className="w-4/5 flex justify-between relative" style={{top: '-300px'}}>
					<NavLink to="/memory-rules" target="_blank">
						<img width={350} className="active:scale-110 transition" src="/assets/items/memory.webp" alt="" />
					</NavLink>
					<div className="flex flex-col items-center">
						<h1 className="text-white text-2xl" style={{fontFamily: 'dynapuff'}}>¡Escucha la playlist aquí!</h1>
						<img src="/assets/qr.png" width={200} className="" alt="" />
					</div>
					<NavLink to="/qa-rules" target="_blank">
						<img width={350} className="active:scale-110 transition" src="/assets/items/ritmo.webp" alt="" />
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default App
