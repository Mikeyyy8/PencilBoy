import { ArrowUpRight } from "lucide-react"

const PencilBoys = ({name, descr}) => {
  return (
    <div className="border border-neutral-400 rounded-md h-96 relative group hover:transition-all ease-linear hover:scale-101 duration-200 hover:bg-[black]/20">
      <div className="bottom-0 absolute m-3 group-hover:scale-95 duration-200 transition-all ease-linear">
        <div className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-150 transition-all ease-linear">
          <ArrowUpRight size={50} />
        </div>
        <p>{name}</p>
        <p className="text-left hidden hover:block">lorem ipsum sit dolor amet something or other thing that i can not think about right now so give me another chance to do right by you</p>
      </div>
    </div>
  )
}

export default PencilBoys
