import biggy1 from "../assets/biggy1.webp";
import rimwe from "../assets/rimwe.webp";
import kabiri from "../assets/kabiri.webp";
import gatatu from "../assets/gatatu.webp";
import hiro from "../assets/hiro.webp";
import hiro1 from "../assets/hiro1.webp";
import savani from "../assets/savani.webp";
import lasto from "../assets/lasto.webp";
import imbuto from "../assets/imbuto.webp";
import biggy2 from "../assets/biggy2.webp";

const Garelly = () => {
  return (
    <>
      <section className="py-6 bg-black text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img src={biggy1} alt="" className="object-cover object-bottom w-full h-full col-span-2 row-span-2 rounded  min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
          <img alt="" className="object-cover  w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={rimwe} />
          <img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={kabiri} />
          <img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={gatatu} />
          <img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={hiro} />
          <img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={hiro1} />
          <img alt="" className="object-cover object-bottom w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={savani} />
          <img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={imbuto} />
          <img alt="" className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-125" src={lasto} />
          <img src={biggy2} alt="" className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
        </div>
      </section>
    </>
  );
};

export default Garelly;
