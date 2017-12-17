## eCommerce Rails 5 App Using [Stripe](https://stripe.com)

_...project ongoing_

The mains purpose of this application is to show how to implement stripe API.

### Introduction

[Stripe](https://stripe.com) provides compliance with Payment Card Industry Data Security Standards (PCI-DSS). [Stripe](https://stripe.com) is a JavaScript script that generates a “Pay with Card” button and form. The script submits the visitor’s credit card data to Stripe and obtains an authorization token. Your application uses the authorization token to initiate a payment so the visitor’s credit card data is never stored or exposed by your application.

Most examples of [Stripe](https://stripe.com) show how to make one-time purchases with no account registration feature. In contrast, the rails-stripe-checkout application shows how to integrate Stripe with Devise for account registration. The application provides a two-step “sign up and purchase” process that initiates a payment and creates a user account.

For a one-step process, you can use the Stripe.js script instead of Stripe Checkout, creating a custom form. Stripe simpler. Stripe.js provides more flexibility.

### How to Install and Run it

You can either download from the github page: https://github.com/bruno78/rails-ecommerce-site

Or clone it:

```
git clone https://github.com/bruno78/rails-ecommerce-site
```

Once downloaded or cloned, go to the app directory and type:

```
bundle install
```

Followed by:

```
rake db:migrate
```

Finally the app is ready to run:

```
rails server
```

### User stories

As a user I can:

* sign up using my email.
* login using my email and password.
* logout when I'm done accessing.
* subscribe using my credit card, to have access to the website services.
* cancel my account.
* cancel my subscription.
* resubscribe with either using the same credit card or choose a different one.
* still have access to services until the end of month if I decide to cancel before the month ends.
* receive the payment receipt via email
* have copy of my receipt in PDF format

### Still To Do

- [x] Add charge model
- [x] Display charges in the account page
- [x] Making PDF receipts
- [x] Rendering PDF receipts
- [ ] Add admin (optional)
- [ ] Decide what service to offer (optional)
- [ ] Style it (optional)
