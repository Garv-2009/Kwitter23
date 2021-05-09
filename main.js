function sign() {
    user_name = document.getElementById("username").value;
    password = document.getElementById("password").value;
    gmail = document.getElementById("gmail").value;


    localStorage.setItem("user_name_local_project", user_name);
    localStorage.setItem("pass_word_local_project", password);
    localStorage.setItem("gmail_local_project", gmail);    

    window.location = "page.html"
}
