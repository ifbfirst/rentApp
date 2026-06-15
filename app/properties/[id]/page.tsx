'use client';

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";



const PropertyPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const searchParams= useSearchParams();
    const name = searchParams.get('name');
    const pathName = usePathname();


    return <div><button onClick={()=>router.push('/')} className='bg-blue-500 text-white px-4 py-2 rounded' >Go to Home {id} {name} {pathName}</button></div>;
}

export default PropertyPage;