import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    顯示:
    {" "}
    <FilterLink filter="SHOW_ALL">
      全部
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      處理中
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      已完成
    </FilterLink>
  </p>
)

export default Footer