import {NavLink} from 'react-router-dom'
export default function Logo() {
    return (
        <div className={`md:mb-10 flex justify-center md:justify-start`}>
            <NavLink className={`flex items-center`} to="/">
                <img className={`w-12 h-12`} src="/babycodelogo.svg" alt="BabyCode Logo"/>
                <span className={`text-white text-lg`}>BabyCode</span>
            </NavLink>
        </div>
    )
}
