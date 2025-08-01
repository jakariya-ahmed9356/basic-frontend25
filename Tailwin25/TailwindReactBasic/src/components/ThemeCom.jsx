export default function Theme() {
    return (
        <div className="">
            <div className="grid grid-cols-1 space-y-4 sm:grid-cols-2 md:grid-cols-3">
                <h1 className="bg-primary">Theme Color</h1>

                <div className="bg-custom-400">
                    <h2 className="text-3xl">using Theme by style </h2>
                    <button className="btn hover:bg-gray-500 hover:text-white transition">Click Me</button>
                </div>


                <div className="card">
                    <h2>Card Heading</h2>
                </div>
                
            </div>
            
            <div
            className="max-w-md h-20 mt-4 m-auto card fade-in-scale"
            
            >
            <h2>Animation</h2>
            </div>

        </div>
        
    );
}