// $('#contact-form').submit(function(e) {
//   var name = document.getElementById('inputName');
//   var email = document.getElementById('inputEmail');
//   var message = document.getElementById('inputMessage');

//   if (!name.val || !email.val || !message.val) {
//     alert("Please check your entries")
//   } else {
//     $.ajax({
//       url: 'https://formspree.io/kpalmer4194@gmail.com',
//     })
//   }

// })

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, options);
});
