<% if (locals.errors) { %>
  <ul class="errors">
    <% errors.forEach((error) => { %>
      <li><%= error.msg %></li>
    <% }); %>
  </ul>
<% } %> 