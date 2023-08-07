import React, { useState, useEffect } from 'react'
import './SearchSection.css'

// Icons for temporary use
import InstituteIcon from '../../assests/images/institute.png'
import CourseIcon from '../../assests/images/education.png'
import TeacherIcon from '../../assests/images/teacher.png'
import AutoComplete from './AutoComplete'

// end


function SearchSection() {

    const [activesearch, setActivesearch] = useState('course')
    const [activmenu, setActivmenu] = useState('course')

    useEffect(() => {
        setActivmenu(activesearch)
    }, [activesearch])

    const CourseSearch = () => {
        return (
            <div>
                <div>
                    <p className='search__field__header__text'>
                        Search Course from an Institute
                    </p>
                </div>
                <div className='search__fileds__container course__search__container'>
                    <div className='search__filed__container main__search__field'>
                        <p>Course Name </p>
                        <input type="text" name="" placeholder='Enter Course Name' id="" />
                    </div>
                    <div className='search__filed__container'>
                        <p>Mode </p>
                        <input type="text" name="" placeholder='Online' id="" />

                    </div>
                    <div className='search__filed__container'>
                        <p>Location </p>
                        <input type="text" name="" placeholder='Enter Location' id="" />

                    </div>

                </div>
            </div>

        )
    }

    const InstituteSearch = () => {
        return (
            <div>
                <div>
                    <p className='search__field__header__text'>
                        Search Course from an Institute
                    </p>
                </div>
                <div className='search__fileds__container institite__search__container'>
                    <div className='search__filed__container'>
                        <p>Institute Name </p>

                        <input type="text" name="" placeholder='Enter Institute Name' id="" />
                    </div>
                    <div className='search__filed__container'>
                        <p>Location </p>

                        <input type="text" name="" placeholder='Enter Location' id="" />
                    </div>

                </div>
            </div>
        )
    }

    const TeacherSearch = () => {
        return (
            <div>
                <div>
                    <p className='search__field__header__text'>
                        Search Course from an Institute
                    </p>
                </div>
                <div className='search__fileds__container teacher__search__container'>
                    <div className='search__filed__container'>
                        <p>Teacher Name </p>

                        <input type="text" name="" placeholder='Search by Teacher Name' id="" />
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div className="searchsection">
            <div className='searchcontainer'>
                <div className='searchtopnavigation'>
                    <div className='institute__search search__nav '>
                        <div className={`search__nav__element ${activmenu === 'course' && 'active'}`} onClick={() => setActivesearch('course')}>
                            <img className='search__nav__element__icon' src={CourseIcon} alt="search nav icon" />
                            <p className='search__nav__menu'>Courses</p>

                        </div>

                    </div>

                    <div className='teacher__search search__nav'>
                        <div className={`search__nav__element ${activmenu === 'institute' && 'active'}`} onClick={() => setActivesearch('institute')}>
                            <img className='search__nav__element__icon' src={InstituteIcon} alt="search nav icon" />
                            <p className='search__nav__menu'>Institutes</p>
                        </div>

                    </div>

                    <div className='location__search search__nav'>
                        <div className={`search__nav__element ${activmenu === 'teachers' && 'active'}`} onClick={() => setActivesearch('teachers')}>
                            <img className='search__nav__element__icon' src={TeacherIcon} alt="search nav icon" />
                            <p className='search__nav__menu'>Teachers</p>
                        </div>


                    </div>
                </div>

                <div className='main__search__container'>
                    {(() => {
                        if (activesearch === 'course') {
                            return (

                                <CourseSearch />
                            )
                        }
                        else if (activesearch === "institute") {
                            return (
                                <InstituteSearch />
                            )
                        }

                        if (activesearch === "teachers") {
                            return (
                                <TeacherSearch />
                            )
                        }

                        return null;
                    })()}



                </div>


                <div className='searchbottombtn'>
                    <p>SEARCH</p>
                </div>

            </div>
        </div>
    )
}

export default SearchSection
