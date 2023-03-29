import "./List.css";
import { FC } from "react";
import { Note } from "../../types";

type Props = {
  notes: Note[];
  onRemove: (id: string) => any;
};

export const List: FC<Props> = ({ notes, onRemove }) => {
  return (
    <div className="wrapper">
      <ul>
        {notes.map((note) => {
          return (
            <li>
              <div className="list-item">
                <h2>{note.title}</h2>
                <button onClick={() => onRemove(note.id)}>Delete</button>
              </div>
              <p>{note.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
