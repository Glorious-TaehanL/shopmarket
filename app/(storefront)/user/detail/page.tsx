import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function userDetailRoute(){
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    
    return(
        <div>
            {user?.id}
        </div>
    )
}