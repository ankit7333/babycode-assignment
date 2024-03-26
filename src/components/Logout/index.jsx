import Button from '../Button'
import { LuLogOut } from "react-icons/lu";
export default function Logout() {
    return (
        <>
            <Button type={'bg-transparent cursor-pointer items-center text-white mx-1 my-5 hidden md:flex'}>
                <LuLogOut />
                <span>Logout</span>
            </Button>
        </>
    )
}
