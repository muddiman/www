/**
 * 
        @url: http://www.roger-clarke.com
        @Author: Roger Clarke 
        @email: roger@roger-clarke.com
*/

/**
 * 
 */
function clickOutsideForm() {
        var modal = document.getElementById('loginform');
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
}
/**
 * 
 */
function loginForm() {
        var modal = document.getElementById('loginform');
        modal.style.display = 'block';
        clickOutsideForm();
}