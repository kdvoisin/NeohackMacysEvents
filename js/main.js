$(document).ready(function() {
    $.ajax({
        dataType: "json",
        url: "valentine.json",
        success: function(data) {
            var valentinedata = data;


            for (var test in valentinedata.dateNight) {
                $("#" + test + " img").attr("src", valentinedata.dateNight[test].image);
                $("#" + test + " img").click(clickFn(valentinedata.dateNight[test].productId));
            }



        },
        error: function(error) {
            console.log(error, 'error');
        }
    });

    function clickFn(parm1) {
        return function() {
        	
            $.ajax({
                //select the service and URI
                url: 'http://origin-api.macys.com/v4/catalog/product/' + parm1 + '?imagewidth=100&imagequality=90',
                //set headers with your key and select json
                headers: {
                    'Accept': 'application/json',
                    'X-Macys-Webservice-Client-Id': 'neohack14'
                },
                success: function(data) {
                    //do something with your data
                    $("productSelector p").remove();
                    var productid=["first","sec","third"];
                    var productArr=data["product"];
                    for(var i=0;i<productArr.length;i++){
                    	  var imageurl="http://slimages.macys.com/is/image/MCY/products/4/optimized/"+productArr[i].productDetails.additionalImages[0].imagename+"?bgc=255,255,255&wid=100&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg";
                    	  $("#"+productid[i]).html("<img src='"+imageurl+"' rel='stylesheet'><p><a href='"+productArr[i].productDetails.summary.productURL+"'>buy</a></p>");
                    }

                    
                }
            })
        }
    }

});
