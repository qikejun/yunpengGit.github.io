var ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  lrcType: 3,
  loop: 'all',
  order: 'random',
  audio: [{
      name: "发如雪",
      artist: '周杰伦',
      url: 'https://yunpenggit.github.io/music/jay/发如雪_周杰伦_128K.mp3',
      cover: 'https://yunpenggit.github.io/music/jay/十一月的萧邦.jpg',
      lrc: 'https://yunpenggit.github.io/music/jay/发如雪_周杰伦_128K.lrc',
    }, {
      name: "等你下课",
      artist: '周杰伦',
      url: 'https://yunpenggit.github.io/music/jay/等你下课_周杰伦_128K.mp3',
      cover: 'https://yunpenggit.github.io/music/jay/等你下课.jpg',
      lrc: 'https://yunpenggit.github.io/music/jay/等你下课_周杰伦_128K.lrc',
    },
    {
      name: "告白气球",
      artist: '周杰伦',
      url: 'https://yunpenggit.github.io/music/jay/告白气球_周杰伦_128K.mp3',
      cover: 'https://yunpenggit.github.io/music/jay/周杰伦的床边故事.jpg',
      lrc: 'https://yunpenggit.github.io/music/jay/告白气球_周杰伦_128K.lrc',
    },
    {
      name: "兰亭序",
      artist: '周杰伦',
      url: 'https://yunpenggit.github.io/music/jay/兰亭序_周杰伦_128K.mp3',
      cover: 'https://yunpenggit.github.io/music/jay/摩杰座.jpg',
      lrc: 'https://yunpenggit.github.io/music/jay/兰亭序_周杰伦_128K.lrc',
    }
  ]
});
