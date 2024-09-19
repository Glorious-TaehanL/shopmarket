import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
    const data = await prisma.product.findMany({
        orderBy:{
            createdAt: 'desc',
        }
    });

    return data;
}

export default async function ProductsRoute(){
    const data = await getData();
    return(
        <>
            <div className="flex items-center justify-end">
                <Button asChild className="flex items-center gap-x-2">
                    <Link href="/dashboard/products/create">
                        <PlusCircle className="w-3.5 h-3.5" />
                        <span>Add Product</span>
                    </Link>
                </Button>
            </div>
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Products</CardTitle>
                    <CardDescription>상품을 관리하고 판매 실적을 확인하세요.</CardDescription>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>사진</TableHead>
                                    <TableHead>상품명</TableHead>
                                    <TableHead>상품 상태</TableHead>
                                    <TableHead>상품 가격</TableHead>
                                    <TableHead>상품 등록일</TableHead>
                                    <TableHead className="text-end">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow key={item.id}>
                                    <TableCell>
                                        <Image alt="상품 이미지" src={item.images[0]} height={64} width={64} className="rounded-md object-cover h-16 w-16" />
                                    </TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell>{new Intl.DateTimeFormat("ko-kr").format(item.createdAt)}</TableCell>
                                    <TableCell className="text-end">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="ghost">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem asChild>
                                                    <Link href={`/dashboard/products/${item.id}`}>수정하기</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                <Link href={`/dashboard/products/${item.id}/delete`}>삭제하기</Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </CardHeader>
            </Card>
        </>
    );
}