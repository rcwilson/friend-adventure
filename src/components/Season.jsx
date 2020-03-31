import React from 'react'

const Season = {
    date: new Date(),
    description1: {
        winter: <p>
            You can feel Winter's thin, afternoon air around you.
            The cityscape glows in its snow-coated perfection.
            </p>,
        spring: <p>
            The awakening life of Spring surrounds you with its cool breeze and warm songs. 
            Trees are appearing full and the city grows with greenery. You're also, like, wearing the perfect
            Spring outfit.
            </p>
    },
    
    description2 : {
        winter: <p>
            "Slight cabin fever from the snowy weekend. Decided to go on an adventure. No end-game." You think
            about the compound of icy fluff decorating your frosted windows at home.
            This makes you thirsty for some reason.
        </p>,
        spring: <p>
            "Ive been making sure to go on plenty of walks, lately. It's hard to ignore how amazing the weather's been--Ohio rains included."
        </p>
    },
    getDescription1: function() {
        const currentSeason = this.getSeason()
        switch(currentSeason) {
            case "Winter": return this.description1.winter
            case "Spring": return this.description1.spring
            default: return <p>Nuthin</p>
        }
    },
    getDescription2: function() {
        const currentSeason = this.getSeason()
        switch(currentSeason) {
            case "Winter": return this.description2.winter
            case "Spring": return this.description2.spring

            default: return <p>Nuthing</p>
        }
    },
    getSeason: function(){
        const month = this.date.getMonth()
        console.log(month)
        switch(month) {
        case 0: case 1: case 2: case 11: return "Winter";
        case 3: case 4: case 5: return "Spring";
        case 6: case 7: case 8: return "Summer";
        case 9: case 10: return "Fall";
        default: return "Winter"
        }
     },

}
     export default Season

