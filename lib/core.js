console.log("此页面由Hajeekn(SL)编写，禁止任何人直接拿取");
// 今日诗词生成
jinrishici.load(function(result) {
    var sentence = document.querySelector(".losc_ce")
    var info = document.querySelector(".losc_info")
    sentence.innerHTML = result.data.content
    info.innerHTML = '[' + result.data.origin.dynasty + ']' + result.data.origin.author + '《' + result.data.origin.title + '》'
  });
