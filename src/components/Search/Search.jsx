import React from 'react'
import styles from './Search.module.scss'

const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
        e.prevenDefault()
    }

    return (
        <form 
        className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
        >
            <input type="text" placeholder='Search for charaters' className={styles.input} onChange={(e) => {
                updatePageNumber(1)
                setSearch(e.target.value)
            }} />
            {/* 禁用按钮当搜索栏为空的时候 */}
            {/* disabled={search === "" ? true : false}  */}
            <button disabled={setSearch === undefined ? true : false} onClick={searchBtn} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
        </form>

    )
}
export default Search
