import { Home } from "lucide-react";



const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className='bg-gray-200 py-4 mt-24'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
          <div className='mb-4 md:mb-0'>
            <Home className='h-8 w-8' strokeWidth={1.5}/>
          </div>
          <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'>
            <ul className='flex space-x-4'>
              <li>
                <a href='/properties'>Properties</a>
              </li>
              <li>
                <a href='/terms'>Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <p className='text-sm text-gray-500 mt-2 md:mt-0'>
              &copy; {currentYear} PropertyPulse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;