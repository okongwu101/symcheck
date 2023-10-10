'use client'


import { useDisclosure } from '@mantine/hooks';
import { Collapse, Card, Button } from '@mantine/core';
import { IconFileDescription, IconX } from '@tabler/icons-react';
import SectionCard from './sectionCard';




export default function Description() {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <div className='px-4 mb-6'>

            <div>
                <button
                type='button'
                    className=' py-2 px-8 rounded-lg mb-2 bg-blue-200 font-mono font-semibold text-sm lg:text-base'
                    onClick={toggle}
                >
                    Info
                </button>
            </div>





            <div>
                <Collapse
                    in={opened}
                    transitionDuration={1000}
                    transitionTimingFunction="linear"
                    className=''
                >

                    <SectionCard onClick={toggle}>
                        {/* <div> */}
                        <div className='flex justify-end'>
                            <IconX

                                onClick={toggle}
                            />
                        </div>


                        <p className='font-mono text-xs lg:text-sm text-justify leading-loose mt-4 font-medium'>
                            SymCHeck provides differential diagnoses based on selected symptoms. The app also recommends specialties that the user can refer to, based on the diagnoses, for specialist care.

                        </p>
                        <div className='mt-4 font-mono text-xs lg:text-base leading-loose'>
                            <span className='text-lg text-orange-400 pr-4'>NB:</span><span>The app provides only <span className='text-sm font-semibold'>guide</span> and uses dummy data. It does not, and <span className='text-lg font-medium text-rose-300'>can never</span>, replace a doctor.</span>
                        </div>
                        {/* </div> */}

                    </SectionCard>
                </Collapse>
            </div>











        </div>
    )
}







