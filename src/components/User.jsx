// import React from 'react'

const User = {
    name: "",
    path: "",
    alignment: {
        chaotic: 0,
        neutral: 0,
        good: 0
    },



    getUserName: () => {
        const userName = localStorage.getItem('userName')
       return userName ? userName : "Amy"
    }


}

export default User