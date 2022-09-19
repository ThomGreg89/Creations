class Player {
    constructor(name, age, email, salary) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.salary = salary;
    }
}

class Main {
    constructor() {
    this.basketballTeam = [];
    document.querySelector("#addbtn").addEventListener("click", (e) => this.onAdd(e));
    document.querySelector("#displaybtn").addEventListener("click", (e) => this.onDisplay(e));

    document.querySelector("#message").style.display = "none";
    document.querySelector("#welcome").style.display = "none";
    }

    onAdd(e) {
        if(document.querySelector("#name").checkValidity() &&
        document.querySelector("#age").checkValidity() &&
        document.querySelector("#email").checkValidity() &&
        document.querySelector("#salary").checkValidity()) {

            e.preventDefault();

            let name = document.querySelector("#name").value;
            let age = document.querySelector("#age").value;
            let email = document.querySelector("#email").value;
            let salary = document.querySelector("#salary").value;
            let player = new Player (name, age, email, salary);
            this.basketballTeam.push(player);
    
            document.querySelector("#message").style.display = "block";
    
            Utility.clearForm();
        }

    }

    onDisplay(e) {
        document.querySelector("#welcome").style.display = "block";

        for (let i = 0; i < this.basketballTeam.length; i++) {
        const formattedData = Utility.formatData(this.basketballTeam[i]);

        document.querySelector("#result").innerHTML += `${formattedData}<br>`;
        }
    }
}
(() => {
    const main = new Main();
})();