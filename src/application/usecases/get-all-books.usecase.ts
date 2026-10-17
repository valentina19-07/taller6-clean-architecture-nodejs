import { Book } from "../../domain/models/book.model";
import { BookRepository } from "../../domain/repositories/book.repository";

/**
 * Caso de uso: obtener un listado de libros (capa Application).
 * Depende únicamente del contrato {@link BookRepository}.
 */
export class GetAllBooksUseCase {
  /**
   * @param bookRepository - Repositorio de libros
   */
  constructor(private bookRepository: BookRepository) {}

  /**
   * Ejecuta el caso de uso.
   * @param countBooks - Cantidad de libros a obtener
   */
  execute(countBooks: number): Promise<Book[]> {
    return this.bookRepository.getAll(countBooks);
  }
}
