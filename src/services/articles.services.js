class ArticlesServices {

    constructor() {
        this.articles = [
            {
                id: '001', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=001',
                category: "voyage"
            },
            {
                id: '002', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=002',
                category: "voyage"
            },
            {
                id: '003', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=003',
                category: "voyage"
            },
            {
                id: '004', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=004',
                category: "voyage"
            },
            {
                id: '005', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=005',
                category: "voyage"
            },
            {
                id: '006', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=006',
                category: "voyage"
            },
            {
                id: '007', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=007',
                category: "voyage"
            },
            {
                id: '008', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/city?random=008',
                category: "voyage"
            },
            {
                id: '009', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/sport?random=009',
                category: "sport"
            },
            {
                id: '010', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/sport?random=010',
                category: "sport"
            },
            {
                id: '011', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis.',
                url: 'https://loremflickr.com/250/125/sport?random=011',
                category: "sport"
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
