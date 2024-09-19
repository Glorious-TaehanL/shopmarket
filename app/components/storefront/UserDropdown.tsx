import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Link from "next/link";

interface iAppProps{
    email: string;
    name: string;
    userIamge: string;
}

export function UserDropdown({email, name, userIamge}:iAppProps){
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={userIamge} alt="User Image" />
                        <AvatarFallback>{name}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                        {name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                        {email}
                    </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href={`/user/detail/`}>
                        디테일 테스트
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <LogoutLink>로그아웃</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}