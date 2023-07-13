const Task = (props) => {
  return (
    <div className="task">
      <div className="titlecheck">
        {props.check ? (
          <div
            className="checked"
            onClick={() => props.checkFunction(props.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
            >
              <path d="M395-285 226-455l50-50 119 118 289-288 50 51-339 339Z" />
            </svg>
          </div>
        ) : (
          <div
            className="check"
            onClick={() => props.checkFunction(props.id)}
          ></div>
        )}
        <h3 className={props.check ? "line" : ""}>{props.title}</h3>
      </div>
      <div onClick={() => props.remove(props.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -960 960 960"
          width="20"
        >
          <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.566Q720-186 698.85-165 677.7-144 648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
        </svg>
      </div>
    </div>
  );
};

export default Task;
