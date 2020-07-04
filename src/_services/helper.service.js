import React from 'react'

export const convertToObject = (url) => {
    const arr = url.slice(1).split(/&|=/); // remove the "?", "&" and "="
    let params = {};
  
    for(let i = 0; i < arr.length; i += 2){
      const key = arr[i], value = arr[i + 1];
      params[key] = value ; // build the object = { limit: "10", page:"1", status:"APPROVED" }
    }
    return params;
  };

  export const setDarkMode = (value) => {
    localStorage.setItem('darkMode', JSON.stringify({darkMode: value}))
  }

  export const getDarkMode = () => {
    let dataStr = localStorage.getItem('darkMode')

    if(dataStr) {
      let data = JSON.parse(dataStr)
      return data.darkMode
    }

    return false
  }

  export const randomInt = (min, max) => {
    return Math.floor(Math.random() * max) + min
  }

  export const PrettyPrintComponent = (props) => {
    return (
      <div className="PrettyPrintComponent">
        <pre>
          {JSON.stringify(props.data, null, 2) }
        </pre>
      </div>
    )
  }


  export const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}


  const helperService = {
      setDarkMode,
      convertToObject,
      randomInt,
      ordinal_suffix_of,
  }

  export default helperService