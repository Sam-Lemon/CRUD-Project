const URL_ENDPOINT = "https://664ed178fafad45dfae12bcc.mockapi.io/succulents";

function fetchSucculents() {
    // console.log("testing if page linked to server");
    $.ajax({
        url: URL_ENDPOINT,
        method: 'GET',  //sends call to server for data
        success: function (succulents) {
            // console.log('testing if GET worked', succulents)   
            $('#crassula .row, #echeveria .row, #gasteria .row, #sedeveria .row, #sedum .row').empty(); //clears out rows so we have a fresh start
            succulents.forEach(succulent => {   //iterating through the data
                // console.log("testing if iterating through array", succulent);
                const favorite = succulents.favorite ? 'fas' : 'far';
                //creating the card element for the data to be pushed into
                const succulentCard = `     
                    <div class="col-md-2 succulent-item">
                        <div class="card">
                            <button id="heart-button" class="btn btn-primary favorite-btn" data-id="${succulent.id}">
                                Favorite Button
                                <i class="fa-heart"></i>
                            </button>
                            <img src="${succulent.imgFile}" class="card-img-top" alt="${succulent.name}"/>
                            <div class="card-body"
                                <h3 class="card-title">${succulent.name}</h3>
                                <p class="card-text text-muted">${succulent.price}</p>
                                <p class="card-text">${succulent.care}</p>
                                <button class="btn btn-danger delete-btn" data-id="${succulent.id}">Delete</button>
                            </div>
                        </div>
                    </div>
                `;  //putting the succulent cards into the correct row using dot notation and their type
                    if (succulent.type === "Crassula") {
                        $('#crassula').append(succulentCard);
                        // console.log("testing Crassula")
                    } else if (succulent.type === "Echeveria") {
                        $('#echeveria .row').append(succulentCard);
                        // console.log("testing Echeveria")
                    } else if (succulent.type === "Gasteria") {
                        $('#gasteria .row').append(succulentCard);
                        // console.log("testing Gasteria")
                    } else if (succulent.type === "Sedeveria") {
                        $('#sedeveria .row').append(succulentCard);
                        // console.log("testing Sedeveria")
                    } else if (succulent.type === "Sedum") {
                        $('sedum .row').append(succulentCard);
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

function fetchFavorites() {
    $.ajax({
        url: `${URL_ENDPOINT}?favorite=true`,
        method: 'GET',
        success: function (succulents) {
            $('#favorites').empty();    //emptying the favorites row to start fresh
            succulents.forEach(succulent => {
                const favorite = succulents.favorite ? 'fas' : 'far';
                const succulentCard = `     
                <div class="col-md-2 succulent-item">
                    <div class="card">
                        <button id="heart-button" class="btn btn-primary favorite-btn" data-id="${succulent.id}">
                            Favorite Button
                            <i class="fa-heart"></i>
                        </button>
                        <img src="${succulent.imgFile}" class="card-img-top" alt="${succulent.name}"/>
                        <div class="card-body"
                            <h3 class="card-title">${succulent.name}</h3>
                            <p class="card-text text-muted">${succulent.price}</p>
                            <p class="card-text">${succulent.care}</p>
                            <button class="btn btn-danger delete-btn" data-id="${succulent.id}">Delete</button>
                        </div>
                    </div>
                </div>
            `;
                    $('#favorites').append(succulentCard);
            });
        },
        error: function (xhr, status, error) {
            console.error("Error fetching succulent:", error);
        }
    });
}
fetchFavorites();

$(document).on('click', '#heart-button', function(){
    const id = $(this).data('id');
    const icon = $(this).find('i');
    const isFavorite = icon.hasClass('far');

    $.ajax({
        url: `${URL_ENDPOINT}/${id}`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ favorite: isFavorite}),
        success: function () {
            if (window.location.pathname.endsWith('favorites.html')) {
                fetchFavorites();
            } else {
                fetchSucculents()
            }
        },
        error: function (xhr, status, error) {
            console.error("Error fetching succulent:", error);
        }
    });
});




























