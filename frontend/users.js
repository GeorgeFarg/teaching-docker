
const loadUsers = async () => {
    let user = await fetch("http://localhost:5000/users")
    
    let usersData = await user.json();

    let usersElements = usersData.map((user) => {
        let newElement = document.createElement("li");

        let label1 = document.createElement("label");
        label1.innerText = user.name

        let label2 = document.createElement("label");
        label2.innerText = user.email

        let label3 = document.createElement("label");
        label3.innerText = user.password

        newElement.appendChild(label1);
        newElement.appendChild(label2);
        newElement.appendChild(label3);

        newElement.className="ele";

        return newElement;
    })
    

    let ul = document.getElementsByTagName("ul")[0];

    usersElements.forEach(element => {
        ul.appendChild(element);
    });
    console.log(usersElements);
} 