import Button from '../Button'
import { CgProfile } from "react-icons/cg";
export default function Profile() {
    return (
        <div className={`flex justify-end px-5 py-2`}>
            <Button>
                <CgProfile className={`w-6 h-6`} />
            </Button>
        </div>
    )
}
