import { report } from "@/redux/report/actionCeator";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux"

const ReportContent = () => {

    const dispatch = useDispatch();
    const reports = useSelector((state) => state);
    const route = useRouter()
    const submitHandler = (e) => {

        e.preventDefault();
        const formElement = e.target;
        const formData = {};
        for (let i = 0; i < formElement.length; i++) {
            const element = formElement[i];
            if (element.name) {
                formData[element.name] = element.value
            }
        }
        dispatch(report(formData))
        route.push("/all-Report")
        formElement.reset()
    }


    return (
        <div className="bg px-3 py-4">
            <div className="text-black">
                <form action="get" onSubmit={submitHandler}>
                    <div className="w-full">
                        <h3 className=" text-black text-xl  font-bold px-4 py-1 rounded-sm bg-purple-400 text-center">কুরআন অধ্যয়ন</h3>
                    </div>
                    <div className="my-1 py-4  flex flex-row gap-3">
                        <div className="flex  items-center">
                            <label htmlFor="quran-recite">{"১। কুরআন অধ্যয়ন"}</label>
                            <input type="number" name="ayat" id="quran-recite" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />
                            <span>আয়াত</span>
                        </div>
                        <div className="flex  items-center">
                            <label htmlFor="quran-recite">{" ২। সূরার নাম"}</label>
                            <input type="text" name="suraName" id="suraName" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />

                        </div>
                    </div>
                    {/* hadith */}
                    <div className="w-full">
                        <h3 className=" text-black text-xl  font-bold px-4 py-1 rounded-sm bg-purple-400 text-center">হাদীস অধ্যয়ন</h3>
                    </div>
                    <div className="my-1  py-4 flex flex-row gap-3">
                        <div className="flex  items-center">
                            <label htmlFor="quran-recite">{"১। হাদীস অধ্যয়ন"}</label>
                            <input type="number" name="hadith" id="hadith" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />
                            <span>টি</span>
                        </div>
                        <div className="flex  items-center">
                            <label htmlFor="hadithName">{" ২। গ্রন্থের নাম"}</label>
                            <input type="text" name="hadithName" id="hadithName" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />

                        </div>
                    </div>
                    {/* Book */}
                    <div className="w-full">
                        <h3 className=" text-black text-xl  font-bold px-4 py-1 rounded-sm bg-purple-400 text-center">সাহিত্য অধ্যয়ন</h3>
                    </div>
                    <div className="my-1  py-4 flex flex-row gap-3">
                        <div className="flex  items-center">
                            <label htmlFor="quran-recite">{"১। সাহিত্য অধ্যয়ন"}</label>
                            <input type="number" name="book" id="book" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />
                            <span>পৃষ্ঠা</span>
                        </div>
                        <div className="flex  items-center">
                            <label htmlFor="hadithName">{" ২। বইয়ের নাম"}</label>
                            <input type="text" name="booksName" id="booksName" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />

                        </div>
                    </div>
                    <button className=" flex bg-white text-black py-3 px-4 rounded-md font-bold justify-center items-end border-none outline-none" type="submit">সাবমিট</button>
                </form>

            </div>

            {/* hadith */}

        </div>
    )
}

export default ReportContent