import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Patch,
  Delete,
  Query,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeeController {
  constructor(private readonly CoffeeService: CoffeeService) {}
  @Get('flavors')
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.CoffeeService.findAll();
    // return response.status(200).json('This action return all flavors'); // express response
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    const coffee = this.CoffeeService.findOne(id);
    if (!coffee) throw new NotFoundException(`Coffee ${id} not found`);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.CoffeeService.create(createCoffeeDto);
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.CoffeeService.update(id, updateCoffeeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CoffeeService.remove(id);
  }
}
