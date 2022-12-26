import axios from "axios";

function SideEffect(){
    let homeData = { 
        data:'Not working axios'
    }
    axios.get('http://localhost:5000/')
        .then(data => {
            console.log(data, 'data');
            homeData = data;
        })

    console.log(homeData, 'homedata');
    return homeData;
}

export { SideEffect};