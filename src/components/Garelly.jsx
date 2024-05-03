
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import big1 from '../assets/big1.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
import seven from '../assets/seven.jpg'
import eight from '../assets/eight.jpg'
import big2 from '../assets/big2.jpg'



const Garelly = () => {
  return (
   <>
   <section className="py-6 bg-black text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={big1} alt="" className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={one} />
		<img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={two} />
		<img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={three} />
		<img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={four} />
		<img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={five} />
		<img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={six} />
		<img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={seven} />
		<img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={eight} />
		<img src={big2} alt="" className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
   </>
  )
}

export default Garelly