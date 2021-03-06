jQuery.extend(jQuery.validator.messages, {
  required: "Пожалуйста, заполните это поле.",
  remote: "Please fix this field.",
  email: "Введите корректный email",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Please enter the same value again.",
  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Введите не более 100 символов."),
  minlength: jQuery.validator.format("Введите не менее 3 символов."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

document.querySelector('button[id=send]').addEventListener('click', sendForm);
function sendForm(e) {
  var $contactForm = $('#contactForm');
  if ($contactForm.valid()) {
  e.preventDefault(); 
  $.ajax({
    url: "https://formspree.io/f/xeqprzjg",
    method: "POST",
    data: {
        name: $('#name').val(),
        email:  $('#email').val(),
        textarea: $('#comment').val()
    },
    dataType: "json"
})
.done(function() {
  $contactForm.html('<h1><span class="message">Спасибо, сообщение отправлено.<br> Мы свяжемся с вами, в ближайшее время.</span></h1>');
});
  }
}

	
