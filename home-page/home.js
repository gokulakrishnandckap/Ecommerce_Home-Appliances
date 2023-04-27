const headerBanner = [
    {
        id: 1,
        img: "images-home/banner-1.png"
    },
    {
        id: 2,
        img: "images-home/banner-2.png"
    },
    {
        id: 3,
        img: "images-home/banner-3.png"
    }
]

const footerBanner = [
    {
        id: 1,
        img: "images-home/footer-banner-1.png"
    },
    {
        id: 2,
        img: "images-home/footer-banner-2.png"
    }
]


const nextBtn = document.querySelector(".left-arrow")

const previousBtn = document.querySelector(".right-arrow")

const banner = document.querySelector(".banner")

const f_footer = document.querySelector(".footer-banner")

const allProducts = document.querySelector(".all-products-grid-view")

const footerleftBtn = document.querySelector(".footer-banner-left-arrow")

const footerrightBtn = document.querySelector(".footer-banner-right-arrow")



let increase = 0
previousBtn.addEventListener("click", () => {
    increase++

    if (increase === 3) {
        increase = 0
    }
    banner.src = headerBanner[increase].img
})


nextBtn.addEventListener("click", () => {
    increase--
    if (increase === -1) {
        increase = 2
    }
    banner.src = headerBanner[increase].img
})


let footerBannerIncrease = 0
footerrightBtn.addEventListener("click", () => {
    footerBannerIncrease++

    if (footerBannerIncrease === 2) {
        footerBannerIncrease = 0
    }
    f_footer.src = footerBanner[footerBannerIncrease].img
})


footerleftBtn.addEventListener("click", () => {
    footerBannerIncrease--
    if (footerBannerIncrease === -1) {
        footerBannerIncrease = 1
    }
    f_footer.src = footerBanner[footerBannerIncrease].img
})

let array = []
window.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            let listsOfItems = json
            for (let i = 0; i < listsOfItems.length; i++) {
                array.push(listsOfItems[i])
            }
            allprocess(array)
        })

    function allprocess(array) {
        let product = array.map((item) =>
            `<div class="card">
                
                <p class="item-name">${item.name}</p>
                <p class="item-price">${item.price}</p>
                <span class="wishlist-card"><i class="fa-regular fa-heart" id="wishlist-card"></i></span>
                <img class="item-img" src=${item.images[0]}>
                <br>
                <div class="btns-div">
                    <button class="buy-btn">Buy Now</button>
                    <span class="material-symbols-outlined">shopping_cart</span>
                </div>
            </div>`).join("")
        allProducts.innerHTML = product
    }

})
