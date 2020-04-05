const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
        url: `https://cdn.jsdelivr.net/gh/Magictea-Intl/magictea-v-0/${window.vid}.m3u8`,
        type: 'hls'
    },
    pluginOptions: {
        hls: {
            // hls config
        },
    },
});
console.log(dp.plugins.hls); // Hls instance
