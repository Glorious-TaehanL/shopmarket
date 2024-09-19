import Link from "next/link";
import Image from "next/image";
import all from "@/public/all.jpeg"
import men from "@/public/men.jpeg"
import women from "@/public/women.jpeg"


export function CategorySelection(){
    return(
        <div className="py-24 sm:py-32">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-extrabold tracking-tight">shop by category</h2>
                <Link className="text-sm font-semibold text-primary hover:text-primary/80" href="/products/all">
                    Browse all products &rarr;
                </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2" >
                    <Image src={all} alt={"All product Image"} className="object-cover object-center" />
                    {/* 아래부터 흐려지게 효과 */}
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55"/>
                    <div className="p-6 flex items-end">
                        <Link href="/products/all">
                            <h3 className="font-semibold text-white">All Product</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
                
                {/* 오른쪽 첫번째 배너  */}
                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full" >
                    <Image
                        src={men}
                        alt={"Product for men"}
                        className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full" 
                    />
                    {/* 아래부터 흐려지게 효과 */}
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0"/>
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/men">
                            <h3 className="font-semibold text-white">Product for Men</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                {/* 오른쪽 두번째 배너 */}
                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full" >
                    <Image
                        src={women}
                        alt={"Product for women"}
                        className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full" 
                    />
                    {/* 아래부터 흐려지게 효과 */}
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0"/>
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/women">
                            <h3 className="font-semibold text-white">Product for Women</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}