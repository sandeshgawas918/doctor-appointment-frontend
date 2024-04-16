import CategorySidebar from "./_components/CategorySidebar"


const layout = ({children}) => {
  return (
    <div className=" grid lg:grid-cols-4 grid-cols-2 mt-3 md:mx-20 mb-7">
        <div className=" lg:col-span-1 hidden lg:block"><CategorySidebar/></div>
        <div className=" lg:col-span-3 col-span-2">{children}</div>
    </div>
  )
}

export default layout