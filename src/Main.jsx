import ReactMarkdown from "react-markdown";

export default function Main({ activeNote, onUpdateNote }) {

    const onEditField = (field, value) => {
        onUpdateNote({
            ...activeNote,
            [field]: value,
            lastModified: Date.now(),
        });
    };

    if (!activeNote) return <div className="noActiveNote">No Active Note</div>;

    return (
        <div className='appMain'>
            <div className="appMainNoteEdit">
                <input type="text" id="title" placeholder="Note Title" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />
                <textarea id="body" value={activeNote.body} placeholder='Write your note here...' onChange={(e) => onEditField("body", e.target.value)} />
            </div>
            <div className="appMainNotePreview">
                <h1 className="previewTitle">{activeNote.title}</h1>
                <ReactMarkdown className="markdownPreview">{activeNote.body}</ReactMarkdown>
            </div>
        </div>
    )
}
