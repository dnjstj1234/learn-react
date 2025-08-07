import { useState } from "react"
import { useImmer } from 'use-immer'
import Lecture from "./Lecture"

export default function LectureForm () {
    const [form, updateForm] = useImmer({
        title: '리액트 강의',
        description: '리액트 기초부터 실전까지',
        info: {
            level: 1,
            skill: 'React'
        }
    })
    // const [form, setForm] = useState({
    //     title: '리액트 강의',
    //     description: '리액트 기초부터 실전까지',
    //     info: {
    //         level: 1,
    //         skill: 'React'
    //     }
    // })
    function handleLectureFrom (e) {
        e.preventDefault()
    }

    const handleTitleChange = (e) => {
        setForm({
            ...form,
            title: e.target.value
        })
    }

    const handleDescriptionChange = (e) => {
         setForm({
            ...form,
            description: e.target.value
        })
    }

    const handelOnChange = (e) => {
        // setForm({
        //     ...form,
        //     [e.target.name]: e.target.value
        // })
        updateForm((draft) => {
            draft[e.target.name] = e.target.value
        })
    }

    const handleSkillChange = (e) => {
        // setForm({
        //     ...form,
        //     info: {
        //         ...form.info,
        //         skill: e.target.value
        //     }
        // })
        updateForm((draft) => {
            draft.info.skill = e.target.value
        })
    }

    const handleLevelChange = (e) => {
        // setForm({
        //     ...form,
        //     info: {
        //         ...form.info,
        //         level: e.target.value
        //     }
        // })
        updateForm((draft) => {
            draft.info.level = e.target.value
        })
    }

    return (
        <Lecture title="강의 등록">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleLectureFrom}>
                <input type="text" placeholder="강의 제목" name="title" value={form.title} onChange={handelOnChange}/>
                <input type="text" placeholder="강의 한줄 설명" name="description" value={form.description} onChange={handelOnChange}/>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="skill" style={{ width: '100px' }}>스킬</label>
                    <input name="skill" id="skill" type="text" value={form.info.skill} onChange={handleSkillChange}/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="level" style={{ width: '100px' }}>난이도</label>
                    <select name="level" id="level" value={form.info.level} onChange={handleLevelChange}>
                        <option value="0">입문</option>
                        <option value="1">초급</option>
                        <option value="2">중급</option>
                    </select>
                </div>
                <input type="submit" value="등록" />
                {
                    (form.title || form.description) && (
                        <div style={{marginTop: '16px', padding: '16px', backgroundColor: '#eee', borderRadius: '6px' }}>
                            {form.title && (<p>제목 : {form.title}</p>)}
                            {form.description && (<p>설명 : {form.description}</p>)}
                            {form.info.skill && (<p>스킬 : {form.info.skill}</p>)}
                            {form.info.level && (<p>난이도 : {form.info.level}</p>)}
                        </div>
                    )
                }
            </form>
        </Lecture>
    )
}