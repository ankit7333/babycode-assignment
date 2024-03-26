import Profile from '../../components/Profile'
import Progresssummary from '../../components/Progresssummary'
import Shareapp from '../../components/Shareapp'
import Prepareease from '../../components/Prepareease'
import styles from '../../styles/home.module.scss'
import Guidevideo from '../../components/Guidevideo'
import Helpsupport from '../../components/Helpsupport'
import Practicemock from '../../components/Practicemock'
import Premiumfeatures from '../../components/Premiumfeatures'
export default function Home() {
    return (
        <div>
            <div className={`hidden md:block`}>
                <Profile />
            </div>
            <div className={`p-5 flex flex-col md:flex-row gap-5 ${styles.home__inner}`}>
                <Progresssummary />
                <div className={`hidden md:w-2/5 sm:block`}>
                    <Shareapp />
                </div>
            </div>
            <div className={`p-5 pt-2 flex flex-col md:flex-row gap-5 ${styles.home__inner}`}>
                <Prepareease />
                <div className='flex flex-col w-full md:w-2/6 mt-10 gap-5 flex-col-reverse md:flex-col'>
                    <div>
                        <h4 className={`block md:hidden text-base font-medium text-xl mb-4`}>Quick Actions</h4>
                        <div className={`flex flex-row md:flex-col gap-5`}>
                            <Guidevideo />
                            <Helpsupport />
                        </div>
                    </div>
                    <div className={`flex sm:hidden`}>
                        <Premiumfeatures />
                    </div>
                    <Practicemock />
                </div>
                <div className={`block sm:hidden`}>
                    <Shareapp />
                </div>
            </div>
        </div>
    )
}
