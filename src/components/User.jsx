// import React from 'react'

const User = {
    name: 'userName',
    path: 'userPath',
    // Dev Key: 00-03 story setup, 1A-1B, 2A,2B,2C,2D, etc
    defaultUserPath: '00',

    friends: {
        1: 'userFriend_1',
        2: 'userFriend_2',
        3: 'userFriend_3',
    },

    alignment: {
        chaotic: 'chaotic',
        neutral: 'neutral',
        lawful: 'lawful'
    },
    personality: {
        playful: 'playful',

    },
    stats: {
        intoxication: 'toxicity',
    },


    getName() {
        const userName = localStorage.getItem(User.name)
        return userName ? userName : "Friend"
    },
    setName(newUserName) {
        localStorage.setItem(User.name, newUserName)
    },

    getPath() {
        const userPath = localStorage.getItem(User.path)
        return userPath ? userPath : User.defaultUserPath
    },
    setPath(newUserPath) {
        localStorage.setItem(User.path, newUserPath)
    },

    getFriend(friendNumber) {
        const friendRef = User.friends[friendNumber]
        const friendName = localStorage.getItem(friendRef)
        return friendName ? friendName : `Friend${friendNumber}`
    },
    setFriend(friendNumber, value) {
        const friendRef = User.friends[friendNumber]
        localStorage.setItem(friendRef, value)
    },

    getAlignment(alignment) {
        const userAlignment = localStorage.getItem(User.alignment[alignment])
        return userAlignment ? userAlignment : 0
    },
    setAlignment(alignment, value) {
        const alignmentRef = User.alignment[alignment]
        const str_userAlignment = localStorage.getItem(alignmentRef)
        const userAlignment = str_userAlignment ? parseInt(str_userAlignment) : 0
        localStorage.setItem(alignment, (userAlignment+value))
    },  
    
    getStat(stat) {
        const userStat = localStorage.getItem(User.stats[stat])
        return userStat
    },
    setStat(stat, value) {
        const statRef = User.stats[stat]
        const str_userStat = localStorage.getItem(statRef)
        const userStat = str_userStat ? parseInt(str_userStat) : 0
        localStorage.setItem(statRef, userStat + value)
    },

}

export default User