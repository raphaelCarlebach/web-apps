
class Video {
    constructor(_parent, _videoId, _thumbnails, _title) {
        this.parent = _parent;
        this.videoId = _videoId;
        this.thumbnails = _thumbnails;
        this.title = _title;

        this.render()
    }

    render() {
        const videoDiv = $(`<div class="video"></div>`);

        $(this.parent).append(videoDiv);

        $(videoDiv).append(`       
            <img src="${this.thumbnails}" alt="${this.title}">
            <p class="v-name">${this.title}</p>      
            `);

        // Lightbox 
        const lightbox = $(`<div id="lightbox"></div>`);
        $("body").append(lightbox);
        console.log(videoDiv)

        videoDiv.click((e) => {
            
            lightbox.addClass("active");

            const v = $(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${this.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`);

            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            };

            $(lightbox).append(v);
        });

        // close lightbox
        lightbox.click((e) => {
            if (e.target != e.currentTarget) return
            lightbox.removeClass("active");
            $(lightbox).empty();
        });
    }
}

export default Video

