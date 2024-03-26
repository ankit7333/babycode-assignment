import { FaSquareYoutube } from "react-icons/fa6";
export default function Guidevideo() {
    return (
        <div className={`rounded-[10px] bg-white shadow-md flex items-center justify-center p-5`}>
            <FaSquareYoutube className={`w-6 h-6 flex-none`} />
            <span className={`ml-3`}>App Guide Video</span>
        </div>
    )
}
