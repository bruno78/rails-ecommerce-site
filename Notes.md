stripe_id and stripe_subscription_id will help to keep track of users stripe account. (user stripe id and their last recently used credit card number)

Stripe Checkout provides compliance with Payment Card Industry Data Security Standards (PCI-DSS). Stripe Checkout is a JavaScript script that generates a “Pay with Card” button and form. The script submits the visitor’s credit card data to Stripe and obtains an authorization token. Your application uses the authorization token to initiate a payment so the visitor’s credit card data is never stored or exposed by your application.

Most examples of Stripe Checkout show how to make one-time purchases with no account registration feature. In contrast, the rails-stripe-checkout application shows how to integrate Stripe Checkout with Devise for account registration. The application provides a two-step “sign up and purchase” process that initiates a payment and creates a user account.

For a one-step process, you can use the Stripe.js script instead of Stripe Checkout, creating a custom form. Stripe Checkout is simpler. Stripe.js provides more flexibility. This application does not show how to use Stripe.js.
