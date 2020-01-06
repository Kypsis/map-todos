import styled from "styled-components";

// placeholder
export const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 99999;

  > * {
    padding: 0 2rem;
  }

  /* @media screen and (max-width: 900px) {
    height: 60px;
    padding: 10px;
  } */
`;

/* {!editable ? (
  <p
    style={{
      backgroundColor: "cyan",
      fontSize: "1.8em",
      fontWeight: 500,
      marginBlockStart: "1em",
      textDecoration: props.completed ? "line-through" : "none"
    }}
    onClick={() => setEditable(true)}
  >
    {value}
  </p>
) : (
  <form
    style={{ display: "flex" }}
    onSubmit={e => {
      e.preventDefault();
      setEditable(false);
    }}
  >
    <TextareaAutosize
      style={{
        backgroundColor: "cyan",
        fontSize: "1.8em",
        fontWeight: 500,
        resize: "none",
        border: "none",
        outline: "none",
        marginBlockStart: "0.8em",
        marginBlockEnd: "0.65em",
        fontFamily: "inherit",
        lineHeight: "inherit"
      }}
      value={value}
      onChange={handleChange}
      autoFocus
      onFocus={e => e.target.select()} 
      onBlur={e => setEditable(false)}
    />
  </form>
)}
{props.isDraggable ? (
  <div style={{ position: "absolute", left: "2px", top: "3px" }}>
    <TiLockOpen
      style={{
        color: "gray",
        fontSize: "18px"
      }}
      onClick={e => props.toggleDraggable(e, props.markerId)}
    />
  </div>
) : (
  <div style={{ position: "absolute", left: "2px", top: "3px" }}>
    <TiLockClosed
      style={{
        color: "gray",
        fontSize: "18px"
      }}
      onClick={e => props.toggleDraggable(e, props.markerId)}
    />
  </div>
)} */
