import styles from './styles.module.scss'
export default function Progresssummary() {
    return (
        <div className={`flex-auto w-full md:w-3/5`}>
            <h5 className={`font-medium text-xl mb-4`}>Your Progress Summary</h5>
            <div className={`rounded-[10px] bg-white p-2 flex-col-reverse md:flex-col flex flex-col ${styles.progressbox}`}>
                <label className={`p-2 rounded-[10px] ${styles.label}`}>
                    <span className={`${styles.wow}`}>Wow!</span>
                    <span> you'r about to reach your targeted band</span>
                </label>
                <div className={`w-full h-40 md:h-full flex items-center justify-center`}>
                    Graph
                </div>
            </div>
        </div>
    )
}
