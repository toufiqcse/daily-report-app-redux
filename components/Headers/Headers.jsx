import Link from "next/link"

const Headers = () => {
    return (
        <div className="flex justify-between center bg-blue-500 text-white text-xl px-2 py-4 ">
            <div className="font-semibold">Logo</div>
            <div className="flex justify-end text-[18px] mx-3 font-semibold">
                <Link className="ml-4" href="/">Home</Link>
                <Link className="ml-4" href="/all-Report">All Report</Link>
                <Link className="ml-4" href="/daily-report">Daily Report</Link>
            </div>
        </div>
    )
}

export default Headers