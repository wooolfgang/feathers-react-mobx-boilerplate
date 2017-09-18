import setupApp from '../app';

const seedFunction = async () => {
  const app = await setupApp;
  const seeds = [

  ];

  const service = app.service('api/service');
  service.remove(null);
  return Promise.all(seeds.map(seed => service.create(seed)));
};

export default seedFunction;
