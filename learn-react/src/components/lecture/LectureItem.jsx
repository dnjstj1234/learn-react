export default function LectureItem ({ title, description, thumbnail }) {

    // // 객체 할당
    // const lectureInfo = {
    //     description:'웹 개발에 필요한 기본 지식을 배웁니다.'
    // }
    // // 값 할당
    // const title = '입문자를 위한, HTML&CSS 웹 개발 입문'
    // const image = '/img/htmlcss.png'
    // const alt = '강의 이미지'
    // // 함수 할당
    // const viewCount = () => {
    //     return 2
    // }
    
    // const isEmpty = false
    
    // if (isEmpty) {
    //     return (
    //         <p>강의가 없습니다.</p>
    //     )
    // }

    return (
        <article className="course">
            <img className="course__img" src={ thumbnail } alt="강의 이미지" />
            <div className="course__body">
                <div className="course__title">{ title }</div>
                <div className="course__description">
                    { description }
                    {/* { 1+2 }
                    { viewCount() } */}
                </div>
            </div>
        </article>
    )
}