$("#contact-form").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 2,
        maxlength: 50
      },
        lastName: {
        required: true,
        minlength: 2,
        maxlength: 50
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        digits: true,
        minlength: 9,
        maxlength: 10
      }
    }
  });