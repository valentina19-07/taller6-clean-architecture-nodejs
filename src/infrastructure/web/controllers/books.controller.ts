import { Request, Response } from "express";
import { GetAllBooksUseCase } from "../../../application/usecases/get-all-books.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP de libros. Recibe la request, delega al caso de uso
 * y devuelve la respuesta JSON. No contiene lógica de negocio.
 */
export class BooksController {
  /**
   * @param getAllBooksUseCase - Caso de uso para obtener libros
   */
  constructor(private getAllBooksUseCase: GetAllBooksUseCase) {}

  /**
   * GET /api/books/:countBooks
   */
  getAllBooks = (req: Request, res: Response): void => {
    const { countBooks } = req.params;

    setTimeout(() => {
      this.getAllBooksUseCase
        .execute(Number(countBooks))
        .then((books) => res.status(201).json(books))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
