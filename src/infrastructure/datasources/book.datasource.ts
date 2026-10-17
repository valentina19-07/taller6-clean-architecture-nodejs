import { faker } from '@faker-js/faker';
import { Book, BookGenre } from "../../domain/models/book.model";

/**
 * Datasource que genera libros simulados con faker (capa Infrastructure).
 */
export class BookDatasource {
  private genres: BookGenre[] = ['Ficcion', 'Ciencia', 'Historia', 'Tecnologia'];

  /**
   * Genera una lista de libros simulados.
   * @param countBooks - Cantidad de libros a generar
   */
  async getAll(countBooks: number): Promise<Book[]> {
    const books: Book[] = [];
    for (let i = 1; i <= countBooks; i++) {
      books.push(this.generateBook(i));
    }
    return books;
  }

  private generateBook(id: number): Book {
    return {
      id,
      title: faker.book.title(),
      author: faker.book.author(),
      genre: faker.helpers.arrayElement(this.genres),
      year: faker.number.int({ min: 1950, max: 2024 }),
    };
  }
}
