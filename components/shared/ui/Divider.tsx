import { zoomOut } from "@/utils/motion"
import { MotionDiv } from "../MotionDiv"


const Divider = () => {
    return (
        <MotionDiv className="w-16 h-1 mx-auto bg-blue-500 rounded-full"
            variants={zoomOut(0, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        />)
}

export default Divider