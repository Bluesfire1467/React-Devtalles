import type { CSSProperties } from "react";

const firstName = "Rey";
const lastName = "Quintero";

const favoriteGames = [
  "Elden Ring",
  "Dark Souls",
  "Dark Souls 2",
  "Dark Souls 3",
  "Dark Souls 4",
];

const isActive = true;

const address = {
  zip: "ABC-123",
  street: "Calle 1",
};

const styleAddress: CSSProperties = {
  backgroundColor: "rgba(15, 64, 225, 1)",
  borderRadius: "5px",
  padding: "5px",
  color: "white",
  fontWeight: "bold",
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>

      <h4>Videojuegos favoritos</h4>
      <ul className="mi-clase-favorita">
        {favoriteGames.map((game) => (
          <li key={game}>{game}</li>
        ))}
      </ul>

      {isActive ? (
        <p style={{ color: "green" }}>Estoy activo</p>
      ) : (
        <p style={{ color: "red" }}>No estoy activo</p>
      )}

      <p style={styleAddress}>{address.street}</p>
      <p>{address.zip}</p>
    </>
  );
};
