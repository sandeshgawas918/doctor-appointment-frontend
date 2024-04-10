import Image from "next/image";
import Link from "next/link";

const DoctorList = ({ doctors }) => {
  return (
    <div>
      <h1 className=" text-2xl sm:text-3xl font-semibold flex items-center justify-center mt-2 p-5">
        Our Popular Doctors
      </h1>
      <section className=" grid sm:grid-cols-4 gap-3">
        {doctors.length > 0
          ? doctors.map((doc, index) => (
              <div key={index} className=" border-2 rounded-lg p-3 mx-5">
                <Image
                  src={doc.attributes.Image.data.attributes.url}
                  width={100}
                  height={100}
                  alt="doc"
                  className=" w-full object-cover h-[180px] rounded"
                />
                <div className=" flex  items-baseline flex-col mt-2">
                  <p className="bg-blue-100 rounded-full text-[13px] px-3 p-1 text-primary">
                    {doc.attributes.categories.data[0].attributes.Name}
                  </p>
                  <p className="text-[15px] p-1 font-bold">
                    {doc.attributes.Name}
                  </p>
                  <p className="text-[15px] p-1 text-primary">
                    {doc.attributes.Year_of_Experience} years
                  </p>
                  <p className="text-[15px] p-1 text-grey-500">
                    {doc.attributes.Address} years
                  </p>

                  <div className=" w-full outline-1 outline-primary border border-primary rounded-full p-2 text-center mt-3 text-primary cursor-pointer">
                  <Link href={`/details/${doc.id}`} >
                    Book Now
                  </Link>
                  </div>
                </div>
              </div>
            ))
          : [1, 2, 3, 4].map((item,index) => (
              <div className="bg-slate-200 h-[390px] w-auto rounded-lg animate-pulse flex flex-col items-center justify-center mx-8" key={index}></div>
            ))}
      </section>
    </div>
  );
};

export default DoctorList;
