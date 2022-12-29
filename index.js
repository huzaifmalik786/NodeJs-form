const express = require("express");
const app = express();
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send(`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1 class="mt-5 mb-10">Stay By Hours</h1>
        </br>
        <h2 class="text-center mt-5 mb-5"> Welcome.Please continue with the Registration </h2> 
        </br>
        <button type="button" class="btn btn-outline-primary w-50 align-center" onclick="location.href='/register';">Register Here</button>
    </div>
    `)
})

app.get("/register", (req, res) => {
    res.send(`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1 class="mt-5 mb-5">Stay By Hours</h1>
        <div class="container bg-light bg-gradient">
            <h3>New Property Onboarding..</h3>
            <p class="mb-4">Hello from StayByHours! We are excited to get your property onboarded! Please help us by answering the questions below.</p>
            <hr class="mb-4">
            <form method="POST" action="/register">
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name">
            </div>
            <hr>
            <h3 class="mt-4 mb-4">Property Information</h3>
            <hr class="mb-4">
            <div class="mb-3">
                <label for="exampleInputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" name="address">
                <div id="addressHelp" class="form-text mb-3">Flat number/Building number</div>
                <input type="text" class="form-control" id="street_address" name="street_address">
                <div id="addressHelp" class="form-text mb-3">Street Address</div>
                <input type="text" class="form-control" id="city" name="city">
                <div id="addressHelp" class="form-text mb-3">City</div>
                <input type="text" class="form-control" id="code" name="code">
                <div id="addressHelp" class="form-text mb-3">PostCode</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputnumber" class="form-label">How Many Bedrooms?</label>
                <input type="number" class="form-control" id="bedrooms" name="bedrooms">
            </div>
            <div class="mb-3">
                <label for="exampleInputnumber" class="form-label">How Many Bathrooms?</label>
                <input type="number" class="form-control" id="bathrooms" name="bathrooms">
            </div>
            <hr>
                <h3 class="mt-4 mb-4">HouseKeeper Information</h3>
            <hr class="mb-4">
            <div class="mb-3">
                <label for="exampleInputinfo" class="form-label">How does the housekeeper dispose of Rubbish?</label>
                <textarea class="form-control" id="dispose_info" name="dispose_info" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleInputnumber" class="form-label">Any special products for cleaning?</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="cleaning_products" id="cleaning_products">
                <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="cleaning_products" id="cleaning_products">
                <label class="form-check-label" for="flexRadioDefault2">
                    No
                </label>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputnumber" class="form-label">If our housekeeper finds dry food or condiments in cupboards, will we be keeping this or disposing of this?</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="dispose" id="dispose">
                <label class="form-check-label" for="flexRadioDefault1">
                    Keep everything in the cupboard
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="dispose" id="dispose">
                <label class="form-check-label" for="flexRadioDefault2">
                    Please throw away all
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="dispose" id="dispose">
                <label class="form-check-label" for="flexRadioDefault1">
                    Thow away one half used items
                </label>
            </div>
            <div class="mb-3">
                <label for="exampleInputnumber" class="form-label">Do you allow Pets?</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="pets" id="pets">
                <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="pets" id="pets">
                <label class="form-check-label" for="flexRadioDefault2">
                    No
                </label>
            </div>
            <hr>
            <h3 class="mt-4 mb-4">Parking Information</h3>
            <hr class="mb-4">
            <div class="mb-3">
                <label for="exampleInputnumber" class="form-label">Is there a parking outside te building?</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="outside_parking" id="outside_parking">
                <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="outside_parking" id="outside_parking">
                <label class="form-check-label" for="flexRadioDefault2">
                    No
                </label>
            </div>
            <div class="mb-3">
                <label for="exampleInputnumber" class="form-label">Is there a parking inside the building?</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="inside_parking" id="inside_parking">
                <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="inside_parking" id="inside_parking">
                <label class="form-check-label" for="flexRadioDefault2">
                    No
                </label>
            </div>
            <hr>
            <h3 class="mt-4 mb-4">General Information</h3>
            <hr class="mb-4">
            <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
            <label for="contact" class="form-label">Contact Number</label>
            <input type="text" class="form-control" id="contact" name="contact">
            </div>
            <div class="mb-3">
                <label for="exampleInputnumber" class="form-label">Is there a keybox at the property?</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="keybox" id="keybox">
                <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="keybox" id="keybox">
                <label class="form-check-label" for="flexRadioDefault2">
                    No
                </label>
            </div>
            <div class="mb-3">
                <label for="exampleInputinfo" class="form-label">Anything else you want us to know?</label>
                <textarea class="form-control" id="additional_info" name="additional_info" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
    `)
})

app.post("/register",(req, res)=>{
    res.send(req.body);
})

app.listen(3000);