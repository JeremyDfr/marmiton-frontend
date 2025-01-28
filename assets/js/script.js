
// Fonction fetch pour envoyer des requetes HTTP
// Promesse then, catch, finally
/*fetch('https://dummyjson.com/recipes')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('Finally');
});*/

// Promesse async / await
const getRecipes = async () => {
    try {
        const response = await fetch('https://dummyjson.com/recipes');

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

const showRecipes = async () => {
    const data = await getRecipes();

    const sectionRecipes = document.querySelector('section.recipes');

    for (const recipe of data.recipes) {
        const articleHtml =
            `<article class="recipe">
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-content">
                    <h2>${recipe.name}</h2>
                    <p>${recipe.cuisine}</p>
                    <div class="recipe-footer">
                        <a href="#" class="btn-primary">Je cuisine !</a>
                    </div>
                </div>
            </article>`

        sectionRecipes.innerHTML += articleHtml;
        // Equivalent à +=
        // sectionRecipes.innerHTML = sectionRecipes.innerHTML + articleHtml;
    }
};

setTimeout(async () => {
    await showRecipes();
    const loader = document.querySelector('.loader').style.display = 'none';
}, 3000);

