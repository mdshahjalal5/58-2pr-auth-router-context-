import axios from "axios";

function SideEffect(){
    let homeData = 'firs declare';
    axios.get('http://localhost:5000/')
        .then(data => {
            console.log(data, 'data');
            homeData = data;
        })

     function homeDataLoader() {
        return homeData;
    }
    console.log(homeData, 'homedata');
    return(
        <>
            <div>
            <h1>This side components</h1>                
            </div>
        </>
    )
}

export { SideEffect};