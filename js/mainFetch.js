let projectID = "7c3fpwn3"
let dataset = "production"
let query = encodeURIComponent(`*[_type == 'cars'][0..5] {title, "imgs": image[].asset->url,
  "imageUrl": mainImage.asset->url,
  "made": made->name,
  year,
  fuleType,
  transmission,
  rentalPrice,
  salesPrice,
  people,
  cc
}`)
let url = `https://${projectID}.api.sanity.io/v1/data/query/${dataset}?query=${query}`

fetch(url)
    .then(res => res.json())
    .then(data => {
    let html = document.querySelector(".featured-car-list")
    data.result.forEach(car => {
    html.innerHTML += `
    <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="${car.imageUrl}?h=300" alt="${car.made} ${car.title} picture" loading="lazy" width="440" height="300"
                    class="w-100">
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#viewer" onclick="viewcar('${car.imgs}', '${car.imageUrl}?h=300', '${car.made}', '${car.title}')">${car.made} ${car.title}</a>
                    </h3>

                    <data class="year" value="2021">${car.year}</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <img src='icons/pass.svg'  width='20' height='20'>
                      <span class="card-item-text">${car.people} People</span>
                    </li>

                    <li class="card-list-item">
                      <img src='icons/fule.svg'  width='20' height='20'>
                      <span class="card-item-text">${car.fuleType}</span>
                    </li>

                    <li class="card-list-item">
                      <img src='icons/speed.svg'  width='20' height='20'>
                      <span class="card-item-text">${car.cc} CC</span>
                    </li>

                    <li class="card-list-item">
                      <img src='icons/tra.svg'  width='20' height='20'>
                      <span class="card-item-text">${car.transmission}</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong>${(car.rentalPrice).toLocaleString("en-US")}</strong> / day
                    </p>
                    
                    <p class="card-price">
                      <strong>ETB  ${(car.salesPrice).toLocaleString("en-US")}</strong>
                    </p>

                    <button class="btn fav-btn" onclick = "h('${car.title}', '${car.rentalPrice}','${car.imageUrl}')">
                      <img src='icons/hrt.svg'  width='20' height='15'>
                    </button>

                  </div>

                </div>

              </div>
            </li>
                    `
        })
    })


    
function viewcar(params, image_ur, title, price) {
  body.classList.add('body');
  let image_url = params.split(",https://cdn.sanity.io")
  for(let i = 1; i < image_url.length; i++){
    image_url[i] = "https://cdn.sanity.io" + image_url[i] + "?h=150"
  }

  // console.log(image_url);

  document.querySelector(".form").innerHTML = `
  <h3>Details for ${title} ${price}</h3><a class="close" href="#featured-car" onclick="closelogin()">&times;</a>
  `

    document.querySelector(".form").innerHTML += `
    <div class="prod">
        
        <div class="pro-small-pic">
          <img src="${image_url[0]}" alt="" onclick="changepic(this)">
          <img src="${image_ur}" alt="" onclick="changepic(this)">
          <img src="${image_url[1]}" alt="" onclick="changepic(this)">
          <img src="${image_url[2]}" alt="" onclick="changepic(this)">
        </div>

        <div class="pro-big-pic">
          <img id="imagebox" src="${image_ur}" alt="">
        </div>
      </div>
    `

}

