import ReactDOM from 'react-dom/client';
import { NotesApp } from './NotesApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <NotesApp />
);