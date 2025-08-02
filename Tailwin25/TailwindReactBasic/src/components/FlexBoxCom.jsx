export default function FlexBox() {
    return (
        <div className="my-10 container">
            
            <h1 className="mb-6">Flex Box Basic </h1>

            {/* flex basis  */}

            <div className="mt-6 flex justify-center flex-grow gap-4">
                <div className="bg-sky-500 basis-64"> 01 </div>
                <div className="bg-sky-500 basis-64"> 02 </div>
                <div className="bg-sky-500 basis-108"> 03 </div>
            </div>

            <div className="mt-6 flex justify-center flex-grow gap-4">
                <div className="bg-sky-500 basis-sm"> 01 </div>
                <div className="bg-sky-500 basis-md"> 02 </div>
                <div className="bg-sky-500 basis-lg"> 03 </div>
                <div className="bg-sky-500 basis-xl"> 03 </div>
                <div className="bg-sky-500 basis-2xl"> 03 </div>
                <div className="bg-sky-500 basis-3xl"> 03 </div>
                <div className="bg-sky-500 basis-4xl"> 03 </div>
            </div>

            <div className="mt-6 flex justify-center flex-grow gap-4">
                <div className="bg-sky-500 basis-1/4"> 01 </div>
                <div className="bg-sky-500 basis-2/4"> 02 </div>
                <div className="bg-sky-500 basis-3/4"> 03 </div>
                <div className="bg-sky-500 basis-4/4"> 03 </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <div className="bg-pink-500 basis-md"> 01 </div>
                <div className="bg-pink-500 basis-md"> 02 </div>
                <div className="bg-pink-500 basis-md"> 03 </div>
                <div className="bg-pink-500 basis-md"> 03 </div>
            </div>

            <div class="mt-6 flex gap-4 flex-wrap">
                <div className="bg-orange-500 basis-md"> 01 </div>
                <div className="bg-orange-500 basis-md"> 02 </div>
                <div className="bg-orange-500 basis-md"> 03 </div>
                <div className="bg-orange-500 basis-md"> 03 </div>
                <div className="bg-orange-500 basis-md"> 01 </div>
                <div className="bg-orange-500 basis-md"> 02 </div>
                <div className="bg-orange-500 basis-md"> 03 </div>
                <div className="bg-orange-500 basis-md"> 03 </div>
            </div>


            <div class="flex">
                <div class="bg-blue-500 p-4 grow-3">I'm flexible</div>
                <div class="bg-pink-500 p-4 grow-1">I'm flexible</div>
                <div class="bg-red-500 p-4 grow-5">I'm fixed</div>
            </div>

            <div class="flex w-64 border">
                <div class="bg-blue-500 w-48 shrink-0 p-2 text-white">Don't shrink</div>
                <div class="bg-red-500 w-48 p-2 shrink-3 text-white">Shrink if needed</div>
            </div>

        </div>
    );
}