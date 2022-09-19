class Utility{
    static formatData(player) {
        const { name, age, email, salary } = player;
    
        let resultString = "";
        resultString += `Name: ${name}<br>`;
        resultString += `Age: ${age}<br>`;
        resultString += `Email: ${email}<br>`;
        resultString += `Salary: $${salary}<br>`;
        resultString += "--------------------------<br>";
    
        return resultString;
    }
    
    static clearForm() {
        document.querySelector("#name").value = "";
        document.querySelector("#age").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#salary").value = "";
    }
}







