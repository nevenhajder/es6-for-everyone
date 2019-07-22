const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostById(id) {
    return new Promise((resolve, reject) => {
        // mimick database with timeout
        setTimeout(() => {
            const foundPost = posts.find(post => post.id === id);
            if (foundPost) {
                resolve(foundPost);
            } else {
                reject(Error('No post found.'));
            }
        }, 1000);
    });
}

function hydratePost(post) {
    return new Promise((resolve, reject) => {
        const authorDetails = authors.find(author => post.author === author.name);
        if (authorDetails) {
            post.author = authorDetails;
            resolve(post);
        } else {
            reject(Error('No author found.'));
        }
    });
}

getPostById(3)
    .then(post => hydratePost(post))
    .then(post => console.log(post))
    .catch(err => console.error(err));
