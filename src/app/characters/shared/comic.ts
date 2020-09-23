import { Item } from './item';

export class Comic {
    public available?: number;
    public collectionURI?: string;
    public items?: Item[];
    public returned?: number;
    public description?: string;
}

