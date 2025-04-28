

interface SeekerProps {
    chapters: string[];
    setCurrentChapter: React.Dispatch<React.SetStateAction<number>>;
    currentChapter: number;
}

export default function Seeker(props: SeekerProps) {
    const handleChapterClick = (index: number) => {
        props.setCurrentChapter(index);
    };

    return (
        <>

            <ol className="space-y-4 w-72">

                {
                    props.chapters.map((chapter, index) => <li>
                        <div key={index} className={`w-full p-4  border  rounded-lg cursor-pointer 
              ${index < props.currentChapter
                                ? "bg-green-300 bg-green-50 text-green-700 border-green-300"
                                : index === props.currentChapter
                                    ? "text-blue-700 bg-blue-100 border-blue-300"
                                    : "border-blue-500 bg-white text-gray-800"}
              `} role="alert"
                            onClick={() => handleChapterClick(index)}
                        >
                            <div className="flex items-center justify-between">
                                <span className="sr-only">User info</span>
                                <h3 className="font-medium">{index + 1}. {chapter}</h3>
                                {
                                    index < props.currentChapter
                                        ?
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                        </svg>
                                        : index === props.currentChapter
                                        && <svg className="rtl:rotate-180 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>

                                }

                            </div>
                        </div>
                    </li>
                    )
                }
            </ol>


        </>
    )
}