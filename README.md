# InfoWorld Project

### Steps to run the project

##### 1. Install mongodb locally alongside with mongodb Compass. (https://www.mongodb.com/docs/manual/installation/)
##### 2. Start the mongodb server and then access it via Compass. (https://www.mongodb.com/docs/manual/administration/install-community/)
##### 3. Create the database and populate it with the following scripts from the mongo sh terminal in Compass.

``` use SHOP ```
``` 
db.laptops.insertMany([{
    "name": "Acer Aspire 3",
     "brand": "Acer",
     "description" : "",
     "price": 1300
},
{
    "name": "ASUS ROG GL753VD",
     "brand": "ASUS",
     "description" : "",
     "price": 6300,
     "specification": "Intel Core i7-7700HQ 2.80GHz, Kaby Lake, 17.3 inch, Full HD, 8GB, 1TB, DVD-RW, nVIDIA GeForce GTX 1050 4GB, Endless OS, Black"
},
{
    "name": "Dell Inspiron 15",
     "brand": "Dell",
     "description" : "Office laptop",
     "price": 2500,
     "specification": "Intel Core i3-1115G4 pana la 4.1GHz, 15.6 inch Full HD, 8GB, SSD 512GB, Intel UHD Graphics, Ubuntu, negru"
},
{
    "name": "ASUS ROG Strix G15 G513IC",
     "brand": "ASUS",
     "description" : "Gaming laptop",
     "price": 4900,
     "specification": "AMD Ryzen 7 4800H, 15.6 inch, Full HD, 144Hz, 16GB, 512GB SSD, NVIDIA GeForce RTX 3050 4GB, Free DOS, Eclipse Gray"
},
{
    "name": "Lenovo TB15",
     "brand": "Lenovo",
     "description" : "Office laptop",
     "price": 2650,
     "specification": ""
}])
```

```
db.phones.insertMany([{
     "name": "Samsung Galaxy M12",
     "brand": "Samsung",
     "description" : "Bucura-te de stilul elegant al noului Galaxy M12.",
     "price": 770,
     "color" : "Green",
     "technology" : "4G"
},
{ 
     "name": "iPhone 13 Pro",
     "brand": "Apple",
     "description" : "Un design la fel de incatator pe cat este de durabil, cu otel inoxidabil de calitate chirurgicala, Ceramic Shield si rezistenta la apa de nivel.",
     "price": 5480,
     "color" : "Graphite",
     "technology" : "5G"
},
{
     "name": "Huawei Nova 9",
     "brand": "Huawei",
     "description" : "Bucura-te de finisajul dublu al telefonului HUAWEI nova 9 si de corpul ultra-subtire si usor de 175 g.",
     "price": 1600,
     "color" : "Starry Blue",
     "technology" : "4G"
},
{
     "name": "Samsung Galaxy A52s",
     "brand": "Samsung",
     "description" : "",
     "price": 1530,
     "color" : "Light Violet",
     "technology" : "5G"  
},
{
     "name": "Doogee N30",
     "brand": "Doogee",
     "description" : "",
     "price": 700,
     "color" : "Black",
     "technology" : "4G"
}])
```

##### 4. Clone the project.
##### 5. Run the following commands:

```
cd infoWorld-project/
npm install
npm start
```

##### 6. The server should run on port 2255. After the message "Connected to database" appears in the console, you can test the API with Postman.
##### 7. Available routes:

###### For laptops:

- laptops/laptops [GET] (getting all the laptops with possibility of queryparams: name, brand, price, minprice, maxprice)
- laptops/laptop [POST] (creating a laptop)
- laptops/laptop/:laptopid [GET] (getting a specific laptop by id)
- laptops/laptop/:laptopid [PUT] (updating a specific laptop by id)
- laptops/laptop/:laptopid [DELETE] (deleting a laptop by id)

###### For phones:

- phones/phones [GET] (getting all the phones with possibility of queryparams: name, brand, price, minprice, maxprice)
- phones/phone [POST] (creating a phone)
- phones/phone/:phoneid [GET] (getting a specific phone by id)
- phones/phone/:phoneid [PUT] (updating a specific phone by id)
- phones/phone/:phoneid [DELETE] (deleting a phone by id)

