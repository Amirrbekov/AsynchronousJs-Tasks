document.getElementById("add").addEventListener("click",getEmployee);

function getEmployee(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","employee.json",true);

    xhr.onload = function(){
        let list = document.querySelector("#employee");
        if (this.status == 200){
            const employees = JSON.parse(this.responseText);

            employees.forEach(employee => {
                list.innerHTML += `
                <tr>
                    <th scope="col">${employee.name}</th>
                    <th scope="col">${employee.department}</th>
                    <th scope="col">${employee.salary}</th>
                </tr>
                `;
            });
        }
    }

    xhr.send();
}