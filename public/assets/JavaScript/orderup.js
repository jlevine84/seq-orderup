$(document).ready(()=>{

    //Post to server of new order
    $("form").submit((event)=>{
        event.preventDefault()
        const newOrder = {
            fullorder: $("#order").val().trim()
        }
        
        $.ajax("/api/orders", {
            type: "POST",
            data: newOrder
        }).then(()=>{
            location.reload();
        })
    })

    //Put request to show when an order is complete
    $(".complete-order").on("click", function(event){
        const id = $(this).data("id")
        const completed = {
            complete: true
        }

        $.ajax(`/api/orders/${id}`, {
            type: "PUT",
            data: completed
        }).then(()=>{
            location.reload()
        })
    })

    //Delete an order when button id is clicked
    $(".delete-order").on("click", function(event){
        const id = $(this).data("id")
        $.ajax(`/api/orders/${id}`, {
            type: "DELETE"
        }).then(()=> {
            location.reload();
        })
    })
    
})