export default function Prepareease() {
    const prepares = [
        {
            "id":1,
            "imageurl":'/speaking.png',
            "title":'Speaking',
        },
        {
            "id":2,
            "imageurl":'/listening.png',
            "title":'Listening',
        },
        {
            "id":3,
            "imageurl":'/reading.png',
            "title":'Reading',
        },
        {
            "id":4,
            "imageurl":'/writing.png',
            "title":'Writing',
        },
        {
            "id":5,
            "imageurl":'/vocabulary.png',
            "title":'Vocabulary',
        },
        {
            "id":6,
            "imageurl":'/classes.png',
            "title":'Classes',
        },
        {
            "id":7,
            "imageurl":'/ielts.png',
            "title":'Book IELTS Exam',
        },
        {
            "id":8,
            "imageurl":'/studentnews.png',
            "title":'Student News',
        }
    ]
    return (
        <div className={`flex-auto w-full md:w-4/6`}>
            <h5 className={`font-medium text-xl mb-4`}>Prepare with ease</h5>
            <ul className={`flex flex-wrap gap-y-1 md:gap-4`}>
                {
                    prepares.map((prepare,id) => {
                        return <li className={`flex flex-col items-center w-1/2 md:w-1/4 p-1`} key={prepare.id}>
                            <img src={prepare.imageurl} alt={prepare.title} />
                            <span className={`text-base font-medium mt-2`}>{prepare.title}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
