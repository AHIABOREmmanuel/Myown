import { Commissariat } from "./commissariat";
import { Motif } from "./motif";
import { Piece } from "./piece";
export interface Papiers {
  id: number;
  // nom: string;
  // prenoms: string;
  immatriculation: string;
  date: string;
  piece: Piece;
  Commissariat: Commissariat;
  motif: Motif;
}
