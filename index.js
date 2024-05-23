
$(document).ready(function() {
    const URL_ENDPOINT = "https://664ed178fafad45dfae12bcc.mockapi.io/:endpoint";
})

function fetchSucculents() {
    $.ajax({
        url: URL_ENDPOINT,
        method: 'GET',
        success: function (succulents) {
            console.log('succulents', succulents)
            $('#crassula .row, #echeveria .row, #gasteria .row, #sedeveria .row, #sedum .row').empty();
            succulents.forEach(succulent => {
                const favorite = succulents.favorite ? 'fas' : 'far';
                const succulentCard = `
                    <div class="col-md-4 succulent-item">
                        <div class="card">
                            <button class="btn btn-primary favorite-btn" data-id="${succulents.id}">
                                <i class="${heartClass} fa-heart"></i>
                            </button>
                            <img src="${succulents.imgFile}" class="card-img-top" alt="${succulents.name}"/>
                            <div class="card-body"
                                <h5 class="card-title">${succulents.name}</h5>
                                <p class="card-text">${succulents.price}</p>
                                <p class="card-text">${succulents.care}</p>
                                <button class="btn btn-danger delete-btn" data-id="${succulents.id}">Delete</button>
                            </div>
                        </div>
                    </div>
                `;
                    if (succulents.type === "Crassula") {
                        $('#crasssula .row').append(succulentCard);
                    } else if (succulents.type === "Echeveria") {
                        $('#echeveria .row').append(succulentCard);
                    } else if (succulents.type === "Gasteria") {
                        $('#gasteria .row').append(succulentCard);
                    } else if (succulents.type === "Sedeveria") {
                        $('#sedeveria .row').append(succulentCard);
                    } else if (succulents.type === "Sedum") {
                        $('sedum .row').append(succulentCard);
                    }
            });
        }
        error: function (xhr, status, error) {
            console.error("Error fetching succulent:", error);
        }
    });
}
































