function addStripeInformation(data) {
  var handler = StripeCheckout.configure({
    key: 'pk_test_k90DPHCGKmfYhYa5anVRrVKy',
    token: function(token) {
      $.ajax({
        url: '/charges/create',
        type: "POST",
        data: {
          "token" : token.id,
          "email" : data.email
        }
      });
    }
  });

  $(function(){
    // Open Checkout with further options
    handler.open({
      email: data.email,
      name: data.name,
      description: 'You\'ll be eating before you know it',
      zipCode: false,
      panelLabel: "Add Information",
      allowRememberMe: false
    });
  });

  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    handler.close();
  }); 
}

destroy = function() {
  $('#q').val('');
  $('#results').empty();
}

$(function() {
  $('#results').mouseleave(function() {
    destroy();
  });
});

var face_array = [
'http://becomingthebboss.com/wp-content/uploads/2014/03/circle-brigid-professional.jpg',
'http://procopyservices.com/wp-content/uploads/2015/02/profile-circle.png',
'http://www.makesomethingdaily.com/wp-content/uploads/2015/02/profile-picture-circle.png',
'http://static1.squarespace.com/static/5491d7aae4b0d06755583522/t/54af31ffe4b0ce916d639133/1420767744829/Laura+Farrelly+Profile+Photo+Circle.png',
'http://ryan-brogan.com/wp-content/uploads/2014/03/Profile-circle.png',
'http://www.noviventure.com/wp-content/uploads/2014/08/Profile-Picture-Circle-Transparent.png',
'http://www.thingsworthdescribing.com/wp-content/uploads/2014/06/edited-profile-pic-circle.png',
'http://shaunkutch.com/wp-content/uploads/2015/02/circle_profile_photo.png'
];



myHandler = function() {
  if ($("#q").val() != "") {
    $.ajax({
      type: "POST",
      url: "/autocomplete",
      data: {query: $("#q").val()}
    }).done(function(data) {
      if (data['suggestions'].length != 0) {
        $('#results').toggle();
        $('#results').empty();

        var sugg = data['suggestions'];
        var i = face_array.length - 1;
        sugg.forEach( function (s) {
            var link = '';
            if (s["type"] == "dish") {
              link = '/dishes/'+s['id'];
            }
            else {
              link = '/users/'+s['id'] + '/show';
            }
            console.log(link);
            $('#results').append('<a class="special_a" style="text-decoration: none; " href="'+link+'">'+ s['name'] + '<img style="position: relative; float:right; top: 5px;" height="50px" src="'+ face_array[i]+'">' + '</a>');
            i -= 1;
        });
      }
    });    
  }
}

connect = function() {
  $.ajax({
    url: '/connect',
    type: "GET"
  });
  $('#modal1').openModal()
}

instaModal = function() {
  $('#modal4').openModal();
  snappy('multiple');
}

instaModalSingle = function() {
  $('#modal5').openModal();
  snappy('single');
}

execute = function() {
  var country = $('.country').val();
  var tos = $("input[name='tos']:checked").val();
  console.log(country);
  console.log(tos);
  $.ajax({url: "accepted_tos", type: "POST", data: {"country": country, "tos": tos}});
  $('#modal1').closeModal();
  $("#modal2").openModal();
}

execute2 = function() {
  var legal_entity_first_name = $("input[name='legal_entity[first_name]']").val();
  var a = legal_entity_first_name;
  var legal_entity_last_name = $("input[name='legal_entity[last_name]']").val();
  var b = legal_entity_last_name;
  var legal_entity_dob_a = $("select[name='legal_entity[dob(1i)]']").val();
  var c = legal_entity_dob_a;
  var legal_entity_dob_b = $("select[name='legal_entity[dob(2i)]']").val();
  var d = legal_entity_dob_b;
  var legal_entity_dob_c = $("select[name='legal_entity[dob(3i)]']").val();
  var e = legal_entity_dob_c;
  var legal_entity_address_line_a = $("input[name='legal_entity[address][line1]']").val();
  var f = legal_entity_address_line_a;
  var legal_entity_address_line_b = $("input[name='legal_entity[address][line2]']").val();
  var g = legal_entity_address_line_b;
  var legal_entity_address_city = $("input[name='legal_entity[address][city]']").val();
  var h = legal_entity_address_city;
  var legal_entity_address_state = $("input[name='legal_entity[address][state]']").val();
  var i = legal_entity_address_state;
  var legal_entity_address_zip = $("input[name='legal_entity[address][postal_code]']").val();
  var j = legal_entity_address_zip;
  var account_number = $("input[data-stripe='account_number']").val();
  var k = account_number;
  var routing_number = $("input[data-stripe='routing_number']").val();
  var m = routing_number;
  var secure_form = [a,b,c,d,e,f,g,h,i,j,k,m];
  console.log(secure_form);
  console.log(country_code + " is great");
  Stripe.bankAccount.createToken({
      country: country_code,
      routingNumber: routing_number,
      accountNumber: account_number,
  }, function(status, response) {
      if (response.error) {
          console.log(response);
          alert(response.error.message);
      } else {
          var token = response.id;
          var dt = {
              "token" : token,
              "first_name": a,
              "last_name": b,
              "dob1": c,
              "dob2": d,
              "dob3": e,
              "address1": f,
              "address2": g,
              "address_city": h,
              "address_state": i,
              "address_zip": j
          };
          $.ajax({url: "create_connected", type: "POST", data: dt});
      }
  });
}

randomFunction = function(val) {
  var imageURL = $( "#insta_single option:selected" ).val();
  $('#instaject-outer').show();
  $('#instaject').empty();
  $('#instaject').append('<img height="150px" width="150px" src=' + '"' + imageURL + '"' + '>')
  $('#imageURL').val(imageURL);
}

snappy = function(selectOptions) {
  switch(selectOptions) {
    case 'multiple':
        $.ajax({
          url: "/user_recent_media", 
          type: "GET"
        });    
      break;

    case 'single':
        $.ajax({
          url: "/user_recent_media_single", 
          type: "GET"
        });  
      break;
  }
}

removePic = function() {
  $('#instaject').empty(); 
  $('#instaject-outer').hide(); 
}