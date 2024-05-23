const URL_ENDPOINT = "https://664ed178fafad45dfae12bcc.mockapi.io/:endpoint";

$.get(URL_ENDPOINT).then(data => {
    data.map(succulent => {
        $("col-md-3").append(
            $(`
            <div class="card" style="width: 18rem;">
        <!-- THIS IS WHERE THE IMAGE WILL GO -->
                <div class="card-body">
                    <!-- <h5 class="card-title">${succulents.name}</h5> -->
                    <!-- <p>${succulents.price}</p> -->
                    <!-- <p>${succulents.care}</p> -->
                </div>
            </div>
            `)
        )

        

// NEED TO PUT IN THE HTML BUILD FOR THE CARD 
    })
});