import { addBagItem } from "@/app/actions";
import { ShoppingBagButton } from "@/app/components/SubmitButtons";
import { FeaturedProducts } from "@/app/components/storefront/FeaturedProducts";
import { ProductImageSlider } from "@/app/components/storefront/ProdcutImageSlider";
import prisma from "@/app/lib/db"
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(productId: string) {
    const data = await prisma.product.findUnique({
        where:{
            id:productId,
        },
        select:{
            price: true,
            images: true,
            description: true,
            name: true,
            id: true,
        }
    });

    if(!data){
        return notFound();
    }

    return data;
}

export default async function ProductIdRoute({
    params
}:  {
    params:{id:string};
})  {
    const data = await getData(params.id);
    const addProductsShoppingCart = addBagItem.bind(null, data.id);
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
                <ProductImageSlider images={data.images} />
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-green-900">
                        {data.name}
                    </h1>
                    <p className="text-2xl mt-2 text-green-900">
                        ₩{data.price}
                    </p>
                    <div className="mt-3 flex items-center gap-1">
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    </div>
                    <p className="text-base text-gray-700 mt-6">
                        {data.description}
                    </p>

                    <form action={addProductsShoppingCart}>
                        <ShoppingBagButton />
                    </form>
                </div>
            </div>

            <div className="mt-16">
                <FeaturedProducts />
            </div>
        </>
    )
}