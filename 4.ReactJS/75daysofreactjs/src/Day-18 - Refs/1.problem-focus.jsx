const ProblemFocus = () => {
  const onFocusToggle = () => {
    const inputElem = document.getElementById("input");
    console.log({ inputElem });
    if (!inputElem) return;
    inputElem.focus();
  };

  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <input id="input" type="search" placeholder="Search here!" />
      <button onClick={onFocusToggle}>Toggle Focus</button>
    </div>
  );
};

export default ProblemFocus;
