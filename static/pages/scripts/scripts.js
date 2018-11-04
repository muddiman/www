/*
        @url: https://www.roger-clarke.com
        @Author: Roger Clarke 
        @email: roger@roger-clarke.com
*/

       
function clickOutsideForm() {
        // Get the modal
        var modal = document.getElementById('loginform');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
                if (event.target == modal) {
                        modal.style.display = "none";
                }
        };
}
function loginForm() {
        // Get the modal
        var modal = document.getElementById('loginform');
        // Displays the Log In form.
        modal.style.display='block';
        clickOutsideForm();
}
