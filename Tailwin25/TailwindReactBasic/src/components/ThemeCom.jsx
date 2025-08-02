import { motion } from "motion/react"

export default function Theme() {
    return (
        <div className="">
            <div className="grid grid-cols-1 space-y-4 sm:grid-cols-2 md:grid-cols-3">
                <h1 className="bg-primary">Theme Color</h1>

                <div className="bg-custom-400">
                    <h2 className="text-3xl">using Theme by style </h2>
                    <button className="btn hover:bg-gray-500 hover:text-white transition">Click Me</button>
                </div>


                <motion.div className="card" />
                    <h2>Card Heading</h2>
                     
            </div>
            
            <div className="max-w-md mt-4 m-auto card p-6 text-white">  
                <h1 className="tracking-tighter">Tighter Text</h1> 
                <h1 className="tracking-tight">Tight Text</h1> 
                <h1 className="tracking-normal">Normal Text</h1> 
                <h1 className="tracking-wide">letter Winde</h1> 
                <h1 className="tracking-wider">letter Winder</h1> 
                <h1 className="tracking-tightest text-mint-500 text-3xl/6 font-semibold">letter Widest</h1> 
                <h1 className="tracking-tightest text-mint-500 text-3xl/8 font-extrabold">letter Widest</h1> 
                <h1 className="tracking-tightest text-mint-500 text-3xl/7 font-light">letter Widest</h1> 
            <p className="subpixel-antialiased italic font-stretch-extra-expanded">
                The quick brown fox The quick brown foxThe quick brown foxThe quick brown fox 
                </p>

                <p className="stacked-fractions">1/2 3/4 5/6</p>

                <p className="line-clamp-1">
                Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
                sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
                dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
                ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
                enim.
            </p>

            <p className="underline">Under line </p>
            <p className="overline lowercase">Over line</p>
            <p className="line-through decoration-green-500 decoration-3">Line Through</p>
            <a href="" className="uppercase">No Under line</a>

            <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto, maxime voluptatibus esse molestias quae nisi sed dolore veniam minima.
            </p> <br />
            
            <p className="overlow-hidden text-ellipsis">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto, maxime voluptatibus esse molestias quae nisi sed dolore veniam minima.
            </p> <br />

            <p className="overlow-hidden text-clip">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto, maxime voluptatibus esse molestias quae nisi sed dolore veniam minima.
            </p>


            </div>



        </div>
        
    );
}