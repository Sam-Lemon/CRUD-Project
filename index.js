const URL_ENDPOINT = "https://664ed178fafad45dfae12bcc.mockapi.io/:endpoint";

$.get(URL_ENDPOINT).then (data => {   
    data.map(succulent => {  
        if(${succulents.type.val()} === "Crassula" {
            $('#crassula-card').append(    
                $(`
                <div class="card" style="width: 18rem;">
                THIS IS WHERE THE IMAGE WILL GO
                <div class="card-body">
                    <h5 class="card-title">THIS IS WHERE THE NAME WILL GO</h5>
                    <p>THIS IS WHERE THE PRICE WILL GO</p>
                     <p>THIS IS WHERE THE SUN NEEDS GO</p>
                </div>
              </div>
                `)
              )
        }) else if (${succulents.type} === "Echevaria" {
                $('echevaria-card').append(
                    $(`
                    <div class="card" style="width: 18rem;">
                    THIS IS WHERE THE IMAGE WILL GO
                    <div class="card-body">
                        <h5 class="card-title">THIS IS WHERE THE NAME WILL GO</h5>
                        <p>THIS IS WHERE THE PRICE WILL GO</p>
                         <p>THIS IS WHERE THE SUN NEEDS GO</p>
                    </div>
                  </div>
                    `)
                )
            }) else if (${succulents.type} === "Gasteria"{
                $('gasteria-card').append(
                    $(`
                    <div class="card" style="width: 18rem;">
                    THIS IS WHERE THE IMAGE WILL GO
                    <div class="card-body">
                        <h5 class="card-title">THIS IS WHERE THE NAME WILL GO</h5>
                        <p>THIS IS WHERE THE PRICE WILL GO</p>
                         <p>THIS IS WHERE THE SUN NEEDS GO</p>
                    </div>
                  </div>
                    `)
                )
            }) else if (${succulents.type} === "Sedeveria" {
                $('sedeveria-card').append(
                    $(`
                    <div class="card" style="width: 18rem;">
                    THIS IS WHERE THE IMAGE WILL GO
                    <div class="card-body">
                        <h5 class="card-title">THIS IS WHERE THE NAME WILL GO</h5>
                        <p>THIS IS WHERE THE PRICE WILL GO</p>
                         <p>THIS IS WHERE THE SUN NEEDS GO</p>
                    </div>
                  </div>
                    `)
                )
            }) else if (${succulents.type} === "Sedum" {
                $('sedum-card').append(
                    $(`
                    <div class="card" style="width: 18rem;">
                    THIS IS WHERE THE IMAGE WILL GO
                    <div class="card-body">
                        <h5 class="card-title">THIS IS WHERE THE NAME WILL GO</h5>
                        <p>THIS IS WHERE THE PRICE WILL GO</p>
                         <p>THIS IS WHERE THE SUN NEEDS GO</p>
                    </div>
                  </div>
                    `)
                )
            }) else {
                alert("Something went wrong, please try again");
            }
        });
        





    })
  });


