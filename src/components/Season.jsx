import React from 'react'

const Season = {
    date: new Date(),
    description1: {
        winter: <p>
            You can feel Winter's thin, afternoon air around you.
            The cityscape glows in its snow-coated perfection.
            </p>,
    },
    description2 : {
        winter: <p>
            "Slight cabin fever from the snowy weekend. Decided to go on an adventure. No end-game." You think
            about the compound of icy fluff decorating your frosted windows at home.
            This makes you thirsty for some reason.
        </p>
    },
    getDescription1: function() {
        const currentSeason = this.getSeason()
        switch(currentSeason) {
            case "Winter": return this.description1.winter

            default: return <p>Nuthin</p>
        }
    },
    getDescription2: function() {
        const currentSeason = this.getSeason()
        switch(currentSeason) {
            case "Winter": return this.description2.winter

            default: return <p>Nuthing</p>
        }
    },
    getSeason: function(){
        const month = this.date.getMonth()
        switch(month) {
        case 1: case 2: case 11: case 12: return "Winter";
        case 3: case 4: case 5: return "Spring";
        case 6: case 7: case 8: return "Summer";
        case 9: case 10: return "Fall";
        default: return "Spring"
        }
     },

}
     export default Season

