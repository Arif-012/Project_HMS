import { IsDate, IsDateString, IsNumber, IsString } from "class-validator"
export class updatemedicine{
    @IsString({message: 'Title is too long. Maximal length is $constraint1 characters, but actual is $value',}) name: string
     @IsNumber()id: number}
     //@IsNumber()
      //expiredate: Date}