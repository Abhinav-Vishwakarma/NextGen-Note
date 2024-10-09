import React from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';

function Header() {
  return (
    <header>
      <h1>
        <NoteAddIcon />
        NextGen Note
      </h1>
      <h4>A dcentralised note making app</h4>
    </header>
  );
}

export default Header;
