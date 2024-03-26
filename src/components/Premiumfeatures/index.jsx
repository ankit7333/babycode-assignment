import styles from './styles.module.scss'
import { CiCircleCheck } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
export default function Premiumfeatures() {
    const features = ['unlimited speaking test access', 'unlimited writing test access', 'analyze your answer', 'check band score']
    return (
        <div className={`rounded-[10px] pb-5 items-center md:items-stretch md:mt-20 flex md:flex-col ${styles.features}`}>
            <div className={`p-3 pb-0`}>
                <h4 className={`text-xl font-semibold mb-2.5`}>Explore premium features with ease!</h4>
                <ul>
                    {
                        features.map(feature => {
                            return <li key={feature} className={`flex items-center text-sm capitalize`}>
                                <CiCircleCheck className={`w-6 h-6 flex-none mr-2`} />
                                <span>{feature}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className={`flex items-center flex-col md:justify-between md:mt-8 md:flex-row pl-0 md:pl-3`}>
                <span className={``}>Only @ <LiaRupeeSignSolid className={`inline-block`} /> 299</span>
                <button className={`flex items-center text-white text-bold px-2.5 py-2 shadow-lg rounded-s-2xl relative ${styles.buynow}`}>
                    <span>Buy Now</span>
                    <IoArrowForwardCircleOutline className={`w-5 h-5 ml-2 flex-none`} />
                </button>
            </div>
        </div>
    )
}
