import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// makes the type apply partially and also inherit from the create coffee dto type
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto){}
