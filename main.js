let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let bookInput = document.getElementById("bookInput");
let regNo = document.getElementById("regNo");
let tableNo = document.getElementById("tableNo");
let age = document.getElementById("age");


form.addEventListener("submit", (e) => {
      e.preventDefault();
      formValidation();
});

let formValidation = () => {
      if (textInput.value === '') {
            alert('Please! Enter Your Details :)')
      } else {
            acceptData();
      }
};

let data = [];

let acceptData = () => {
      data["text"] = textInput.value;
      data["book"] = bookInput.value;
      data["reg"] = regNo.value;
      data["table"] = tableNo.value;
      data["age"] = age.value;
      createTasks();
};

let serialNumber = 3;
let createTasks = () => {
      dataTable.innerHTML += `
      <tr>
            <th scope="row">${serialNumber}</th>
            <td>${data.text}</td>
            <td>${data.book}</td>
            <td>${data.reg}</td>
            <td>${data.table}</td>
            <td>${data.age}</td>
            <td><i onclick="editTask(this)" class="fas fa-edit"></i> <i onclick='deleteTask(this)' class="fas fa-trash-alt"></i></td>
      </tr>`

      serialNumber++;
      restdata();
};

let restdata = () => {
      textInput.value = '';
      bookInput.value = '';
      regNo.value = '';
      tableNo.value = '';
      age.value = '';
}
let deleteTask = (e) => {
      e.parentElement.parentElement.remove();
      console.log(e.parentElement.parentElement)
}

let editTask = (e) => {
      let selectedTask = e.parentElement.parentElement;
      console.log(selectedTask)
      textInput.value = selectedTask.children[1].innerHTML;
      bookInput.value = selectedTask.children[2].innerHTML;
      regNo.value = selectedTask.children[3].innerHTML;
      tableNo.value = selectedTask.children[4].innerHTML;
      age.value = selectedTask.children[5].innerHTML;
      selectedTask.remove();
}