$(document).on("turbolinks:load", function(){
  stripe_public_key = $("meta[name='stripe-public-key']").attr("content");
  Stripe.setPublishableKey(stripe_public_key);

  var $form = $('#payment-form');
  $form.submit(function(event) {
    // Disable the submit button to prevent repeated clicks:
    $form.find('.submit').prop('disabled', true);

    // Request a token from Stripe:
    Stripe.card.createToken($form, stripeResponseHandler);

    // Prevent the form from being submitted:
    return false;
  });
});

function stripeResponseHandler(status, response) {
  // Grab the form:
  var $form = $('#payment-form');

  if (response.error) { // Problem!

    // Show the errors on the form:
    $form.find('.payment-errors').text(response.error.message);
    $form.find('.submit').prop('disabled', false); // Re-enable submission

  } else { // Token was created!

    // Get the token ID:
    var token = response.id;

    // Uncomment this line to see a CC card object on the console but encrypted. All you will be allowed to see
    // is the brand, expiration date and the last four digits.
    // console.log(response);

    // Insert the token ID into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken">').val(token));
    $form.append($('<input type="hidden" name="card_brand">').val(response.card.brand));
    $form.append($('<input type="hidden" name="card_exp_month">').val(response.card.exp_month));
    $form.append($('<input type="hidden" name="card_exp_year">').val(response.card.exp_year));
    $form.append($('<input type="hidden" name="card_exp_last4">').val(response.card.last4));

    // Submit the form:
    $form.get(0).submit();
  }
};
