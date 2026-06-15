import Link from "next/link"
import Image from "next/image"
import { Bed, Bath, Ruler, Banknote, MapPin } from "lucide-react"
import { formatDisplayRate, getAvailableRates } from "@/lib/getDisplayRate"
import { Property } from "@/types/Property";


export interface PropertyCardProps {
      property: Property;
    }
    
    const PropertyCard = ({ property }: PropertyCardProps) => {
  const availableRates = getAvailableRates(property.rates);

return (
<div className='rounded-xl shadow-md relative'>
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=''  
        sizes='100vw'
        className='w-full h-auto rounded-t-xl'
        width={0}
        height={0}
      
      />
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <div className='text-gray-600'>{property.type}</div>
          <h3 className='text-xl font-bold'>{property.name}</h3>
        </div>
        <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          {formatDisplayRate(property.rates)}
        </h3>

        <div className='flex justify-center gap-4 text-gray-500 mb-4'>
          <p className='flex items-center gap-1'>
            <Bed className='h-4 w-4' strokeWidth={1.5} /> {property.beds}
            <span className='md:hidden lg:inline'> Beds</span>
          </p>
          <p className='flex items-center gap-1'>
            <Bath className='h-4 w-4' strokeWidth={1.5} /> {property.baths}
            <span className='md:hidden lg:inline'> Baths</span>
          </p>
          <p className='flex items-center gap-1'>
            <Ruler className='h-4 w-4' strokeWidth={1.5} /> {
              property.square_feet
            }
            <span className='md:hidden lg:inline'> sqft</span>
          </p>
        </div>

        <div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
          {availableRates.map((rate) => (
            <p key={rate.period} className='flex items-center gap-1'>
              <Banknote className='h-4 w-4' strokeWidth={1.5} />
              {rate.name} ({rate.amount} {rate.suffix})
            </p>
          ))}
        </div>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='flex items-center gap-2 mb-4 lg:mb-0'>
            <MapPin className='h-5 w-5 text-orange-700' strokeWidth={1.5} />
            <span className='text-orange-700'>
              {' '}
              {property.location.city}, {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Details
          </Link>
        </div>
      </div>
    </div>)
}

export default PropertyCard;