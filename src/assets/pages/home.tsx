
// Articles
import { caption, description, story } from '../articles/hero';
import { article0, article1 } from '../articles/pannelOne';
import { article2 } from '../articles/pannelTwo';

// Components
import BGhero from "../structural_components/bg-hero";
import PannelOne from '../structural_components/self';
import PannelTwo from '../structural_components/projects';
import Contact from '../structural_components/contact';

export default function Home() {

    return (
        <article className="relative flex flex-col w-full h-full">
            <BGhero 
                description={description}
                story={story}
                caption={caption}
            />
            <PannelOne 
                article={article0}
                article1={article1}
            />
            <PannelTwo
                article2={article2}
            />
            <Contact />
        </article>
    )
}