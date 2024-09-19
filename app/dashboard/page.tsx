import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { DollarSign, DollarSignIcon, PartyPopper, ShoppingBag, User2 } from "lucide-react";

export default function Dashboard() {
    return(
        <>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>총 매출액</CardTitle>
                        <DollarSign className="h-6 w-6 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">₩ 1000</p>
                        <p className="text-ts text-muted-foreground">1원 단위까지 계산됩니다</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>총 판매액</CardTitle>
                        <ShoppingBag className="h-6 w-6 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">$1000.00</p>
                        <p className="text-ts text-muted-foreground"> 판매한 모든 상품의 수</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>총 판매상품</CardTitle>
                        <PartyPopper className="h-6 w-6 text-indigo-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">$1000.00</p>
                        <p className="text-ts text-muted-foreground">샵에 등록된 총 상품</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>총 유저수</CardTitle>
                        <User2 className="h-6 w-6 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">120</p>
                        <p className="text-ts text-muted-foreground">회원가입한 유저 수</p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
                <Card className="xl:col-span-2">
                    <CardHeader>
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>recent transactions from your site</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Recent sales</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>TT</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium">Ted test</p>
                                <p className="text-sm text-muted-foreground">test@test.com</p>
                            </div>
                            <p className="ml-auto font-medium">+₩20,550</p>
                        </div>
                    </CardContent>

                    <CardContent className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>TT</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium">Ted test</p>
                                <p className="text-sm text-muted-foreground">test@test.com</p>
                            </div>
                            <p className="ml-auto font-medium">+₩20,550</p>
                        </div>
                    </CardContent>

                    <CardContent className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>TT</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium">Ted test</p>
                                <p className="text-sm text-muted-foreground">test@test.com</p>
                            </div>
                            <p className="ml-auto font-medium">+₩20,550</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}