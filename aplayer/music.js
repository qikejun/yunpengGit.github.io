const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  audio: [{
      name: "告白气球",
      artist: '周杰伦',
      url: './aplayer/mp3/告白气球_周杰伦_128K.mp3',
      cover: './aplayer/mp3/周杰伦的床边故事.jpg',
    },
    {
      name: "兰亭序",
      artist: '周杰伦',
      url: './aplayer/mp3/兰亭序_周杰伦_128K.mp3',
      cover: './aplayer/mp3/摩杰座.jpg',
    }
  ]
});
