import CategorySidebar from "./_components/CategorySidebar"


const layout = ({children}) => {
  return (
    <div className=" grid md:grid-cols-4 grid-cols-3 mt-3">
        <div className=" md:col-span-1 col-span-1 hidden md:block"><CategorySidebar/></div>
        <div className=" md:col-span-3 col-span-2">{children}</div>
    </div>
  )
}

export default layout