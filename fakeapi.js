var faker= require('faker');
//const { fake } = require('faker');
function generateEmployees(){
    var fakeapi =[]
    for(var id=0; id< 50; id++){
        var firstName = faker.name.firstName();
        var lastName= faker.name.lastName();
        var city = faker.address.city();
        var phone_no= faker.phone.phoneNumber();
        var email =faker.internet.email();
        var companyName =  faker.company.companyName();
        var userImage= faker.image.avatar();
        fakeapi.push({
            "id" : id,
            "FirstName": firstName,
            "LastName" : lastName,
            "City" : city,
            "Phone_no" : phone_no,
            "Email":email,
            "CompanyName" : companyName,
            "UserImage" : userImage
        })
    }
    return {'fakeapi': fakeapi}
}
module.exports = generateEmployees