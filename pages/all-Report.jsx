/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from "react-redux";

const allReport = () => {

    const dispatch = useDispatch();
    const reports = useSelector((state) => state)

    return (
        <>
            {
                reports && <div className="bg px-3 py-4">
                    <div className="text-black">
                        {
                            reports.map((report, i) => (
                                <div key={i}>
                                    <div className="w-full">
                                        <h3 className=" text-black text-xl  font-bold px-4 py-1 rounded-sm bg-purple-400 text-center">কুরআন অধ্যয়ন</h3>
                                    </div>
                                    <div className="my-1 py-4  flex flex-row gap-3">
                                        <div className="flex  items-center">
                                            <label htmlFor="quran-recite">{"১। কুরআন অধ্যয়ন"}</label>
                                            <input readOnly type="number" value={report.ayat} name="ayat" id="quran-recite" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />
                                            <span>আয়াত</span>
                                        </div>
                                        <div className="flex  items-center">
                                            <label htmlFor="quran-recite">{" ২। সূরার নাম"}</label>
                                            <input readOnly type="text" value={report.suraName} name="suraName" id="suraName" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />

                                        </div>
                                    </div>
                                    {/* hadith */}
                                    <div className="w-full">
                                        <h3 className=" text-black text-xl  font-bold px-4 py-1 rounded-sm bg-purple-400 text-center">হাদীস অধ্যয়ন</h3>
                                    </div>
                                    <div className="my-1  py-4 flex flex-row gap-3">
                                        <div className="flex  items-center">
                                            <label htmlFor="quran-recite">{"১। হাদীস অধ্যয়ন"}</label>
                                            <input readOnly type="number" value={report.hadith} name="hadith" id="hadith" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />
                                            <span>টি</span>
                                        </div>
                                        <div className="flex  items-center">
                                            <label htmlFor="hadithName">{" ২। গ্রন্থের নাম"}</label>
                                            <input readOnly type="text" value={report.hadithName} name="hadithName" id="hadithName" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />

                                        </div>
                                    </div>
                                    {/* Book */}
                                    <div className="w-full">
                                        <h3 className=" text-black text-xl  font-bold px-4 py-1 rounded-sm bg-purple-400 text-center">সাহিত্য অধ্যয়ন</h3>
                                    </div>
                                    <div className="my-1  py-4 flex flex-row gap-3">
                                        <div className="flex  items-center">
                                            <label htmlFor="quran-recite">{"১। সাহিত্য অধ্যয়ন"}</label>
                                            <input readOnly type="number" value={report.book} name="book" id="book" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />
                                            <span>পৃষ্ঠা</span>
                                        </div>
                                        <div className="flex  items-center">
                                            <label htmlFor="hadithName">{" ২। বইয়ের নাম"}</label>
                                            <input readOnly type="text" value={report.booksName} name="booksName" id="booksName" placeholder="" className="px-4 py-1 w-30 border-none outline-none bg-gray-100 mx-2 font-bold text-center" />

                                        </div>
                                    </div>

                                </div>
                            ))
                        }

                    </div>

                    {/* hadith */}

                </div>
            }

        </>
    )
}

export default allReport;