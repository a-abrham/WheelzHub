// let projectID = "7c3fpwn3"
// let dataset = "production"
// let query = encodeURIComponent(`*[_type == 'cars']{title, "imageUrl": mainImage.asset->url}`)
// let url = `https://${projectID}.api.sanity.io/v1/data/query/${dataset}?query=${query}`

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//     let html = document.querySelector(".content")
//     data.result.forEach(car => {
//         // console.log(car.title);
//     html.innerHTML += `
//                     <div class="product-box">
//                         <div class="product-img">
//                             <img src="${car.imageUrl}" alt="${car.title}">
                        
//                             <h3 class="product-title">${car.title}</h3>
//                             <p class="product-price">per day $500</p>
//                             <p class="product-price">For sale $300000</p>
//                         </div>
//                     `
//         })
//     })