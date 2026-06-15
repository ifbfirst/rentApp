'use client';

import { useState } from "react";
import Link from "next/link";
import { Home, User, Bell, Menu, X} from "lucide-react"
import { usePathname } from "next/navigation";



const menuConfig= [
    { name: 'Home', href: '/', access: 'public' },
    { name: 'Properties', href: '/properties', access: 'public' },
    { name: 'Add Property', href: '/properties/add', access: 'login' },
];



const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
        const pathname = usePathname();

    return (
       <nav className='bg-blue-700 border-b border-blue-500'>
             <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
               <div className='relative flex h-20 items-center justify-between'>
                 <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                   {/* <!-- Mobile menu button--> */}
                   <button
                   onClick={()=>setIsMobileMenuOpen(prev=>!prev)}
                     type='button'
                     id='mobile-dropdown-button'
                     className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white cursor-pointer'
                     aria-controls='mobile-menu'
                     aria-expanded='false'
                   >
                 
                       {isMobileMenuOpen ? (
                         <X 
                           className={`h-6 w-6 text-gray-400 group-hover:text-white transition-colors ${isMobileMenuOpen ? 'block' : 'hidden'}`} 
                           strokeWidth={1.5}
                         />
                       ) : (
                         <Menu 
                           className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" 
                           strokeWidth={1.5} 
                         />
                       )}
    
                   </button>
                 </div>
       
                 <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                   {/* <!-- Logo --> */}
                   <Link className='flex flex-shrink-0 items-center' href='/'>
                        <Home className="h-10 w-10 text-slate-700 text-white cursor-pointer" strokeWidth={1.5}/>
       
                     <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                       PropertyPulse
                     </span>
                   </Link>
                   {/* <!-- Desktop Menu Hidden below md screens --> */}
                   <div className='hidden md:ml-6 md:block'>
                     <div className='flex space-x-2'>
                      {menuConfig.map((item) => {
                        const isActive = pathname === item.href;
                        return item.access === 'public' && <Link
                          key={item.name}
                          href={item.href}
                          className={`text-white rounded-md px-3 py-2 ${isActive ? 'bg-gray-800' : 'hover:bg-gray-900'}`}
                        >
                          {item.name}
                        </Link>}
                      )}
                      
                     </div>
                   </div>
                 </div>
       
                 {/* <!-- Right Side Menu (Logged Out) --> */}
                 <div className='hidden md:block md:ml-6'>
                   <div className='flex items-center'>
                     <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>
                       <i className='fa-brands fa-google text-white mr-2'></i>
                       <span>Login or Register</span>
                     </button>
                   </div>
                 </div>
       
                 {/* <!-- Right Side Menu (Logged In) --> */}
                 <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
                   <div className='relative group'>
                     <button
                       type='button'
                       className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                     >
                       <span className='absolute -inset-1.5'></span>
                       <span className='sr-only'>View notifications</span>
                        <Bell className="h-6 w-6 m-1 text-gray-400 hover:text-white  cursor-pointer " strokeWidth={1.5}/>
                     </button>
                     <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                       2
                       {/* <!-- Replace with the actual number of notifications --> */}
                     </span>
                   </div>
                   {/* <!-- Profile dropdown button --> */}
                   <div className='relative ml-3'>
                     <div>
                       <button
                         type='button'
                         onClick={()=>setIsProfileMenuOpen((prev)=>!prev)}
                         className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                         id='user-menu-button'
                         aria-expanded='false'
                         aria-haspopup='true'
                       >
                         <span className='absolute -inset-1.5'></span>
                         <span className='sr-only'>Open user menu</span>
                          <User className="h-6 w-6 m-1 text-gray-400 hover:text-white  cursor-pointer " strokeWidth={1.5}/>
                       </button>
                     </div>
       
                     {/* <!-- Profile dropdown --> */}
                    {isProfileMenuOpen && (
                     <div
                       id='user-menu'
                       className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                       role='menu'
                       aria-orientation='vertical'
                       aria-labelledby='user-menu-button'
                       tabIndex={Number('-1')}
                     >
                       <Link
                         href='/'
                         className='block px-4 py-2 text-sm text-gray-700'
                         role='menuitem'
                         tabIndex={Number('-1')}
                         id='user-menu-item-0'
                       >
                         Your Profile
                       </Link>
                       <Link
                         href='/'
                         className='block px-4 py-2 text-sm text-gray-700'
                         role='menuitem'
                         tabIndex={Number('-1')}
                         id='user-menu-item-2'
                       >
                         Saved Properties
                       </Link>
                       <Link
                         href='#'
                         className='block px-4 py-2 text-sm text-gray-700'
                         role='menuitem'
                         tabIndex={Number('-1')}
                         id='user-menu-item-2'
                       >
                         Sign Out
                       </Link>
                     </div>)}
                   </div>
                 </div>
               </div>
             </div>
       
             {/* <!-- Mobile menu, show/hide based on menu state. --> */}
             {isMobileMenuOpen && (
               <div  id='mobile-menu'>
                 <div className='space-y-1 px-2 pb-3 pt-2'>
                  {menuConfig.map((item) => {
                    const isActive = pathname === item.href;
                      return item.access === 'public' && (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block rounded-md px-3 py-2 text-base font-medium ${isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                        >
                          {item.name}
                    </Link>)}
                  )}
                   
                 <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4'>
                   <i className='fa-brands fa-google mr-2'></i>
                   <span>Login or Register</span>
                 </button>
               </div>
             </div>)}
           </nav>
    );
};

export default Navbar;