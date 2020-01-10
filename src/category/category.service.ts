import { Injectable } from '@nestjs/common';

// interfaces
import { Category } from './category.interface';

@Injectable()
export class CategoryService {
  private readonly categories: Category[] = [];

  create(category: Category): void {
    this.categories.push(category);
  }

  findAll(): Category[] {
    return this.categories;
  }
}
