export type Note = {
  id: string;
  title: string;
  content: string;
};

export type NoteFormData = Omit<Note, "id">;
