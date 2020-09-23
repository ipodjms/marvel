import { Url } from 'url';
import { Comic } from './comic';
import { Serie } from './serie';
import { Story } from './story';
import { Thumbnail } from './thumbnail';

export class Hero {
    public comics: Comic[];
    public description?: number;
    public events: Event[];
    public id?: number;
    public modified?: string;
    public name?: string;
    public resourceURI?: string;
    public series: Serie[];
    public stories: Story[];
    public thumbnail: Thumbnail;
    public urls: Url[];
}

