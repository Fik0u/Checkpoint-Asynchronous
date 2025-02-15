//! Tâche 01: 
// Itérer avec Async/Await: Ecrire une fonction async iterateWithAsyncAwait qui prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les enregistrements.
function watcher(time) {
    return new Promise((resolve)=> setTimeout(resolve, time))
}
async function iterateWithAsyncAwait(arr) {
    for (var elt of arr) {
        console.log(elt);
    await watcher(1000)
    } 
}
// iterateWithAsyncAwait(["Adam", "Ines", "Yahia", "Sara", "Hatem"])

//! Tâche 02: 
// Attendre un appel: Créer une fonction asynchrone awaitCall qui simule l'obtention de données à partir d'une API. Utilisez await pour attendre la réponse de l'API, puis enregistrez les données.
function findData(url){
    return new Promise((resolve)=> setTimeout(()=> resolve(`Data found successfully through ${url}`), 1000))
}
async function awaitCall(url) {
    const data = await findData(url)
    console.log(data)
    
}
// awaitCall("http://user/api/test");

//! Tâche 03-a: 
// Gérer les erreurs avec Async/Await: Modifiez la fonction awaitCall pour gérer les erreurs de manière élégante. Si l'appel à l'API échoue, attrapez l'erreur et enregistrez un message d'erreur convivial.

function findData(url){
    return new Promise((resolve, reject)=> {
        (url) ?
        setTimeout(()=> resolve(`Data found successfully through ${url}`), 1000)

        : reject("Couldn't find data through this API Call" )   
    })
}

async function awaitCall(url) {
    try {
    const data = await findData(url)
        console.log(data)
    } catch (error) {
        console.log(error)
    } 
}
// awaitCall("http://user/api/test");

//! Tâche 03-b: 
// Chaîner Async/Await: Écrivez une fonction chainedAsyncFunctions qui appelle trois fonctions asynchrones distinctes de manière séquentielle. Chaque fonction doit enregistrer un message après un délai d'une seconde. Enchaînez ces fonctions en utilisant await.

function firstFn() {
    return new Promise((resolve) => setTimeout(() => resolve(console.log("This is the first function")), 1000))
    
}
function secondFn() {
    return new Promise((resolve) => setTimeout(() => resolve(console.log("This is the second function")), 1000))
    
}
function thirdFn() {
    return new Promise((resolve) => setTimeout(() => resolve(console.log("This is the third function")), 1000))
    
}

async function chainedAsyncFunctions() {
    await firstFn();
    await secondFn();
    await thirdFn();

}
// chainedAsyncFunctions();

//! Tâche 04: 
// Attente de requêtes simultanées: Créez une fonction asynchrone concurrentRequests qui effectue deux appels API simultanément en utilisant Promise.all(). Enregistrez les résultats combinés une fois les deux requêtes résolues.

function firstCall(){
    return new Promise (resolve => setTimeout(()=> resolve("First data found successfully"), 2000))
}
function secondCall(){
    return new Promise (resolve => setTimeout(()=> resolve("Second data found successfully"), 2000))
}

async function concurrentRequests() {
    const [Data1, Data2] = await Promise.all([firstCall(), secondCall()])
    console.log(Data1, Data2);
}
// concurrentRequests()

//! Tâche 05: 
// Attente des appels parallèles: Écrivez une fonction parallelCalls qui prend un tableau d'URL et récupère les données de chaque URL simultanément en utilisant Promise.all(). Enregistrez les réponses une fois que toutes les requêtes sont terminées.

function dataSearch(URL) {
    return new Promise (resolve => setTimeout(() => resolve(`Data found successfully through ${URL}`), 2000))
    
}
async function parallelCalls(URLs) {
    const arr = await Promise.all(URLs.map(URL => dataSearch(URL)))
    arr.forEach(elt => console.log(elt))   
}
// parallelCalls(["http://test/api/index", "http://test/api/main", "http://test/api/all"])