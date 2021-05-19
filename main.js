let posts = [{
    title: "blabla",
    detail: "moreBlabla"
}, {
    title: "anotherBlabla",
    detail: "Blabla?"
}];

const addPostPromise = (newPost) => {
    const ps = new Promise((resolve, reject) => {
        newPost == undefined ? reject("Veri verilmedi!") : posts.push(newPost) ;
    });
    return ps;
}

console.log(posts);

addPostPromise({
    title: "addPostWithPromise",
    detail: "newDetails"
}).then(console.log(posts)).catch((e) => console.log(`${e} ???`));

function pushPost(newPost) {
    return new Promise((resolve, reject) => {
        newPost == undefined ? reject("Veri verilmedi!") : posts.push(newPost) ;
    });
}

async function addPostAsync (newPost) {
    await pushPost(newPost).catch((e) => console.log(`${e}`));
}

addPostAsync({
    title: "addPostWithAsync-await",
    detail: "newDetails"
}).then(console.log(posts)).catch((e) => console.log(`${e}`));