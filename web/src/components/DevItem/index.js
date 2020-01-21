import React from "react";
import "./styles.css";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import GitHubIcon from "@material-ui/icons/GitHub";

function DevItem({ dev, onClick }) {
  // pega a propriedade dev

  async function handleDelete(e) {
    await onClick(dev);
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <div className="link">
        <a
          className="profile"
          href={`https://github.com/${dev.github_username}`}
        >
          Acessar perfil no Github
        </a>
        <div className="dev-edit">
          <IconButton>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </li>
  );
}

export default DevItem;
