
const Lightbox = (videoId) => {

    const lightbox = $(`<div id="lightbox"></div>`);
    $("body").append(lightbox);
    const video = $(".video")

    video.click((e) => {
        lightbox.addClass("active");

        const v = $(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`);

        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        };
        
        $(lightbox).append(v);
    });

    lightbox.click((e) =>{
        if(e.target != e.currentTarget) return
        lightbox.removeClass("active");
    });

};


export default Lightbox