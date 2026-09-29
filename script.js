function checkEligibility(event) {

    event.preventDefault();

    var name = document.getElementById("name").value.trim();

    var age = Number(document.getElementById("age").value);

    var country = document.getElementById("country").value;

    var result = document.getElementById("result");


    

    if (name === "" || age === 0 || country === "") {

        result.style.display = "block";

        result.className = "error";

        result.innerHTML =
            "⚠️ Please fill all the details.";

        return;
    }


    

    if (age >= 18 && country === "India") {

        result.style.display = "block";

        result.className = "eligible";

        result.innerHTML =
            "🎉 Hello " + name +
            "!<br>You are eligible to vote in India.";

    }

    else {

        result.style.display = "block";

        result.className = "not-eligible";

        result.innerHTML =
            "🙂 Sorry " + name +
            "!<br>You are not eligible to vote in India.";

    }
}