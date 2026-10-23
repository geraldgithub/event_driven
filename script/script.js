fetch("http://localhost/demo/index.php?type=all")
  .then((response) => response.json())
  .then((data) => {
    let tr = "";
    for (let i = 0; i < data.length; i++) {
      tr += `
        <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].address}</td>
        <td>
        <button class="btn-delete" id='${data[i].id}'>Delete</button>
        <button>Update</button>
        </td>
        </tr>
        `;
    }

    document.getElementById("data").innerHTML = tr;

    const btn = document.querySelectorAll(".btn-delete");

    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function () {
        fetch("http://localhost/demo/delete.php", {
          method: "POST",
          body: JSON.stringify({ id: this.id }),
        })
          .then((response) => response.text())
          .then((message) => alert(message));
      });
    }
  });
