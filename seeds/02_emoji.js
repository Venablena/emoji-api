
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emoji').del()
    .then(function () {
      // Inserts seed entries
      return knex('emoji').insert([
        {id: 1, name: 'pig', image: '🐷', level: 1},
        {id: 2, name: 'frog', image: '🐸', level: 1},
        {id: 3, name: 'monkey', image: '🐒', level: 2},
        {id: 4, name: 'koala', image: '🐨', level: 2},
        {id: 5, name: 'owl', image: '🦉', level: 1},
        {id: 6, name: 'unicorn', image: '🦄', level: 3},
        {id: 7, name: 'bee', image: '🐝', level: 1},
        {id: 8, name: 'crab', image: '🦀', level: 1},
        {id: 9, name: 'dog', image: '🐶', level: 1},
        {id: 10, name: 'cat', image: '🐱', level: 1},
        {id: 11, name: 'mouse', image: '🐭', level: 2},
        {id: 12, name: 'bunny', image: '🐰', level: 2},
        {id: 13, name: 'fox', image: '🦊', level: 1},
        {id: 14, name: 'bear', image: '🐻', level: 1},
        {id: 15, name: 'panda', image: '🐼', level: 1},
        {id: 16, name: 'tiger', image: '🐯', level: 2},
        {id: 17, name: 'lion', image: '🦁', level: 2},
        {id: 18, name: 'cow', image: '🐮', level: 1},
        {id: 19, name: 'chicken', image: '🐔', level: 2},
        {id: 20, name: 'penguin', image: '🐧', level: 3},
        {id: 21, name: 'bird', image: '🐤', level: 1},
        {id: 22, name: 'chick', image: '🐣', level: 2},
        {id: 23, name: 'duck', image: '🦆', level: 2},
        {id: 24, name: 'eagle', image: '🦅', level: 3},
        {id: 25, name: 'bat', image: '🦇', level: 1},
        {id: 26, name: 'boar', image: '🐗', level: 2},
        {id: 27, name: 'horse', image: '🐴', level: 2},
        {id: 28, name: 'unicorn', image: '🦄', level: 3},
        {id: 29, name: 'bug', image: '🐛', level: 1},
        {id: 30, name: 'butterfly', image: '🦋', level: 3},
        {id: 31, name: 'clown', image: '🤡', level: 2},
        {id: 32, name: 'poop', image: '💩', level: 1},
        {id: 33, name: 'robot', image: '🤖', level: 2},
        {id: 34, name: 'kiss', image: '💋', level: 1},
        {id: 35, name: 'eye', image: '👁', level: 1},
        {id: 36, name: 'brain', image: '🧠', level: 2},
        {id: 37, name: 'nose', image: '👃', level: 1},
        {id: 38, name: 'tongue', image: '👅', level: 3},
        {id: 39, name: 'hand', image: '🖐', level: 2},
        {id: 40, name: 'zombie', image: '🧟', level: 3},
        {id: 41, name: 'wizard', image: '🧙‍', level: 3},
        {id: 42, name: 'mermaid', image: '🧜‍', level: 3},
        {id: 43, name: 'dance', image: '💃', level: 3},
        {id: 44, name: 'run', image: '🏃', level: 1},
        {id: 45, name: 'socks', image: '🧦', level: 2},
        {id: 46, name: 'gloves', image: '🧤', level: 2},
        {id: 47, name: 'hat', image: '🧢', level: 1},
        {id: 48, name: 'dragon', image: '🐉', level: 2},
        {id: 49, name: 'cactus', image: '🌵', level: 2},
        {id: 50, name: 'flower', image: '🌻', level: 2},
        {id: 51, name: 'bike', image: '🚲', level: 1},
        {id: 52, name: 'tractor', image: '🚜', level: 2},
        {id: 53, name: 'rabbit', image: '🐇', level: 2},
        {id: 54, name: 'mouse', image: '🐁', level: 2},
        {id: 55, name: 'chipmunk', image: '🐿', level: 2},
        {id: 56, name: 'tree', image: '🌲', level: 2},
        {id: 57, name: 'sad', image: '😢', level: 1},
        {id: 58, name: 'mad', image: '😠', level: 1},
        {id: 59, name: 'swim', image: '🏊', level: 2},
        {id: 60, name: 'walk', image: '🚶‍', level: 2},
        {id: 61, name: 'ogre', image: '👹', level: 2},
        {id: 62, name: 'love', image : '😍', level: 1}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('emoji_id_seq', (SELECT MAX(id) FROM emoji));`
      );
    })
}
