import Route from '@ember/routing/route';
const bookmarks = [{
  id: 1,
  title: 'Microsoft',
  link: 'http://bing.com',
  about: 'We are at Microsft'
},
{
  id: 2,
  title: 'Google',
  link: 'http://google.com',
  about: 'We are at Google'
},
{
  id: 3,
  title: 'Yahoo',
  link: 'http://yahoo.com',
  about: 'We are at Yahoo Mail'
}

]
export default class AboutRoute extends Route {
  model(){
    return bookmarks;
  }
}
