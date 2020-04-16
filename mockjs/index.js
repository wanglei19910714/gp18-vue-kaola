import Mock from 'mockjs'


let iconList = [
     "https://kaola-haitao.oss.kaolacdn.com/be97e628-df3a-4b31-82ee-edf3686883d2T1907021531_192_220.png",
     "https://kaola-haitao.oss.kaolacdn.com/5ee97ce7-9c93-4f79-8ca5-1a1de0cc85afT1907021609_192_220.png",
     "https://kaola-haitao.oss.kaolacdn.com/7309e72f-1c23-424a-a220-91badfa2f49eT1907021955_192_220.png",
     "https://kaola-haitao.oss.kaolacdn.com/f59ffba8-c2ad-457c-9070-7f4a8e5b83b7T1907021534_192_220.png",
     "https://kaola-haitao.oss.kaolacdn.com/ba7064d2-37e7-4505-b3fd-93602df85b25T1902210142_192_220.png",
     "https://kaola-haitao.oss.kaolacdn.com/eb5afb31-3c18-4331-b5bb-f03b4b04040aT1911061954_192_220.png",
     "https://kaola-haitao.oss.kaolacdn.com/038bb478-de11-4335-8bba-452f1762c0bbT2003271652_192_220.jpg",
     "https://kaola-haitao.oss.kaolacdn.com/1914d008-312b-4410-a917-f6413fe84566T19062601008_192_220.png",
     "https://kaola-haitao.oss.kaolacdn.com/fee4bf4d-1a1a-4ff6-95e1-7cfd497cb3afT1907111605_192_220.png",
     "https://kaola-haitao.oss.kaolacdn.com/7b848599-d340-4c12-8912-7618f492b8e7T19010151358_192_220.png"
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
 }]

Mock.mock("/api/home/dataList", 'get', () => {
     return {
          code: 1,
          iconList,
          wellList
     }
})

 