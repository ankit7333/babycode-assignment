import styles from './styles.module.scss'
export default function Discount({discount}) {
    return (
        <div className={`${styles.discount} hidden sm:block p-1.5 text-sm font-medium`}>
            <p className={`container mx-auto text-center`}>Get {discount}% discount on BabyCode membership</p>
        </div>
    )
}
