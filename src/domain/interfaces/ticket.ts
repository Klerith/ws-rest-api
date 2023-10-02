


export interface Ticket {
  id: string;
  number: number;
  createdAt: Date;
  handleAtDesk?: string; // Escritorio 1,
  handleAt?: Date;
  done: boolean;
}