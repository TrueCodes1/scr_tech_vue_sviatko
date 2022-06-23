
import type CurrentArticle from './CurrentArticleInterface'

export default (rawArticle: any) => {

    const currentArticle : CurrentArticle = {

        name: rawArticle['name'],
        text: rawArticle['text'],
        longText: rawArticle['long-text'],
        id: rawArticle['id'],
        imgs: rawArticle['imgs'],
        type: rawArticle['type']
    }

    return currentArticle

}
