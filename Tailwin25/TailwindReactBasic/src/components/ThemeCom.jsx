export default function Theme() {
    return (
        <div className="bg-[var(--color-mint-500)]">
            <h1 className="">Theme Color</h1>

            <div className="bg-custom-400">
                <h2 className="text-3xl">using Theme by style </h2>
            </div>

            <button className="btn hover:bg-gray-500 hover:text-white transition">Click Me</button>
        </div>

    );
}