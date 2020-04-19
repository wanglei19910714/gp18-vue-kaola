import Mock from 'mockjs'

let iconList = [
     {
          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/be97e628-df3a-4b31-82ee-edf3686883d2T1907021531_192_220.png",
          "linkUrl": "https://weex.kaola.com/activity/pages/cosmetic.html"

     },
     {

          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/5ee97ce7-9c93-4f79-8ca5-1a1de0cc85afT1907021609_192_220.png",
          "linkUrl": "https://weex.kaola.com/activity/pages/2faed7715d5940dda0d5b678238bb55b.html"

     },
     {

          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/7309e72f-1c23-424a-a220-91badfa2f49eT1907021955_192_220.png",
          "linkUrl": "https://weex.kaola.com/activity/pages/439.html"

     },
     {

          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/f59ffba8-c2ad-457c-9070-7f4a8e5b83b7T1907021534_192_220.png",
          "linkUrl": "https://weex.kaola.com/activity/pages/d709bf2f54bc426da1d8db13003a862f.html"

     },
     {

          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/ba7064d2-37e7-4505-b3fd-93602df85b25T1902210142_192_220.png",
          "linkUrl": "https://weex.kaola.com/activity/pages/shumajiadian.html"

     },
     {

          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/eb5afb31-3c18-4331-b5bb-f03b4b04040aT1911061954_192_220.png",
          "linkUrl": "https://weex.kaola.com/activity/pages/fushiguan.html"

     },
     {

          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/038bb478-de11-4335-8bba-452f1762c0bbT2003271652_192_220.jpg",
          "linkUrl": "https://weex.kaola.com/activity/pages/shenghuobujizhan.html"

     },
     {

          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/1914d008-312b-4410-a917-f6413fe84566T19062601008_192_220.png",
          "linkUrl": "https://weex.kaola.com/activity/pages/qijiandianH5.html"

     },
     {

          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/fee4bf4d-1a1a-4ff6-95e1-7cfd497cb3afT1907111605_192_220.png",
          "linkUrl": "https://weex.kaola.com/activity/pages/factorystore.html"

     },
     {

          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/7b848599-d340-4c12-8912-7618f492b8e7T19010151358_192_220.png",
          "linkUrl": "https://m-vip.kaola.com/app/index"

     }

]

let wellList = [{
          imgUrl1: "https://kaola-haitao.oss.kaolacdn.com/681b98f5-088b-45ad-96f6-e9bfc5aac20dT2002031418_500_500.jpg",
          imgUrl2: "https://kaola-haitao.oss.kaolacdn.com/d66c531d-8393-4007-ab4b-f337b95c5dbbT2002031419_500_500.jpg",
          link: "https://weex.kaola.com/album-channel/h5/index.html",
          subTitle: "什么值得买",
          subTitleColor: "#000000",
          title: "必买清单",
     },
     {
          imgUrl1: "https://kaola-haitao.oss.kaolacdn.com/81b61149-4284-48b2-a889-c775acc679aeT2002031420_500_500.jpg",
          imgUrl2: "https://kaola-haitao.oss.kaolacdn.com/49466bc6-490d-4649-b9b5-e11ac293c6faT2002031420_500_500.jpg",
          link: "https://weex.kaola.com/enjoygoods/h5/index.html",
          subTitle: "999+好评已种草",
          subTitleColor: "#000000",
          title: "好物推荐",
     }
]

let bannerList = [{
          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/e6212126-7ef6-4714-b89e-9ab48a64a16cT2004081516_960_575.jpg",
          "linkUrl": "https://weex.kaola.com/activity/pages/bimaibangdan.html"
     },
     {
          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/ff49ee32-a8cb-4729-a0f8-4efe3609503fT2004091745_960_575.jpg",
          "linkUrl": "https://weex.kaola.com/activity/pages/71751fb0b0a147ac95ab7074529ce01e.html"
     },
     {
          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/6188e64f-87dd-4bda-b45b-27c20d9a3584T20040101931_960_575.jpg",
          "linkUrl": "https://weex.kaola.com/activity/pages/d8721506729f4b2081991217ab5943d6.html"
     },
     {
          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/6a2181b8-c1c0-4f81-b63d-888e7a8e7451T20040101458_960_575.jpg",
          "linkUrl": "https://weex.kaola.com/activity/pages/0e8d49a0fe4f414288a35ac39e92b8f1.html"
     },
     {
          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/5d492ff7-cd17-4c0e-8cbd-26260e072b4bT20040101228_960_575.jpg",
          "linkUrl": "https://mall.kaola.com/app/activity/22997362-992398327.html?a=1"
     },
     {
          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/eda25914-9cf0-475e-a57e-c19ae4319bbeT20040101450_960_575.jpg",
          "linkUrl": "https://weex.kaola.com/activity/pages/lxps.html"
     },
     {
          "imgUrl": "https://kaola-haitao.oss.kaolacdn.com/886dcc6a-ac01-4a77-ae27-735f107576d6T20040101349_960_575.jpg",
          "linkUrl": "https://weex.kaola.com/activity/pages/fugongkuanghuan.html?a=1"
     },
     {
          "imgUrl": "http://kaola-haitao.oss.kaolacdn.com/8b9bca8c9dcb449981d554d4c728d785_960_575.png",
          "linkUrl": "https://weex.kaola.com/activity/pages/zhongshe-new.html?a=1&enterGoodsBusinessType=banner&topRecGoodsId=2249014%2C6121603%2C2086357"
     }

]

Mock.mock("/api/home/dataList", 'get', () => {
     return {
          code: 1,
          iconList,
          wellList,
          bannerList
     }
})