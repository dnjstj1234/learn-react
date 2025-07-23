import LectureItem from "./LectureItem"

export default function LectureList () {
    return (
        <main>
            <div className="card">
                <div className="card__header">강의 목록</div>
                <div className="card__body">
                    <LectureItem/>
                    <LectureItem/>
                    <LectureItem/>
                </div>
            </div>
        </main>
    )
}