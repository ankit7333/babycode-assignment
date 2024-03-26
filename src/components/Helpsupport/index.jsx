import { RiWhatsappFill } from "react-icons/ri";
export default function Helpsupport() {
    return (
        <div className={`rounded-[10px] bg-white shadow-md flex items-center justify-center p-5 md:hidden`}>
            <RiWhatsappFill className={`w-6 h-6 flex-none`} />
            <span className={`ml-3`}>Help &amp; Support</span>
        </div>
    )
}
