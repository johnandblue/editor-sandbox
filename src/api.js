import { createClient } from 'contentful-management';
import config from './config';

const spaceId = config.spaceId;
const token = config.cmaToken;


const client = createClient({
  accessToken: token,
});

export const createNewsPage = (blogPageObj) => {
  console.log('connecting to cms...');
  return client
    .getSpace(spaceId)
    .then(space => space.getEnvironment('master'))
    .then(environment => {
      console.log('creating entry...');
      return environment.createEntry('blogPage', {
        fields: {
          title: {
            'en-US': 'Test',
          },
          content: {
            'en-US': blogPageObj.content,
          },
        }
      })
    })
    .then(entry => console.log('entry created successfully: ', entry.sys.id))
    .catch((error) => {
      console.log('in createNewsPage error: ', error);
    });
};
