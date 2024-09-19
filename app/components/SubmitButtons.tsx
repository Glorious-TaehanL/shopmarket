"use client";

import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { useFormStatus } from "react-dom"

interface buttonProps {
    text: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
}

export function SubmitButton({text, variant}: buttonProps) {
    const {pending} = useFormStatus();
    return(
        <>
        {pending ? (
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                잠시만 기다려주세요..
            </Button>
        ): (
            <Button variant={variant} type="submit">{text}</Button>
        )}
        </>
    )
}

export function ShoppingBagButton() {
    const {pending} = useFormStatus();
    return(
        <>
        {pending ? (
            <Button disabled size="lg" className="w-full mt-5">
                <Loader2 className="mr-4 h-5 w-5 animate-spin" />
                잠시만 기다려주세요..
            </Button>
        ): (
            <Button size="lg" className="w-full mt-5" type="submit">
                <ShoppingBag className="mr-4 h-5 w-5" />장바구니 추가하기
            </Button>
        )} 
        </>
    )
}

export function DeleteBagItemButton(){
    const {pending} = useFormStatus();
    return(
        <>
        {pending ? (
            <button disabled className="font-medium text-primary text-end">
                <Loader2 className="mr-4 h-5 w-5 animate-spin" />
                    삭제 중..
            </button>
        ): (
            <button className="font-medium text-primary text-end">
                삭제하기
            </button>
        )} 
        </>
    )
}