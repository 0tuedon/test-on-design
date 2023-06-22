import React from 'react'
import Flex from '../common/Flex'
import Text from '../common/Text'

const Card = () => {
  return (
    <Flex className='bg-white min-w-[300px] p-4 justify-between text-black max-w-[300px] flex-col rounded-lg border border-[#E6E8F9] min-h-[220px] max-h-[220px] '>   
       <Flex className='flex-col'>
       <Text className='font-semibold '>
            June 2023 summaries by thread
        </Text>
        <Flex className='text-[#667085] mt-4 text-sm'>
            <Text>
                Total summaries :
            </Text>
            <Text>
                 11
            </Text>
        </Flex>
        </Flex> 
        {/* Darw */}
        <Flex className='flex-col'>
        <Flex>
            <Text className='text-[#2154EC] font-medium text-sm'>
                From Apr 24 - Jun 20
            </Text>
        </Flex>
        <Flex className='justify-end'>
        <Text className='text-[#2154EC] cursor-pointer font-medium text-sm'>
                Show more
            </Text>
        </Flex>
        </Flex>
        
        
    </Flex>
  )
}

export default Card