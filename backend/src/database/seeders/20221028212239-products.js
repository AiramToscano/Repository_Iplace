/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'products',
      [{
          id: 1,
          name: 'Iphone 13',
          price: 3197,
          description: 'Tela Super Retina XDR de 6,1 polegadas. O modo cinematic adiciona profundidade de campo rasa e muda o foco automaticamente em seus vídeos Sistema avançado de câmera dupla com câmeras Wide e Ultra Wide de 12MP',
          url_image: 'http://localhost:3001/images/iPhone13.jpg',
        },
        {
          id: 2,
          name: 'Iphone12',
          price: 2445,
          description: 'Tela Super Retina XDR de 6,1 polegadas Ceramic Shield. Mais resistente do que qualquer vidro de smartphone.',
          url_image: 'http://localhost:3001/images/iPhone12.jpg',
        },
        {
          id: 3,
          name: 'Iphone 13 Pro Max',
          price: 4397,
          description: 'Tela Super Retina XDR de 6,7 polegadas com ProMotion para uma sensação mais rápida e responsiva.',
          url_image: 'http://localhost:3001/images/iPhone13ProMax.jpg',

        },
        {
          id: 4,
          name: 'Iphone 11',
          price: 1779,
          description: 'Tela LCD Liquid Retina HD de 6,1 polegadas. Resistente a água e pó (até 30 minutos à profundidade máxima de 2 metros, IP68).',
          url_image: 'http://localhost:3001/images/Iphone11.jpg',

        },
      ],

      {
        timestamps: false,
      },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};