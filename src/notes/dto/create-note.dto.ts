import { IsNotEmpty, MinLength } from "class-validator";

export class CreateNoteDto {
  /**
   * Create note
   * @example "Hello World! My name is John Doe."
   */
  @IsNotEmpty()
  @MinLength(13)
  message: string;
}
