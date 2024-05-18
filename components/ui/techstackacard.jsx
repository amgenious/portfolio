import {Card, CardFooter, Button} from "@nextui-org/react";
import Image from "next/image";
export const TechStackCard = ({index,icon,name})=>{
    return(
        <Card
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          alt={name}
          className="object-contain"
          height={150}
          src={icon}
          width={150}
        />
        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-black">{name}</p>
        </CardFooter>
      </Card>
    )
}