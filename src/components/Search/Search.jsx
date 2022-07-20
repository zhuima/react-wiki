import React from 'react'
import styles from './Search.module.scss'

// eslint-disable-next-line react/prop-types
const Search = ({ search, setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault()
  }

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        type="text"
        placeholder="Search for name"
        className={styles.input}
        onChange={(e) => {
          updatePageNumber(1)
          setSearch(e.target.value)
        }}
      />
      {/* 禁用按钮当搜索栏为空的时候， 其实搜索button可以不设置，因为API但凡有变动，就会触发useEffect 重新触发新的请求，对服务器端不太友好， 而且这个搜索仅针对name */}
      <button
        disabled={search === '' ? true : false}
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  )
}
export default Search
