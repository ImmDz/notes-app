import { FC, useEffect, useState } from 'react';
import { List, Main } from './components';
import { Note } from './types/notes';
import css from './styles/styles.module.css';
import { v4 as uuidv4 } from 'uuid';

export const NotesApp: FC = () => {
  const [notes, setNotes] = useState<Note[]>(JSON.parse(localStorage.getItem("notes") ?? '[]'));
  // const [filteredNotes, setFilteredNote] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    filter();
  }, [searchValue])

  const changeActiveNote = (id: string) => {
    const newNote = notes.find((note) => String(note.id) === id);
    //@ts-ignore
    setActiveNote({ ...activeNote, ...newNote });
  }

  const updateNote = (updatedNote: Note) => {
    const updatedNotes = notes.map((note) => {
      if (String(note.id) === String(activeNote?.id)) {
        return updatedNote;
      }
      
      return note;
    })

    setNotes(updatedNotes);
  }

  const deleteNote = (id: string) => {
    const newNoteList = notes.filter((note) => String(note.id) !== id);
    setNotes(newNoteList);
  }

  const getActiveNote = () => {
    return activeNote ?  notes.find((note) => note.id === activeNote.id ) : null;
  }

  const addNote = () => {
    setNotes((prevNotes) => [...prevNotes, { id: uuidv4(), title: 'untitled note', content: '', date: new Date().toLocaleDateString() }])
  }

  const filter = () => {
    const newFilteredNotes = notes.filter((note) => note.title?.includes(searchValue));
    setNotes(newFilteredNotes);
  }

  return (
    <div className={css["container"]}>

      <List
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        addNote={addNote}
        deleteNote={(e) => deleteNote(e.currentTarget.id)}
        notes={notes}
        onClick={(e) => changeActiveNote(e.currentTarget.id)} />

      <Main
        activeNote={getActiveNote() ?? activeNote}
        onUpdateNote={updateNote} />

    </div>
  );
}
