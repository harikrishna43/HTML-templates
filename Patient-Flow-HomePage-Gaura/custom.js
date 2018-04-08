//============EXTERNAL PLUGINS & CDN's===================
	// Owl Carousel on home 
	// Price range slider on search listing
	// Star rating (rateYo) on details page
	// Font Awesome
	// Jquery UI js n CSS


$(document).ready(function() {

				// $('.drop').click(function(e){
				// 	e.stopPropagation();
				// 	console.log('dgag');
				// 	$(this).toggleClass('selected');
				// 	$(this).find('.drop_list').toggle();
				// });
				// $('#home_search_input').focusin(function(){
			 //    	$('.looking_list').show();
			 //    });

				// $('html').click(function() {
			 //      $('.city_list').hide();
			 //      $('.drop').removeClass('selected');
			 //    });




				$('.drop').click(function(e){
					e.stopPropagation();
					$(this).toggleClass('selected');
					$(this).find('.drop_list').toggle();
					 $(document).bind('click.drop_list',function(e) {
				       if ($(e.target).closest('.drop_list, .drop').length) return;
				       $(document).unbind('.drop_list');
				       $('.drop_list').fadeOut('medium');
				    });
				});

				$('#home_search_input').focusin(function(){ 
				$('.looking_list').show(); 
				$('div.example').show();
				    // $(document).bind('focusin.looking_list click.looking_list',function(e) {
				    //    if ($(e.target).closest('.looking_list, #home_search_input').length) return;
				    //    $(document).unbind('.looking_list');
				    //    $('.looking_list').fadeOut('medium');
				    // });
				});


				$('.city_list li').click(function(){
					var value = getValue(this);
					$(this).parent().prev().text(value);
				});

				$('.looking_list li').click(function(){
					var value = getValue(this);
					// $('#home_search_input').val(value);
					$(this).parent().prev().find('input[type="text"]').val(value);
					$('.looking_list').hide();
				});

				// =================Update the dropdown value==============
				function getValue(temp){
					$(temp).addClass('active');
					var value = $(temp).text();
					return value;
				};


				$('.check').click(function(){
					$(this).toggleClass('selected');
					$(this).prev().attr('data-value','1');
				});


				$('.bullet_indicators li').click(function(){
				   	$(this).removeClass('disabled').addClass('active');
				   	var temp = $(this).attr('rel');
				   	temp = parseFloat(temp);
				   	if(temp === 4){
				   	$(this).addClass('done').removeClass('active');
				   	}
				   	getActive(temp);
				   });
				   function getActive(var2){
				   	$('.journey_content .journey_steps').hide().removeClass('active');
				   	$('.journey_content').find('.journey_steps[data-rel="'+var2+'"]').show().addClass('active');
				   	for(var i=1; i<var2; i++){
				   	$('.bullet_indicators li[rel="'+i+'"]').removeClass('active').addClass('done');
				   	}
				   	if(var2 === 4){
				   		$('.side_content').hide();
				    	$('.journey_content').css('width','100%');
				   	}
				   	else{
				   		$('.side_content').show();
					    $('.journey_content').css('width','75%');
				   	}
				}

				    $('.paymentmode').on('click',getContent);

				    function getContent(e){
				        e.preventDefault();
				    	$('.paymentmodemenu li').removeClass('active');
				    	$(this).parent().addClass('active');
				    	var partnerID = $(this).attr('rel');
				    	getFeatureContent(partnerID);
				    }
    				$('select.dropSelect').on('change', getData);

				    function getData(e){
				        e.preventDefault();
				        var dataID =$(this).val();
					   getFeatureContent(dataID);
				    }
				    function getFeatureContent(partnerID){
				    	$('paymentmodemenu li').removeClass('active');
				       $('a[rel="'+partnerID+'"]').each(function() {
				           $(this).parent().addClass('active');
				       });

				       $('option[value="'+partnerID+'"]').each(function() {
				           $(this).attr('selected','selected');
				       });
				    	$('.payment_section').hide();
				    	$('.payment_content').find('div.payment_section[data-rel ="'+partnerID+'"]').show();
				    }


	    		$('.owl-carousel').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 6500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });

	    		//Price range slider

	    		$( function() {
	    			var a = 10;
	    			var b = 1000;
	    			var c = 250;
	    			var d = 660;
				    $( "#slider-range" ).slider({
				      range: true,
				      min: a,
				      max: b,
				      values: [ c, d ],
				      slide: function( event, ui ) {
				        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				      }
				    });
				    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
				      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
				});
				$(".rateYo").rateYo({
				    rating    : 3.5,
				    starWidth: "15px",
				    spacing   : "10px",
				    ratedFill: "#3d87cd",
				    normalFill: "#c1cbd4"
				});


			});