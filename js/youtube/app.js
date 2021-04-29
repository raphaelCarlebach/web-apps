import { createBackBtn } from "../pages.js";
import Video from "./class.js";

import keys from "../../config.js"

$(document).ready(function () {
    // go back
    createBackBtn();

    // create
    const createVideos = (_parent, _ar) => {
        _ar.map(item => {
            let newVideo = new Video("#youtube-result", item.id.videoId, item.snippet.thumbnails.medium.url, item.snippet.title);
        })
    };

    // submit form
    $("#youtube-form").submit((event) => {
        event.preventDefault();
        $("#youtube-result").html("");
        let val = $("#youtube-input").val();
        console.log(val)
        const key = keys.youtube_key;
        const part = "snippet";
        const type = "video";
        const maxResults = 5; //change to 10 
        const q = val;

        $.ajax({
            url: `https://www.googleapis.com/youtube/v3/search?key=${key}&part=${part}&maxResults=${maxResults}&type=${type}&q=${q}`,
            type: 'GET',
            success: function (res) {
                console.log(res);
                createVideos("#youtube-result", res.items)
            },
            error: function (err) {
                console.log(err)
            }
        });
    });
   

});

