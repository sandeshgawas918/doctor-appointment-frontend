import Image from "next/image";
import Link from "next/link";

const CategoryList = ({ categories }) => {
  return (
    <div className=" text-center flex gap-3 flex-col items-center justify-center">
      <h1 className=" text-center sm:text-4xl font-bold text-2xl">
        Search Doctor by Category
      </h1>
      <p className="text-center sm:text-2xl">
        Search Doctor and Book appointment in one click
      </p>

      <section className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4">
        {categories.length>0?categories.map((category, index) => (
          <Link href={`/category/${category.attributes.Name}`} key={index} className=" flex flex-col gap-2 items-center justify-center bg-blue-50 p-5 m-5 rounded-lg">
            <Image
              src={category.attributes.Icon.data.attributes.url}
              width={40}  
              height={40}
              alt="cat"
              className=" bg-blue-50"
            ></Image>
            <p>{category.attributes.Name}</p>
          </Link>
        )):[1,2,3,4].map((item,index)=>(
          <div className="bg-slate-200 h-[100px] w-[100px] rounded-lg animate-pulse flex flex-col items-center justify-center p-7 m-5" key={index}></div>
        ))}
      </section>
    </div>
  );
};

export default CategoryList;
