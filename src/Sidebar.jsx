export default function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
 
  return (
    <div className='appSidebar'>
        <div className="appSidebarHeader">
            <h1>Notes</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className="appSiderbarNotes">
            {sortedNotes.map(({ id, title, body, lastModified }, i)=>(
            <div className={`appSidebarNote ${id === activeNote && "active"}`} onClick={()=>setActiveNote(id)}>
                <div className="sidebarNoteTitle" >
                    <strong>{title}</strong>
                    <button onClick={(e)=>onDeleteNote(id)}>Delete</button>
                </div>

                <p>{body && body.substr(0, 100) + "..."}</p>


                <small className='noteMeta'>
                    Last modified {" "} {new Date(lastModified).toLocaleDateString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </small>
            </div>
            ))}
        </div>
    </div>
  )
}
