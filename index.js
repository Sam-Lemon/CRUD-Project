const URL_ENDPOINT = "https://664ed178fafad45dfae12bcc.mockapi.io/succulents";

function fetchSucculents() {
    // console.log("testing if page linked to server");
    $.ajax({
        url: URL_ENDPOINT,
        method: 'GET',  //sends call to server for data
        success: function (succulents) {
            console.log('testing if GET worked', succulents)   
            $('#crassula .row, #echeveria .row, #gasteria .row, #sedeveria .row, #sedum .row').empty(); //clears out rows so we have a fresh start
            succulents.forEach(succulent => {   //iterating through the data
                // console.log("testing if iterating through array", succulent);
                // const favorite = succulents.favorite ? 'fas' : 'far';
                //creating the card element for the data to be pushed into
                const succulentCard = `
                        <div class="card bg-success">
                            <img src="${succulent.imgURL}" class="card-img-top mt-3" alt="${succulent.name}"/>
                            <div class="card-body mb-3 bg-success-subtle"
                                <p class="card-title fs-1"><strong>${succulent.name}</strong></p>
                                <p class="card-text">${succulent.care}</p>
                                <button onclick="deleteSucculent(${succulent.id})">🗑️</button>
                                </div>
                        </div>
                `;  //putting the succulent cards into the correct row using dot notation and their type
                    if (succulent.type === "Crassula") {
                        $('#crassula .row').append(succulentCard);
                        // console.log("testing Crassula")
                    } else if (succulent.type === "Echeveria") {
                        $('#echevaria .row').append(succulentCard);
                        // console.log("testing Echeveria")
                    } else if (succulent.type === "Gasteria") {
                        $('#gasteria .row').append(succulentCard);
                        // console.log("testing Gasteria")
                    } else if (succulent.type === "Sedeveria") {
                        $('#sedeveria .row').append(succulentCard);
                        // console.log("testing Sedeveria")
                    } else if (succulent.type === "Sedum") {
                        $('#sedum .row').append(succulentCard);
                        // console.log("testing Sedum")
                    };
            });
        },
        error: function (xhr, status, error) {
            console.error("Error fetching succulent:", error);
        }
    });
}
fetchSucculents();


//ADD NEW SUCCULENT
$('#submit-succulent').click(function (e) {
    // e.preventDefault()   //when in form button default is to refresh page, this stops that from happening
    // console.log('new succulent please work')

    $.post(URL_ENDPOINT, {  //2 arguments needed, url and an object
        imgURL: $('#newImgURL').val(),
        name: $('#newName').val(),
        type: $('#newType').val(),
        care: $('#newCare').val(),
    })
  })

//DELETE SUCCULENT
function deleteSucculent(id) {
    $.ajax(`${URL_ENDPOINT}/${id}`, {
        method: 'DELETE'
    })
};


