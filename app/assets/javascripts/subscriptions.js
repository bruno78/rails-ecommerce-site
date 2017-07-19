$(document).on("turbolinks:load", ()=>{
  stripe_public_key = $("meta[name='stripe-public-key']").attr('content')

  Stripe.setPublishableKey(stripe_public_key)

  let $form = $('#payment-form')
  $form.submit((event)=> {
    // Disable the submit button to prevent repeated clicks:
    $form.find('.submit').prop('disabled', true)

    // Request a token from Stripe:
    Stripe.card.createToken($form, stripeResponseHandler);

    // Prevent the form from being submitted:
    return false
  })
})

let stripeResponseHandler = (status, response) => {

  // Grab the form
  let $form = $('#payment-form')

  if(response.error) { // Problem!

    // Show the errors on the form:
    $form.find('.payment-errors').text(response.error.message)
    $form.find('.submit').prop('disabled', false) // Re-enable submission
  }
  else { // token was created

    // Get the token ID:
    let token = response.id

    // Instert the token ID into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken">').val(token))
    $form.append($('<input type="hidden" name="card_brand">').val(response.card.brand))
    $form.append($('<input type="hidden" name="card_exp_month">').val(response.card.exp_month))
    $form.append($('<input type="hidden" name="card_exp_year">').val(response.card.exp_year))
    $form.append($('<input type="hidden" name="card_last4">').val(response.card.last4))

    // Submit the form:
    $form.get(0).submit()
  }
}
