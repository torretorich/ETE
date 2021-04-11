function display(event) {
    event.preventDefault();
    let country = document.getElementById('country').value;
    let dateFrom = document.getElementById('date-first').value;
    let dateTo = document.getElementById('date-second').value;
    if (country === "" || dateFrom === "" || dateTo === "") {
        alert("Field Should not be Empty");
    } else {
        covidInfo(country, dateFrom, dateTo);
    }
}
// function to fetch api data 
function covidInfo(country, dateFirst, dateSecond) {
    // Creating the url
    axios.get(`https://api.covid19api.com/country/${country}?from=${dateFirst}T00:00:00Z&to=${dateSecond}T00:00:00Z`)
        .then((response) => {
            let data = response.data[0];
            // creating a div element to add the api data
            const div = document.createElement('div');
            div.setAttribute('class', 'jumbotron');

            let output = `
               
                <h4>Confirmed Cases : ${data.Confirmed}</h4> 
                <br>
                <h4>Active Cases : ${data.Active}</h4> 
                <br>
                <h4>Death Cases : ${data.Deaths}</h4> 
                <br> 
                  
          `;
           // add the data to div element
            div.innerHTML = output;
           // append the div to the result-container
            document.getElementById('result-container').appendChild(div);


        })

   
}