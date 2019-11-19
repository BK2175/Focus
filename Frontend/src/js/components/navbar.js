export default function Navbar() {
    return `
    
    
    <nav class='navbar'>
        <ul>
            <li><a id="homeButton">Home</a></li>
            <li><a id="userButton">User</a></li>
            <li><a id="businessButton">Business</a></li>
            <li><a id="categoryButton">Categories</a></li>
            <li><a id="activityButton">Activities</a></li>
        </ul>
        <div class="burger" onclick="myFunction(this)">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>

        
    </nav>
    `;
}
