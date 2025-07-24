export default function Lecture ({ title, children }) {
    return (
        <div className="card">
            <div className="card__header">{ title }</div>
            <div className="card__body">{ children }</div>
        </div>
    )
}