function person(name, Date, password, age) {
    this.name = name;
    this.Date = Date;
    this.password = password;
    this.age = age - 1
}


var birthyear = Date;
var presentyear = year;
var age = presentyear - birthyear;





var today = new Date();
var p1 = new person("ash", 1986, "smart", age);
var p2 = new person("chris", 2002, "not as smart", age);

document.write("wellcome " + p1.name + p1.age + "<br>"); 
document.write("wellcome " + p2.name + p2.age + "<br>");
document.write(year);

var year = today.getFullYear();
document.write(year);














