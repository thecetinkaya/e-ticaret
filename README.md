# E-Commerce Application

This project is an e-commerce application developed using **React**, **Tailwind CSS**, and **Context API**. Users can browse products, add them to their cart, and complete the checkout process. The app features dynamic search, filtering, and product management capabilities.

## Technologies

- **React**: Used to build the user interface.
- **Tailwind CSS**: Used for page design and responsive features.
- **Context API**: Used for global state management.
- **Swiper**: Used for the slider functionality to display products.

## Home Page

The home page is the main landing page that allows users to start their shopping experience. The page includes the following features:

1. **Swiper Slider**:

   - A dynamic slider for campaigns and promotions has been implemented using the **Swiper** library. Users can easily view campaigns through this slider.
   - The slider transitions automatically, presenting a new campaign image with each slide.

2. **Product Filtering and Search**:

   - Users can choose product categories via a **dropdown** menu and filter products using the **search bar**.
   - This feature helps users easily find products.

3. **Product Listing**:

   - Products are displayed in a list based on the selected category and search filter.

## Product Details Page

The product details page shows the details of each product. On this page, you’ll find:

- **Product name, price, description, and images**.
- Users can add products to their cart from here.

## Cart Page

On the cart page, users can view the products they’ve added to their cart. The following actions can be performed here:

1. **Increase or Decrease Product Quantity**:
   - Users can change the quantity of products in the cart.

2. **Remove Products**:

   - Users can remove unwanted products from the cart.

3. **Confirm Cart**:
   - Once the user confirms the cart, they are redirected to the checkout page.

## Checkout Page

On the checkout page, users can complete the payment process. This page displays the products and the total amount.

- Users can enter payment details to complete the purchase.
- A confirmation message is displayed once the payment is successfully processed.

## Project Setup

To run this project locally, follow these steps:

1. Clone the project:

   ```bash
   git clone https://github.com/thecetinkaya/e-ticaret.git


2. Navigate to the project directory:

   ```bash
   cd e-ticaret

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Start the application:
   ```bash
   npm run dev
   ```

## Contributing

If you would like to contribute, please create a pull request.


