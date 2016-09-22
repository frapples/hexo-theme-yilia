function init()
{
    $(".js-toggle-toc").text("收起");

    $(".js-toggle-toc").click(function(){
        var toc = $(".toc-content");
        toc.toggle();
        if (toc.is(":hidden")) {
            $(this).text("展开");
        } else {
            $(this).text("收起");
        }
        return false;
    });
}

module.exports = {
	init : init
}
