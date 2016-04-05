var $ = $; 

$('document').ready(function() {
    
    
    var file; 
    
    $("#formUpload").on("change", function(event) {
         file = event.target.files[0]; 
         console.log('uploaded'); 
    });    



    $("#formSubmit").on("click", function(event) {
        
        $("#response").html(function() { return ""}); 
        
        $("#loading").show(); 
        
        $("#formAndButton").hide(); 
   
        var formFields = new FormData(document.querySelector(".formObject")); 

        console.log(formFields); 
        
        
        $.ajax({
              type: "POST",
              url: "/formUpload",
              data: formFields,
              processData: false, 
              contentType: false,
              success: function(response) {
                  console.log(response); 
                  $("#response").html(function() { return response.message}); 
                  $("#loading").hide(); 
                  $("#formAndButton").show();
              }, 
              error: function(error) {
                  $("#response").html(function() { return "Whoops! Looks like there's been an error: "+ error.statusText}); 
                  console.log(error); 
                  $("#loading").hide(); 
                  $("#formAndButton").show();
              }
        }); 

        
        console.log("woo"); 
        
    }); 
  

}); 


