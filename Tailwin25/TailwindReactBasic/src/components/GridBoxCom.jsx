export default function GridBox() {
    return (
        <div className="container">
            <h1> Basic Grid Box </h1>
                {/* Grid cols  */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="p-4 bg-pink-500">01</div>
                <div className="p-4 bg-pink-500">02</div>
                <div className="p-4 bg-pink-500">03</div>
            </div>

            {/* Implementing a subgrid  */}
            <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-4 bg-pink-500">01</div>
                <div className="p-4 bg-pink-500">02</div>
                <div className="p-4 bg-pink-500">03</div>
                <div class="col-span-3 grid grid-cols-subgrid gap-4">
                    <div className="bg-green-500">04</div>
                    <div className="bg-green-500">04</div>
                    <div className="bg-green-500">04</div>
                </div>
                <div className="p-4 bg-pink-500">05</div>
                <div className="p-4 bg-pink-500">06</div>
            </div>
            
            {/* Grid cols spans  */}

            <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-500 col-span-full">01</div>
                <div className="p-4 bg-blue-500 col-start-1 col-end-3">02</div>
                <div className="p-4 bg-blue-500">03</div>
                <div className="p-4 bg-blue-500 col-start-1 col-end-7">04</div>
            </div> {/* End Grid cols  */}


            {/* Grid row  */}

            <div className="mt-6 grid grid-flow-col grid-rows-3 gap-4">
                <div className="p-4 bg-purple-500">01</div>
                <div className="p-4 bg-purple-500">02</div>
                <div className="p-4 bg-purple-500">03</div>
                <div className="p-4 bg-purple-500">04</div>
                <div class="row-span-3 grid grid-rows-subgrid gap-4">
                    <div class="row-start-2 bg-red-500">06</div>
                </div>
                <div className="p-4 bg-purple-500">06</div>
                <div className="p-4 bg-purple-500">07</div>
            </div>


        </div>
    );
}
