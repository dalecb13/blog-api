/**
 * General data shape of an Impossible Category
 */
export interface Category {
  name: string; // name of the task
  description?: string; // optional description or notes on the task
  children: string[]; // array of ids of tasks
}
