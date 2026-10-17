import { Book } from "../models/book.model";

/**
 * Contrato del repositorio de libros (capa Domain).
 * No conoce APIs, bases de datos ni frameworks.
 */
export abstract class BookRepository {
  /**
   * Obtiene un listado de libros.
   * @param countBooks - Cantidad de libros a obtener
   */
  abstract getAll(countBooks: number): Promise<Book[]>;
}
