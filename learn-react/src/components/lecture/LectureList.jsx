import LectureItem from "./LectureItem"
import Lecture from "../Lecture"
import { Fragment } from "react"

export default function LectureList ({ title, items, onFavorite }) {

    // 배열 구조분해 할당
    // const [lecture1, lecture2, lecture3] = items

    // const lecture1 = {
    //     title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    //     description: '웹 개발에 필요한 기본 지식을 배웁니다.',
    //     thumbnail: '/img/htmlcss.png',
    // };
    // const lecture2 = {
    //     title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
    //     description: '쉽고! 알찬! 내용을 준비했습니다.',
    //     thumbnail: '/img/js.png',
    // };
    // const lecture3 = {
    //     title: '포트폴리오 사이트 만들고 배포까지!',
    //     description: '포트폴리오 사이트를 만들고 배포해 보세요.',
    //     thumbnail: '/img/portfolio.png',
    // }

    return (
        <>
            {/* <Lecture title={'강의 목록'}>
                <div className="courses">
                    <LectureItem {...lecture1}/>
                    <LectureItem {...lecture2}/>
                    <LectureItem {...lecture3}/>
                </div>
            </Lecture> */}
            {/* <div className="card">
                <div className="card__header">강의 목록</div>
                <div className="card__body">
                    <div className="courses">
                        <LectureItem title={lecture1.title} description={lecture1.description} thumbnail={lecture1.thumbnail}/>
                        <LectureItem title={lecture2.title} description={lecture2.description} thumbnail={lecture2.thumbnail}/>
                        <LectureItem title={lecture3.title} description={lecture3.description} thumbnail={lecture3.thumbnail}/>
                    </div>
                </div>
            </div> */}
                   {/* <div className="card">
                <div className="card__header">강의 목록</div>
                <div className="card__body">
                    <div className="courses">
                        <LectureItem {...lecture1}/>
                        <LectureItem {...lecture2}/>
                        <LectureItem {...lecture3}/>
                    </div>
                </div>
            </div> */}
            <Lecture title={title}>
                <div className="courses">
                    {
                        // items.map((item) => <LectureItem key={item.id} {...item} />)
                        items.map((item, index) => (
                            <Fragment key={item.id}>
                                <LectureItem {...item} onFavorite={onFavorite} />
                                {
                                    index !== items.length -1 && <hr className="divider"/>
                                }
                            </Fragment>
                        ))
                    }
                </div>
            </Lecture>
        </>
    )
}