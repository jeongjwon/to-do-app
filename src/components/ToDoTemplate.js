import './ToDoTemplate.css';

function ToDoTemplate({children}) {
    const date = new Date();
    return (
        <div className="ToDoTemplate">
            <div className="app-title">일정관리 🗓</div>
            <div className="app-date">
                {date.getFullYear()} . {date.getMonth()} . {date.getDay()}
            </div>
            <div className="content">{children}</div>
        </div>
    )
}


export default ToDoTemplate;