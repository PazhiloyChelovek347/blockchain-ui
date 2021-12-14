// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

contract Contract{
    struct User{
        address addressUser;
        uint[] services;
        string upassword;
        string FIO;
        uint role;
    }

    struct Service{
        // uint id;
        string name;
        int price;
    }

    struct Book{
        string date;
        address masterId;
        address customerId;
    }

    // User[] users;
    Service[] services;
    Book[] bookings;
    address[] addresses;

    uint serviceId = 0;

    mapping(address => User) public users;

    // Booking ----------------------------------------------------------------------------------------

    function createBook(string memory date, address masterId, address customerId) public returns(Book memory){
        require(users[masterId].role == 1, "Master has wrong role!");
        require(users[customerId].role == 0, "Customer has wrong role!");

        bookings.push(Book(date, masterId, customerId));
        return Book(date, masterId, customerId);
    }

    function payBooking(address payable masterId, uint rubles) public payable {
        uint sum = 37 * rubles / 10000000;
        masterId.transfer(sum);
    }

    function getBookings() public view returns(Book[] memory){
        return bookings;
    }

    function getBookingsById(uint id) public view returns(Book memory){
        return bookings[id];
    }

    // Users ------------------------------------------------------------------------------------------

    function createUser(address addressUser, string memory FIO, string memory upassword) public returns(string memory){
        require(bytes(FIO).length != 0, "fio was not written");
        require(bytes(upassword).length != 0, "password was not written");

        uint[] memory a;
        users[addressUser].services = a;
        users[addressUser].upassword = upassword;
        users[addressUser].FIO = FIO;
        users[addressUser].role = 0;
        addresses.push(addressUser);

        return(users[addressUser].FIO);
    }

    function authorization(address addressUser, string memory upassword) public view returns(bool) {
        if (keccak256(bytes(users[addressUser].upassword)) == keccak256(bytes(upassword))) {
            return true;
        } else {
            return false;
        }
    }

    function addServiceToMaster(address masterId, uint sid) public isAdmin{
        bool check = false;
        for (uint i = 0; i<users[masterId].services.length; i++) {
            if (users[masterId].services[i] == sid) {
                check = true;
            }
        }
        if (!check) {
            users[masterId].services.push(sid);
        }
    }

    function deleteServiceFromMaster(address masterId, uint sid) public isAdmin{
        bool check = false;
        uint stopPos = 0;
        for (uint i = 0; i<users[masterId].services.length; i++) {
            if (users[masterId].services[i] == sid) {
                check = true;
                stopPos = i;
                break;
            }
        }
        if (check) {
            for (uint i = stopPos; i<users[masterId].services.length; i++) {
                users[masterId].services[i] = users[masterId].services[i+1];
            }
            delete users[masterId].services[users[masterId].services.length];
        }
    }

    function setRole(address adr, uint role) public returns(uint){
        require(role >= 0 && role < 3, "please enter valid userId");
        users[adr].role = role;
        return users[adr].role;
    }

    modifier isAdmin {
      require(users[msg.sender].role == 2);
      _;
    }

    modifier isMaster {
      require(users[msg.sender].role == 1);
      _;
    }

    modifier isCustomer {
      require(users[msg.sender].role == 0);
      _;
    }

    function getUser(address adr) public view returns(User memory){
        return users[adr];
    }

    function deleteUser(address adr) public returns(User memory){
        User memory deleted = users[adr];
        delete users[adr];

        return deleted;
    }

    // Services ---------------------------------------------------------------------------------------

    function createService(string memory name, int price) public isAdmin{
        require(bytes(name).length != 0, "name was not written");
        require(price != 0, "price was not written");

        services.push(Service(name, price));
    }

    function getServices() public view returns(Service[] memory){
        return services;
    }

    function updateAllPrices(int coef, int divider) public {
        for (uint i = 0; i < services.length; i++) {
            services[i].price = services[i].price * coef / divider;
        }
    }

    function updateServicePrice(uint id, int newPrice) public isAdmin {
        services[id].price = newPrice;
    }

    function getServiceById(uint id) public view returns(Service memory){
        require(id < services.length, "Invalid id");

        return services[id];
    }
}