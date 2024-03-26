import Button from '../Button'
export default function Shareapp() {
    return (
        <div className={`relative flex flex-auto w-full bg-black rounded-[10px] md:bg-transparent mt-0 md:mt-9`}>
           <img className={`object-cover w-1/2 md:w-full rounded-[10px]`} src="/shareapp.png" alt="Share App" />
           <div className={`w-1/2 md:w-full md:absolute inset-x-0 md:bottom-5 w-full flex flex-col items-center justify-start md:justify-center text-white text-left items-baseline md:text-center gap-4 m-0 md:mx-auto p-2 md:p-0 md:items-center`}>
                <span className={`text-2xl`}>One Share can save many lives</span>
                <p>Your one share can unlock a world of education for unprivileged.</p>
                <Button type={`bg-white rounded-[20px] text-black p-2 w-9/12`}>
                    Share App
                </Button>
           </div>
        </div>
    )
}
