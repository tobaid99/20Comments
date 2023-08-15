




$.ajax({
    method : "GET",
    url :"https://jsonplaceholder.typicode.com/comments",
    Datatype :"json"
})

.done(function(response){
    $.each(response,function(i,res){
        if(i<20){
            console.log(i,res);
        }
        i++;
    })
})