
import impact from '../assets/imbuto.jpg'


const Impact = () => {
  return (
    <div className="bg-white bg-white text-black" data-aos="fade-left">
	<div className="container grid grid-cols-12 mx-auto">
  <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto" style={{ backgroundImage: `url(${impact})`, backgroundPosition: 'center center', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
			<div className="flex flex-col items-center text-white text-white p-8 py-12 text-center" data-aos="fade-up">
				<h1 className="py-4 text-5xl  font-bold">Mubuga Bio Coffee's Impact</h1>
				<p className="pb-6">we go by turning your expections into satisfactions</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
					<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</div>
		</div>
		<div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
			<div className="pt-6 pb-4 space-y-2" data-aos="fade-right">
				<h1 className="text-3xl font-bold">BIO COFFEE:</h1>
				<p>Coffee is the first generating revenues among Cash crops in Rwanda. Rwandan Coffee is worldwide appreciated,
					 but the country’s supply is yet to satisfy the world demand. Rwanda has a lot of coffee producers with slight differences in quality.
					  The Coffee business employs a number of casual laborers who change their livelihood as Companies move on due to monetization of the rural areas. 
					The scarcity and uniqueness of Bio-Coffee in Rwanda and its world demand are the motivating factors to embark on the Bio-coffee business </p>
				
			</div>
			<div className="pt-6 pb-4 space-y-2" data-aos="fade-left">
				<h1 className="text-3xl font-bold">ENVIRONMENTAL PROTECTION AT THE FORE FRONT:</h1>
				<p>Currently, Rwanda is heavily using fertilizers that have got a significant impact on the environment.
					 Pointless to mention the effects this has caused to the apiculture! As Mubuga Sector is located in elevated altitude and is mountainous,
					  one of the objectives the company is premised on is the environmental protection. Being hilly, the loss of soil from land surfaces due to
					   erosion is very high and this adversely affects the productivity as the environmental protection techniques are yet to be maximized</p>
				
			</div>
      <div className="pt-6 pb-4 space-y-2" data-aos="fade-right">
				<h1 className="text-3xl font-bold">WOMEN AND YOUTH:</h1>
				<p>Mubuga Bio Coffee targets to group together unemployed youth, Women and youth in self governed cooperatives. Those types of cooperatives are currently lacking in Mubuga Sector, one of the very poor sectors in Rwanda. The poverty in that area is connected to effects of 1994 genocide against the Tutsi that left poor widows and orphans with no significant income to pull themselves from poverty. The Company will train them and enhance their management skills.
					 Working together in generating income projects will not only improve their well being but will also enhance the unity amongst them</p>
				
			</div>
			
		</div>
	</div>
</div>
  )
}

export default Impact