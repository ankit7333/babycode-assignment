import {NavLink} from 'react-router-dom'
import styles from './styles.module.scss'
import { CiHome } from "react-icons/ci";
import { PiUsersThin } from "react-icons/pi";
import { MdOutlineFlagCircle } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { MdOutlineFeedback } from "react-icons/md";
export default function Nav() {
    return (
        <nav className={`fixed bottom-0 left-0 bg-white sm:bg-transparent w-full sm:static z-10`}>
            <ul className={`flex sm:block`}>
                <li>
                    <NavLink className={`opacity-80 hover:opacity-100 rounded-[10px] transition-all capitalize text-base py-1 px-2 flex flex-col sm:flex-row items-center text-black sm:text-white text-xl sm:text-base`} to="/">
                        <CiHome className={`w-6 h-6 pr-1 ${styles.icon}`} />
                        <span>home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`opacity-80 hover:opacity-100 rounded-[10px] transition-all capitalize text-base py-1 px-2 flex flex-col sm:flex-row items-center text-black sm:text-white text-xl sm:text-base`} to="/community">
                        <PiUsersThin className={`w-6 h-6 pr-1 ${styles.icon}`} />
                        <span>community</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`opacity-80 hover:opacity-100 rounded-[10px] transition-all capitalize text-base py-1 px-2 flex flex-col sm:flex-row items-center text-black sm:text-white text-xl sm:text-base`} to="/stories">
                        <MdOutlineFlagCircle className={`w-6 h-6 pr-1 ${styles.icon}`} />
                        <span>stories</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`opacity-80 hover:opacity-100 rounded-[10px] transition-all capitalize text-base py-1 px-2 flex flex-col sm:flex-row items-center text-black sm:text-white text-xl sm:text-base`} to="/shop">
                        <CiShop className={`w-6 h-6 pr-1 ${styles.icon}`} />
                        <span>shop</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`opacity-80 hover:opacity-100 rounded-[10px] transition-all capitalize text-base py-1 px-2 flex flex-col sm:flex-row items-center text-black sm:text-white text-xl sm:text-base`} to="/feedback">
                        <MdOutlineFeedback className={`w-6 h-6 pr-1 ${styles.icon}`} />
                        <span>feedback</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
