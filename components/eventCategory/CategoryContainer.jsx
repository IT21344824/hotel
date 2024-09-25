import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
import Image from 'next/image'
import { eventCategorDummy_1 } from "@/components/dummy/eventCategorDummy"

const CategoryContainer = ({ category, title, sub_heading }) => {
    if (!category || !Array.isArray(category)) {
        return <div>No categories available</div>;
    }
    return (
        <div className='flex flex-col items-center justify-center mt-20 '>
            <div className=''>
                <h1 className='text-center'>{title}</h1>
                <h4 className='text-center mb-4 '>{sub_heading}</h4>

                <div className='flex flex-wrap items-center justify-center gap-10 mx-40'>
                    {category.map(item => (
                        <div key={item.id}>
                            <Card className="w-[250px] bg-[#FFF5E0]">
                                <div className=''>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={1000}
                                        height={1000}
                                        layout='intrinsic'
                                        className="aspect-square object-cover rounded-md"
                                    />
                                </div>
                                <CardContent>
                                    <div className='flex justify-between mt-3'>
                                        <p> {item.name}Title</p>
                                        <p className='bg-black text-xl text-white w-6 h-6 rounded-full flex justify-center items-center cursor-pointer'>
                                            +
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-center rounded-full">
                                    <Button size="lg" className="rounded-full bg-[#E0B973]">Explore</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default CategoryContainer