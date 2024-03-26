// import styles from './styles.module.scss'
import Button from '../Button'
export default function Practicemock() {
    return (
        <div className={`flex border rounded-[10px] bg-white p-5 flex-col`}>
            <h5 className={`mb-2 text-xl font-medium`}>Practice Mock Tests</h5>
            <p className={`mb-4 text-base`}>Get the authentic IELTS exam experience with all four modules covered!</p>
            <Button type={`bg-blue-500 text-white rounded-[20px] p-2 text-base font-medium`}>
                Start
            </Button>
        </div>
    )
}
