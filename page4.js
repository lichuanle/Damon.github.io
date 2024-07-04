
// 推荐导航栏js
const recommend_nav = document.querySelectorAll(`.recommend_nav`)
const display_inf = document.querySelectorAll(`.display_inf`)

for (let i = 0; i < recommend_nav.length; i++) {
  recommend_nav[i].addEventListener("mouseenter", function () {
    recommend_nav[i].style.height = "200px"
    recommend_nav[i].style.transform = "translateY(-8px)"
    recommend_nav[i].style.margin = "none"
    recommend_nav[i].style.marginRight = "24px"
    display_inf[i].style.display = "block"
  })
}

for (let i = 0; i < recommend_nav.length; i++) {
  recommend_nav[i].addEventListener("mouseleave", function () {
    recommend_nav[i].style.height = "184px"
    recommend_nav[i].style.transform = "translateY(0px)"
    recommend_nav[i].style.margin = "16px 24px 16px 0px"
    display_inf[i].style.display = "none"
    document.querySelector(`.recommend_nav:last-child`)
      .style.margin = "16px 0px"
  })
}

//轮播图导航栏js

//蛋仔派对图片
const frist_img = document.
  querySelector(`.slideshow_img2 img`)
//dnf图片
const mid_img = document.
  querySelector(`.slideshow_img3 img`)
//艾丝图片
const last_img = document.
  querySelector(`.slideshow_img1 img`)

const slideshow_content = document.
  querySelector(`.slideshow_content`)




let i = 1

function change_list() {
  document.querySelector(`.active`).classList.remove(`active`)
  document.querySelector
    (`.list_content li:nth-child(${i})`).classList.add(`active`)
}

//蛋仔派对在中间
function frist_img_inmid() {

  frist_img.style.transform = "translateX(100px)"
  frist_img.style.width = "960px"
  frist_img.style.height = "300px"
  frist_img.style.top = "0"
  frist_img.style.zIndex = "120"
  frist_img.style.filter = "brightness(100%)"

  mid_img.style.transform = "translateX(500px)"
  mid_img.style.width = "660px"
  mid_img.style.height = "220px"
  mid_img.style.top = "40px"
  mid_img.style.zIndex = "110"
  mid_img.style.filter = "brightness(75%)"

  last_img.style.transform = "translateX(0px)"
  last_img.style.width = "660px"
  last_img.style.height = "220px"
  last_img.style.top = "40px"
  last_img.style.zIndex = "110"
  last_img.style.filter = "brightness(75%)"

}

//DNF图片在中间
function mid_img_inmid() {

  mid_img.style.transform = "translateX(100px)"
  mid_img.style.width = "960px"
  mid_img.style.height = "300px"
  mid_img.style.top = "0"
  mid_img.style.zIndex = "120"
  mid_img.style.filter = "brightness(100%)"

  frist_img.style.transform = "translateX(0px)"
  frist_img.style.width = "660px"
  frist_img.style.height = "220px"
  frist_img.style.top = "40px"
  frist_img.style.zIndex = "110"
  frist_img.style.filter = "brightness(75%)"

  last_img.style.transform = "translateX(500px)"
  last_img.style.width = "660px"
  last_img.style.height = "220px"
  last_img.style.top = "40px"
  last_img.style.zIndex = "110"
  last_img.style.filter = "brightness(75%)"

}

//艾尔图片在中间
function last_img_inmid() {

  last_img.style.transform = "translateX(100px)"
  last_img.style.width = "960px"
  last_img.style.height = "300px"
  last_img.style.top = "0"
  last_img.style.zIndex = "120"
  last_img.style.filter = "brightness(100%)"

  frist_img.style.transform = "translateX(500px)"
  frist_img.style.width = "660px"
  frist_img.style.height = "220px"
  frist_img.style.top = "40px"
  frist_img.style.zIndex = "110"
  frist_img.style.filter = "brightness(75%)"

  mid_img.style.transform = "translateX(0px)"
  mid_img.style.width = "660px"
  mid_img.style.height = "220px"
  mid_img.style.top = "40px"
  mid_img.style.zIndex = "110"
  mid_img.style.filter = "brightness(75%)"

}


const slideshow_img = document
  .querySelectorAll(`.slideshow_content img`)
console.log(slideshow_img);


for (let j = 0; j < slideshow_img.length; j++) {
  slideshow_img[j].addEventListener("click", function () {
    if (j == 0) {
      i = j + 1
      frist_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${j + 1})`).classList.add(`active`)
    }
    if ((j + 2) % 3 == 0) {
      i = j + 1
      mid_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${j + 1})`).classList.add(`active`)
    }
    if ((j + 1) % 3 == 0) {
      i = j + 1
      last_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${j + 1})`).classList.add(`active`)
    }
  })
}

const list_content = document.querySelector(`.list`)
const li_list = document.querySelectorAll(`.list_content li`)


for (let j = 0; j < li_list.length; j++) {
  li_list[j].addEventListener("click", function () {
    if (j == 0) {
      i = j + 1
      frist_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${j + 1})`).classList.add(`active`)
    }
    if ((j + 2) % 3 == 0) {
      i = j + 1
      mid_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${j + 1})`).classList.add(`active`)
    }
    if ((j + 1) % 3 == 0) {
      i = j + 1
      last_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${j + 1})`).classList.add(`active`)
    }
  })
}

let time = setInterval(function () {
  i++

  if (i > 3) {
    i = 1
  }
  //蛋仔派对图片在中间
  if ((i + 2) % 3 == 0) {
    frist_img_inmid()
    document.querySelector(`.active`).
      classList.remove(`active`)
    document.querySelector
      (`.list_content li:nth-child(${i})`).
      classList.add(`active`)
  }

  //DNF图片在中间
  if ((i + 1) % 3 == 0) {
    mid_img_inmid()
    document.querySelector(`.active`).
      classList.remove(`active`)
    document.querySelector
      (`.list_content li:nth-child(${i})`).
      classList.add(`active`)
  }

  //艾丝黛尔图片在中间
  if (i % 3 == 0) {
    last_img_inmid()
    document.querySelector(`.active`).
      classList.remove(`active`)
    document.querySelector
      (`.list_content li:nth-child(${i})`).
      classList.add(`active`)
  }

}, 2000)

//后退按钮
const back_button = document.querySelector(`.back_button`)
//前进按钮
const next_button = document.querySelector(`.next_button`)


next_button.addEventListener("click", function () {
  i++

  if (i > 3) {
    i = 1
  }

  //蛋仔派对图片在中间
  if ((i + 2) % 3 == 0) {
    frist_img_inmid()
    document.querySelector(`.active`).classList
      .remove(`active`)
    document.querySelector
      (`.list_content li:nth-child(${i})`).classList
      .add(`active`)
  }

  //DNF图片在中间
  if ((i + 1) % 3 == 0) {
    mid_img_inmid()
    document.querySelector(`.active`).classList
      .remove(`active`)
    document.querySelector
      (`.list_content li:nth-child(${i})`).classList
      .add(`active`)
  }

  //艾丝黛尔图片在中间
  if (i % 3 == 0) {
    last_img_inmid()
    document.querySelector(`.active`).classList
      .remove(`active`)
    document.querySelector
      (`.list_content li:nth-child(${i})`).classList
      .add(`active`)
  }

})

back_button.addEventListener("click", function () {
  i--

  if (i <= 0) {
    i = li_list.length
  }

  //蛋仔派对图片在中间
  if ((i + 2) % 3 == 0) {
    frist_img_inmid()
    document.querySelector(`.active`).classList
      .remove(`active`)
    document.querySelector
      (`.list_content li:nth-child(${i})`).classList
      .add(`active`)
  }

  //DNF图片在中间
  if ((i + 1) % 3 == 0) {
    mid_img_inmid()
    document.querySelector(`.active`).classList
      .remove(`active`)
    document.querySelector
      (`.list_content li:nth-child(${i})`).classList
      .add(`active`)
  }

  //艾丝黛尔图片在中间
  if (i % 3 == 0) {
    last_img_inmid()
    document.querySelector(`.active`).classList
      .remove(`active`)
    document.querySelector
      (`.list_content li:nth-child(${i})`).classList
      .add(`active`)
  }


})

//停止计时器
slideshow_content.addEventListener("mouseenter", function () {
  clearInterval(time)
  back_button.style.opacity = "1"
  next_button.style.opacity = "1"
})

//启动计时器
slideshow_content.addEventListener("mouseleave", function () {
  time = setInterval(function () {
    i++
    if (i > 3) {
      i = 1
    }
    //DNF图片在中间
    if ((i + 1) % 3 == 0) {
      mid_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${i})`).classList.add(`active`)
    }

    //艾丝黛尔图片在中间
    if (i % 3 == 0) {
      last_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${i})`).classList.add(`active`)
    }

    //蛋仔派对图片在中间
    if ((i + 2) % 3 == 0) {
      frist_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${i})`).classList.add(`active`)
    }

  }, 2000)

  back_button.style.opacity = "0"
  next_button.style.opacity = "0"
})



list_content.addEventListener("mouseenter", function () {
  clearInterval(time)
})

list_content.addEventListener("mouseleave", function () {
  time = setInterval(function () {
    i++
    if (i > 3) {
      i = 1
    }
    //DNF图片在中间
    if ((i + 1) % 3 == 0) {
      mid_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${i})`).classList.add(`active`)
    }

    //艾丝黛尔图片在中间
    if (i % 3 == 0) {
      last_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${i})`).classList.add(`active`)
    }

    //蛋仔派对图片在中间
    if ((i + 2) % 3 == 0) {
      frist_img_inmid()
      document.querySelector(`.active`).classList.remove(`active`)
      document.querySelector
        (`.list_content li:nth-child(${i})`).classList.add(`active`)
    }

  }, 2000)
})


//新游预约js
const new_nav_content = document.
  querySelectorAll(`.new_play_nav>div`)
// console.log(new_nav_content);

const new_play_img_content = document.
  querySelectorAll(`.new_play_img_content>div`)
// console.log(new_play_img_content);

const find_arrow = document.querySelector(`.find_arrow`)

const new_play_imglist =
  document.querySelectorAll(`.new_play_nav img`)
// console.log(new_play_imglist[0].offsetLeft);

for (let i = 0; i < new_nav_content.length - 2; i++) {
  new_nav_content[i].addEventListener("mouseenter", function () {
    document.querySelector(`.new_nav_content_special`)
      .classList.add(`new_nav_content`)
    document.querySelector(`.new_nav_content_special`)
      .classList.remove(`new_nav_content_special`)

    new_nav_content[i].classList
      .remove(`new_nav_content`)
    new_nav_content[i].classList
      .add(`new_nav_content_special`)

    document.querySelector(`.new_play_img_special`).classList
      .add(`new_play_img`)

    document.querySelector(`.new_play_img_special`).classList
      .remove(`new_play_img_special`)

    new_play_img_content[i]
      .classList.remove(`new_play_img`)
    new_play_img_content[i]
      .classList.add(`new_play_img_special`)
    new_play_img_content[i]
      .style.backgroundImage = `url(${new_play_img[i].src})`

    find_arrow.style.left =
      (new_play_imglist[i].offsetLeft +
        new_play_imglist[i].offsetWidth / 2) + "px"
  })
}


const game_nav_content_img =
  document.querySelectorAll(`.game_nav_content_img img`)
// console.log(game_nav_content_img);

const game_nav_content =
  document.querySelectorAll(`.game_nav_content`)
//图片缩放js
for (let i = 0; i < game_nav_content.length; i++) {
  game_nav_content[i].addEventListener("mouseenter", function () {
    game_nav_content_img[i].style.transform = "scale(1.2)"
  })

  game_nav_content[i].addEventListener("mouseleave", function () {
    game_nav_content_img[i].style.transform = "scale(1)"
  })
}

//显示更多js
const load_more_content =
  document.querySelector(`.load_more_content span`)

const load_more_img = document.querySelector(`.load_more_img`)

load_more_content.addEventListener("click", function () {
  load_more_content.style.display = "none"
  load_more_img.style.display = "block"
})

