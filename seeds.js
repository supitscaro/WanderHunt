const {User, Post, Activity, Comment} = require('./db/models');
const fetch = require('node-fetch');

let users = []

async function createUsers() {
    let test = await fetch("https://swapi.dev/api/people")
    let people = await test.json()
    let persons = people.results.forEach((person) => {
        let password = person.birth_year
        let username = person.name
    })

}
let emailList = [
    "prince70@dickens.com",
    "nwilliamson@yahoo.com",
    "natalie.effertz@romaguera.biz",
    "ratke.rossie@hansen.com",
    "wuckert.jo@hotmail.com",
    "jkunde@littel.biz",
    "yullrich@runte.com",
    "oreilly.zion@fay.net",
    "porn@shanahan.com",
    "armstrong.amanda@yahoo.com",
    "yost.parker@gmail.com",
    "stefanie.hagenes@gmail.com",
    "emilio26@koelpin.com",
    "atromp@hotmail.com",
    "keagan.grant@gmail.com",
    "anderson.emelia@lemke.net",
    "uturner@thompson.com",
   "fhermiston@rippin.info",
   "hmcclure@gmail.com",
   "catharine61@gmail.com",
   "theresia59@walter.biz",
   "elyse.kuhic@auer.net",
   "gbraun@roberts.com",
   "terrill.erdman@orn.com",
   "jadyn.bartoletti@gmail.com",
   "wlarkin@durgan.net",
   "mariana33@yahoo.com",
   "phowell@prosacco.com",
   "rice.irving@yahoo.com",
    "andre85@wiegand.net",
    "zschamberger@hotmail.com",
    "bfranecki@schuppe.com",
    "schuppe.vallie@hotmail.com",
    "scot65@gmail.com",
    "jolie25@sauer.com",
    "pbernhard@hotmail.com",
    "arch43@roberts.com",
    "amanda63@gmail.com",
    "jocelyn.spencer@hackett.org",
    "jrath@hotmail.com",
    "malachi24@ledner.net",
    "alexandre02@ondricka.net",
    "bauch.kiarra@kovacek.com",
    "graham.treutel@hotmail.com",
    "tremaine74@mitchell.org",
    "vking@powlowski.org",
    "ikozey@hotmail.com",
    "imclaughlin@hotmail.com",
    "qlangosh@gmail.com",
    "cummerata.lisandro@considine.com",
    "gruecker@gmail.com",
    "cummings.alden@cartwright.info",
    "aflatley@gmail.com",
    "kale57@berge.com",
    "alyson51@mccullough.com",
    "zmills@gmail.com",
    "omcdermott@stroman.com",
    "gail17@hyatt.info",
    "jmills@yahoo.com",
    "mervin72@yahoo.com",
    "cassin.thalia@rice.com",
    "karlie99@jast.com",
    "hyatt.jacky@gmail.com",
    "emely88@rutherford.org",
    "mgerlach@yahoo.com",
    "kiel09@kuhn.biz",
    "zeffertz@yahoo.com",
    "sbeahan@stiedemann.com",
    "natasha50@schmidt.com",
    "peyton14@gmail.com",
    "orobel@harber.com",
    "koss.eve@gmail.com",
    "koreilly@wilderman.biz",
    "jjast@hotmail.com",
    "leannon.sydni@waelchi.com",
    "jaskolski.tobin@gmail.com",
    "theodore01@torp.com",
    "cordie.emmerich@yahoo.com",
    "malcolm10@cummerata.biz",
    "kavon.bauch@hoeger.com",
    "hodkiewicz.kayley@ziemann.com",
    "isac.jacobson@koss.com",
    "trevor.bogan@hotmail.com",
    "sreinger@frami.info"]

let activities = [
    "Backpacking",
    "Camping",
    "Hiking",
    "Climbing",
    "Caving",
    "Ice Climbing",
    "Mountaineering",
    "Cycling",
    "Mountain Biking",
    "Geocaching",
    "Running",
    "Photography",
    "Exploring",
    "Snowsports",
    "Kayaking",
    "Kayaking",
    "Cruising",
    "Safari",
    "Watersports",
    "Snorkeling",
    "picnicing",
    "Sightseeing"]

// let states = [
// "Alabama,AL"
// Alaska, "AK"
// Arizona,	AZ
// Arkansa,	AR
// Califor,"	CA
// Colorado	CO
// Connecticut	CT
// Delaware	DE
// Florida	FL
// Georgia	GA
// Hawaii	HI
// Idaho	ID
// Illinois	IL
// Indiana	IN
// Iowa	IA
// Kansas	KS
// Kentucky	KY
// Louisiana	LA
// Maine	ME
// Maryland	MD
// Massachusetts	MA
// Michigan	MI
// Minnesota	MN
// Mississippi	MS
// Missouri	MO
// Montana	MT
// Nebraska	NE
// Nevada	NV
// New Hampshire	NH
// New Jersey	NJ
// New Mexico	NM
// New York	NY
// North Carolina	NC
// North Dakota	ND
// Ohio	OH
// Oklahoma	OK
// Oregon	OR
// Pennsylvania	PA
// Rhode Island	RI
// South Carolina	SC
// South Dakota	SD
// Tennessee	TN
// Texas	TX
// Utah	UT
// Vermont	VT
// Virginia	VA
// Washington	WA
// West Virginia	WV
// Wisconsin	WI
// Wyoming
// ]




async function createPosts(num){
    let description = [];
    while(num){
        let postPath = await fetch(`https://hipsum.co/api/?type=hipster-centric&sentences${Math.floor(Math.random()*(5-2)+2)}&paras=${Math.floor(Math.random()*(5-2)+2)}`)
        let posts = await postPath.json()
        description.push(posts)
        num--
    }
    console.log(description);



}
  createPosts(10)

createUsers();
