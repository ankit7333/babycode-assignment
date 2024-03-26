import Nav from '../Nav'
import Logo from '../Logo'
import Premiumfeatures from '../Premiumfeatures'
import Logout from '../Logout'
export default function Header() {
    return (
        <>
            <Logo />
            <Nav />
            <div className={`hidden sm:flex`}>
                <Premiumfeatures />
            </div>
            <Logout />
        </>
    )
}
