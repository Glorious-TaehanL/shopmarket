
import { deleteBanner } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DeleteBannerRoute({ params }:{params: {id: string}}) {
    return(
        <div className="h-[80vh] w-full flex items-center justify-center">
            <Card className="max-w-xl">
                <CardHeader>
                    <CardTitle>이 배너를 삭제하시겠습니까?</CardTitle>
                    <CardDescription>
                        이 작업은 되돌릴 수 없습니다.<br/>
                        배너를 삭제하며 서버에서 배너의 데이터가 영구적으로 지워집니다.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="w-full flex justify-between">
                    <Button variant="secondary" asChild>
                        <Link href={"/dashboard/banner"}>취소하기</Link>
                        </Button>
                    <form action={deleteBanner}>
                        <input type="hidden" name="bannerId" value={params.id}/>
                        <SubmitButton variant="destructive" text="삭제하기" />
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}