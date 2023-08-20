function greet(a, b) {
      let fullname = a + b;
      return fullname;
    }
    let firstname = prompt("Enter Your Name");
    let SurName = prompt("Enter Your SurName");
    console.log(
      greet(
        firstname + " ",
        SurName + " " + "Assalam-u-Alaikum All the Way From London"
       )
    );