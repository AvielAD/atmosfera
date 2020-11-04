import Page from './page';
import Mission from './assets/mission.jpg';

const mapCards = [
    {
        Title: 'title',
        Subtitle: 'Subtitulo',
        Description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        Image: Mission
    },
    {
        Title: 'title',
        Subtitle: 'Subtitulo',
        Description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        Image: Mission
    },    
    {
        Title: 'title',
        Subtitle: 'Subtitulo',
        Description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        Image: Mission
    },
]

const BannerAbout = (props) => {

    return(
        <>
            <Page mapCards={mapCards}/>
        </>
    )

}
export default BannerAbout;