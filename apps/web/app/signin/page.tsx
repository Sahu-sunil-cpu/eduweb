

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react"

export default async function Signin() {
const session = await getServerSession();
// console.log(session.data?.user?.name)
    return (
        <>
         <div>
         {JSON.stringify(session?.user)}
         </div>
        </>
    )
}