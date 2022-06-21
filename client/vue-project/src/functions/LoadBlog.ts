
            
import axios from 'axios'
const UNSPLASH_CLIENT_ID: string = '2Bwn0PvYJW2Czd2YggvBcL5ALqmGFdWYr0nVVyWxBZE' 
            
let articlesToLoad: any = []
                    
let columnsBlogs: any = {
    '1': {},
    '2': {},
    '3': {}
};
            
const loadBlog = () => {
    
    axios.get('http://localhost:3000/src/jsons/articles.json')
    .then(response => { return response.data } )
    .then(articles => {
        
        let UNSPLASH_ENDPOINT = new URL(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_CLIENT_ID}`)

        let counter = 0;
        let articleKeys = Object.keys(articles);

        fetch(UNSPLASH_ENDPOINT.toString())
            .then(response => { return response.json() })
            .then(images => {

                images.forEach((image: any) => {

                    let specificArticleKey = articleKeys[counter];
                    
                    articles[specificArticleKey]['imgs'] = image['urls'];
                    articles[specificArticleKey]['id'] = image['id'];
                    
                    counter++

                })

            })
            .then(() => {
                
                fetch(UNSPLASH_ENDPOINT.toString())
                    .then(response => { return response.json() })
                    .then(images => {

                        images.forEach((image: any) => {

                            let specificArticleKey = articleKeys[counter];
                            
                            articles[specificArticleKey]['imgs'] = image['urls'];
                            articles[specificArticleKey]['id'] = image['id'];
                            
                            counter++

                        })

                        //@ts-ignore
                        articlesToLoad = Object.values(articles);

                    })
                    .then(() => {

                        let lengthOfOne: number = Math.floor(articlesToLoad.length / 3)
                        
                        //EVERY COLUMN WILL HAVE AT LEAST THIS NUMBER OF ITEMS, FURTHER ON
                        //WE ARE GOING TO FIND IF ANY OF THEM WILL HAVE MORE ITEMS

                        if (articlesToLoad.length % 3 == 1) {
                        //IN THIS CASE, IN 1 OF THE 3 COLUMNS THERE WILL BE ONE MORE ITEM
                        // THAN IN THE OTHER 2

                            for (let i = 0; i < articlesToLoad.length; i++) {
                                
                                if (-1 < i && i < lengthOfOne + 1) {

                                    columnsBlogs['1'][i] = articlesToLoad[i]

                                } else if (lengthOfOne < i && i < (lengthOfOne * 2) + 1) {

                                    columnsBlogs['2'][i] = articlesToLoad[i]

                                } else {

                                    columnsBlogs['3'][i] = articlesToLoad[i]

                                }
                            
                            }
                            
                            return columnsBlogs
                        
                        } else if (articlesToLoad.length % 3 == 2) {
                        //IN THIS CASE, IN 2 OF THE 3 COLUMNS THERE WILL BE ONE MORE ITEM
                        // THAN IN THE FIRST ONE
                        
                            for (let i = 0; i < articlesToLoad.length; i++) {
                                
                                if (-1 < i && i < lengthOfOne + 1) {

                                    console.log('now 1 column')

                                    columnsBlogs['1'][i] = articlesToLoad[i]

                                } else if (lengthOfOne < i && i < (lengthOfOne * 2) + 2) {

                                    console.log('now 2 column')
                                    columnsBlogs['2'][i] = articlesToLoad[i]

                                } else {

                                    console.log('now 3 column')
                                    columnsBlogs['3'][i] = articlesToLoad[i]

                                }
                            
                            }

                            return columnsBlogs
                        
                        } else {

                            for (let i = 0; i < articlesToLoad.length; i++) {
                                
                                if (-1 < i && i < lengthOfOne) {

                                    console.log(i)
                                    console.log('now 1 column')
                                    columnsBlogs['1'][i] = articlesToLoad[i]

                                } else if (lengthOfOne-1 < i && i < (lengthOfOne * 2)) {

                                    console.log('now 2 column')
                                    columnsBlogs['2'][i] = articlesToLoad[i]

                                } else {

                                    console.log('now 3 column')
                                    columnsBlogs['3'][i] = articlesToLoad[i]

                                }
                            
                            }

                            return columnsBlogs
                        
                        }

                    })
            
            })

        // THESE TWO FETCH REQUEST SHOULD BE REPLACED WITH ONE 
        // WITH PARAMETER COUNT = 20, BUT THIS DOES NOT WORK, NOT 
        // EVEN ACCORDING TO THE DOCUMENTATION
    })

}

export default loadBlog