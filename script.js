fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    let html = json.map((user) => {
      return `

      <div class="success">
      <p> 
    
        <table>
    <tr>
        
    <td> <h3 id="names">${user.name}</h3></td>
    <td><td><h3>${user.email}</h3></td>
    <td><p><button class="button"><a href="posts.html?userId=${user.id}"> <span>Posts</span></a></button></p></td>
    
      </tr>
      </table>
    </p>
    </div>
    

          `;
        });
        document.querySelector("#userdata").innerHTML = html;
      });