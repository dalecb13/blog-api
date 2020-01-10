import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

// shapes
import { CreateCategoryDto } from './create-category.dto';
import { UpdateCategoryDto } from './update-category.dto';
import { Category } from './category.interface';

// services
import { CategoryService } from './category.service';

// decorators
import { Roles } from 'src/auth/roles.decorator';

/**
 * Controller which delegates which REST endpoints are open.
 * Admins are able to access all endpoints/verbs.
 * Guests are only able to access GET verbs.
 *
 * @export
 * @class CategoryController
 */
@Controller('category')
export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService,
  ) {}

  @Post()
  @Roles('admin')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns category with id ${id}`;
  }

  @Put(':id')
  @Roles('admin')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a category with id ${id}`;
  }

  @Delete(':id')
  @Roles('admin')
  delete(@Param('id') id: string) {
    return `This action deletes a category with id ${id}`;
  }
}
