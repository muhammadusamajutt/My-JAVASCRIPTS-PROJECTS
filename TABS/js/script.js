
function webTech() {
    document.getElementById("tabs1").classList.remove("d-none")
    document.getElementById("tabs2").classList.remove("d-block")
    document.getElementById("tabs3").classList.remove("d-block")
    document.getElementById("tabs2").classList.add("d-none")
    document.getElementById("tabs3").classList.add("d-none")
    // document.getElementById("tabs1").classList.add("d-block")
}
function mobTech() {
    document.getElementById("tabs2").classList.remove("d-none")
    document.getElementById("tabs1").classList.remove("d-block")
    document.getElementById("tabs3").classList.remove("d-block")
    document.getElementById("tabs1").classList.add("d-none")
    document.getElementById("tabs3").classList.add("d-none")
    document.getElementById("tabs2").classList.add("d-block")
}
function uiUxTech() {
    document.getElementById("tabs3").classList.remove("d-none")
    document.getElementById("tabs2").classList.remove("d-block")
    document.getElementById("tabs3").classList.remove("d-block")
    document.getElementById("tabs2").classList.add("d-none")
    document.getElementById("tabs1").classList.add("d-none")
    // document.getElementById("tabs3").classList.add("d-block")
}
// function dbTech() {
//     document.getElementById("show").innerHTML = ' <div class="technology"><div class="tech"><img src="https://www.techgropse.com/common/images/updated/mysql.svg" alt=""><p>MySQL</p></div> <div class="tech"><img src="https://www.techgropse.com/common/images/updated/postgresql.svg" alt=""><p>PostgreSQL</p></div> <div class="tech"><img src="https://www.techgropse.com/common/images/updated/mongodb.png" alt=""><p>Mongo DB</p> </div><div class="tech"><img src="https://www.techgropse.com/common/images/updated/cassandra.svg" alt=""><p>Cassandra</p> </div> </div>'
// }
// function cloudTech() {
//     document.getElementById("show").innerHTML ='     <div class="technology"><div class="tech"><img src="https://www.techgropse.com/common/images/updated/aws.svg" alt=""><p>Amazon AWS</p></div><div class="tech"><img src="https://www.techgropse.com/common/images/updated/azure.svg" alt=""><p>Microsoft Azure</p></div><div class="tech"><img src="https://www.techgropse.com/common/images/updated/googlecloud.svg" alt=""> <p>Google Cloud</p></div><div class="tech"><img src="https://www.techgropse.com/common/images/updated/digitalocean.svg" alt=""><p>Digital Ocean</p></div><div class="tech"><img src="https://www.techgropse.com/common/images/updated/firebase.svg" alt=""><p>Firebase</p> </div></div>'
// }