import Clock2 from "react-live-clock"
import Paragraph from "@/ui/Paragraph"

const Clock = () => {
  const date = new Date()
  return (
    <div className="px-3 py-2 rounded-md bg-white flex gap-3">
      <Paragraph size={"lg"} className='font-bold'>
        <Clock2 ticking />
      </Paragraph>
      <Paragraph size={"lg"} className='font-bold'>
        {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
      </Paragraph>
    </div>
  )
}
export default Clock
