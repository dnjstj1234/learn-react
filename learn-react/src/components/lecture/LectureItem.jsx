function HeartIconBtn ({ onHeartClick, isFavorite = false }) {
    // function handleFavorite () {
    //     alert(isFavorite ? '좋아요' : '모르겠어요')
    // }

    return (
        <button className="btn" onClick={onHeartClick}>
            <img className="btn__img" src={ isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg' } alt="" />
        </button>
    )
}

function LikeIconBtn ({ link }) {
    return (
        <a className="btn" href={link} target="_blank" rel="noreferer">
            <img className="btn__img" src="/img/link-icon.svg" alt="" />
        </a>
    )
}

export default function LectureItem ({ title, description, thumbnail, isFavorite, link, onFavorite, id }) {

    function handleFavorite (e) {
        e.stopPropagation()
        // alert(isFavorite ? '좋아요' : '모르겠어요')
        onFavorite(id, !isFavorite)
    }

    // // 객체 할당
    // const lectureInfo = {
    //     description:'웹 개발에 필요한 기본 지식을 배웁니다.'
    // }s
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

    function handelItemClick() {
        alert('item Click!')
        window.open(link, '_blank')
    }

    return (
        <article className="course" onClick={handelItemClick}>
            <img className="course__img" src={ thumbnail } alt="강의 이미지" />
            <div className="course__body">
                <div className="course__title">{ title }</div>
                <div className="course__description">
                    { description }
                    {/* { 1+2 }
                    { viewCount() } */}
                </div>
            </div>
            <div className="course__icons">
                <button className="btn">
                    {/* {
                        isFavorite ? (
                            <img className="icon-heart" src="/img/heart-fill-icon.svg" alt="" />
                        ) : (
                            <img className="icon-heart" src="/img/heart-icon.svg" alt="" />
                        )
                    } */}
                    {/* <img className="btn__img" src={ isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg' } alt="" /> */}
                    <HeartIconBtn onHeartClick={handleFavorite} isFavorite={isFavorite} />
                    {
                        link && <LikeIconBtn link={link} />
                    }
                </button>
            </div>
        </article>
    )
}