class ArticlesServices {

    constructor() {
        this.articles = [
            {
                id: '001', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=001'
            },
            {
                id: '002', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=002'
            },
            {
                id: '003', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=003'
            },
            {
                id: '004', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=004'
            },
            {
                id: '005', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=005'
            },
            {
                id: '006', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=006'
            },
            {
                id: '007', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=007'
            },
            {
                id: '008', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=008'
            }
        ]
    }

    getArticles() {
        return this.articles
    }

    getArticlesById(id) {

        return this.articles.filter(
            (article) => {
              return (article.id === id);
            }
          )[0]
    }

}

export default new ArticlesServices()
