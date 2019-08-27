const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  lrcType: 3,
  audio: [{
      name: "等你下课",
      artist: '周杰伦',
      url: './aplayer/mp3/等你下课_周杰伦_128K.mp3',
      cover: './aplayer/mp3/等你下课.jpg',
      lrc: './aplayer/mp3/等你下课_周杰伦_128K.lrc',
    },
    {
      name: "告白气球",
      artist: '周杰伦',
      url: './aplayer/mp3/告白气球_周杰伦_128K.mp3',
      cover: './aplayer/mp3/周杰伦的床边故事.jpg',
      lrc: './aplayer/mp3/告白气球_周杰伦_128K.lrc',
    },
    {
      name: "兰亭序",
      artist: '周杰伦',
      url: './aplayer/mp3/兰亭序_周杰伦_128K.mp3',
      cover: './aplayer/mp3/摩杰座.jpg',
      lrc: './aplayer/mp3/兰亭序_周杰伦_128K.lrc',
    }
  ]
});
