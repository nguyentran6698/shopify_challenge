# Shopify Back-End Challenge 2022
### Running the application using Postman
1) Download Postman
2) Open Postman and import **shopify_challenge.postman_collection** in the github folder to postman in order to generate collection.
3) All the routes will be setuped and you can create your own data or using data that inside the **mock_data.json** in the github folder.
### Running the application using SwaggerUI.
- Since the product is being deployed on the cloud you can go to the link below to test it.
https://shopify-challenge-api-2022.herokuapp.com/api-docs/
# Testing Process
**Some helpful tips**
*To make a request body in Postman following these steps:*
In **body** tab, select **raw**, change the **text** format to **json** format in the dropdown menu.
*To upload image on postman following these steps:*
In **body** tab, choose **form-data**, in **key** field type **image** and choose **file**. Click on **Select File** and chose the image that you want to upload.
### Step 1: Create Store
Create store with **name** and **location**
**Name's store must be unique.**
Example
>{
    "name":"store_3",
    "location":"houston"
>}
### Step 2: Create a product with store id.
**Note: You must create a store first before create a product since every product need to have a store**
Example:
>{
    "name": "Fixflex4",
    "company": "Jabbersphere",
    "desc": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    "quantity": 481,
    "price": 303.9,
    "type": "clothes",
    "store":[storeID_1,storeID_2] 
    Ex:"store":["61dfbc34d042a4d9e8c66aca","61dfbcb3d042a4d9e8c66acc","61dfbcbad042a4d9e8c66ace"]
>  }
### Step 3: Upload image.
**To upload and link the image to product, you can provide productID in query. If you don't provide the productID, the request still works and it still returns the link of the image.**
*Example:* https://shopify-challenge-api-2022.herokuapp.com/api/v1/products/upload?productID={id}
#
*To edit/remove product please pass in the product id in the url*
*Example:* https://shopify-challenge-api-2022.herokuapp.com/api/v1/products/{id}
### Step 4: Edit the product.
Inside the body, you can provide the key and value you want to update.
*Example*
>{
    "price":2000,
    "desc":"this product is a abcxyz"
}
### Step 5: Remove the product.
No need to pass anything when removing the product

