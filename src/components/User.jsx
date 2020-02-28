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
        return localStorage.getItem('userName')
    }


}

export default User