/**
 * Describes a Impossible Category
 */
export class CreateCategoryDto {
  readonly name: string; // name of the task
  readonly description?: string; // optional description or notes on the task
  readonly children: string[]; // array of ids of tasks
}
