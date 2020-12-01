import React from 'react';

const GlobalFilter = ({filter,setfilter }) => {
    return (
       <span>
           Search:(' ')
           <input value={filter || ''}
           onChange={e=>setfilter(e.target.value)}
           />
       </span>
    );
}

export default GlobalFilter;