import { Book } from "../../domain/models/book.model";
import { BookRepository } from "../../domain/repositories/book.repository";
import { BookDatasource } from "../datasources/book.datasource";

/**
 * Implementación concreta de {@link BookRepository} (capa Infrastructure).
 * Adapta el {@link BookDatasource} al contrato del dominio.
 */
export class BookRepositoryImpl extends BookRepository {
  /**
   * @param datasource - Fuente de datos de libros
   */
  constructor(private datasource: BookDatasource) {
    super();
  }

  getAll(countBooks: number): Promise<Book[]> {
    return this.datasource.getAll(countBooks);
  }
}
